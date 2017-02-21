import {list} from 'postcss';
import {unit} from 'postcss-value-parser';
import {detect} from 'stylehacks';
import {genericMergeFactory} from '../genericMerge';
import getDecls from '../getDecls';
import getValue from '../getValue';
import insertCloned from '../insertCloned';
import remove from '../remove';

const properties = ['column-width', 'column-count'];
const auto = 'auto';
const inherit = 'inherit';

/**
 * Normalize a columns shorthand definition. Both of the longhand
 * properties' initial values are 'auto', and as per the spec,
 * omitted values are set to their initial values. Thus, we can
 * remove any 'auto' definition when there are two values.
 *
 * Specification link: https://www.w3.org/TR/css3-multicol/
 */

function normalize (values) {
    if (values[0] === auto) {
        return values[1];
    }
    if (values[1] === auto) {
        return values[0];
    }
    if (values[0] === inherit && values[1] === inherit) {
        return inherit;
    }
    return values.join(' ');
}

function explode (rule) {
    if (rule.nodes.some(detect)) {
        return false;
    }
    rule.walkDecls('columns', decl => {
        let values = list.space(decl.value);
        if (values.length === 1) {
            values.push(auto);
        }

        values.forEach((value, i) => {
            let prop = properties[1];

            if (value === auto) {
                prop = properties[i];
            } else if (unit(value).unit) {
                prop = properties[0];
            }

            insertCloned(rule, decl, {
                prop,
                value,
            });
        });
        decl.remove();
    });
}

function cleanup (rule) {
    let decls = getDecls(rule, ['columns'].concat(properties));
    while (decls.length) {
        const lastNode = decls[decls.length - 1];

        // remove properties of lower precedence
        const lesser = decls.filter(node => 
            node !== lastNode && 
            node.important === lastNode.important &&
            lastNode.prop === 'columns' && node.prop !== lastNode.prop);

        lesser.forEach(remove);
        decls = decls.filter(node => !~lesser.indexOf(node));
    
        // get duplicate properties
        let duplicates = decls.filter(node => 
            node !== lastNode && 
            node.important === lastNode.important &&
            node.prop === lastNode.prop);

        duplicates.forEach(remove);
        decls = decls.filter(node => node !== lastNode && !~duplicates.indexOf(node));
    }
}

const merge = genericMergeFactory({
    prop: 'columns',
    properties,
    value: rules => normalize(rules.map(getValue)),
    after: cleanup,
});

export default {
    explode,
    merge,
};