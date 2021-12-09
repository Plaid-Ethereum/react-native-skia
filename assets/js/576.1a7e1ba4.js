"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[576],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(r),p=a,h=d["".concat(o,".").concat(p)]||d[p]||u[p]||l;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8665:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(3366),a=r(7294),l=r(6010),i=r(7019),c=r(9960),o="sidebar_q+wC",m="sidebarItemTitle_9G5K",s="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",p="sidebarItemLinkActive_wcJs",h=r(5999);function g(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),a.createElement("ul",{className:s},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var f=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,r=e.toc,c=e.children,o=(0,n.Z)(e,f),m=t&&t.items.length>0;return a.createElement(i.Z,o,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},m&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),r&&a.createElement("div",{className:"col col--2"},r))))}},8561:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),a=r(6010),l=r(3905),i=r(5999),c=r(9960),o=r(4996),m=r(3616),s=r(509),u=r(6753),d="blogPostTitle_d4p0",p="blogPostData_-Im+",h="blogPostDetailsFull_xD8n",g=r(62),f="image_9q7L";var v=function(e){var t=e.author,r=t.name,a=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:f,src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(c.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),a&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},b="authorCol_8c0z";function E(e){var t=e.authors,r=e.assets;return 0===t.length?null:n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,a.Z)("col col--6",b),key:t},n.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=r.authorsImageUrls[t])?l:e.imageURL})}))})))}var y=function(e){var t,r,f,v,b=(f=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),y=(0,o.C)().withBaseUrl,Z=e.children,N=e.frontMatter,k=e.assets,T=e.metadata,O=e.truncated,P=e.isBlogPostPage,_=void 0!==P&&P,w=T.date,C=T.formattedDate,j=T.permalink,x=T.tags,S=T.readingTime,L=T.title,R=T.editUrl,A=T.authors,I=null!=(t=k.image)?t:N.image,B=!_&&O,D=x.length>0;return n.createElement("article",{className:_?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=_?"h1":"h2",n.createElement("header",null,n.createElement(v,{className:d,itemProp:"headline"},_?L:n.createElement(c.Z,{itemProp:"url",to:j},L)),n.createElement("div",{className:(0,a.Z)(p,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},C),void 0!==S&&n.createElement(n.Fragment,null," \xb7 ",b(S))),n.createElement(E,{authors:A,assets:k}))),I&&n.createElement("meta",{itemProp:"image",content:y(I,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:s.Z},Z)),(D||O)&&n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(r={},r[h]=_,r))},D&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":B})},n.createElement(g.Z,{tags:x})),_&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:R})),B&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":D})},n.createElement(c.Z,{to:T.permalink,"aria-label":"Read more about "+L},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),a=r(5999),l=r(7462),i=r(3366),c=r(6010),o="iconEdit_mS5F",m=["className"];var s=function(e){var t=e.className,r=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=r(3616);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(s,null),n.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,r){r.d(t,{N:function(){return d},Z:function(){return p}});var n=r(3366),a=r(7462),l=r(7294),i=r(6010),c=r(5999),o=r(3616),m="anchorWithStickyNavbar_y2LR",s="anchorWithHideOnScrollNavbar_3ly5",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?d:(t=e,function(e){var r,d=e.id,p=(0,n.Z)(e,u),h=(0,o.LU)().navbar.hideOnScroll;return d?l.createElement(t,(0,a.Z)({},p,{className:(0,i.Z)("anchor",(r={},r[s]=h,r[m]=!h,r)),id:d}),p.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,p)});var t}},7774:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(6010),l=r(9960),i="tag_WK-t",c="tagRegular_LXbV",o="tagWithCount_S5Zl";var m=function(e){var t,r=e.permalink,m=e.name,s=e.count;return n.createElement(l.Z,{href:r,className:(0,a.Z)(i,(t={},t[c]=!s,t[o]=s,t))},m,s&&n.createElement("span",null,s))}},62:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(6010),l=r(5999),i=r(7774),c="tags_NBRY",o="tag_F03v";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,a.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,r=e.permalink;return n.createElement("li",{key:r,className:o},n.createElement(i.Z,{name:t,permalink:r}))}))))}},509:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),a=r(7462),l=r(3366);var i=r(5999),c=["children"],o=function(e){var t=e.children,r=(0,l.Z)(e,c),o=(0,n.useRef)(null),m=(0,n.useState)(!1),s=m[0],u=m[1];return n.createElement("pre",(0,a.Z)({},r,{ref:o}),t,n.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){o.current&&function(e,t){var r=(void 0===t?{}:t).target,n=void 0===r?document.body:r,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var i=document.getSelection(),c=!1;i.rangeCount>0&&(c=i.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var o=!1;try{o=document.execCommand("copy")}catch(m){}a.remove(),c&&(i.removeAllRanges(),i.addRange(c)),l&&l.focus()}(Array.from(o.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),u(!0),setTimeout((function(){return u(!1)}),2e3)}},s?n.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):n.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))},m=r(2859),s=r(9960),u=r(9649),d=r(6010),p=r(3616),h="details_h+cY";function g(e){var t=Object.assign({},e);return n.createElement(p.PO,(0,a.Z)({},t,{className:(0,d.Z)("alert alert--info",h,t.className)}))}var f=["mdxType","originalType"];var v={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,r;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(r=e.props)&&r.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,l.Z)(a,f));return n.createElement(e.props.originalType,i)}return e}(e)}));return n.createElement(m.Z,e,t)},code:function(e){var t=e.children;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(o,e):n.createElement("code",e)},a:function(e){return n.createElement(s.Z,e)},pre:function(e){var t,r=e.children;return(0,n.isValidElement)(r)&&(0,n.isValidElement)(null==r||null==(t=r.props)?void 0:t.children)?r.props.children:n.createElement(o,(0,n.isValidElement)(r)?null==r?void 0:r.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),r=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=n.createElement(n.Fragment,null,t.filter((function(e){return e!==r})));return n.createElement(g,(0,a.Z)({},e,{summary:r}),l)},h1:(0,u.Z)("h1"),h2:(0,u.Z)("h2"),h3:(0,u.Z)("h3"),h4:(0,u.Z)("h4"),h5:(0,u.Z)("h5"),h6:(0,u.Z)("h6")},b=Object.assign({},v,{div:function(e){return"shiki-twoslash-fragment"===e.className?n.createElement(n.Fragment,null,e.children):n.createElement("div",e)},pre:function(e){return n.createElement(o,e)},code:function(e){return n.createElement("code",e)}})}}]);