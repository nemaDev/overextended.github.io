"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9008],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),v=p(n),y=o,d=v["".concat(c,".").concat(y)]||v[y]||s[y]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(4250),o=(n(9496),n(9613));const a={},i=void 0,u={unversionedId:"ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",id:"ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",title:"GetCurrentWeapon",description:"Returns the player's currently equipped weapon as a table.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon.md",tags:[],version:"current",lastUpdatedAt:1680099191,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"CustomDrop",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CustomDrop"},next:{title:"GetInventory",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetInventory"}},c={},p=[],l={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the player's currently equipped weapon as a table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\nexports.ox_inventory:GetCurrentWeapon(inv)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inv: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number"))))}s.isMDXComponent=!0}}]);