(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"13Mi":function(U,N,i){},"3eU1":function(U,N,i){},"5rTz":function(U,N,i){"use strict";var W=i("W56v"),K=i("2+DO"),j=i("yDyU"),T=i.n(j),F=i("iczh"),H=i.n(F);function Z(c,o){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(c);o&&(u=u.filter(function(b){return Object.getOwnPropertyDescriptor(c,b).enumerable})),s.push.apply(s,u)}return s}function D(c){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?Z(Object(s),!0).forEach(function(u){z(c,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):Z(Object(s)).forEach(function(u){Object.defineProperty(c,u,Object.getOwnPropertyDescriptor(s,u))})}return c}function z(c,o,s){return o in c?Object.defineProperty(c,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[o]=s,c}function f(c,o){return $(c)||q(c,o)||R(c,o)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(c,o){if(!!c){if(typeof c=="string")return _(c,o);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return _(c,o)}}function _(c,o){(o==null||o>c.length)&&(o=c.length);for(var s=0,u=new Array(o);s<o;s++)u[s]=c[s];return u}function q(c,o){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(c)))){var s=[],u=!0,b=!1,B=void 0;try{for(var G=c[Symbol.iterator](),V;!(u=(V=G.next()).done)&&(s.push(V.value),!(o&&s.length===o));u=!0);}catch(w){b=!0,B=w}finally{try{!u&&G.return!=null&&G.return()}finally{if(b)throw B}}return s}}function $(c){if(Array.isArray(c))return c}var M=function(o){if(!o)return 1;var s=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/s},Q=function(o){var s=o.children,u=o.style,b=o.className,B=o.markStyle,G=o.markClassName,V=o.zIndex,w=V===void 0?9:V,ve=o.gapX,ee=ve===void 0?212:ve,te=o.gapY,y=te===void 0?222:te,oe=o.width,S=oe===void 0?120:oe,I=o.height,ie=I===void 0?64:I,se=o.rotate,Pe=se===void 0?-22:se,Ee=o.image,Ce=o.content,Ie=o.offsetLeft,we=o.offsetTop,Le=o.fontStyle,xe=Le===void 0?"normal":Le,De=o.fontWeight,je=De===void 0?"normal":De,me=o.fontColor,ge=me===void 0?"rgba(0,0,0,.15)":me,Re=o.fontSize,Te=Re===void 0?16:Re,Ne=o.fontFamily,he=Ne===void 0?"sans-serif":Ne,Ue=o.prefixCls,We=Object(j.useContext)(K.b.ConfigContext),Ke=We.getPrefixCls,Me=Ke("pro-layout-watermark",Ue),Fe=H()("".concat(Me,"-wrapper"),b),Be=H()(Me,G),_e=Object(j.useState)(""),Oe=f(_e,2),He=Oe[0],be=Oe[1];return Object(j.useEffect)(function(){var le=document.createElement("canvas"),J=le.getContext("2d"),re=M(J),ze="".concat((ee+S)*re,"px"),$e="".concat((y+ie)*re,"px"),Ae=Ie||ee/2,Ge=we||y/2;if(le.setAttribute("width",ze),le.setAttribute("height",$e),J){J.translate(Ae*re,Ge*re),J.rotate(Math.PI/180*Number(Pe));var pe=S*re,Se=ie*re;if(Ee){var ce=new Image;ce.crossOrigin="anonymous",ce.referrerPolicy="no-referrer",ce.src=Ee,ce.onload=function(){J.drawImage(ce,0,0,pe,Se),be(le.toDataURL())}}else if(Ce){var Xe=Number(Te)*re;J.font="".concat(xe," normal ").concat(je," ").concat(Xe,"px/").concat(Se,"px ").concat(he),J.fillStyle=ge,J.fillText(Ce,0,0),be(le.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[ee,y,Ie,we,Pe,xe,je,S,ie,he,ge,Ee,Ce,Te]),T.a.createElement("div",{style:D({position:"relative"},u),className:Fe},s,T.a.createElement("div",{className:Be,style:D({zIndex:w,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(ee+S,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(He,"')")},B)}))};N.a=Q},"6xu9":function(U,N,i){},"89cI":function(U,N,i){"use strict";var W=i("W56v"),K=i("2+DO"),j=i("yDyU"),T=i.n(j),F=i("iczh"),H=i.n(F),Z=i("3CTf"),D=i("3eU1"),z=i.n(D),f=i("jvZC");function m(){return m=Object.assign||function(c){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(c[u]=s[u])}return c},m.apply(this,arguments)}function R(c,o){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(c);o&&(u=u.filter(function(b){return Object.getOwnPropertyDescriptor(c,b).enumerable})),s.push.apply(s,u)}return s}function _(c){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?R(Object(s),!0).forEach(function(u){q(c,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):R(Object(s)).forEach(function(u){Object.defineProperty(c,u,Object.getOwnPropertyDescriptor(s,u))})}return c}function q(c,o,s){return o in c?Object.defineProperty(c,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[o]=s,c}function $(c,o){if(c==null)return{};var s=M(c,o),u,b;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(c);for(b=0;b<B.length;b++)u=B[b],!(o.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,u)||(s[u]=c[u]))}return s}function M(c,o){if(c==null)return{};var s={},u=Object.keys(c),b,B;for(B=0;B<u.length;B++)b=u[B],!(o.indexOf(b)>=0)&&(s[b]=c[b]);return s}var Q=function(o){var s=o.children,u=o.className,b=o.extra,B=o.style,G=o.renderContent,V=$(o,["children","className","extra","style","renderContent"]),w=Object(j.useContext)(K.b.ConfigContext),ve=w.getPrefixCls,ee=o.prefixCls||ve("pro"),te="".concat(ee,"-footer-bar"),y=Object(j.useContext)(f.a),oe=Object(j.useMemo)(function(){var I=y.hasSiderMenu,ie=y.isMobile,se=y.siderWidth;if(!!I)return se?ie?"100%":"calc(100% - ".concat(se,"px)"):"100%"},[y.collapsed,y.hasSiderMenu,y.isMobile,y.siderWidth]),S=T.a.createElement(T.a.Fragment,null,T.a.createElement("div",{className:"".concat(te,"-left")},b),T.a.createElement("div",{className:"".concat(te,"-right")},s));return Object(j.useEffect)(function(){return!y||!(y==null?void 0:y.setHasFooterToolbar)?function(){}:(y==null||y.setHasFooterToolbar(!0),function(){var I;y==null||(I=y.setHasFooterToolbar)===null||I===void 0||I.call(y,!1)})},[]),T.a.createElement("div",m({className:H()(u,"".concat(te)),style:_({width:oe},B)},Object(Z.a)(V,["prefixCls"])),G?G(_(_(_({},o),y),{},{leftWidth:oe}),S):S)};N.a=Q},Nfp2:function(U,N,i){},RGIw:function(U,N,i){},Swvq:function(U,N,i){},jvZC:function(U,N,i){"use strict";var W=i("yDyU"),K=i.n(W),j=Object(W.createContext)({});N.a=j},kt3b:function(U,N,i){"use strict";var W=i("W56v"),K=i("2+DO"),j=i("6xu9"),T=i.n(j),F=i("yDyU"),H=i.n(F),Z=i("iczh"),D=i.n(Z),z=i("jvZC"),f=function(R){var _=Object(F.useContext)(z.a),q=R.children,$=R.contentWidth,M=R.className,Q=R.style,c=Object(F.useContext)(K.b.ConfigContext),o=c.getPrefixCls,s=R.prefixCls||o("pro"),u=$||_.contentWidth,b="".concat(s,"-grid-content");return H.a.createElement("div",{className:D()(b,M,{wide:u==="Fixed"}),style:Q},H.a.createElement("div",{className:"".concat(s,"-grid-content-children")},q))};N.a=f},pEGN:function(U,N,i){"use strict";var W=i("hF+B"),K=i("yDyU"),j=i.n(K),T=i("8CiR"),F=function(D,z){var f={};for(var m in D)Object.prototype.hasOwnProperty.call(D,m)&&z.indexOf(m)<0&&(f[m]=D[m]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,m=Object.getOwnPropertySymbols(D);R<m.length;R++)z.indexOf(m[R])<0&&Object.prototype.propertyIsEnumerable.call(D,m[R])&&(f[m[R]]=D[m[R]]);return f},H={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Z=K.forwardRef(function(D,z){var f=function(c){var o=c.keyCode;o===T.a.ENTER&&c.preventDefault()},m=function(c){var o=c.keyCode,s=D.onClick;o===T.a.ENTER&&s&&s()},R=D.style,_=D.noStyle,q=D.disabled,$=F(D,["style","noStyle","disabled"]),M={};return _||(M=Object(W.a)({},H)),q&&(M.pointerEvents="none"),M=Object(W.a)(Object(W.a)({},M),R),K.createElement("div",Object(W.a)({role:"button",tabIndex:0,ref:z},$,{onKeyDown:f,onKeyUp:m,style:M}))});N.a=Z},wqgP:function(U,N,i){"use strict";var W=i("jnST"),K=i("Swvq"),j=i("hF+B"),T=i("fdbh"),F=i("MD6V"),H=i("rPbD"),Z=i("43jC"),D=i("qOUI"),z=i("u8ah"),f=i("yDyU"),m=i.n(f),R=i("iczh"),_=i.n(R),q=i("Rpuv"),$=i("bvih"),M=i("Wo0Y"),Q=i("WMiQ"),c=i("Fo+/");function o(n){var e,r=function(l){return function(){e=null,n.apply(void 0,Object(Q.a)(l))}},t=function(){if(e==null){for(var l=arguments.length,v=new Array(l),d=0;d<l;d++)v[d]=arguments[d];e=Object(c.a)(r(v))}};return t.cancel=function(){return c.a.cancel(e)},t}function s(){return function(e,r,t){var a=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(r))return a;var d=o(a.bind(this));return l=!0,Object.defineProperty(this,r,{value:d,configurable:!0,writable:!0}),l=!1,d}}}}var u=i("KNQl");function b(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function B(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function G(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var V=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],w=[];function ve(){return w}function ee(n,e){if(!!n){var r=w.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},w.push(r),V.forEach(function(t){r.eventHandlers[t]=Object(u.a)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function te(n){var e=w.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(w=w.filter(function(r){return r!==e}),V.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var y=function(n,e,r,t){var a=arguments.length,l=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":Object(z.a)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,r,t);else for(var d=n.length-1;d>=0;d--)(v=n[d])&&(l=(a<3?v(l):a>3?v(e,r,l):v(e,r))||l);return a>3&&l&&Object.defineProperty(e,r,l),l};function oe(){return typeof window!="undefined"?window:null}var S;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(S||(S={}));var I=function(n){Object(Z.a)(r,n);var e=Object(D.a)(r);function r(){var t;return Object(F.a)(this,r),t=e.apply(this,arguments),t.state={status:S.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,l=t.props.offsetTop;return a===void 0&&l===void 0&&(l=0),l},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,l=a.status,v=a.lastAffix,d=t.props.onChange,g=t.getTargetFunc();if(!(l!==S.Prepare||!t.fixedNode||!t.placeholderNode||!g)){var h=t.getOffsetTop(),p=t.getOffsetBottom(),C=g();if(!!C){var O={status:S.None},P=b(C),x=b(t.placeholderNode),E=B(x,P,h),k=G(x,P,p);E!==void 0?(O.affixStyle={position:"fixed",top:E,width:x.width,height:x.height},O.placeholderStyle={width:x.width,height:x.height}):k!==void 0&&(O.affixStyle={position:"fixed",bottom:k,width:x.width,height:x.height},O.placeholderStyle={width:x.width,height:x.height}),O.lastAffix=!!O.affixStyle,d&&v!==O.lastAffix&&d(O.lastAffix),t.setState(O)}}},t.prepareMeasure=function(){if(t.setState({status:S.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,l=t.state,v=l.affixStyle,d=l.placeholderStyle,g=t.props,h=g.prefixCls,p=g.children,C=_()(Object(T.a)({},a("affix",h),v)),O=Object(q.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return f.createElement($.a,{onResize:function(){t.updatePosition()}},f.createElement("div",Object(j.a)({},O,{ref:t.savePlaceholderNode}),v&&f.createElement("div",{style:d,"aria-hidden":"true"}),f.createElement("div",{className:C,ref:t.saveFixedNode,style:v},f.createElement($.a,{onResize:function(){t.updatePosition()}},p))))},t}return Object(H.a)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:a||oe}},{key:"componentDidMount",value:function(){var a=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){ee(l(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var l=this.state.prevTarget,v=this.getTargetFunc(),d=null;v&&(d=v()||null),l!==d&&(te(this),d&&(ee(d,this),this.updatePosition()),this.setState({prevTarget:d})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),te(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),l=this.state.affixStyle;if(a&&l){var v=this.getOffsetTop(),d=this.getOffsetBottom(),g=a();if(g&&this.placeholderNode){var h=b(g),p=b(this.placeholderNode),C=B(p,h,v),O=G(p,h,d);if(C!==void 0&&l.top===C||O!==void 0&&l.bottom===O)return}}this.prepareMeasure()}}]),r}(f.Component);I.contextType=M.b,y([s()],I.prototype,"updatePosition",null),y([s()],I.prototype,"lazyUpdatePosition",null);var ie=I,se=i("W56v"),Pe=i("2+DO"),Ee=i("RGIw"),Ce=i("Nfp2"),Ie=i("nS9m"),we=i("FmtU"),Le=i("KEAV"),xe=i("DREN"),De={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},je=De,me=i("8mCa"),ge=function(e,r){return f.createElement(me.a,Object.assign({},e,{ref:r,icon:je}))};ge.displayName="ArrowLeftOutlined";var Re=f.forwardRef(ge),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ne=Te,he=function(e,r){return f.createElement(me.a,Object.assign({},e,{ref:r,icon:Ne}))};he.displayName="ArrowRightOutlined";var Ue=f.forwardRef(he),We=i("zWIi"),Ke=i("ipEt"),Me=i("oqtq"),Fe=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Be=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.children,v=e.overlay,d=e.dropdownProps,g=Fe(e,["prefixCls","separator","children","overlay","dropdownProps"]),h=f.useContext(M.b),p=h.getPrefixCls,C=p("breadcrumb",r),O=function(E){return v?f.createElement(Me.a,Object(j.a)({overlay:v,placement:"bottomCenter"},d),f.createElement("span",{className:"".concat(C,"-overlay-link")},E,f.createElement(Ke.a,null))):E},P;return"href"in g?P=f.createElement("a",Object(j.a)({className:"".concat(C,"-link")},g),l):P=f.createElement("span",Object(j.a)({className:"".concat(C,"-link")},g),l),P=O(P),l?f.createElement("span",null,P,a&&a!==""&&f.createElement("span",{className:"".concat(C,"-separator")},a)):null};Be.__ANT_BREADCRUMB_ITEM=!0;var _e=Be,Oe=function(e){var r=e.children,t=f.useContext(M.b),a=t.getPrefixCls,l=a("breadcrumb");return f.createElement("span",{className:"".concat(l,"-separator")},r||"/")};Oe.__ANT_BREADCRUMB_SEPARATOR=!0;var He=Oe,be=i("HWmB"),le=i("aXpK"),J=i("/7SN"),re=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function ze(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,l){return e[l]||a});return t}function $e(n,e,r,t){var a=r.indexOf(n)===r.length-1,l=ze(n,e);return a?f.createElement("span",null,l):f.createElement("a",{href:"#/".concat(t.join("/"))},l)}var Ae=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Ge=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=Object(Q.a)(e),l=Ae(r,t);return l&&a.push(l),a},pe=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.style,v=e.className,d=e.routes,g=e.children,h=e.itemRender,p=h===void 0?$e:h,C=e.params,O=C===void 0?{}:C,P=re(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),x=f.useContext(M.b),E=x.getPrefixCls,k=x.direction,Y,de=E("breadcrumb",r);if(d&&d.length>0){var ae=[];Y=d.map(function(A){var ne=Ae(A.path,O);ne&&ae.push(ne);var ye;return A.children&&A.children.length&&(ye=f.createElement(be.a,null,A.children.map(function(ue){return f.createElement(be.a.Item,{key:ue.path||ue.breadcrumbName},p(ue,O,d,Ge(ae,ue.path,O)))}))),f.createElement(_e,{overlay:ye,separator:a,key:ne||A.breadcrumbName},p(A,O,d,ae))})}else g&&(Y=Object(We.a)(g).map(function(A,ne){return A&&(Object(le.a)(A.type&&(A.type.__ANT_BREADCRUMB_ITEM===!0||A.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(J.a)(A,{separator:a,key:ne}))}));var L=_()(de,Object(T.a)({},"".concat(de,"-rtl"),k==="rtl"),v);return f.createElement("div",Object(j.a)({className:L,style:l},P),Y)};pe.Item=_e,pe.Separator=He;var Se=pe,ce=Se,Xe=i("qp+d"),Je=i("pEGN"),ke=i("BQkA"),qe=function(e,r,t){return!r||!t?null:f.createElement(ke.a,{componentName:"PageHeader"},function(a){var l=a.back;return f.createElement("div",{className:"".concat(e,"-back")},f.createElement(Je.a,{onClick:function(d){t==null||t(d)},className:"".concat(e,"-back-button"),"aria-label":l},r))})},et=function(e){return f.createElement(ce,e)},tt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?f.createElement(Ue,null):f.createElement(Re,null)},rt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,l=r.avatar,v=r.subTitle,d=r.tags,g=r.extra,h=r.onBack,p="".concat(e,"-heading"),C=a||v||d||g;if(!C)return null;var O=tt(r,t),P=qe(e,O,h),x=P||l||C;return f.createElement("div",{className:p},x&&f.createElement("div",{className:"".concat(p,"-left")},P,l&&f.createElement(Xe.a,l),a&&f.createElement("span",{className:"".concat(p,"-title"),title:typeof a=="string"?a:void 0},a),v&&f.createElement("span",{className:"".concat(p,"-sub-title"),title:typeof v=="string"?v:void 0},v),d&&f.createElement("span",{className:"".concat(p,"-tags")},d)),g&&f.createElement("span",{className:"".concat(p,"-extra")},g))},at=function(e,r){return r?f.createElement("div",{className:"".concat(e,"-footer")},r):null},nt=function(e,r){return f.createElement("div",{className:"".concat(e,"-content")},r)},ot=function(e){var r=f.useState(!1),t=Object(xe.a)(r,2),a=t[0],l=t[1],v=function(g){var h=g.width;l(h<768)};return f.createElement(M.a,null,function(d){var g,h=d.getPrefixCls,p=d.pageHeader,C=d.direction,O=e.prefixCls,P=e.style,x=e.footer,E=e.children,k=e.breadcrumb,Y=e.breadcrumbRender,de=e.className,ae=!0;"ghost"in e?ae=e.ghost:p&&"ghost"in p&&(ae=p.ghost);var L=h("page-header",O),A=function(){var Ye;return((Ye=k)===null||Ye===void 0?void 0:Ye.routes)?et(k):null},ne=A(),ye=(Y==null?void 0:Y(e,ne))||ne,ue=_()(L,de,(g={"has-breadcrumb":ye,"has-footer":x},Object(T.a)(g,"".concat(L,"-ghost"),ae),Object(T.a)(g,"".concat(L,"-rtl"),C==="rtl"),Object(T.a)(g,"".concat(L,"-compact"),a),g));return f.createElement($.a,{onResize:v},f.createElement("div",{className:ue,style:P},ye,rt(L,e,C),E&&nt(L,E),at(L,x)))})},it=ot,bt=i("loF4"),Ze=i("A33o"),lt=i("jvZC"),ct=i("kt3b"),st=i("89cI"),pt=i("13Mi"),ft=i("PzUD"),dt=i("5rTz");function Qe(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function X(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Qe(Object(r),!0).forEach(function(t){Ve(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Qe(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Ve(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function ut(n,e){if(n==null)return{};var r=vt(n,e),t,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function vt(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,l;for(l=0;l<t.length;l++)a=t[l],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function fe(){return fe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},fe.apply(this,arguments)}var mt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,l=e.tabBarExtraContent,v=e.tabProps,d=e.prefixedClassName;return r&&r.length?m.a.createElement(Ze.a,fe({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(h){a&&a(h)},tabBarExtraContent:l},v),r.map(function(g,h){return m.a.createElement(Ze.a.TabPane,fe({},g,{tab:g.tab,key:g.key||h}))})):null},gt=function(e,r,t){return!e&&!r?null:m.a.createElement("div",{className:"".concat(t,"-detail")},m.a.createElement("div",{className:"".concat(t,"-main")},m.a.createElement("div",{className:"".concat(t,"-row")},e&&m.a.createElement("div",{className:"".concat(t,"-content")},e),r&&m.a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},ht=function(e,r){var t,a,l,v=e.title,d=e.content,g=e.pageHeaderRender,h=e.header,p=e.extraContent,C=e.style,O=e.prefixCls,P=ut(e,["title","content","pageHeaderRender","header","extraContent","style","prefixCls"]);if(g===!1)return null;if(g)return g(X(X({},e),r));var x=v;!v&&v!==!1&&(x=r.title);var E=X(X(X({},r),{},{title:x},P),{},{footer:mt(X(X({},P),{},{prefixedClassName:r.prefixedClassName}))},h);return!E.title&&!E.subTitle&&!((t=E.breadcrumb)===null||t===void 0?void 0:t.itemRender)&&!((a=E.breadcrumb)===null||a===void 0||(l=a.routes)===null||l===void 0?void 0:l.length)&&!E.extra&&!E.tags&&!E.footer&&!E.avatar&&!E.backIcon&&!d&&!p?null:m.a.createElement(it,fe({},E,{breadcrumb:X(X({},E.breadcrumb),E.breadcrumbProps),prefixCls:O}),(h==null?void 0:h.children)||gt(d,p,r.prefixedClassName))},Ot=function(e){var r=e.children,t=e.loading,a=e.style,l=e.footer,v=e.affixProps,d=e.ghost,g=e.fixedHeader,h=Object(f.useContext)(lt.a),p=Object(f.useContext)(Pe.b.ConfigContext),C=p.getPrefixCls,O=e.prefixCls||C("pro"),P="".concat(O,"-page-container"),x=_()(P,e.className,Ve({},"".concat(O,"-page-container-ghost"),d)),E=r?m.a.createElement("div",null,m.a.createElement("div",{className:"".concat(P,"-children-content")},r),h.hasFooterToolbar&&m.a.createElement("div",{style:{height:48,marginTop:24}})):null,k=ht(e,X(X({},h),{},{prefixCls:void 0,prefixedClassName:P})),Y=k?m.a.createElement("div",{className:"".concat(P,"-warp")},k):null,de=function(){var L=t?m.a.createElement(ft.a,null):E;return e.waterMarkProps||h.waterMarkProps?m.a.createElement(dt.a,e.waterMarkProps||h.waterMarkProps,L):L};return m.a.createElement("div",{style:a,className:x},g&&Y?m.a.createElement(ie,fe({offsetTop:h.hasHeader&&h.fixedHeader?h.headerHeight:0},v),Y):Y,m.a.createElement(ct.a,null,de()),l&&m.a.createElement(st.a,{prefixCls:O},l))},yt=N.a=Ot}}]);
