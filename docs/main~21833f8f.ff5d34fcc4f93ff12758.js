!function(e){function n(n){for(var t,i,l=n[0],c=n[1],u=n[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(s&&s(n);f.length;)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,n=0;n<o.length;n++){for(var r=o[n],t=!0,l=1;l<r.length;l++){var c=r[l];0!==a[c]&&(t=!1)}t&&(o.splice(n--,1),e=i(i.s=r[0]))}return e}var t={},a={6:0},o=[];function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],r=a[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=t);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+".ff5d34fcc4f93ff12758.js"}(e);var c=new Error;o=function(n){l.onerror=l.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.name="ChunkLoadError",c.type=t,c.request=o,r[1](c)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(r,t,function(n){return e[n]}.bind(null,t));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="./",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var s=c;o.push([447,4,12,7,5,9,11,8,10]),r()}({139:function(e,n,r){"use strict";var t=r(144),a=r.n(t)()((function(e){return e[1]}));a.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),a.push([e.i,".back_color_main {\r\n    background-color: #f1fdfd;\r\n    height: 100vh;\r\n}\r\n\r\n.PageTitle_OrangeU {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(255, 166, 0);\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.PageTitle_U {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.bgimgtop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 0;\r\n    height: 41vh;\r\n    background-color: #f1fdfd;\r\n}\r\n\r\n.bgbottombluebar {\r\n    background-color: #00253a;\r\n    height: 11vh;\r\n}\r\n\r\n.pageDescription_Text {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 4.6vw;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    margin-top: 5%;\r\n    width: 80%;\r\n    margin: 5% 10%;\r\n}\r\n\r\n/* popUp Style */\r\n\r\n.popup_Title {\r\n    font-size: 3vh;\r\n    text-align: center;\r\n    padding: 2vh 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.popup_Text {\r\n    font-size: 2.4vh;\r\n    text-align: center;\r\n    padding: 3vh 0;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n.popup_source {\r\n    font-size: 2.1vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #f7941d;\r\n}\r\n\r\n.popup {\r\n    background-color: #f1fdfd;\r\n    z-index: 200;\r\n    padding: 3vh 5vw;\r\n    border-radius: 2vw;\r\n    border-color: #f7941d;\r\n    border-width: 1vw;\r\n    border-style: solid;\r\n}\r\n\r\n.popup_bg {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #000000df;\r\n    z-index: 200;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.button_container {\r\n    align-self: center;\r\n}\r\n\r\n.button_text {\r\n    font-size: 2.5vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n/* Continue Button Style */\r\n\r\n.continue_button_Orange {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: #f7941d;\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.continue_button_Green {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: rgb(5, 138, 27);\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.popup_continue_buttonContainer {\r\n    display: grid;\r\n    padding: 4.2vh 0;\r\n}\r\n\r\n/* Options Button Style */\r\n\r\n.option_button_Orange {\r\n    background-color: #f7941d;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}\r\n\r\n.option_button_Green {\r\n    background-color: #72c84c;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}\r\n\r\n.rotateimg180 {\r\n    display: inline-flex;\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n}",""]),n.a=a},447:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(84),i=r.n(o),l=(r(208),r(438),r(81)),c="#0062ff",u=l.default.div.withConfig({displayName:"Loader__Wrapper",componentId:"sc-132zml8-0"})(["display:flex;justify-content:center;align-items:center;height:",";margin:0 auto;"],(function(e){return"none"===e.height?"none":"98vh"})),s=l.default.svg.withConfig({displayName:"Loader__Svg",componentId:"sc-132zml8-1"})(["@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(270deg);}}animation:rotate 1.4s linear infinite;"]),d=l.default.circle.withConfig({displayName:"Loader__Circle",componentId:"sc-132zml8-2"})(["@keyframes colors{0%{stroke:",";}100%{stroke:",";}}@keyframes dash{0%{stroke-dashoffset:187;}50%{stroke-dashoffset:46.75;transform:rotate(135deg);}100%{stroke-dashoffset:187;transform:rotate(450deg);}}stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite,colors 5.6s ease-in-out infinite;"],c,c),f=function(e){return a.a.createElement(u,e,a.a.createElement(s,{width:"30px",height:"30px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement(d,{fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))},p=r(83),h=r(14),m=r(192),g=r(455),b=r(456),v=r(143),y=r.n(v),w=r(139),x={insert:"head",singleton:!1},E=(y()(w.a,x),w.a.locals,a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(19)]).then(r.bind(null,809))}))),k=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(25),r.e(28),r.e(16)]).then(r.bind(null,810))})),_=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(1),r.e(15)]).then(r.bind(null,811))})),z=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(1),r.e(20)]).then(r.bind(null,812))})),P=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(1),r.e(21)]).then(r.bind(null,813))})),S=a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(22)]).then(r.bind(null,807))})),O=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(13),r.e(23),r.e(24),r.e(14)]).then(r.bind(null,806))})),j=a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(27)]).then(r.bind(null,814))})),T=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(1),r.e(17)]).then(r.bind(null,815))})),C=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(1),r.e(18)]).then(r.bind(null,808))})),L=a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(26)]).then(r.bind(null,816))})),A=function(){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(f,null)},a.a.createElement(p.b,null,a.a.createElement(h.c,null,a.a.createElement(h.a,{exact:!0,path:"/"},a.a.createElement(S,null)),a.a.createElement(h.a,{exact:!0,path:"/ActivityScreen/:id"},a.a.createElement(O,null)),a.a.createElement(h.a,{exact:!0,path:"/ClueListScreen"},a.a.createElement(P,null)),a.a.createElement(h.a,{exact:!0,path:"/TaskScreen/:id"},a.a.createElement(E,null)),a.a.createElement(h.a,{exact:!0,path:"/QuizScreen/:id"},a.a.createElement(z,null)),a.a.createElement(h.a,{exact:!0,path:"/CluesScreen/:id"},a.a.createElement(k,null)),a.a.createElement(h.a,{exact:!0,path:"/Rewardscreen/:id"},a.a.createElement(_,null)),a.a.createElement(h.a,{exact:!0,path:"/StartScreen"},a.a.createElement(j,null)),a.a.createElement(h.a,{exact:!0,path:"/CompletionScreen"},a.a.createElement(L,null)),a.a.createElement(h.a,{exact:!0,path:"/VideoScreen/:id"},a.a.createElement(C,null)),a.a.createElement(h.a,{exact:!0,path:"/TaskListScreen"},a.a.createElement(g.a,{theme:Object(b.a)(m.blue)},a.a.createElement(T,null))))))},M=r(195),B={isAuth:!1,login:"",password:""};var I=r(56),N=r(196),U=Object(I.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTH":return Object.assign({},{isAuth:!0,login:n.payload.login,password:n.payload.password});default:return e}}});var R,W,D=r(199),G=r(198),J=(R=[M.a],W=I.applyMiddleware.apply(void 0,R),Object(I.createStore)(U,Object(N.composeWithDevTools)(W)));i.a.render(a.a.createElement(p.a,{forceRefresh:!0},a.a.createElement(D.a,{store:J},a.a.createElement(G.Normalize,null),a.a.createElement(A,null))),document.getElementById("root"))}});