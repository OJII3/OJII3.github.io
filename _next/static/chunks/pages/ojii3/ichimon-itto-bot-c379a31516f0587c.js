(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{1992:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ojii3/ichimon-itto-bot",function(){return t(2506)}])},4103:function(e,s,t){"use strict";var r=t(5893),i=t(7294),n=t(1664),a=t.n(n),c=t(5005);let l=()=>{let[e,s]=(0,i.useState)(!0),t=(0,r.jsx)("div",{style:{position:"relative"},hidden:e,children:(0,r.jsx)(a(),{href:"",style:{position:"fixed",bottom:"25px",right:"25px"},children:(0,r.jsx)(c.Z,{variant:"secondary",className:"py-4 px-lg-4",children:"TOP ↑"})})});return(0,i.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>400?s(!1):s(!0)})}),t};s.Z=l},3447:function(e,s,t){"use strict";var r=t(5893),i=t(682),n=t(4051),a=t(1555);let c=()=>(0,r.jsx)("footer",{children:(0,r.jsx)(i.Z,{fluid:!0,className:"py-5",children:(0,r.jsx)(n.Z,{className:"py-5 mx-lg-5",style:{borderTop:"solid 1px #ccc"},children:(0,r.jsx)(a.Z,{className:"text-center",children:"\xa9OJII3"})})})});s.Z=c},8374:function(e,s,t){"use strict";var r=t(5893),i=t(1664),n=t.n(i),a=t(7054),c=t(682),l=t(1330),d=t(4862),o=t(3144),h=t(6601);let x=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{bg:"white",expand:"",children:(0,r.jsxs)(c.Z,{fluid:!0,children:[(0,r.jsxs)(a.Z.Brand,{as:n(),href:"/ojii3/home",children:[(0,r.jsx)(l.Z,{alt:"icon",src:"/selfmade-icon.jpg",width:"30",height:"30",className:"d-inline-block align-top",style:{borderRadius:"50%"}})," ","OJII3"]}),(0,r.jsx)(a.Z.Toggle,{"aria-controls":"offcanvasNavbar-expand-".concat("")}),(0,r.jsxs)(a.Z.Offcanvas,{id:"offcanvasNavbar-expand-".concat(""),"aria-labelledby":"offcanvasNavbarLabel-expand-".concat(""),placement:"end",children:[(0,r.jsx)(d.Z.Header,{closeButton:!0,children:(0,r.jsx)(d.Z.Title,{id:"offcanvasNavbarLabel-expand-".concat(""),children:"MENU"})}),(0,r.jsx)(d.Z.Body,{children:(0,r.jsxs)(o.Z,{className:"justify-content-end flex-grow-1 pe-3",children:[(0,r.jsx)(o.Z.Link,{as:n(),href:"/ojii3/home",children:"Home"}),(0,r.jsxs)(h.Z,{title:"Works",id:"offcanvasNavbarDropdown-expand-".concat(""),children:[(0,r.jsx)(h.Z.ItemText,{className:"text-info",children:"Website"}),(0,r.jsx)(h.Z.Divider,{}),(0,r.jsx)(h.Z.Item,{as:n(),href:"/ojii3/nextjs-gh-pages",children:"Next.js \xd7 GitHub Pages"}),(0,r.jsx)(h.Z.Item,{as:n(),href:"/ojii3/tetris",children:"Tetris"}),(0,r.jsx)(h.Z.ItemText,{}),(0,r.jsx)(h.Z.ItemText,{className:"text-info",children:"Chrome Extensions"}),(0,r.jsx)(h.Z.Divider,{}),(0,r.jsx)(h.Z.Item,{as:n(),href:"/ojii3/chrome-form-character-counter",children:"Form Character Counter"}),(0,r.jsx)(h.Z.ItemText,{}),(0,r.jsx)(h.Z.ItemText,{className:"text-info",children:"Bot"}),(0,r.jsx)(h.Z.Divider,{}),(0,r.jsx)(h.Z.Item,{as:n(),href:"/ojii3/ichimon-itto-bot",children:"一問一答bot"}),(0,r.jsx)(h.Z.ItemText,{})]}),(0,r.jsxs)(h.Z,{title:"Others",id:"offcanvasNavbarDropdown-expand-".concat(""),children:[(0,r.jsxs)(h.Z.Item,{as:"a",href:"https://github.com/ojii3",target:"_blank",children:[(0,r.jsx)(l.Z,{fluid:!0,width:32,alt:"github icon",src:"/GitHub.png"})," ","GitHub"]}),(0,r.jsxs)(h.Z.Item,{as:"a",href:"https://qiita.com/ojii3",target:"_blank",children:[(0,r.jsx)(l.Z,{fluid:!0,width:32,alt:"qiita icon",src:"/Qiita.png"})," ","Qiita"]})]})]})})]})]})},""),(0,r.jsx)("hr",{className:"mx-lg-3 mb-3 mt-1",style:{borderBottom:"solid 1px #ccc"}})]});s.Z=x},9561:function(e,s,t){"use strict";t.d(s,{CR:function(){return c},Gl:function(){return n},XZ:function(){return a}});var r=t(7294);class i{get ref(){return this.observe(),this.fadeUpRef}observe(){(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{this.disabled||(e.isIntersecting?(e.target.classList.add(this.className),this.disabled=!!this.disableAfter):(e.target.classList.remove(this.className),e.target.classList.add("fade-untriggered")))})},{threshold:.25});this.fadeUpRef.current&&e.observe(this.fadeUpRef.current)})}constructor(e=!0){this.className="fade-untriggered",this.disabled=!1,this.fadeUpRef=(0,r.useRef)(),this.disableAfter=e}}class n extends i{constructor(...e){super(...e),this.className="fade-up"}}class a extends i{constructor(...e){super(...e),this.className="fade-right"}}class c extends i{constructor(...e){super(...e),this.className="fade-left"}}},2506:function(e,s,t){"use strict";t.r(s);var r=t(5893),i=t(9008),n=t.n(i),a=t(682),c=t(4051),l=t(1555),d=t(8695),o=t(5005),h=t(1330),x=t(8374),f=t(3447),j=t(9561),u=t(1664),m=t.n(u),p=t(4103);s.default=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:"一問一答bot - OJII3"}),(0,r.jsx)("meta",{lang:"ja"}),(0,r.jsx)("meta",{name:"description",content:"自作LINE bot「一問一答bot」の紹介ページです。GAS(Google Apps Script)によりサーバーレスかつ無料で運用されています。"}),(0,r.jsx)("link",{rel:"icon",href:"/selfmade-icon.jpg"})]}),(0,r.jsx)(x.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(a.Z,{fluid:!0,className:"justify-content-center",children:[(0,r.jsx)(c.Z,{className:"py-5",ref:new j.Gl().ref,children:(0,r.jsxs)(l.Z,{className:"text-center",children:[(0,r.jsx)("h1",{children:"一問一答bot"}),(0,r.jsx)("b",{className:"text-secondary",children:"LINE公式アカウント"})]})}),(0,r.jsx)(c.Z,{className:"py-5",ref:new j.Gl().ref,children:(0,r.jsx)(l.Z,{className:"text-center",children:(0,r.jsxs)("p",{children:["See code in"," ",(0,r.jsx)("a",{href:"https://github.com/OJII3/ichimon-itto-bot",children:"GitHub"})]})})}),(0,r.jsx)(c.Z,{className:"justify-content-center p-5",ref:new j.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:3,children:[(0,r.jsx)("h2",{className:"text-center",children:"Feature"}),(0,r.jsxs)(d.Z,{variant:"flush",children:[(0,r.jsx)(d.Z.Item,{children:(0,r.jsx)("li",{children:"Useful for learning English words"})}),(0,r.jsx)(d.Z.Item,{children:(0,r.jsx)("li",{children:"Serverless"})})]})]})}),(0,r.jsx)(c.Z,{className:"justify-content-center p-5",ref:new j.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:3,children:[(0,r.jsx)("h2",{className:"text-center",children:"What I used"}),(0,r.jsxs)(d.Z,{variant:"flush",children:[(0,r.jsx)(d.Z.Item,{children:(0,r.jsx)("li",{children:"Google Apps Script"})}),(0,r.jsx)(d.Z.Item,{children:(0,r.jsx)("li",{children:"LINE Messaging API"})})]})]})}),(0,r.jsx)(c.Z,{className:"justify-content-center p-5",ref:new j.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:6,children:[(0,r.jsx)("h2",{className:"text-center",children:"Brief"}),(0,r.jsx)("p",{className:"brief",children:"英単語などの暗記のためのbotです。 無料かつサーバーレスで動かしています。Google Spreadsheetsにデータを蓄積しつつ、 GASのキャッシュ機能をフル活用することで、比較的高速に応答できます。"})]})}),(0,r.jsx)(c.Z,{className:"justify-content-center p-5",ref:new j.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:6,children:[(0,r.jsx)("h2",{className:"text-center",children:"Details"}),(0,r.jsxs)("p",{className:"brief text-center",children:["当時作成したページがあります。汚いですが。",(0,r.jsx)("br",{}),"GASで動いており、パラメータによりページ遷移をしています。"]}),(0,r.jsx)("p",{className:"text-center py-3",children:(0,r.jsx)(o.Z,{variant:"primary",href:"https://script.google.com/macros/s/AKfycbxMFjeqhicoaIMp-h3Fq4JSbfq_FwSgh6bqxhvxUluubPvFSre-v-TpbQnhmm3tmlGDtA/exec?open=ichimon_ittou",children:"Open"})})]})}),(0,r.jsxs)(c.Z,{className:"justify-content-center p-5",ref:new j.Gl().ref,children:[(0,r.jsxs)(l.Z,{className:"col-12 text-center",children:[(0,r.jsx)("h2",{children:"Start Using"}),(0,r.jsx)("p",{className:"brief text-center",children:"以下のリンクから実際に使うことができます。"})]}),(0,r.jsx)(l.Z,{className:"col-3 text-center",children:(0,r.jsxs)(m(),{href:"https://lin.ee/l3Nz7HZ",children:[(0,r.jsx)("span",{hidden:!0,children:"Add Friend"}),(0,r.jsx)(h.Z,{fluid:!0,src:"https://scdn.line-apps.com/n/line_add_friends/btn/ja.png",alt:"友だち追加",height:"36"})]})})]})]})}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(p.Z,{})]})},1555:function(e,s,t){"use strict";var r=t(4184),i=t.n(r),n=t(7294),a=t(6792),c=t(5893);let l=n.forwardRef((e,s)=>{let[{className:t,...r},{as:n="div",bsPrefix:l,spans:d}]=function({as:e,bsPrefix:s,className:t,...r}){s=(0,a.vE)(s,"col");let n=(0,a.pi)(),c=(0,a.zG)(),l=[],d=[];return n.forEach(e=>{let t,i,n;let a=r[e];delete r[e],"object"==typeof a&&null!=a?{span:t,offset:i,order:n}=a:t=a;let o=e!==c?`-${e}`:"";t&&l.push(!0===t?`${s}${o}`:`${s}${o}-${t}`),null!=n&&d.push(`order${o}-${n}`),null!=i&&d.push(`offset${o}-${i}`)}),[{...r,className:i()(t,...l,...d)},{as:e,bsPrefix:s,spans:l}]}(e);return(0,c.jsx)(n,{...r,ref:s,className:i()(t,!d.length&&l)})});l.displayName="Col",s.Z=l},8695:function(e,s,t){"use strict";t.d(s,{Z:function(){return u}});var r=t(4184),i=t.n(r),n=t(7294);t(2473);var a=t(5446),c=t(5115),l=t(6792),d=t(8146),o=t(3716),h=t(7126),x=t(5893);let f=n.forwardRef(({bsPrefix:e,active:s,disabled:t,eventKey:r,className:n,variant:a,action:c,as:f,...j},u)=>{e=(0,l.vE)(e,"list-group-item");let[m,p]=(0,o.v)({key:(0,h.h)(r,j.href),active:s,...j}),Z=(0,d.Z)(e=>{if(t){e.preventDefault(),e.stopPropagation();return}m.onClick(e)});t&&void 0===j.tabIndex&&(j.tabIndex=-1,j["aria-disabled"]=!0);let b=f||(c?j.href?"a":"button":"div");return(0,x.jsx)(b,{ref:u,...j,...m,onClick:Z,className:i()(n,e,p.isActive&&"active",t&&"disabled",a&&`${e}-${a}`,c&&`${e}-action`)})});f.displayName="ListGroupItem";let j=n.forwardRef((e,s)=>{let t;let{className:r,bsPrefix:n,variant:d,horizontal:o,numbered:h,as:f="div",...j}=(0,a.Ch)(e,{activeKey:"onSelect"}),u=(0,l.vE)(n,"list-group");return o&&(t=!0===o?"horizontal":`horizontal-${o}`),(0,x.jsx)(c.Z,{ref:s,...j,as:f,className:i()(r,u,d&&`${u}-${d}`,t&&`${u}-${t}`,h&&`${u}-numbered`)})});j.displayName="ListGroup";var u=Object.assign(j,{Item:f})},4051:function(e,s,t){"use strict";var r=t(4184),i=t.n(r),n=t(7294),a=t(6792),c=t(5893);let l=n.forwardRef(({bsPrefix:e,className:s,as:t="div",...r},n)=>{let l=(0,a.vE)(e,"row"),d=(0,a.pi)(),o=(0,a.zG)(),h=`${l}-cols`,x=[];return d.forEach(e=>{let s;let t=r[e];delete r[e],null!=t&&"object"==typeof t?{cols:s}=t:s=t;let i=e!==o?`-${e}`:"";null!=s&&x.push(`${h}${i}-${s}`)}),(0,c.jsx)(t,{ref:n,...r,className:i()(s,l,...x)})});l.displayName="Row",s.Z=l}},function(e){e.O(0,[363,774,888,179],function(){return e(e.s=1992)}),_N_E=e.O()}]);