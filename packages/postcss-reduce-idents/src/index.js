import valueParser, {unit, walk} from 'postcss-value-parser';
import postcss from 'postcss';
import encode from './lib/encode';

function isNum (node) {
    return unit(node.value);
}

function transformAtRule ({cache, ruleCache, declCache}) {
    // Iterate each property and change their names
    declCache.forEach(decl => {
        decl.value = valueParser(decl.value).walk(node => {
            if (node.type === 'word' && node.value in cache) {
                cache[node.value].count++;
                node.value = cache[node.value].ident;
            } else if (node.type === 'space') {
                node.value = ' ';
            } else if (node.type === 'div') {
                node.before = node.after = '';
            }
        }).toString();
    });
    // Ensure that at rules with no references to them are left unchanged
    ruleCache.forEach(rule => {
        Object.keys(cache).forEach(key => {
            const cached = cache[key];
            if (cached.ident === rule.params && !cached.count) {
                rule.params = key;
            }
        });
    });
}

function transformDecl ({cache, declOneCache, declTwoCache}) {
    declTwoCache.forEach(decl => {
        decl.value = valueParser(decl.value).walk(node => {
            const {type, value} = node;
            if (type === 'function' && (value === 'counter' || value === 'counters')) {
                walk(node.nodes, child => {
                    if (child.type === 'word' && child.value in cache) {
                        cache[child.value].count++;
                        child.value = cache[child.value].ident;
                    } else if (child.type === 'div') {
                        child.before = child.after = '';
                    }
                });
            }
            if (type === 'space') {
                node.value = ' ';
            }
            return false;
        }).toString();
    });
    declOneCache.forEach(decl => {
        decl.value = decl.value.walk(node => {
            if (node.type === 'word' && !isNum(node)) {
                Object.keys(cache).forEach(key => {
                    const cached = cache[key];
                    if (cached.ident === node.value && !cached.count) {
                        node.value = key;
                    }
                });
            }
        }).toString();
    });
}

function addToCache (value, encoder, cache) {
    if (cache[value]) {
        return;
    }
    cache[value] = {
        ident: encoder(value, Object.keys(cache).length),
        count: 0,
    };
}

function cacheAtRule (node, encoder, {cache, ruleCache}) {
    const {params} = node;
    addToCache(params, encoder, cache);
    node.params = cache[params].ident;
    ruleCache.push(node);
}

export default postcss.plugin('postcss-reduce-idents', ({
    counter = true,
    counterStyle = true,
    encoder = encode,
    keyframes = true,
} = {}) => {
    return css => {
        // Encode at rule names and cache the result

        const counterCache = {
            cache: {},
            declOneCache: [],
            declTwoCache: [],
        };
        const counterStyleCache = {
            cache: {},
            ruleCache: [],
            declCache: [],
        };
        const keyframesCache = {
            cache: {},
            ruleCache: [],
            declCache: [],
        };
        css.walk(node => {
            const {name, prop, type} = node;
            if (type === 'atrule') {
                if (counterStyle && /counter-style/.test(name)) {
                    cacheAtRule(node, encoder, counterStyleCache);
                }
                if (keyframes && /keyframes/.test(name)) {
                    cacheAtRule(node, encoder, keyframesCache);
                }
            }
            if (type === 'decl') {
                if (counter) {
                    if (/counter-(reset|increment)/.test(prop)) {
                        node.value = valueParser(node.value).walk(child => {
                            if (child.type === 'word' && !isNum(child)) {
                                addToCache(child.value, encoder, counterCache.cache);
                                child.value = counterCache.cache[child.value].ident;
                            } else if (child.type === 'space') {
                                child.value = ' ';
                            }
                        });
                        counterCache.declOneCache.push(node);
                    } else if (/content/.test(prop)) {
                        counterCache.declTwoCache.push(node);
                    }
                }
                if (counterStyle && /(list-style|system)/.test(prop)) {
                    counterStyleCache.declCache.push(node);
                }
                if (keyframes && /animation/.test(prop)) {
                    keyframesCache.declCache.push(node);
                }
            }
        });
        counter      && transformDecl(counterCache);
        counterStyle && transformAtRule(counterStyleCache);
        keyframes    && transformAtRule(keyframesCache);
    };
});