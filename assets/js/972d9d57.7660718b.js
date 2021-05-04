(self.webpackChunksite=self.webpackChunksite||[]).push([[937],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},927:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},CarbonAds:function(){return d},default:function(){return p}});var r=n(2122),i=n(9756),o=n(7294),s=n(3905),a={id:"Introduction",title:"Introduction",layout:"Guide",next:"getting-started",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introduction",description:"export const CarbonAds = () => {",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/docs/Introduction",editUrl:"https://github.com/cssnano/cssnano/edit/master/site/docs/introduction.mdx",version:"current",lastUpdatedBy:"Ludovico Fischer",lastUpdatedAt:1620157706,formattedLastUpdatedAt:"5/4/2021",frontMatter:{id:"Introduction",title:"Introduction",layout:"Guide",next:"getting-started",hide_title:!1,hide_table_of_contents:!1},sidebar:"docs",next:{title:"Getting started",permalink:"/docs/getting-started"}},u=[{value:"What is minification?",id:"what-is-minification",children:[]},{value:"What is cssnano?",id:"what-is-cssnano",children:[]},{value:"How does it benefit me?",id:"how-does-it-benefit-me",children:[{value:"Numerous optimisations",id:"numerous-optimisations",children:[]},{value:"Unified CSS processing",id:"unified-css-processing",children:[]},{value:"Modern architecture &amp; modularity",id:"modern-architecture--modularity",children:[]}]}],d=function(){return(0,o.useEffect)((function(){if(!document.getElementById("carbonads")){var e=document.querySelector(".carbon_ads_mdx_wrapper"),t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?serve=CEBI62JN&placement=cssnanoco",t.async=!0,t.id="_carbonads_js",e.appendChild(t)}})),(0,s.kt)("div",{className:"carbon_ads_mdx_wrapper"})},l={toc:u,CarbonAds:d};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(d,{mdxType:"CarbonAds"}),(0,s.kt)("h2",{id:"what-is-minification"},"What is minification?"),(0,s.kt)("p",null,"Minification is the process of taking some code and using various methods to\nreduce its size on disk. Unlike techniques such as gzip, which preserve the\noriginal semantics of the CSS file, and are therefore lossless, minification\nis an inherently lossy process, where values can be replaced with smaller\nequivalents, or selectors merged together, for example."),(0,s.kt)("p",null,"The end result of a minification step is that the resulting code will behave\nthe same as the original file, but some parts will be altered to reduce the\nsize as much as possible."),(0,s.kt)("p",null,"Combining gzip compression with minification leads to the best reduction in\nfile size; but don't just take our word for it. Why not try out ",(0,s.kt)("a",{parentName:"p",href:"https://npmjs.org/package/css-size"},"css-size"),", a\nmodule especially created to measure CSS size before & after minification."),(0,s.kt)("h2",{id:"what-is-cssnano"},"What is cssnano?"),(0,s.kt)("p",null,"cssnano is one such minifier, which is written in ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js"),". It's a ",(0,s.kt)("a",{parentName:"p",href:"http://postcss.org"},"PostCSS"),"\nplugin which you can add to your build process, to ensure that the resulting\nstylesheet is as small as possible for a production environment."),(0,s.kt)("p",null,"If you don't know what a build process is, don't worry as we cover this in\n",(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started"},"our getting started guide"),"."),(0,s.kt)("h2",{id:"how-does-it-benefit-me"},"How does it benefit me?"),(0,s.kt)("h3",{id:"numerous-optimisations"},"Numerous optimisations"),(0,s.kt)("p",null,"We offer many different optimisations, ranging from simple transforms such as\nwhitespace removal, to complex transforms that can merge identical keyframes\nwith different names. See ",(0,s.kt)("a",{parentName:"p",href:"/docs/presets"},"the presets guide")," for\nmore information."),(0,s.kt)("h3",{id:"unified-css-processing"},"Unified CSS processing"),(0,s.kt)("p",null,"cssnano uses ",(0,s.kt)("a",{parentName:"p",href:"http://postcss.org"},"PostCSS")," to process the CSS under the hood. Because a lot of\nmodern CSS tools use ",(0,s.kt)("a",{parentName:"p",href:"http://postcss.org"},"PostCSS"),", you can compose them together to work on a\nsingle abstract syntax tree (AST). This means that the overall processing\ntime is reduced because the CSS does not have to be parsed multiple times."),(0,s.kt)("h3",{id:"modern-architecture--modularity"},"Modern architecture & modularity"),(0,s.kt)("p",null,"Because we use ",(0,s.kt)("a",{parentName:"p",href:"http://postcss.org"},"PostCSS"),", we can divide cssnano's responsibilities between many\nplugins, each performing a small optimisation. And many optimisations are scoped\nto a certain subset of CSS properties, which is much safer compared to minifying\nCSS globally using regular expressions."))}p.isMDXComponent=!0}}]);