(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{6310:function(e,a,t){"use strict";t.d(a,{Z:function(){return u},W:function(){return x}});var s=t(7294),n=t(6626),i=t(7126);var l=function({children:e,in:a,mountOnEnter:t,unmountOnExit:n}){const i=(0,s.useRef)(a);return(0,s.useEffect)((()=>{a&&(i.current=!0)}),[a]),a?e:n||!i.current&&t?null:e},r=t(5893);const d=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],o=["activeKey","getControlledId","getControllerId"],c=["as"];function h(e,a){if(null==e)return{};var t,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}function x(e){let{active:a,eventKey:t,mountOnEnter:l,transition:r,unmountOnExit:c,role:x="tabpanel",onEnter:m,onEntering:u,onEntered:w,onExit:j,onExiting:p,onExited:g}=e,v=h(e,d);const f=(0,s.useContext)(n.Z);if(!f)return[Object.assign({},v,{role:x}),{eventKey:t,isActive:a,mountOnEnter:l,transition:r,unmountOnExit:c,onEnter:m,onEntering:u,onEntered:w,onExit:j,onExiting:p,onExited:g}];const{activeKey:b,getControlledId:k,getControllerId:N}=f,y=h(f,o),E=(0,i.h)(t);return[Object.assign({},v,{role:x,id:k(t),"aria-labelledby":N(t)}),{eventKey:t,isActive:null==a&&null!=E?(0,i.h)(b)===E:a,transition:r||y.transition,mountOnEnter:null!=l?l:y.mountOnEnter,unmountOnExit:null!=c?c:y.unmountOnExit,onEnter:m,onEntering:u,onEntered:w,onExit:j,onExiting:p,onExited:g}]}const m=s.forwardRef(((e,a)=>{let{as:t="div"}=e,s=h(e,c);const[d,{isActive:o,onEnter:m,onEntering:u,onEntered:w,onExit:j,onExiting:p,onExited:g,mountOnEnter:v,unmountOnExit:f,transition:b=l}]=x(s);return(0,r.jsx)(n.Z.Provider,{value:null,children:(0,r.jsx)(i.Z.Provider,{value:null,children:(0,r.jsx)(b,{in:o,onEnter:m,onEntering:u,onEntered:w,onExit:j,onExiting:p,onExited:g,mountOnEnter:v,unmountOnExit:f,children:(0,r.jsx)(t,Object.assign({},d,{ref:a,hidden:!o,"aria-hidden":!o}))})})})}));m.displayName="TabPanel";var u=m},3916:function(e,a,t){"use strict";var s=t(7294),n=t(5446),i=t(8831),l=t(6626),r=t(7126),d=t(6310),o=t(5893);const c=e=>{const{id:a,generateChildId:t,onSelect:d,activeKey:c,defaultActiveKey:h,transition:x,mountOnEnter:m,unmountOnExit:u,children:w}=e,[j,p]=(0,n.$c)(c,h,d),g=(0,i.gP)(a),v=(0,s.useMemo)((()=>t||((e,a)=>g?`${g}-${a}-${e}`:null)),[g,t]),f=(0,s.useMemo)((()=>({onSelect:p,activeKey:j,transition:x,mountOnEnter:m||!1,unmountOnExit:u||!1,getControlledId:e=>v(e,"tabpane"),getControllerId:e=>v(e,"tab")})),[p,j,x,m,u,v]);return(0,o.jsx)(l.Z.Provider,{value:f,children:(0,o.jsx)(r.Z.Provider,{value:p||null,children:w})})};c.Panel=d.Z,a.Z=c},3614:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/downloads",function(){return t(6105)}])},6105:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return R}});var s=t(5893),n=t(7294),i=t(4184),l=t.n(i),r=t(5446),d=t(8146),o=t(3551),c=t(6792),h=t(1068),x=t(1485),m=t(9602),u=t(6611);const w=(0,m.Z)("h4");w.displayName="DivStyledAsH4";const j=(0,u.Z)("alert-heading",{Component:w}),p=(0,u.Z)("alert-link",{Component:o.Z}),g={variant:"primary",show:!0,transition:h.Z,closeLabel:"Close alert"},v=n.forwardRef(((e,a)=>{const{bsPrefix:t,show:n,closeLabel:i,closeVariant:o,className:m,children:u,variant:w,onClose:j,dismissible:p,transition:g,...v}=(0,r.Ch)(e,{show:"onClose"}),f=(0,c.vE)(t,"alert"),b=(0,d.Z)((e=>{j&&j(!1,e)})),k=!0===g?h.Z:g,N=(0,s.jsxs)("div",{role:"alert",...k?void 0:v,ref:a,className:l()(m,f,w&&`${f}-${w}`,p&&`${f}-dismissible`),children:[p&&(0,s.jsx)(x.Z,{onClick:b,"aria-label":i,variant:o}),u]});return k?(0,s.jsx)(k,{unmountOnExit:!0,...v,ref:void 0,in:n,children:N}):n?N:null}));v.displayName="Alert",v.defaultProps=g;var f=Object.assign(v,{Link:p,Heading:j}),b=t(1555),k=t(1608),N=t(5509),y=t(3192),E=t(5398),O=t(1664),Z=t(9008),S=(t(4298),t(5152)),C=t(478),_=t(682),D=t(4564);function L(e){var a=e.children,n=(0,S.default)((function(){return Promise.all([t.e(154),t.e(689)]).then(t.bind(t,294))}),{loadableGenerated:{webpack:function(){return[294]}},ssr:!1});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Z.default,{children:[(0,s.jsx)("title",{children:"Ballerina downloads"}),(0,s.jsx)("meta",{name:"description",content:"Download the Ballerina programming language for Windows, Linux and MacOS. You can find the release notes, plugin downloads and archived versions here too."}),(0,s.jsx)("meta",{name:"keywords",content:"ballerina, ballerina downloads, release notes, getting started, programming language"}),(0,s.jsx)("meta",{property:"og:type",content:"article"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"Ballerina - Ballerina downloads"}),(0,s.jsx)("meta",{property:"og:description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."}),(0,s.jsx)("meta",{property:"og:title",content:"Ballerina"}),(0,s.jsx)("meta",{property:"og:description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."}),(0,s.jsx)("meta",{name:"twitter:description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."}),(0,s.jsx)("meta",{name:"twitter:text:description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."}),(0,s.jsx)("script",{type:"text/javascript",async:"",src:"https://www.google-analytics.com/analytics.js"}),(0,s.jsx)("script",{async:"",src:"https://www.googletagmanager.com/gtm.js?id=GTM-PSL2TX4"}),(0,s.jsx)("script",{async:"",src:"https://www.googletagmanager.com/gtag/js?id=UA-92163714-2"}),(0,s.jsx)("script",{async:!0,src:"/jquery/jquery.min.js"}),(0,s.jsx)("script",{async:!0,src:"/shiki/shiki.js"})]}),(0,s.jsxs)(C.Z,{gap:0,className:"main-wrapper downloads",children:[(0,s.jsx)(n,{launcher:"downloads"}),(0,s.jsx)(_.Z,{className:"wrap-page-content",fluid:!0,children:(0,s.jsx)(k.Z,{children:a})}),(0,s.jsx)(D.Z,{})]})]})}var I=t(5640);function T(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,s=new Array(a);t<a;t++)s[t]=e[t];return s}function A(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var s,n,i=[],l=!0,r=!1;try{for(t=t.call(e);!(l=(s=t.next()).done)&&(i.push(s.value),!a||i.length!==a);l=!0);}catch(d){r=!0,n=d}finally{try{l||null==t.return||t.return()}finally{if(r)throw n}}return i}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return T(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(){var e=A(n.useState("Windows"),2),a=e[0],i=e[1],l=A(n.useState("Windows"),2),r=l[0],d=l[1];return n.useEffect((function(){var e=t.g.navigator.platform;e.indexOf("Linux")>-1&&(i("Linux"),d("Linux")),e.indexOf("Mac")>-1&&(i("Mac"),d("Mac"))})),(0,s.jsx)(L,{children:(0,s.jsxs)(b.Z,{sm:12,children:[(0,s.jsx)(k.Z,{className:"cDownloadsHeader pageHeader pageContentRow",children:(0,s.jsx)(b.Z,{xs:12,children:(0,s.jsx)("h1",{children:"Downloads"})})}),(0,s.jsx)(k.Z,{className:"donwloadVersion pageContentRow",children:(0,s.jsx)(b.Z,{xs:12,children:(0,s.jsx)("h2",{id:"swanlake",children:(0,s.jsx)("span",{children:"2201.0.3 (Swan Lake)"})})})}),(0,s.jsxs)(k.Z,{className:"downloadDetails pageContentRow",children:[(0,s.jsx)(b.Z,{xs:12,sm:8,className:"donwloadInstructions",children:(0,s.jsxs)(f,{variant:"light",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"If you are already using Ballerina 2201.0.0 (Swan Lake)"}),", run either of the commands below to directly update to swanlake 22.xxxx using the ",(0,s.jsx)("a",{href:"".concat(I.O,"/learn/tooling-guide/cli-tools/update-tool/"),children:"Ballerina Update Tool."})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("code",{className:"highlighter-rouge language-plaintext",children:"bal dist update"})," (or ",(0,s.jsx)("code",{className:"highlighter-rouge language-plaintext",children:"bal dist pull swanlake 22.xx)"})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"If you are using a version below 2201.0.0 (Swan Lake)"}),", run the commands below to update to swanlake 22.xx."]}),(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"Run bal update to get the latest version of the update tool."}),(0,s.jsx)("li",{children:"Run bal dist update (or bal dist pull 2201.0.3) to update your Ballerina version to 2201.0.3 (Swan Lake)."})]}),(0,s.jsxs)("p",{children:["However, if you are using a version below 2201.0.0 (Swan Lake) and if you already ran ",(0,s.jsx)("code",{className:"highlighter-rouge language-plaintext",children:"bal dist update"})," (or ",(0,s.jsx)("code",{className:"highlighter-rouge language-plaintext",children:"bal dist pull swanlake 22.xxx)"})," before ",(0,s.jsx)("code",{className:"highlighter-rouge language-plaintext",children:"bal update"}),", see ",(0,s.jsx)(O.default,{href:"".concat(I.O,"/downloads/swan-lake-release-notes/2201-0-0-swan-lake/#troubleshooting"),children:"Troubleshooting"})," to recover your installation."]})]})}),(0,s.jsxs)(b.Z,{xs:12,sm:4,className:"downloads-tabs",children:[(0,s.jsxs)(N.Z,{id:"swan-lake-releases",activeKey:a,onSelect:function(e){return setKey(e)},className:"mb-3",children:[(0,s.jsxs)(y.Z,{eventKey:"windows",title:"Windows",children:[(0,s.jsx)("a",{id:"packWindows",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}",className:"cGTMDownload cDownload cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.windows-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["msi ",(0,s.jsx)("span",{id:"packWindowsName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packWindowsMd5",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packWindowsSha1",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packWindowsAsc",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.asc",children:"asc"})})]})]}),(0,s.jsx)(y.Z,{eventKey:"Linux",title:"Linux",children:(0,s.jsxs)("div",{className:"dVersions",children:[(0,s.jsxs)("div",{className:"dVersion",children:[(0,s.jsx)("a",{id:"packLinux",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}",className:"cGTMDownload cDownload cLinuxPKGs cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.linux-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["deb ",(0,s.jsx)("span",{id:"packLinuxName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packLinuxMd5",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packLinuxSha1",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packLinuxAsc",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.asc",children:"asc"})})]})]}),(0,s.jsxs)("div",{className:"dVersion",children:[(0,s.jsx)("a",{id:"packLinux",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}",className:"cGTMDownload cDownload cLinuxPKGs cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.rpm-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["rpm ",(0,s.jsx)("span",{id:"packLinuxName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packLinuxMd5",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packLinuxSha1",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packLinuxAsc",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.asc",children:"asc"})})]})]})]})}),(0,s.jsxs)(y.Z,{eventKey:"Mac",title:"macOS",children:[(0,s.jsx)("a",{id:"packMac",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}",className:"cGTMDownload cDownload cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.macos-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["pkg ",(0,s.jsx)("span",{id:"packWindowsName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packMacMd5",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packMacSha1",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{id:"packMacAsc",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.asc",children:"asc"})})]})]})]}),(0,s.jsxs)("div",{className:"releaseLinks",children:[(0,s.jsx)("div",{className:"cReleaseNotes",children:(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"".concat(I.O,"/downloads/swan-lake-release-notes/"),children:"RELEASE NOTES >"})})}),(0,s.jsx)("div",{className:"cReleaseNotes",children:(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"".concat(I.O,"/downloads/swan-lake-archived"),children:"ARCHIVED VERSIONS >"})})})]})]})]}),(0,s.jsx)(k.Z,{className:"downloadsContent pageContentRow",children:(0,s.jsxs)(b.Z,{xs:12,children:[(0,s.jsxs)("p",{className:"line-numbers",children:["To ",(0,s.jsx)("a",{href:"".concat(I.O,"/learn/installing-ballerina/installation-options/#verifying-the-installation"),children:"verify that Ballerina was successfully installed"}),", execute the ",(0,s.jsxs)("code",{className:"highlighter-rouge language-plaintext",children:["bal version",(0,s.jsx)("span",{"aria-hidden":"true",className:"line-numbers-rows",children:(0,s.jsx)("span",{})})]})," command in the Terminal/Shell. For more information on installing Ballerina, see ",(0,s.jsx)("a",{href:"".concat(I.O,"/learn/installing-ballerina/installation-options/"),children:"Installation options"}),"."]}),(0,s.jsx)("p",{children:"Next, install the Ballerina Visual Studio Code extension."})]})}),(0,s.jsx)(k.Z,{className:"downloadsVSCode pageContentRow",children:(0,s.jsxs)(b.Z,{xs:12,sm:12,md:4,lg:4,children:[(0,s.jsx)("h3",{className:"cVSCode",children:"Visual Studio Code"}),(0,s.jsx)("a",{id:"packWindows",href:"https://marketplace.visualstudio.com/items?itemName=wso2.ballerina",className:"cGTMDownload cDownload cDownloadNew","data-download":"downloads",target:"_blank",rel:"noreferrer",children:(0,s.jsxs)("div",{className:"cSize",children:["Ballerina Extension",(0,s.jsx)("span",{id:"packWindowsName"})]})}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["Now, you are all set to ",(0,s.jsx)("a",{href:"".concat(I.O,"/learn/getting-started-with-ballerina/"),children:"get started with Ballerina."})]})]})}),(0,s.jsx)(k.Z,{className:"downloadsOther pageContentRow",children:(0,s.jsx)(b.Z,{xs:12,sm:12,md:6,lg:6,children:(0,s.jsxs)("div",{className:"cInstallers",children:[(0,s.jsx)("h3",{children:"Other installation options"}),(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("table",{id:"insPackages0",children:[(0,s.jsx)("tr",{children:" "}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:["Install via Homebrew (for macOS)",(0,s.jsx)("a",{href:"".concat(I.O,"/learn/installing-ballerina/installation-options/#installing-on-macos"),className:"cDownloadLinkIcon",children:(0,s.jsx)(E.Z,{src:"".concat(I.O,"/images/right-bg-green-fill.svg"),width:13,height:13,alt:"Install via Homebrew (for macOS)"})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:["Install via the ZIP archive",(0,s.jsx)("a",{href:"".concat(I.O,"/learn/installing-ballerina/installation-options/#installing-via-the-ballerina-language-zip-file"),className:"cDownloadLinkIcon",children:(0,s.jsx)(E.Z,{src:"".concat(I.O,"/images/right-bg-green-fill.svg"),width:13,height:13,alt:"Install via the ZIP archive"})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:["Install from source",(0,s.jsx)("a",{href:"".concat(I.O,"/learn/installing-ballerina/installation-options/#building-from-source"),className:"cDownloadLinkIcon",children:(0,s.jsx)(E.Z,{src:"".concat(I.O,"/images/right-bg-green-fill.svg"),width:13,height:13,alt:"Install from source"})})]})})]})})]})})}),(0,s.jsx)(k.Z,{className:"donwloadVersion pageContentRow",children:(0,s.jsx)(b.Z,{xs:12,children:(0,s.jsx)("h2",{id:"swanlake",children:(0,s.jsx)("span",{children:"1.2.29"})})})}),(0,s.jsxs)(k.Z,{className:"downloadDetails pageContentRow",children:[(0,s.jsx)(b.Z,{xs:12,sm:8,className:"donwloadInstructions",children:(0,s.jsxs)(f,{variant:"light",children:[(0,s.jsxs)("p",{children:[" If you already have jBallerina version 1.2.0 or above installed, you can use the",(0,s.jsx)("a",{href:"".concat(I.O,"/1.2/learn/keeping-ballerina-up-to-date/"),children:"Ballerina update tool"})," to directly update to 1.2x. To do this, first, execute the command below to get the update tool updated to its latest version."]}),(0,s.jsx)("code",{className:"highlighter-rouge language-plaintext",children:"ballerina update"}),(0,s.jsx)("p",{children:"Next, execute the command below to update to jBallerina 1.2x."}),(0,s.jsx)("code",{className:"highlighter-rouge language-plaintext",children:"bal dist update"}),(0,s.jsxs)("p",{children:["For further details, see the ",(0,s.jsx)("a",{href:"".concat(I.O,"/downloads/1.2.x-release-notes/"),children:"Release Note"}),"."]})]})}),(0,s.jsxs)(b.Z,{xs:12,sm:4,className:"downloads-tabs",children:[(0,s.jsxs)(N.Z,{id:"1.2x-releases",activeKey:r,onSelect:function(e){return setKey(e)},className:"mb-3",children:[(0,s.jsxs)(y.Z,{eventKey:"windows",title:"Windows",children:[(0,s.jsx)("a",{id:"packWindows",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}",className:"cGTMDownload cDownload cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.windows-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["msi ",(0,s.jsx)("span",{id:"packWindowsName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.windows-installer }}.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.windows-installer }}.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.windows-installer }}.asc",children:"asc"})})]})]}),(0,s.jsx)(y.Z,{eventKey:"Linux",title:"Linux",children:(0,s.jsxs)("div",{className:"dVersions",children:[(0,s.jsxs)("div",{className:"dVersion",children:[(0,s.jsx)("a",{id:"packLinux",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}",className:"cGTMDownload cDownload cLinuxPKGs cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.linux-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["deb ",(0,s.jsx)("span",{id:"packLinuxName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.linux-installer }}.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.linux-installer }}.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.linux-installer }}.asc",children:"asc"})})]})]}),(0,s.jsxs)("div",{className:"dVersion",children:[(0,s.jsx)("a",{id:"packLinux",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}",className:"cGTMDownload cDownload cLinuxPKGs cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.rpm-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["rpm ",(0,s.jsx)("span",{id:"packLinuxName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/ballerina-linux-installer-x64-{{ site.data.stable-latest.metadata.version }}.rpm.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/ballerina-linux-installer-x64-{{ site.data.stable-latest.metadata.version }}.rpm.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/ballerina-linux-installer-x64-{{ site.data.stable-latest.metadata.version }}.rpm.asc",children:"asc"})})]})]})]})}),(0,s.jsxs)(y.Z,{eventKey:"Mac",title:"macOS",children:[(0,s.jsx)("a",{id:"packMac",href:"{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}",className:"cGTMDownload cDownload cDownloadNew","data-download":"downloads","data-pack":"{{ site.data.swanlake-latest.metadata.macos-installer }}",children:(0,s.jsxs)("div",{className:"cSize",children:["pkg ",(0,s.jsx)("span",{id:"packWindowsName",children:"154mb"})]})}),(0,s.jsxs)("ul",{className:"cDiwnloadSubLinks",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.macos-installer }}.md5",children:"md5"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.macos-installer }}.sha1",children:"SHA-1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.macos-installer }}.asc",children:"asc"})})]})]})]}),(0,s.jsxs)("div",{className:"releaseLinks pageContentRow",children:[(0,s.jsx)("div",{className:"cReleaseNotes",children:(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"".concat(I.O,"/downloads/1.2.x-release-notes"),children:"RELEASE NOTES >"})})}),(0,s.jsx)("div",{className:"cReleaseNotes",children:(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"".concat(I.O,"/downloads/1.2.x-archived"),children:"ARCHIVED VERSIONS >"})})})]})]})]}),(0,s.jsx)(k.Z,{className:"downloadsVSCode pageContentRow",children:(0,s.jsxs)(b.Z,{xs:12,sm:12,md:4,lg:4,children:[(0,s.jsx)("h3",{className:"cVSCode",children:"Visual Studio Code"}),(0,s.jsx)("a",{id:"packWindows",href:"https://github.com/wso2/ballerina-plugin-vscode/releases/tag/v2.1.1",className:"cGTMDownload cDownload cDownloadNew","data-download":"downloads",target:"_blank",rel:"noreferrer",children:(0,s.jsxs)("div",{className:"cSize",children:["Ballerina Extension",(0,s.jsx)("span",{id:"packWindowsName"})]})})]})}),(0,s.jsx)(k.Z,{className:"downloadsOther pageContentRow",children:(0,s.jsx)(b.Z,{xs:12,sm:12,md:6,lg:6,children:(0,s.jsxs)("div",{className:"cInstallers",children:[(0,s.jsx)("h3",{children:"Other installation options"}),(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("table",{id:"insPackages0",children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:["Install via the ZIP archive",(0,s.jsx)("a",{href:"".concat(I.O,"/1.2/learn/installing-ballerina/#installing-via-the-ballerina-language-zip-file"),className:"cDownloadLinkIcon",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(E.Z,{src:"".concat(I.O,"/images/right-bg-green-fill.svg"),width:13,height:13,alt:"Install via the ZIP archive"})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:["Install from source",(0,s.jsx)("a",{href:"".concat(I.O,"/1.2/learn/installing-ballerina/#building-from-source"),className:"cDownloadLinkIcon",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(E.Z,{src:"".concat(I.O,"/images/right-bg-green-fill.svg"),width:13,height:13,alt:"Install from source"})})]})})]})})]})})}),(0,s.jsx)(k.Z,{className:"downloadsContent pageContentRow",children:(0,s.jsx)(b.Z,{xs:12,children:(0,s.jsxs)("p",{children:["To download the VSCode and IntelliJ Ballerina extensions, see ",(0,s.jsx)("a",{href:"".concat(I.O,"/1.2/learn/setting-up-visual-studio-code/"),children:"Setting up Visual Studio Code"})," and",(0,s.jsx)("a",{href:"".concat(I.O,"/1.2/learn/setting-up-intellij-idea/"),children:"Setting up IntelliJ IDEA"}),", and for installation instructions, see",(0,s.jsx)("a",{href:"".concat(I.O,"/1.2/learn/installing-ballerina/"),children:"Installing Ballerina"}),"."]})})})]})})}},2703:function(e,a,t){"use strict";var s=t(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,l){if(l!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},5697:function(e,a,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1485:function(e,a,t){"use strict";var s=t(5697),n=t.n(s),i=t(7294),l=t(4184),r=t.n(l),d=t(5893);const o={"aria-label":n().string,onClick:n().func,variant:n().oneOf(["white"])},c=i.forwardRef((({className:e,variant:a,...t},s)=>(0,d.jsx)("button",{ref:s,type:"button",className:r()("btn-close",a&&`btn-close-${a}`,e),...t})));c.displayName="CloseButton",c.propTypes=o,c.defaultProps={"aria-label":"Close"},a.Z=c},3192:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var s=t(5697),n=t.n(s),i=(t(7294),t(3916)),l=t(6101),r=t(5893);const d=({transition:e,...a})=>(0,r.jsx)(i.Z,{...a,transition:(0,l.Z)(e)});d.displayName="TabContainer";var o=d,c=t(8752),h=t(5103);const x={eventKey:n().oneOfType([n().string,n().number]),title:n().node.isRequired,disabled:n().bool,tabClassName:n().string,tabAttrs:n().object},m=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=x;var u=Object.assign(m,{Container:o,Content:c.Z,Pane:h.Z})},8752:function(e,a,t){"use strict";var s=t(6611);a.Z=(0,s.Z)("tab-content")},5103:function(e,a,t){"use strict";var s=t(4184),n=t.n(s),i=t(7294),l=t(7126),r=t(6626),d=t(6310),o=t(6792),c=t(1068),h=t(6101),x=t(5893);const m=i.forwardRef((({bsPrefix:e,transition:a,...t},s)=>{const[{className:i,as:m="div",...u},{isActive:w,onEnter:j,onEntering:p,onEntered:g,onExit:v,onExiting:f,onExited:b,mountOnEnter:k,unmountOnExit:N,transition:y=c.Z}]=(0,d.W)({...t,transition:(0,h.Z)(a)}),E=(0,o.vE)(e,"tab-pane");return(0,x.jsx)(r.Z.Provider,{value:null,children:(0,x.jsx)(l.Z.Provider,{value:null,children:(0,x.jsx)(y,{in:w,onEnter:j,onEntering:p,onEntered:g,onExit:v,onExiting:f,onExited:b,mountOnEnter:k,unmountOnExit:N,children:(0,x.jsx)(m,{...u,ref:s,className:n()(i,E,w&&"active")})})})})}));m.displayName="TabPane",a.Z=m},5509:function(e,a,t){"use strict";t(7294);var s=t(5446),n=t(3916),i=t(6122),l=t(4691),r=t(1244),d=t(8752),o=t(5103),c=t(3439),h=t(6101),x=t(5893);function m(e){let a;return(0,c.Ed)(e,(e=>{null==a&&(a=e.props.eventKey)})),a}function u(e){const{title:a,eventKey:t,disabled:s,tabClassName:n,tabAttrs:i,id:d}=e.props;return null==a?null:(0,x.jsx)(r.Z,{as:"li",role:"presentation",children:(0,x.jsx)(l.Z,{as:"button",type:"button",eventKey:t,disabled:s,id:d,className:n,...i,children:a})})}const w=e=>{const{id:a,onSelect:t,transition:l,mountOnEnter:r,unmountOnExit:w,children:j,activeKey:p=m(j),...g}=(0,s.Ch)(e,{activeKey:"onSelect"});return(0,x.jsxs)(n.Z,{id:a,activeKey:p,onSelect:t,transition:(0,h.Z)(l),mountOnEnter:r,unmountOnExit:w,children:[(0,x.jsx)(i.Z,{...g,role:"tablist",as:"ul",children:(0,c.UI)(j,u)}),(0,x.jsx)(d.Z,{children:(0,c.UI)(j,(e=>{const a={...e.props};return delete a.title,delete a.disabled,delete a.tabClassName,delete a.tabAttrs,(0,x.jsx)(o.Z,{...a})}))})]})};w.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},w.displayName="Tabs",a.Z=w},9602:function(e,a,t){"use strict";var s=t(7294),n=t(4184),i=t.n(n),l=t(5893);a.Z=e=>s.forwardRef(((a,t)=>(0,l.jsx)("div",{...a,ref:t,className:i()(a.className,e)})))},6101:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var s=t(1068);function n(e){return"boolean"===typeof e?e?s.Z:void 0:e}}},function(e){e.O(0,[410,876,101,758,774,888,179],(function(){return a=3614,e(e.s=a);var a}));var a=e.O();_N_E=a}]);