(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{56310:function(e,n,i){"use strict";i.d(n,{Z:function(){return p},W:function(){return b}});var t=i(67294),r=i(76626),o=i(87126);var a=function({children:e,in:n,mountOnEnter:i,unmountOnExit:r}){const o=(0,t.useRef)(n);return(0,t.useEffect)((()=>{n&&(o.current=!0)}),[n]),n?e:r||!o.current&&i?null:e},s=i(85893);const u=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],l=["activeKey","getControlledId","getControllerId"],c=["as"];function d(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}function b(e){let{active:n,eventKey:i,mountOnEnter:a,transition:s,unmountOnExit:c,role:b="tabpanel",onEnter:f,onEntering:p,onEntered:m,onExit:w,onExiting:v,onExited:h}=e,g=d(e,u);const x=(0,t.useContext)(r.Z);if(!x)return[Object.assign({},g,{role:b}),{eventKey:i,isActive:n,mountOnEnter:a,transition:s,unmountOnExit:c,onEnter:f,onEntering:p,onEntered:m,onExit:w,onExiting:v,onExited:h}];const{activeKey:y,getControlledId:E,getControllerId:O}=x,k=d(x,l),j=(0,o.h)(i);return[Object.assign({},g,{role:b,id:E(i),"aria-labelledby":O(i)}),{eventKey:i,isActive:null==n&&null!=j?(0,o.h)(y)===j:n,transition:s||k.transition,mountOnEnter:null!=a?a:k.mountOnEnter,unmountOnExit:null!=c?c:k.unmountOnExit,onEnter:f,onEntering:p,onEntered:m,onExit:w,onExiting:v,onExited:h}]}const f=t.forwardRef(((e,n)=>{let{as:i="div"}=e,t=d(e,c);const[u,{isActive:l,onEnter:f,onEntering:p,onEntered:m,onExit:w,onExiting:v,onExited:h,mountOnEnter:g,unmountOnExit:x,transition:y=a}]=b(t);return(0,s.jsx)(r.Z.Provider,{value:null,children:(0,s.jsx)(o.Z.Provider,{value:null,children:(0,s.jsx)(y,{in:l,onEnter:f,onEntering:p,onEntered:m,onExit:w,onExiting:v,onExited:h,mountOnEnter:g,unmountOnExit:x,children:(0,s.jsx)(i,Object.assign({},u,{ref:n,hidden:!l,"aria-hidden":!l}))})})})}));f.displayName="TabPanel";var p=f},83916:function(e,n,i){"use strict";var t=i(67294),r=i(47150),o=i(78831),a=i(76626),s=i(87126),u=i(56310),l=i(85893);const c=e=>{const{id:n,generateChildId:i,onSelect:u,activeKey:c,defaultActiveKey:d,transition:b,mountOnEnter:f,unmountOnExit:p,children:m}=e,[w,v]=(0,r.$c)(c,d,u),h=(0,o.gP)(n),g=(0,t.useMemo)((()=>i||((e,n)=>h?`${h}-${n}-${e}`:null)),[h,i]),x=(0,t.useMemo)((()=>({onSelect:v,activeKey:w,transition:b,mountOnEnter:f||!1,unmountOnExit:p||!1,getControlledId:e=>g(e,"tabpane"),getControllerId:e=>g(e,"tab")})),[v,w,b,f,p,g]);return(0,l.jsx)(a.Z.Provider,{value:x,children:(0,l.jsx)(s.Z.Provider,{value:v||null,children:m})})};c.Panel=u.Z,n.Z=c},94184:function(e,n){var i;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&e.push(a)}}else if("object"===o)if(i.toString===Object.prototype.toString)for(var s in i)t.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(n,[]))||(e.exports=i)}()},92703:function(e,n,i){"use strict";var t=i(50414);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,n,i,r,o,a){if(a!==t){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:r};return i.PropTypes=i,i}},45697:function(e,n,i){e.exports=i(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},88375:function(e,n,i){"use strict";var t=i(94184),r=i.n(t),o=i(67294),a=i(47150),s=i(78146),u=i(13551),l=i(76792),c=i(41068),d=i(41485),b=i(39602),f=i(66611),p=i(85893);const m=(0,b.Z)("h4");m.displayName="DivStyledAsH4";const w=(0,f.Z)("alert-heading",{Component:m}),v=(0,f.Z)("alert-link",{Component:u.Z}),h={variant:"primary",show:!0,transition:c.Z,closeLabel:"Close alert"},g=o.forwardRef(((e,n)=>{const{bsPrefix:i,show:t,closeLabel:o,closeVariant:u,className:b,children:f,variant:m,onClose:w,dismissible:v,transition:h,...g}=(0,a.Ch)(e,{show:"onClose"}),x=(0,l.vE)(i,"alert"),y=(0,s.Z)((e=>{w&&w(!1,e)})),E=!0===h?c.Z:h,O=(0,p.jsxs)("div",{role:"alert",...E?void 0:g,ref:n,className:r()(b,x,m&&`${x}-${m}`,v&&`${x}-dismissible`),children:[v&&(0,p.jsx)(d.Z,{onClick:y,"aria-label":o,variant:u}),f]});return E?(0,p.jsx)(E,{unmountOnExit:!0,...g,ref:void 0,in:t,children:O}):t?O:null}));g.displayName="Alert",g.defaultProps=h,n.Z=Object.assign(g,{Link:v,Heading:w})},41485:function(e,n,i){"use strict";var t=i(45697),r=i.n(t),o=i(67294),a=i(94184),s=i.n(a),u=i(85893);const l={"aria-label":r().string,onClick:r().func,variant:r().oneOf(["white"])},c=o.forwardRef((({className:e,variant:n,...i},t)=>(0,u.jsx)("button",{ref:t,type:"button",className:s()("btn-close",n&&`btn-close-${n}`,e),...i})));c.displayName="CloseButton",c.propTypes=l,c.defaultProps={"aria-label":"Close"},n.Z=c},31555:function(e,n,i){"use strict";var t=i(94184),r=i.n(t),o=i(67294),a=i(76792),s=i(85893);const u=o.forwardRef(((e,n)=>{const[{className:i,...t},{as:o="div",bsPrefix:u,spans:l}]=function({as:e,bsPrefix:n,className:i,...t}){n=(0,a.vE)(n,"col");const o=(0,a.pi)(),s=[],u=[];return o.forEach((e=>{const i=t[e];let r,o,a;delete t[e],"object"===typeof i&&null!=i?({span:r,offset:o,order:a}=i):r=i;const l="xs"!==e?`-${e}`:"";r&&s.push(!0===r?`${n}${l}`:`${n}${l}-${r}`),null!=a&&u.push(`order${l}-${a}`),null!=o&&u.push(`offset${l}-${o}`)})),[{...t,className:r()(i,...s,...u)},{as:e,bsPrefix:n,spans:s}]}(e);return(0,s.jsx)(o,{...t,ref:n,className:r()(i,!l.length&&u)})}));u.displayName="Col",n.Z=u},10682:function(e,n,i){"use strict";var t=i(94184),r=i.n(t),o=i(67294),a=i(76792),s=i(85893);const u=o.forwardRef((({bsPrefix:e,fluid:n,as:i="div",className:t,...o},u)=>{const l=(0,a.vE)(e,"container"),c="string"===typeof n?`-${n}`:"-fluid";return(0,s.jsx)(i,{ref:u,...o,className:r()(t,n?`${l}${c}`:l)})}));u.displayName="Container",u.defaultProps={fluid:!1},n.Z=u},21608:function(e,n,i){"use strict";var t=i(94184),r=i.n(t),o=i(67294),a=i(76792),s=i(85893);const u=o.forwardRef((({bsPrefix:e,className:n,as:i="div",...t},o)=>{const u=(0,a.vE)(e,"row"),l=(0,a.pi)(),c=`${u}-cols`,d=[];return l.forEach((e=>{const n=t[e];let i;delete t[e],null!=n&&"object"===typeof n?({cols:i}=n):i=n;const r="xs"!==e?`-${e}`:"";null!=i&&d.push(`${c}${r}-${i}`)})),(0,s.jsx)(i,{ref:o,...t,className:r()(n,u,...d)})}));u.displayName="Row",n.Z=u},30478:function(e,n,i){"use strict";i.d(n,{Z:function(){return c}});var t=i(94184),r=i.n(t),o=i(67294),a=i(76792);function s(e,n=a.Hz){const i=[];return Object.entries(e).forEach((([e,t])=>{null!=t&&("object"===typeof t?n.forEach((n=>{const r=t[n];if(null!=r){const t="xs"!==n?`-${n}`:"";i.push(`${e}${t}-${r}`)}})):i.push(`${e}-${t}`))})),i}var u=i(85893);const l=o.forwardRef((({as:e="div",bsPrefix:n,className:i,direction:t,gap:o,...l},c)=>{n=(0,a.vE)(n,"horizontal"===t?"hstack":"vstack");const d=(0,a.pi)();return(0,u.jsx)(e,{...l,ref:c,className:r()(i,n,...s({gap:o,breakpoints:d}))})}));l.displayName="Stack";var c=l},73192:function(e,n,i){"use strict";i.d(n,{Z:function(){return p}});var t=i(45697),r=i.n(t),o=(i(67294),i(83916)),a=i(96101),s=i(85893);const u=({transition:e,...n})=>(0,s.jsx)(o.Z,{...n,transition:(0,a.Z)(e)});u.displayName="TabContainer";var l=u,c=i(28752),d=i(75103);const b={eventKey:r().oneOfType([r().string,r().number]),title:r().node.isRequired,disabled:r().bool,tabClassName:r().string,tabAttrs:r().object},f=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};f.propTypes=b;var p=Object.assign(f,{Container:l,Content:c.Z,Pane:d.Z})},28752:function(e,n,i){"use strict";var t=i(66611);n.Z=(0,t.Z)("tab-content")},75103:function(e,n,i){"use strict";var t=i(94184),r=i.n(t),o=i(67294),a=i(87126),s=i(76626),u=i(56310),l=i(76792),c=i(41068),d=i(96101),b=i(85893);const f=o.forwardRef((({bsPrefix:e,transition:n,...i},t)=>{const[{className:o,as:f="div",...p},{isActive:m,onEnter:w,onEntering:v,onEntered:h,onExit:g,onExiting:x,onExited:y,mountOnEnter:E,unmountOnExit:O,transition:k=c.Z}]=(0,u.W)({...i,transition:(0,d.Z)(n)}),j=(0,l.vE)(e,"tab-pane");return(0,b.jsx)(s.Z.Provider,{value:null,children:(0,b.jsx)(a.Z.Provider,{value:null,children:(0,b.jsx)(k,{in:m,onEnter:w,onEntering:v,onEntered:h,onExit:g,onExiting:x,onExited:y,mountOnEnter:E,unmountOnExit:O,children:(0,b.jsx)(f,{...p,ref:t,className:r()(o,j,m&&"active")})})})})}));f.displayName="TabPane",n.Z=f},85509:function(e,n,i){"use strict";i(67294);var t=i(47150),r=i(83916),o=i(96122),a=i(14691),s=i(41244),u=i(28752),l=i(75103),c=i(53439),d=i(96101),b=i(85893);function f(e){let n;return(0,c.Ed)(e,(e=>{null==n&&(n=e.props.eventKey)})),n}function p(e){const{title:n,eventKey:i,disabled:t,tabClassName:r,tabAttrs:o,id:u}=e.props;return null==n?null:(0,b.jsx)(s.Z,{as:"li",role:"presentation",children:(0,b.jsx)(a.Z,{as:"button",type:"button",eventKey:i,disabled:t,id:u,className:r,...o,children:n})})}const m=e=>{const{id:n,onSelect:i,transition:a,mountOnEnter:s,unmountOnExit:m,children:w,activeKey:v=f(w),...h}=(0,t.Ch)(e,{activeKey:"onSelect"});return(0,b.jsxs)(r.Z,{id:n,activeKey:v,onSelect:i,transition:(0,d.Z)(a),mountOnEnter:s,unmountOnExit:m,children:[(0,b.jsx)(o.Z,{...h,role:"tablist",as:"ul",children:(0,c.UI)(w,p)}),(0,b.jsx)(u.Z,{children:(0,c.UI)(w,(e=>{const n={...e.props};return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,b.jsx)(l.Z,{...n})}))})]})};m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs",n.Z=m},76792:function(e,n,i){"use strict";i.d(n,{Hz:function(){return r},vE:function(){return u},pi:function(){return l},SC:function(){return c}});var t=i(67294);i(85893);const r=["xxl","xl","lg","md","sm","xs"],o=t.createContext({prefixes:{},breakpoints:r}),{Consumer:a,Provider:s}=o;function u(e,n){const{prefixes:i}=(0,t.useContext)(o);return e||i[n]||n}function l(){const{breakpoints:e}=(0,t.useContext)(o);return e}function c(){const{dir:e}=(0,t.useContext)(o);return"rtl"===e}},39602:function(e,n,i){"use strict";var t=i(67294),r=i(94184),o=i.n(r),a=i(85893);n.Z=e=>t.forwardRef(((n,i)=>(0,a.jsx)("div",{...n,ref:i,className:o()(n.className,e)})))},96101:function(e,n,i){"use strict";i.d(n,{Z:function(){return r}});var t=i(41068);function r(e){return"boolean"===typeof e?e?t.Z:void 0:e}},85518:function(e,n,i){"use strict";var t,r=i(67294),o=(t=r)&&"object"===typeof t&&"default"in t?t.default:t,a=i(23451),s=new a,u=s.getBrowser(),l=s.getCPU(),c=s.getDevice(),d=s.getEngine(),b=s.getOS(),f=s.getUA(),p=function(e){return s.setUA(e)},m=function(e){if(e){var n=new a(e);return{UA:n,browser:n.getBrowser(),cpu:n.getCPU(),device:n.getDevice(),engine:n.getEngine(),os:n.getOS(),ua:n.getUA(),setUserAgent:function(e){return n.setUA(e)}}}console.error("No userAgent string was provided")},w=Object.freeze({ClientUAInstance:s,browser:u,cpu:l,device:c,engine:d,os:b,ua:f,setUa:p,parseUserAgent:m});function v(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function h(e){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function x(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},y.apply(this,arguments)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function O(e,n){return O=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},O(e,n)}function k(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var t,r,o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(t=i.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(u){s=!0,r=u}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return C(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return C(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var P="mobile",N="tablet",A="smarttv",T="console",_="wearable",I="embedded",Z=void 0,$={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},U={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},M={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||n},B=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},z=function(e){var n=B();return n&&n.platform&&(-1!==n.platform.indexOf(e)||"MacIntel"===n.platform&&n.maxTouchPoints>1&&!window.MSStream)},q=function(e,n,i,t){return function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?v(Object(i),!0).forEach((function(n){x(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({},e,{vendor:R(n.vendor),model:R(n.model),os:R(i.name),osVersion:R(i.version),ua:R(t)})};var W=function(e){return e.type===P},V=function(e){return e.type===N},D=function(e){var n=e.type;return n===P||n===N},K=function(e){return e.type===A},F=function(e){return e.type===Z},L=function(e){return e.type===_},H=function(e){return e.type===T},Y=function(e){return e.type===I},G=function(e){var n=e.vendor;return R(n)},X=function(e){var n=e.model;return R(n)},Q=function(e){var n=e.type;return R(n,"browser")},J=function(e){return e.name===U.Android},ee=function(e){return e.name===U.Windows},ne=function(e){return e.name===U.MAC_OS},ie=function(e){return e.name===U.WindowsPhone},te=function(e){return e.name===U.IOS},re=function(e){var n=e.version;return R(n)},oe=function(e){var n=e.name;return R(n)},ae=function(e){return e.name===$.Chrome},se=function(e){return e.name===$.Firefox},ue=function(e){return e.name===$.Chromium},le=function(e){return e.name===$.Edge},ce=function(e){return e.name===$.Yandex},de=function(e){var n=e.name;return n===$.Safari||n===$.MobileSafari},be=function(e){return e.name===$.MobileSafari},fe=function(e){return e.name===$.Opera},pe=function(e){var n=e.name;return n===$.InternetExplorer||n===$.Ie},me=function(e){return e.name===$.MIUI},we=function(e){return e.name===$.SamsungBrowser},ve=function(e){var n=e.version;return R(n)},he=function(e){var n=e.major;return R(n)},ge=function(e){var n=e.name;return R(n)},xe=function(e){var n=e.name;return R(n)},ye=function(e){var n=e.version;return R(n)},Ee=function(){var e=B(),n=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof n&&/electron/.test(n)},Oe=function(e){return"string"===typeof e&&-1!==e.indexOf("Edg/")},ke=function(){var e=B();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},je=function(){return z("iPad")},Se=function(){return z("iPhone")},Ce=function(){return z("iPod")},Pe=function(e){return R(e)};function Ne(e){var n=e||w,i=n.device,t=n.browser,r=n.os,o=n.engine,a=n.ua;return{isSmartTV:K(i),isConsole:H(i),isWearable:L(i),isEmbedded:Y(i),isMobileSafari:be(t)||je(),isChromium:ue(t),isMobile:D(i)||je(),isMobileOnly:W(i),isTablet:V(i)||je(),isBrowser:F(i),isDesktop:F(i),isAndroid:J(r),isWinPhone:ie(r),isIOS:te(r)||je(),isChrome:ae(t),isFirefox:se(t),isSafari:de(t),isOpera:fe(t),isIE:pe(t),osVersion:re(r),osName:oe(r),fullBrowserVersion:ve(t),browserVersion:he(t),browserName:ge(t),mobileVendor:G(i),mobileModel:X(i),engineName:xe(o),engineVersion:ye(o),getUA:Pe(a),isEdge:le(t)||Oe(a),isYandex:ce(t),deviceType:Q(i),isIOS13:ke(),isIPad13:je(),isIPhone13:Se(),isIPod13:Ce(),isElectron:Ee(),isEdgeChromium:Oe(a),isLegacyEdge:le(t)&&!Oe(a),isWindows:ee(r),isMacOs:ne(r),isMIUI:me(t),isSamsungBrowser:we(t)}}var Ae=K(c),Te=H(c),_e=L(c),Ie=Y(c),Ze=be(u)||je(),$e=ue(u),Ue=D(c)||je(),Me=W(c),Re=V(c)||je(),Be=F(c),ze=F(c),qe=J(b),We=ie(b),Ve=te(b)||je(),De=ae(u),Ke=se(u),Fe=de(u),Le=fe(u),He=pe(u),Ye=re(b),Ge=oe(b),Xe=ve(u),Qe=he(u),Je=ge(u),en=G(c),nn=X(c),tn=xe(d),rn=ye(d),on=Pe(f),an=le(u)||Oe(f),sn=ce(u),un=Q(c),ln=ke(),cn=je(),dn=Se(),bn=Ce(),fn=Ee(),pn=Oe(f),mn=le(u)&&!Oe(f),wn=ee(b),vn=ne(b),hn=me(u),gn=we(u);function xn(e){var n=e||window.navigator.userAgent;return m(n)}n.BF=Ge},23451:function(e,n,i){var t;!function(r,o){"use strict";var a="function",s="undefined",u="object",l="string",c="model",d="name",b="type",f="vendor",p="version",m="architecture",w="console",v="mobile",h="tablet",g="smarttv",x="wearable",y="embedded",E="Amazon",O="Apple",k="ASUS",j="BlackBerry",S="Firefox",C="Google",P="Huawei",N="LG",A="Microsoft",T="Motorola",_="Opera",I="Samsung",Z="Sony",$="Xiaomi",U="Zebra",M="Facebook",R=function(e){for(var n={},i=0;i<e.length;i++)n[e[i].toUpperCase()]=e[i];return n},B=function(e,n){return typeof e===l&&-1!==z(n).indexOf(z(e))},z=function(e){return e.toLowerCase()},q=function(e,n){if(typeof e===l)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof n===s?e:e.substring(0,255)},W=function(e,n){for(var i,t,r,s,l,c,d=0;d<n.length&&!l;){var b=n[d],f=n[d+1];for(i=t=0;i<b.length&&!l;)if(l=b[i++].exec(e))for(r=0;r<f.length;r++)c=l[++t],typeof(s=f[r])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):o:this[s[0]]=c?s[1].call(this,c,s[2]):o:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):o):this[s]=c||o;d+=2}},V=function(e,n){for(var i in n)if(typeof n[i]===u&&n[i].length>0){for(var t=0;t<n[i].length;t++)if(B(n[i][t],e))return"?"===i?o:i}else if(B(n[i],e))return"?"===i?o:i;return e},D={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,p],[/opios[\/ ]+([\w\.]+)/i],[p,[d,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[p,[d,_]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[d,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[p,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[p,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure Browser"],p],[/\bfocus\/([\w\.]+)/i],[p,[d,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[p,[d,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[d,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[d,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[p,[d,S]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 Browser"],p],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,M],p],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[d,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,"Chrome WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[d,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,p],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[p,[d,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[p,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[p,V,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[d,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[d,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,z]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",z]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[f,I],[b,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[f,I],[b,v]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[f,O],[b,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[f,O],[b,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[f,P],[b,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[f,P],[b,v]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[f,$],[b,v]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[f,$],[b,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[f,"OPPO"],[b,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[f,"Vivo"],[b,v]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[f,"Realme"],[b,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[f,T],[b,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[f,T],[b,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[f,N],[b,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[f,N],[b,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[f,"Lenovo"],[b,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[f,"Nokia"],[b,v]],[/(pixel c)\b/i],[c,[f,C],[b,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[f,C],[b,v]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[f,Z],[b,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[f,Z],[b,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[f,"OnePlus"],[b,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[f,E],[b,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[f,E],[b,v]],[/(playbook);[-\w\),; ]+(rim)/i],[c,f,[b,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[f,j],[b,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[f,k],[b,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[f,k],[b,v]],[/(nexus 9)/i],[c,[f,"HTC"],[b,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[f,[c,/_/g," "],[b,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[f,"Acer"],[b,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[f,"Meizu"],[b,v]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[f,"Sharp"],[b,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,c,[b,v]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,c,[b,h]],[/(surface duo)/i],[c,[f,A],[b,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[f,"Fairphone"],[b,v]],[/(u304aa)/i],[c,[f,"AT&T"],[b,v]],[/\bsie-(\w*)/i],[c,[f,"Siemens"],[b,v]],[/\b(rct\w+) b/i],[c,[f,"RCA"],[b,h]],[/\b(venue[\d ]{2,7}) b/i],[c,[f,"Dell"],[b,h]],[/\b(q(?:mv|ta)\w+) b/i],[c,[f,"Verizon"],[b,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[f,"Barnes & Noble"],[b,h]],[/\b(tm\d{3}\w+) b/i],[c,[f,"NuVision"],[b,h]],[/\b(k88) b/i],[c,[f,"ZTE"],[b,h]],[/\b(nx\d{3}j) b/i],[c,[f,"ZTE"],[b,v]],[/\b(gen\d{3}) b.+49h/i],[c,[f,"Swiss"],[b,v]],[/\b(zur\d{3}) b/i],[c,[f,"Swiss"],[b,h]],[/\b((zeki)?tb.*\b) b/i],[c,[f,"Zeki"],[b,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],c,[b,h]],[/\b(ns-?\w{0,9}) b/i],[c,[f,"Insignia"],[b,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[f,"NextBook"],[b,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],c,[b,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],c,[b,v]],[/\b(ph-1) /i],[c,[f,"Essential"],[b,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[f,"Envizen"],[b,h]],[/\b(trio[-\w\. ]+) b/i],[c,[f,"MachSpeed"],[b,h]],[/\btu_(1491) b/i],[c,[f,"Rotor"],[b,h]],[/(shield[\w ]+) b/i],[c,[f,"Nvidia"],[b,h]],[/(sprint) (\w+)/i],[f,c,[b,v]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[f,A],[b,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[f,U],[b,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[f,U],[b,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,c,[b,w]],[/droid.+; (shield) bui/i],[c,[f,"Nvidia"],[b,w]],[/(playstation [345portablevi]+)/i],[c,[f,Z],[b,w]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[f,A],[b,w]],[/smart-tv.+(samsung)/i],[f,[b,g]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[f,I],[b,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,N],[b,g]],[/(apple) ?tv/i],[f,[c,"Apple TV"],[b,g]],[/crkey/i],[[c,"Chromecast"],[f,C],[b,g]],[/droid.+aft(\w)( bui|\))/i],[c,[f,E],[b,g]],[/\(dtv[\);].+(aquos)/i],[c,[f,"Sharp"],[b,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[f,q],[c,q],[b,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,g]],[/((pebble))app/i],[f,c,[b,x]],[/droid.+; (glass) \d/i],[c,[f,C],[b,x]],[/droid.+; (wt63?0{2,3})\)/i],[c,[f,U],[b,x]],[/(quest( 2)?)/i],[c,[f,M],[b,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[b,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[b,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[b,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,h]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[b,v]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[d,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[p,V,D]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[p,V,D]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,"Mac OS"],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[p,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,p],[/\(bb(10);/i],[p,[d,j]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[d,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[d,"webOS"]],[/crkey\/([\d\.]+)/i],[p,[d,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[d,"Chromium OS"],p],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,p],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[d,p]]},F=function(e,n){if(typeof e===u&&(n=e,e=o),!(this instanceof F))return new F(e,n).getResult();var i=e||(typeof r!==s&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),t=n?function(e,n){var i={};for(var t in e)n[t]&&n[t].length%2===0?i[t]=n[t].concat(e[t]):i[t]=e[t];return i}(K,n):K;return this.getBrowser=function(){var e,n={};return n.name=o,n.version=o,W.call(n,i,t.browser),n.major=typeof(e=n.version)===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,n},this.getCPU=function(){var e={};return e.architecture=o,W.call(e,i,t.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,W.call(e,i,t.device),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,W.call(e,i,t.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,W.call(e,i,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===l&&e.length>255?q(e,255):e,this},this.setUA(i),this};F.VERSION="1.0.2",F.BROWSER=R([d,p,"major"]),F.CPU=R([m]),F.DEVICE=R([c,f,b,w,v,g,h,x,y]),F.ENGINE=F.OS=R([d,p]),typeof n!==s?(e.exports&&(n=e.exports=F),n.UAParser=F):i.amdO?(t=function(){return F}.call(n,i,n,e))===o||(e.exports=t):typeof r!==s&&(r.UAParser=F);var L=typeof r!==s&&(r.jQuery||r.Zepto);if(L&&!L.ua){var H=new F;L.ua=H.getResult(),L.ua.get=function(){return H.getUA()},L.ua.set=function(e){H.setUA(e);var n=H.getResult();for(var i in n)L.ua[i]=n[i]}}}("object"===typeof window?window:this)}}]);