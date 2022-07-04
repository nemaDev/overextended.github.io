"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6995],{9613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||l;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6690:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=t(5443),a=t(3010),l=(t(9496),t(9613)),i=["components"],o={},s="Scalar",c={unversionedId:"oxmysql/Usage/scalar",id:"oxmysql/Usage/scalar",title:"Scalar",description:"Returns the first column for a single row.",source:"@site/docs/oxmysql/Usage/scalar.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/scalar",permalink:"/docs/oxmysql/Usage/scalar",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/scalar.md",tags:[],version:"current",lastUpdatedAt:1656954245,formattedLastUpdatedAt:"7/4/2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Query",permalink:"/docs/oxmysql/Usage/query"},next:{title:"Single",permalink:"/docs/oxmysql/Usage/single"}},u={},p=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],f={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scalar"},"Scalar"),(0,l.kt)("p",null,"Returns the first column for a single row."),(0,l.kt)("h2",{id:"lua"},"Lua"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:scalar\n-- Alias: MySQL.Async.fetchScalar\n\nMySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier}, function(firstname)\n    print(firstname)\nend)\n")),(0,l.kt)("h3",{id:"promise"},"Promise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:scalar_async\n-- Alias: MySQL.Sync.fetchScalar\n\nCreateThread(function()\n    local firstname = MySQL.scalar.await('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier})\n    print(firstname)\nend)\n")),(0,l.kt)("h2",{id:"javascript"},"JavaScript"),(0,l.kt)("h3",{id:"callback-1"},"Callback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"exports.oxmysql.scalar('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier], function(firstname) {\n    console.log(firstname)\n})\n")),(0,l.kt)("h3",{id:"promise-1"},"Promise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  const firstname = await exports.oxmysql.scalar_async('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier]) {\n    console.log(firstname)\n})()\n")))}m.isMDXComponent=!0}}]);