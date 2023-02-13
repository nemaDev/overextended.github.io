"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[212],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=l,k=d["".concat(u,".").concat(c)]||d[c]||s[c]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496),l=n(5924);const i="tabItem_De_A";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(4250),l=n(9496),i=n(5924),r=n(6704),o=n(8876),u=n(4138),p=n(2509);const m="tabList_V3hT",s="tabItem_B35_";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:c,groupId:k,className:b}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==x&&!N.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,u.U)(),[C,y]=(0,l.useState)(x),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&N.some((t=>t.value===e))&&y(e)}const _=e=>{const t=e.currentTarget,n=w.indexOf(t),a=N[n].value;a!==C&&(T(t),y(a),null!=k&&f(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:_},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},5841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(4250),l=(n(9496),n(9613)),i=n(3408),r=n(6489);const o={title:"Context Menu"},u=void 0,p={unversionedId:"ox_lib/Interface/Client/context",id:"ox_lib/Interface/Client/context",title:"Context Menu",description:"lib.registerContext",source:"@site/docs/ox_lib/Interface/Client/context.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/context",permalink:"/docs/ox_lib/Interface/Client/context",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/context.md",tags:[],version:"current",lastUpdatedAt:1676293234,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Context Menu"},sidebar:"ox_lib",previous:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"},next:{title:"Input Dialog",permalink:"/docs/ox_lib/Interface/Client/input"}},m={},s=[{value:"lib.registerContext",id:"libregistercontext",level:3},{value:"lib.showContext",id:"libshowcontext",level:3},{value:"lib.hideContext",id:"libhidecontext",level:3},{value:"lib.getOpenContextMenu",id:"libgetopencontextmenu",level:3},{value:"Usage Example",id:"usage-example",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"libregistercontext"},"lib.registerContext"),(0,l.kt)("p",null,"Used for registering a context menu."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext(context)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.registerContext(context)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unique menu identifier, will be used to open the menu."))),(0,l.kt)("li",{parentName:"ul"},"title: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Title display in the menu; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"menu?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Menu identifier - if defined there will be a back arrow next to the menu title that will take you to the menu you defined."))),(0,l.kt)("li",{parentName:"ul"},"canClose: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If set to false the user won't be able to exit the menu without pressing one of the buttons."))),(0,l.kt)("li",{parentName:"ul"},"onExit?: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that will be ran when the user closes their context menu with ESC."))),(0,l.kt)("li",{parentName:"ul"},"onBack?: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that will be ran when the user presses the back button to return to a previous menu."))),(0,l.kt)("li",{parentName:"ul"},"options: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"item: ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") or ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"title?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If not using keys then sets the title for the button; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"disabled?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Grays out the button and makes it unclickable."))),(0,l.kt)("li",{parentName:"ul"},"menu?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Menu identifier that the button will take you to, when defined an arrow."))),(0,l.kt)("li",{parentName:"ul"},"onSelect: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that's ran when the button is clicked."))),(0,l.kt)("li",{parentName:"ul"},"icon?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FontAwesome icon that will be displayed on the left side, works the same as notification and textui icons."))),(0,l.kt)("li",{parentName:"ul"},"iconColor?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Colour of the displayed icon."))),(0,l.kt)("li",{parentName:"ul"},"progress?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Adds a progress bar filled to this percentage"))),(0,l.kt)("li",{parentName:"ul"},"colorScheme?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the color scheme of the progress bar. Current options available are:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"whiteAlpha"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"blackAlpha"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"gray"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"red"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"orange"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yellow"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"green"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"teal"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"blue"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"cyan"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"purple"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"pink")))))),(0,l.kt)("li",{parentName:"ul"},"arrow?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Shows an arrow on the right side like ",(0,l.kt)("inlineCode",{parentName:"li"},"menu")," does, useful when you are opening a menu from an event. Can be set to false to hide it."))),(0,l.kt)("li",{parentName:"ul"},"description?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description that will appear under the button title that is defined as a key; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"image?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Url to an image that will be displayed in the button's metadata."))),(0,l.kt)("li",{parentName:"ul"},"metadata?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Information that will display on the side upon hovering a button."))),(0,l.kt)("li",{parentName:"ul"},"event?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Event that the button is going to trigger."))),(0,l.kt)("li",{parentName:"ul"},"serverEvent?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Server event that the button is going to trigger."))),(0,l.kt)("li",{parentName:"ul"},"args?: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Arguments that will be sent to the events or onSelect function.")))))))),(0,l.kt)("p",null,"You can register as many context menus in one ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.registerContext")," function\nas you'd like."),(0,l.kt)("p",null,"The menu can be either in the order you write it in, or sorted alphabetically.",(0,l.kt)("br",{parentName:"p"}),"\n","To sort the menu alphabetically the buttons (and/or metadata) need to be defined as keys, otherwise not using keys and instead using tables will make the menu be in the order you define it as."),(0,l.kt)("h3",{id:"libshowcontext"},"lib.showContext"),(0,l.kt)("p",null,"Opens a registered context menu by it's id."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showContext(id)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.showContext(id)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("h3",{id:"libhidecontext"},"lib.hideContext"),(0,l.kt)("p",null,"Hides any currently visible context menu."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.hideContext(onExit)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.hideContext(onExit)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"onExit: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Defines whether the onExit function for the menu should be ran or not.")))),(0,l.kt)("h3",{id:"libgetopencontextmenu"},"lib.getOpenContextMenu"),(0,l.kt)("p",null,"Returns the id of the currently open context menu."),(0,l.kt)("p",null,"If no context menu is open returns ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.getOpenContextMenu()\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.getOpenContextMenu()\n")))),(0,l.kt)("h3",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"First we register the menu with our specified options then we call the show function in the command."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu).")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext({\n    id = 'example_menu',\n    title = 'Example Context',\n    onExit = function()\n        print('Hello there')\n    end,\n    options = {\n        {title = 'Empty button'},\n        {\n            title = 'Example button',\n            description = 'Example button description',\n            onSelect = function(args)\n              print('Pressed the button!')\n            end,\n            metadata = {\n                {label = 'Value 1', value = 'Some value'},\n                {label = 'Value 2', value = 300},\n            }\n        },\n        {\n            title = 'Menu button',\n            menu = 'other_example_menu',\n            description = 'Takes you to another menu!',\n            metadata = {'It also has metadata support'}\n        },\n        {\n            title = 'Event button',\n            description = 'Open a menu and send event data',\n            arrow = true,\n            event = 'some_event',\n            args = {value1 = 300, value2 = 'Other value'}\n        }\n    },\n    {\n        id = 'other_example_menu',\n        title = 'Other Context Menu',\n        menu = 'example_menu',\n        options = {\n            ['Nothing here'] = {}\n        }\n    }\n})\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterCommand('testcontext', function()\n    lib.showContext('example_menu')\nend)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"lib.registerContext([\n  {\n    id: 'example_menu',\n    title: 'Example Context',\n    onExit: () => {\n      console.log('Hello there');\n    },\n    options: [\n      { title: 'Empty button' },\n      {\n        title: 'Example button',\n        description: 'Example button description',\n        onSelect: (args) => {\n          console.log('Pressed the button!');\n        },\n        metadata: [\n          { label: 'Value 1', value: 'Some value' },\n          { label: 'Value 2', value: 300 },\n        ],\n      },\n      {\n        title: 'Menu button',\n        menu: 'other_example_menu',\n        description: 'Takes you to another menu!',\n        metadata: ['It also has metadata support'],\n      },\n      {\n        title: 'Event button',\n        description: 'Open a menu and send event data',\n        arrow: true,\n        event: 'some_event',\n        args: { value1: 300, value2: 'Other value' },\n      },\n    ],\n  },\n  {\n    id: 'other_example_menu',\n    title: 'Other Context Menu',\n    menu: 'example_menu',\n    options: {\n      ['Nothing here']: {},\n    },\n  },\n]);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"RegisterCommand('testcontext', () => {\n  lib.showContext('example_menu')\n}, false)\n")))),(0,l.kt)("p",null,"To trigger the event from the ",(0,l.kt)("inlineCode",{parentName:"p"},"Event button")," and get it's data we first need to register the event properly:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('some_event', function(data)\n    print(json.encode(data, {indent=true}))\n    lib.registerContext({\n        id = 'another_context_menu',\n        title = 'Event Menu',\n        menu = 'example_menu',\n        options = {\n            ['Menu data'] = {\n                description = 'Data from the previous menu',\n                metadata = {\n                    ['Value1'] = data.value1,\n                    ['Value2'] = data.value2\n                }\n            }\n        }\n    })\n    lib.showContext('another_context_menu')\nend)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onNet('some_event', () => {\n  console.log(JSON.stringify(data, null, 2))\n  lib.registerContext({\n    id: 'another_context_menu',\n    title: 'Event Menu',\n    menu: 'example_menu',\n    options: {\n      ['Menu data']: {\n        description: 'Data from the previous menu',\n        metadata: {\n          ['Value1']: data.value1,\n          ['Value2']: data.value2,\n        },\n      },\n    },\n  });\n  lib.showContext('another_context_menu');\n});\n")))),(0,l.kt)("p",null,"The data from the ",(0,l.kt)("inlineCode",{parentName:"p"},"args")," table in the menu is passed as a first argument to the event you register, in this case that argument is called ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,l.kt)("p",null,"Using this event we also register a new context menu with it's own options."),(0,l.kt)("p",null,"By defining a ",(0,l.kt)("inlineCode",{parentName:"p"},"menu")," param to be the id of the first menu we can get the neat back arrow button next to the menu title that will take us back."),(0,l.kt)("p",null,"If we have a button that does not define either event, serverEvent or menu the button will do nothing upon being clicked."),(0,l.kt)("p",null,"Of course just registering the event won't do much so we need to display it with the ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.showContext")," function, passing in the menu's id."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/aJu92dv.png",alt:"menu_example"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/kFGSlBF.png",alt:"metadata"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/r0Ln4VP.png",alt:"event_menu"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/dUsil3p.png",alt:"example"})))}c.isMDXComponent=!0}}]);