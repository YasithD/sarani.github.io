(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860,751],{77751:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return T}});var r=n(85893),t=n(67294),l=n(72694),o=n(10682),c=n(96122),s=n(96957),i=n(97346),h=n(77104),u=n(6212),d=n(71058),v=n(70290),m=n.n(v),_=n(4793),f=n(74575),x=n(39734),p=n.n(x);var j=(0,f.Z)((function(e){var a=e.refine;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("input",{id:"algolia_search",type:"search",placeholder:"Search docs",onChange:function(e){return a(e.currentTarget.value)},className:p().searchBox,autoFocus:!0})})})),N=n(98617),g=n(14580),y=n.n(g);var b=(0,N.Z)((function(e){var a,n=e.searchState,t=e.searchResults,l=(null===(a=n.query)||void 0===a?void 0:a.length)>=3;return(0,r.jsxs)(r.Fragment,{children:[0===(null===t||void 0===t?void 0:t.hits.length)&&l&&(0,r.jsx)("p",{children:"No results found!"}),(null===t||void 0===t?void 0:t.hits.length)>0&&l&&(0,r.jsx)(r.Fragment,{children:t.hits.map((function(e,a){return null===e.hierarchy.lvl0?(0,r.jsx)("a",{href:e.url,className:y().hit,children:(0,r.jsx)("div",{tabIndex:a,className:y().hitBody,dangerouslySetInnerHTML:{__html:e._highlightResult.hierarchy.lvl1.value}},e.objectID)}):e._highlightResult.hierarchy.lvl1?(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:y().hitCategory,children:e.hierarchy.lvl0}),(0,r.jsx)("a",{href:e.url,className:y().hit,children:(0,r.jsx)("div",{tabIndex:a,className:y().hitBody,dangerouslySetInnerHTML:{__html:e._highlightResult.hierarchy.lvl1.value}},e.objectID)})]}):null}))})]})}));function S(){var e=m()("8LWM72S9RU","17c77e6bf87e0ae7c4b8caad2582c560");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(_.Z,{searchClient:e,indexName:"ballerina",children:[(0,r.jsx)(j,{}),(0,r.jsx)(b,{})]})})}var B=n(25640),I=n(69060),Z=n.n(I);function w(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,r=new Array(a);n<a;n++)r[n]=e[n];return r}function C(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,t,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!a||l.length!==a);o=!0);}catch(s){c=!0,t=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw t}}return l}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return w(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=function(e){var a=e.launcher;n.g.location.pathname.indexOf("learn")>0&&(a+="-learn");var v=C(t.useState(!1),2),m=v[0],_=v[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{className:Z()[a],expand:"lg",fixed:"top",children:(0,r.jsxs)(o.Z,{fluid:!0,children:[(0,r.jsx)(l.Z.Brand,{href:"".concat(B.O,"/"),children:"home"!==a?(0,r.jsx)(d.Z,{src:"".concat(B.O,"/images/ballerina-logo.svg"),height:28,width:150,alt:"Ballerina Logo"}):null}),(0,r.jsx)(l.Z.Toggle,{"aria-controls":"navbarScroll"}),(0,r.jsxs)(l.Z.Collapse,{id:"navbarScroll",children:[(0,r.jsxs)(c.Z,{className:"".concat(Z().topNav," ms-auto my-2 my-lg-0"),style:{maxHeight:"100px"},navbarScroll:!0,children:[(0,r.jsx)(c.Z.Link,{className:"downloads"===a?"".concat(Z().active," ").concat(Z().navItem):"".concat(Z().navItem),href:"".concat(B.O,"/downloads"),children:"Download"}),(0,r.jsx)(c.Z.Link,{className:Z().navItem,href:"https://play.ballerina.io/",children:"Playground"}),(0,r.jsx)(c.Z.Link,{className:"docs-learn"===a?"".concat(Z().active," ").concat(Z().navItem):"".concat(Z().navItem),href:"".concat(B.O,"/learn/install-ballerina/set-up-ballerina"),children:"Learn"}),(0,r.jsx)(c.Z.Link,{className:Z().navItem,href:"https://central.ballerina.io/",children:"Central"}),(0,r.jsx)(c.Z.Link,{className:"community"===a?"".concat(Z().active," ").concat(Z().navItem):"".concat(Z().navItem),href:"".concat(B.O,"/community"),children:"Community"}),(0,r.jsx)(c.Z.Link,{className:Z().navItem,href:"https://blog.ballerina.io/",children:"Blog"}),(0,r.jsxs)(s.Z,{title:"Swarn Lake",id:Z().navbarScrollingDropdown,children:[(0,r.jsx)(s.Z.Item,{href:"#action3",children:"Swan-Lake"}),(0,r.jsx)(s.Z.Item,{href:"#action4",children:"V 1.2"}),(0,r.jsx)(s.Z.Item,{href:"#action5",children:"V 1.1"}),(0,r.jsx)(s.Z.Item,{href:"#action5",children:"V 1.0"})]})]}),(0,r.jsx)(i.Z,{className:"d-flex",children:(0,r.jsxs)(h.Z,{className:Z().searchButton,"aria-label":"Search",onClick:function(){return _(!0)},children:[(0,r.jsxs)("span",{className:Z().searchButtonContainer,children:[(0,r.jsx)("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,r.jsx)("span",{className:Z().searchButtonIcon,children:"Search"})]}),(0,r.jsxs)("span",{className:Z().searchButtonKeys,children:[(0,r.jsx)("span",{className:Z().searchButtonKey,children:(0,r.jsx)("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon",children:(0,r.jsx)("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"})})}),(0,r.jsx)("span",{className:Z().searchButtonKey,children:"K"})]})]})})]})]})}),(0,r.jsx)(u.Z,{show:m,onHide:function(){return _(!1)},children:(0,r.jsx)(u.Z.Body,{className:Z().searchModal,children:(0,r.jsx)(S,{})})})]})}},39734:function(e){e.exports={searchBox:"SearchBox_searchBox__h8Flt"}},14580:function(e){e.exports={hit:"SearchHits_hit__qzqR6",hitBody:"SearchHits_hitBody__E0FLU",hitCategory:"SearchHits_hitCategory__W_JI9"}},69060:function(e){e.exports={navbar:"TopNav_navbar__SJ78B",home:"TopNav_home__uZ6Dl",docs:"TopNav_docs__ZwmCb",downloads:"TopNav_downloads__B11H3",other:"TopNav_other__FEtcU","docs-learn":"TopNav_docs-learn__T6ij6",topNav:"TopNav_topNav__Zzb38",navItem:"TopNav_navItem__Hr5i7",active:"TopNav_active__ASxj2",navbarScrollingDropdown:"TopNav_navbarScrollingDropdown__PUDvQ",searchButton:"TopNav_searchButton__PZ4rQ",searchButtonContainer:"TopNav_searchButtonContainer__xgSI5",searchButtonIcon:"TopNav_searchButtonIcon__kOUN9","DocSearch-Button-Placeholder":"TopNav_DocSearch-Button-Placeholder__4LlUg",searchButtonKeys:"TopNav_searchButtonKeys__NUK31",searchModal:"TopNav_searchModal__lSKiQ"}},41485:function(e,a,n){"use strict";var r=n(45697),t=n.n(r),l=n(67294),o=n(94184),c=n.n(o),s=n(85893);const i={"aria-label":t().string,onClick:t().func,variant:t().oneOf(["white"])},h=l.forwardRef((({className:e,variant:a,...n},r)=>(0,s.jsx)("button",{ref:r,type:"button",className:c()("btn-close",a&&`btn-close-${a}`,e),...n})));h.displayName="CloseButton",h.propTypes=i,h.defaultProps={"aria-label":"Close"},a.Z=h},39602:function(e,a,n){"use strict";var r=n(67294),t=n(94184),l=n.n(t),o=n(85893);a.Z=e=>r.forwardRef(((a,n)=>(0,o.jsx)("div",{...a,ref:n,className:l()(a.className,e)})))}}]);