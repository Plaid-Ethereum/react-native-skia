"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[682],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(a),N=r,k=c["".concat(p,".").concat(N)]||c[N]||d[N]||l;return a?n.createElement(k,s(s({ref:t},m),{},{components:a})):n.createElement(k,s({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7062:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return m},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),s=["components"],o={id:"image",title:"Image",sidebar_label:"Image",slug:"/images"},p=void 0,i={unversionedId:"image",id:"image",title:"Image",description:"Images can be draw by specifying the output rectangle and how the image should fit into that rectangle.",source:"@site/docs/image.md",sourceDirName:".",slug:"/images",permalink:"/docs/images",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/image.md",tags:[],version:"current",frontMatter:{id:"image",title:"Image",sidebar_label:"Image",slug:"/images"},sidebar:"tutorialSidebar",previous:{title:"Group",permalink:"/docs/group"},next:{title:"Language",permalink:"/docs/shaders/overview"}},m=[{value:"Example",id:"example",children:[],level:3},{value:"fit=&quot;contain&quot;",id:"fitcontain",children:[],level:3},{value:"fit=&quot;cover&quot;",id:"fitcover",children:[],level:3},{value:"fit=&quot;fill&quot;",id:"fitfill",children:[],level:3},{value:"fit=&quot;fitHeight&quot;",id:"fitfitheight",children:[],level:3},{value:"fit=&quot;fitWidth&quot;",id:"fitfitwidth",children:[],level:3},{value:"fit=&quot;scaleDown&quot;",id:"fitscaledown",children:[],level:3},{value:"fit=&quot;none&quot;",id:"fitnone",children:[],level:3}],d={toc:m};function c(e){var t=e.components,o=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Images can be draw by specifying the output rectangle and how the image should fit into that rectangle."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"source"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"require")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Source of the image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"x"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Left position of the destination image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"y"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Right position of the destination image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"width"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Width of the destination image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"height"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Height of the destination image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fit?"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Fit")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Method to make the image fit into the rectangle. Value can be ",(0,l.kt)("inlineCode",{parentName:"td"},"contain"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"fill"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"cover")," ",(0,l.kt)("inlineCode",{parentName:"td"},"fitHeight"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"fitWidth"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"scaleDown"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"none")," (default is ",(0,l.kt)("inlineCode",{parentName:"td"},"contain"),").")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: ({ children, style, debug, mode }: CanvasProps) => JSX.Element\nimport Canvas"},"Canvas")),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,l.kt)("data-lsp",{parentName:"span",lsp:'(alias) module Image\n(alias) const Image: {\n    (defaultProps: AnimatedProps<ImageProps, "source">): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image'},"Image")),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const ImageDemo: () => JSX.Element"},"ImageDemo")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: ({ children, style, debug, mode }: CanvasProps) => JSX.Element\nimport Canvas"},"Canvas")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:'(alias) module Image\n(alias) const Image: {\n    (defaultProps: AnimatedProps<ImageProps, "source">): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image'},"Image"))),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) source: any"},"source")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"../../assets/oslo.jpg"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "contain"'},"fit")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"contain"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number | ((ctx: DrawingContext) => number)"},"width")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number | ((ctx: DrawingContext) => number)"},"height")),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: ({ children, style, debug, mode }: CanvasProps) => JSX.Element\nimport Canvas"},"Canvas")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: ({ children, style, debug, mode }: CanvasProps) => JSX.Element\nimport Canvas"},"Canvas")),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:'(alias) module Image\n(alias) const Image: {\n    (defaultProps: AnimatedProps<ImageProps, "source">): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image'},"Image")),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const ImageDemo: () => JSX.Element"},"ImageDemo")),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: ({ children, style, debug, mode }: CanvasProps) => JSX.Element\nimport Canvas"},"Canvas")),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:'(alias) module Image\n(alias) const Image: {\n    (defaultProps: AnimatedProps<ImageProps, "source">): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image'},"Image"))),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) source: any"},"source")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"../../assets/oslo.jpg"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "contain"'},"fit")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"contain"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number | ((ctx: DrawingContext) => number)"},"width")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number | ((ctx: DrawingContext) => number)"},"height")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: ({ children, style, debug, mode }: CanvasProps) => JSX.Element\nimport Canvas"},"Canvas")),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,l.kt)("h3",{id:"fitcontain"},'fit="contain"'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fit=&quot;contain&quot;",src:a(9724).Z})),(0,l.kt)("h3",{id:"fitcover"},'fit="cover"'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fit=&quot;cover&quot;",src:a(7202).Z})),(0,l.kt)("h3",{id:"fitfill"},'fit="fill"'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fit=&quot;fill&quot;",src:a(1711).Z})),(0,l.kt)("h3",{id:"fitfitheight"},'fit="fitHeight"'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fit=&quot;fitHeight&quot;",src:a(8262).Z})),(0,l.kt)("h3",{id:"fitfitwidth"},'fit="fitWidth"'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fit=&quot;fitWidth&quot;",src:a(4169).Z})),(0,l.kt)("h3",{id:"fitscaledown"},'fit="scaleDown"'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fit=&quot;fitWidth&quot;",src:a(9049).Z})),(0,l.kt)("h3",{id:"fitnone"},'fit="none"'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fit=&quot;none&quot;",src:a(6100).Z})))}c.isMDXComponent=!0},9724:function(e,t,a){t.Z=a.p+"assets/images/contain-feb18e23f3d0efa665f2cf1005d1f578.png"},7202:function(e,t,a){t.Z=a.p+"assets/images/cover-d876e99ed6b72cd68d4cf2de2da0368b.png"},1711:function(e,t,a){t.Z=a.p+"assets/images/fill-f171bf1f95388655be7dd89930ba35ac.png"},8262:function(e,t,a){t.Z=a.p+"assets/images/fitHeight-1c9334534883f9df13fe0362cb0e9180.png"},4169:function(e,t,a){t.Z=a.p+"assets/images/fitWidth-0ce6d3402dc86f3796438d76c6c230f9.png"},6100:function(e,t,a){t.Z=a.p+"assets/images/none-5afc0e6ba4602acd65d5704fb5dee8da.png"},9049:function(e,t,a){t.Z=a.p+"assets/images/scaleDown-feb18e23f3d0efa665f2cf1005d1f578.png"}}]);