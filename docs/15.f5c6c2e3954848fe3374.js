(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{451:function(n,e,t){n.exports=t.p+"12c31d4081a9828edb9d938ac731984d.png"},453:function(n,e,t){n.exports=t.p+"2b14942022269d0439e13eccd0bac564.svg"},454:function(n,e,t){n.exports=t.p+"3fb6926972efb0a74caa4003f5e2d7ed.svg"},455:function(n,e,t){n.exports=t.p+"fcab5557f585bccbdc64fee0b5d0a18d.svg"},459:function(n,e,t){"use strict";var a=t(138),i=t.n(a),o=t(460),r={insert:"head",singleton:!1};i()(o.a,r),o.a.locals},460:function(n,e,t){"use strict";var a=t(139),i=t.n(a),o=t(140),r=t.n(o)()(i.a);r.push([n.i,".tasktopcontainer {\n    width: 100vw;\n    position: relative;\n    height: 25vh;\n}\n\n.share_popupfullscreen {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 115;\n}\n\n.share_container {\n    z-index: 120;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.share_TextTitle {\n    z-index: 120;\n    display: block;\n    color: #01003c;\n    font-size: 3.3vh;\n    text-align: center;\n    padding-top: 2vh;\n    font-weight: 600;\n}\n\n.settings_listitem {\n    z-index: 120;\n    position: relative;\n    display: flex;\n    width: 84vw;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.tasklogoicon-active {\n    width: 24vw;\n    height: 12vh;\n    object-fit: contain;\n    z-index: 120;\n    animation: zoominout 2s infinite;\n    -webkit-animation: zoominout 2s infinite;\n    -moz-animation: zoominout 2s infinite;\n    -o-animation: zoominout 2s infinite;\n}\n\n\n/* Login Styles */\n\n.login_popupfullscreen {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 115;\n}\n\n.menu_mainwindow {\n    background-color: #f1fdfd;\n    text-align: center;\n    height: 63vh;\n}\n\n.loginDescription_Text {\n    display: block;\n    color: #01003c;\n    font-size: 4.6vw;\n    text-align: center;\n    font-weight: 500;\n    margin-top: 5%;\n    width: 80%;\n    margin: 5% 10%;\n    z-index: 120;\n    position: relative;\n}\n\n.titletext {\n    display: block;\n    color: #01003c;\n    font-size: 6vw;\n    text-decoration: underline;\n    text-decoration-color: #f7941d;\n    font-weight: 700;\n    text-align: center;\n    z-index: 120;\n    position: relative;\n    margin-top: 26vh;\n    text-underline-offset: 1.2vw;\n}\n\n.share_icon {\n    text-align: center;\n    object-fit: contain;\n    width: 6vw;\n    height: 5vh;\n}\n\n.share_iconset {\n    text-align: center;\n    z-index: 130;\n    margin: 0 1vw 0 6vw;\n}\n\n.share_iconText {\n    color: white;\n    font-size: 2.6vw;\n    text-align: center;\n    padding-top: 0.1vh;\n}\n\n.share_fb {\n    padding: 6px;\n    position: relative;\n    z-index: 120;\n    margin: 7vh 0 5vh;\n    text-align: center;\n}\n\n.fb1 {\n    box-sizing: border-box;\n    margin-top: -2%;\n}\n\n.fb2main {\n    width: 80%;\n    display: inline-block;\n}\n\n.fb2 {\n    display: inline-block;\n    width: 50%;\n}\n\n.share_instaicon {\n    width: 16vw;\n    height: 9vh;\n    object-fit: contain;\n}\n\n.share_icons {\n    display: inline-flex;\n    float: right;\n    z-index: 130;\n    margin-top: 7vh;\n    margin-right: 7vw;\n}\n\n.fb3 {\n    box-sizing: border-box;\n    margin-bottom: -2%;\n}\n\n.tasklogoicon {\n    width: 24vw;\n    height: 12vh;\n    object-fit: contain;\n    z-index: 120;\n}\n\n.tasklogoposition {\n    display: inline-flex;\n    margin-top: 7vh;\n    margin-left: 7vw;\n}\n\n.login_popupformcontainer {\n    display: grid;\n    width: 100%;\n    height: 24vh;\n    z-index: 15;\n    padding: 3vh 0;\n    text-align: center;\n    align-content: space-evenly;\n}\n\n.settings_listitem_container {\n    align-content: space-evenly;\n    height: 49vh;\n    display: grid;\n    padding: 5vh 0;\n}\n\n.settings_list_starting_semicircle {\n    background-color: #00253a !important;\n    font-size: 5.4vw;\n    font-weight: 600;\n    color: white;\n    padding-left: 4vw;\n    width: 14vw;\n    height: 6vh;\n    border-radius: 0 60px 60px 0;\n    z-index: 1;\n    align-items: center;\n    display: flex;\n}\n\n.settings_listtext {\n    background-color: #3998ac !important;\n    font-size: 4.4vw;\n    font-weight: 600;\n    width: 100%;\n    height: calc(5vh + 1vh);\n    margin-left: -11vw;\n    padding-left: 15vw;\n    align-items: center;\n    display: flex;\n}\n\n.settings_buttons {\n    width: 28vw;\n    height: 9vh;\n    object-fit: contain;\n    margin-left: -10vw;\n}\n\n\n/* login */\n\n.login_googlebutton {\n    z-index: 120;\n    position: relative;\n    background-color: #fc595a;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    display: inline-flex;\n    align-items: center;\n}\n\n.login_facebookbutton {\n    z-index: 120;\n    position: relative;\n    background-color: #4fb5ff;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    display: inline-flex;\n    align-items: center;\n}\n\n.login_otpinput {\n    z-index: 120;\n    position: relative;\n    padding: 0.5vh;\n    justify-self: center;\n    background-color: #efecec;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    height: 5vh;\n    font-size: 4.2vw;\n    text-align: center;\n    font-weight: 600;\n    color: #01003c;\n}\n\n.login_validatebutton {\n    z-index: 120;\n    position: relative;\n    padding: 0.5vh;\n    justify-self: center;\n    background-color: #0361ff;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    height: 5vh;\n}\n\n.login_buttontext {\n    font-size: 4.2vw;\n    text-align: center;\n    font-weight: 500;\n    color: #ffffff;\n}\n\n.login_googleicon {\n    object-fit: contain;\n    width: 6vw;\n    height: 5vh;\n    margin: 0 2vh 0 2vh;\n}\n\n.login_facebookicon {\n    object-fit: contain;\n    width: 6vw;\n    height: 5vh;\n    margin: 0 2vh 0 2vh;\n}","",{version:3,sources:["webpack://./src/components/Common/HeaderComponent/style.css"],names:[],mappings:"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",sourcesContent:[".tasktopcontainer {\n    width: 100vw;\n    position: relative;\n    height: 25vh;\n}\n\n.share_popupfullscreen {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 115;\n}\n\n.share_container {\n    z-index: 120;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.share_TextTitle {\n    z-index: 120;\n    display: block;\n    color: #01003c;\n    font-size: 3.3vh;\n    text-align: center;\n    padding-top: 2vh;\n    font-weight: 600;\n}\n\n.settings_listitem {\n    z-index: 120;\n    position: relative;\n    display: flex;\n    width: 84vw;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.tasklogoicon-active {\n    width: 24vw;\n    height: 12vh;\n    object-fit: contain;\n    z-index: 120;\n    animation: zoominout 2s infinite;\n    -webkit-animation: zoominout 2s infinite;\n    -moz-animation: zoominout 2s infinite;\n    -o-animation: zoominout 2s infinite;\n}\n\n\n/* Login Styles */\n\n.login_popupfullscreen {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 115;\n}\n\n.menu_mainwindow {\n    background-color: #f1fdfd;\n    text-align: center;\n    height: 63vh;\n}\n\n.loginDescription_Text {\n    display: block;\n    color: #01003c;\n    font-size: 4.6vw;\n    text-align: center;\n    font-weight: 500;\n    margin-top: 5%;\n    width: 80%;\n    margin: 5% 10%;\n    z-index: 120;\n    position: relative;\n}\n\n.titletext {\n    display: block;\n    color: #01003c;\n    font-size: 6vw;\n    text-decoration: underline;\n    text-decoration-color: #f7941d;\n    font-weight: 700;\n    text-align: center;\n    z-index: 120;\n    position: relative;\n    margin-top: 26vh;\n    text-underline-offset: 1.2vw;\n}\n\n.share_icon {\n    text-align: center;\n    object-fit: contain;\n    width: 6vw;\n    height: 5vh;\n}\n\n.share_iconset {\n    text-align: center;\n    z-index: 130;\n    margin: 0 1vw 0 6vw;\n}\n\n.share_iconText {\n    color: white;\n    font-size: 2.6vw;\n    text-align: center;\n    padding-top: 0.1vh;\n}\n\n.share_fb {\n    padding: 6px;\n    position: relative;\n    z-index: 120;\n    margin: 7vh 0 5vh;\n    text-align: center;\n}\n\n.fb1 {\n    box-sizing: border-box;\n    margin-top: -2%;\n}\n\n.fb2main {\n    width: 80%;\n    display: inline-block;\n}\n\n.fb2 {\n    display: inline-block;\n    width: 50%;\n}\n\n.share_instaicon {\n    width: 16vw;\n    height: 9vh;\n    object-fit: contain;\n}\n\n.share_icons {\n    display: inline-flex;\n    float: right;\n    z-index: 130;\n    margin-top: 7vh;\n    margin-right: 7vw;\n}\n\n.fb3 {\n    box-sizing: border-box;\n    margin-bottom: -2%;\n}\n\n.tasklogoicon {\n    width: 24vw;\n    height: 12vh;\n    object-fit: contain;\n    z-index: 120;\n}\n\n.tasklogoposition {\n    display: inline-flex;\n    margin-top: 7vh;\n    margin-left: 7vw;\n}\n\n.login_popupformcontainer {\n    display: grid;\n    width: 100%;\n    height: 24vh;\n    z-index: 15;\n    padding: 3vh 0;\n    text-align: center;\n    align-content: space-evenly;\n}\n\n.settings_listitem_container {\n    align-content: space-evenly;\n    height: 49vh;\n    display: grid;\n    padding: 5vh 0;\n}\n\n.settings_list_starting_semicircle {\n    background-color: #00253a !important;\n    font-size: 5.4vw;\n    font-weight: 600;\n    color: white;\n    padding-left: 4vw;\n    width: 14vw;\n    height: 6vh;\n    border-radius: 0 60px 60px 0;\n    z-index: 1;\n    align-items: center;\n    display: flex;\n}\n\n.settings_listtext {\n    background-color: #3998ac !important;\n    font-size: 4.4vw;\n    font-weight: 600;\n    width: 100%;\n    height: calc(5vh + 1vh);\n    margin-left: -11vw;\n    padding-left: 15vw;\n    align-items: center;\n    display: flex;\n}\n\n.settings_buttons {\n    width: 28vw;\n    height: 9vh;\n    object-fit: contain;\n    margin-left: -10vw;\n}\n\n\n/* login */\n\n.login_googlebutton {\n    z-index: 120;\n    position: relative;\n    background-color: #fc595a;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    display: inline-flex;\n    align-items: center;\n}\n\n.login_facebookbutton {\n    z-index: 120;\n    position: relative;\n    background-color: #4fb5ff;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    display: inline-flex;\n    align-items: center;\n}\n\n.login_otpinput {\n    z-index: 120;\n    position: relative;\n    padding: 0.5vh;\n    justify-self: center;\n    background-color: #efecec;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    height: 5vh;\n    font-size: 4.2vw;\n    text-align: center;\n    font-weight: 600;\n    color: #01003c;\n}\n\n.login_validatebutton {\n    z-index: 120;\n    position: relative;\n    padding: 0.5vh;\n    justify-self: center;\n    background-color: #0361ff;\n    border-radius: calc(0.6vw + 0.6vh);\n    border-color: transparent;\n    width: 70%;\n    height: 5vh;\n}\n\n.login_buttontext {\n    font-size: 4.2vw;\n    text-align: center;\n    font-weight: 500;\n    color: #ffffff;\n}\n\n.login_googleicon {\n    object-fit: contain;\n    width: 6vw;\n    height: 5vh;\n    margin: 0 2vh 0 2vh;\n}\n\n.login_facebookicon {\n    object-fit: contain;\n    width: 6vw;\n    height: 5vh;\n    margin: 0 2vh 0 2vh;\n}"],sourceRoot:""}]),e.a=r},461:function(n,e,t){n.exports=t.p+"f382bced3d3cc0b8eafcd815edee8673.svg"},462:function(n,e,t){n.exports=t.p+"0af4803da61c5ca683882a379cdb30a3.svg"},463:function(n,e,t){n.exports=t.p+"699ac5002ca1d3b6d00e27878a746299.svg"},464:function(n,e,t){n.exports=t.p+"8290266a5fb402a34b96f890bbdb2d60.png"},465:function(n,e,t){n.exports=t.p+"1b5245f0e2c46c8a145524ce870c76b9.png"},466:function(n,e,t){n.exports=t.p+"f495f5e0a7dfc701f263e6f81aa35c47.png"},467:function(n,e,t){n.exports=t.p+"3f995dc615f2c7b66ab71e4987246b82.png"},468:function(n,e,t){n.exports=t.p+"a5fc53e453ca043f41325f1f270cf192.png"},469:function(n,e,t){n.exports=t.p+"dd37bdfb57d5f8780757336f15c23019.png"},474:function(n,e,t){"use strict";var a=t(1),i=t.n(a);e.a=function(n,e){void 0===n&&(n=6e4),void 0===e&&(e=1e3);var t=i.a.useState(0),a=t[0],o=t[1],r=i.a.useRef({}),c=function n(t){r.current.started||(r.current.started=t,r.current.lastInterval=t);var a=Math.min(e,r.current.timeLeft||1/0);t-r.current.lastInterval>=a&&(r.current.lastInterval+=a,o((function(n){return r.current.timeLeft=n-a,r.current.timeLeft}))),t-r.current.started<r.current.timeToCount?r.current.requestId=window.requestAnimationFrame(n):(r.current={},o(0))},A=i.a.useCallback((function(e){window.cancelAnimationFrame(r.current.requestId);var t=void 0!==e?e:n;r.current.started=null,r.current.lastInterval=null,r.current.timeToCount=t,r.current.requestId=window.requestAnimationFrame(c),o(t)}),[]),s=i.a.useCallback((function(){window.cancelAnimationFrame(r.current.requestId),r.current.started=null,r.current.lastInterval=null,r.current.timeToCount=r.current.timeLeft}),[]),l=i.a.useCallback((function(){!r.current.started&&r.current.timeLeft>0&&(window.cancelAnimationFrame(r.current.requestId),r.current.requestId=window.requestAnimationFrame(c))}),[]),d=i.a.useCallback((function(){r.current.timeLeft&&(window.cancelAnimationFrame(r.current.requestId),r.current={},o(0))}),[]),g=i.a.useMemo((function(){return{start:A,pause:s,resume:l,reset:d}}),[]);return i.a.useEffect((function(){return d}),[]),[a,g]}},476:function(n,e,t){"use strict";var a=t(1),i=t.n(a),o=(t(459),t(461)),r=t(462),c=t(463),A=t(464),s=t(465),l=t(466),d=t(467),g=t(468),m=t(469),u=t(454),f=t(455),h=t(485),p=t(486),v=t.n(p),B=t(472),C=t(803),b=t(804),I=t(805),w=t(806),x=t(807),k=t(808),E=t(453),_=t(457),y=t(14),N=t(452),z=t(474);function Y(n,e,t,a,i,o,r){try{var c=n[o](r),A=c.value}catch(n){return void t(n)}c.done?e(A):Promise.resolve(A).then(a,i)}function j(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],a=!0,i=!1,o=void 0;try{for(var r,c=n[Symbol.iterator]();!(a=(r=c.next()).done)&&(t.push(r.value),!e||t.length!==e);a=!0);}catch(n){i=!0,o=n}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return S(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}e.a=function(){var n=function(n){var e=j(Object(a.useState)(new Audio(n)),1)[0],t=j(Object(a.useState)(!1),2),i=t[0],o=t[1];return Object(a.useEffect)((function(){i?e.play():e.pause()}),[i]),Object(a.useEffect)((function(){return e.addEventListener("ended",(function(){return o(!1)})),function(){e.removeEventListener("ended",(function(){return o(!1)}))}}),[]),[i,function(){return o(!i)}]}("https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"),e=j(n,2),t=e[0],S=e[1],O=j(Object(a.useState)(!1),2),W=O[0],T=O[1],U=j(Object(a.useState)(!1),2),Z=U[0],L=U[1],X=j(Object(a.useState)(!1),2),q=X[0],F=X[1],R=Object(y.f)(),V=j(Object(a.useState)(!1),2),D=V[0],M=V[1],J=j(Object(a.useState)(!0),2),P=J[0],G=J[1],H=j(Object(z.a)(6e4,1e3),2),$=H[0],K=H[1],Q=K.start;K.pause,K.resume,K.reset;Object(a.useEffect)((function(){Q(),"true"===String(localStorage.getItem("UsedSocialLoginMethod"))&&G(!1),window.addEventListener("click",(function(n){Q()}))}),[]);var nn=function(){var n,e=(n=regeneratorRuntime.mark((function n(e,t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:200===e.status?(console.log("response "+JSON.stringify(e)),localStorage.setItem("AuthToken",JSON.stringify(e.data.result.token)),localStorage.setItem("UserDetails",JSON.stringify(e.data.result.user_details)),localStorage.setItem("UsedSocialLoginMethod","true"),G(!1)):(console.log("error "+JSON.stringify(e)),console.log("error "+JSON.stringify(t)));case 2:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(a,i){var o=n.apply(e,t);function r(n){Y(o,a,i,r,c,"next",n)}function c(n){Y(o,a,i,r,c,"throw",n)}r(void 0)}))});return function(n,t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"tasktopcontainer"},i.a.createElement("div",{className:"tasklogoposition"},i.a.createElement("img",{onClick:function(){R.replace("/TaskListScreen/"),T(!1),M(!1),F(!1)},className:$/1e3==0?"tasklogoicon-active":"tasklogoicon",src:_})),i.a.createElement(i.a.Fragment,null,W?i.a.createElement("div",{className:"share_popupfullscreen"},i.a.createElement("img",{className:"bgimgtop",src:E}),i.a.createElement("div",{className:"menu_mainwindow"},i.a.createElement("div",{className:"titletext"},"SHARE"),i.a.createElement("div",{className:"share_fb"},i.a.createElement("div",{className:"fb1"},i.a.createElement(C.a,{url:"https://thesearch.bengalurusustainabilityforum.org"},i.a.createElement(b.a,{size:"16vw",round:!0}))),i.a.createElement("div",{className:"fb2main"},i.a.createElement("div",{className:"fb2"},i.a.createElement(I.a,{className:"fbicon",url:"https://thesearch.bengalurusustainabilityforum.org"},i.a.createElement(w.a,{size:"16vw",round:!0}))),i.a.createElement("div",{className:"fb2"},i.a.createElement(x.a,{className:"fbicon",url:"https://thesearch.bengalurusustainabilityforum.org"},i.a.createElement(k.a,{size:"16vw",round:!0})))),i.a.createElement("div",{className:"fb3"},i.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://thesearch.bengalurusustainabilityforum.org"))},className:"share_instaicon",src:A}))),i.a.createElement("div",{className:"share_container"},i.a.createElement("div",{className:"share_TextTitle"},"Enjoyed the game?"),i.a.createElement("div",{className:"share_TextTitle"},"Let others know!"))),i.a.createElement("div",{className:"bgbottombluebar"})):null,q?i.a.createElement("div",{className:"share_popupfullscreen"},i.a.createElement("img",{className:"bgimgtop",src:E}),i.a.createElement("div",{className:"menu_mainwindow"},i.a.createElement("div",{className:"titletext"},"SETTINGS"),i.a.createElement("div",{className:"settings_listitem_container"},i.a.createElement("div",{onClick:function(){L(!Z),window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])},className:"settings_listitem"},i.a.createElement("div",{className:"settings_list_starting_semicircle"}),i.a.createElement("div",{className:"settings_listtext"},"PHONE VIBRATION"),Z?i.a.createElement("img",{className:"settings_buttons",src:d}):i.a.createElement("img",{className:"settings_buttons",src:g})),i.a.createElement("div",{onClick:S,className:"settings_listitem"},i.a.createElement("div",{className:"settings_list_starting_semicircle"}),i.a.createElement("div",{className:"settings_listtext"},"BUTTON AUDIO"),t?i.a.createElement("img",{className:"settings_buttons",src:s}):i.a.createElement("img",{className:"settings_buttons",src:l})),i.a.createElement("div",{onClick:function(){window.confirm("would you like to reset the game?")&&Object(N.b)()},className:"settings_listitem"},i.a.createElement("div",{className:"settings_list_starting_semicircle"}),i.a.createElement("div",{className:"settings_listtext"},"Reset Data"),i.a.createElement("img",{className:"settings_buttons",src:m})))),i.a.createElement("div",{className:"bgbottombluebar"})):null,D?i.a.createElement(i.a.Fragment,null,P?i.a.createElement("div",{className:"login_popupfullscreen"},i.a.createElement("img",{className:"bgimgtop",src:E}),i.a.createElement("div",{className:"menu_mainwindow"},i.a.createElement("div",{className:"titletext"},"LOGIN"),i.a.createElement("div",{className:"loginDescription_Text"},"Please select your preferred method to save your game progress."),i.a.createElement("div",{className:"login_popupformcontainer"},i.a.createElement("div",{className:"login_button_container"},i.a.createElement(h.GoogleLogin,{clientId:"581422038025-rte3a06d7kumasu887n64uikerfigmiv.apps.googleusercontent.com",render:function(n){return i.a.createElement("button",{className:"login_googlebutton",onClick:n.onClick,disabled:n.disabled},i.a.createElement("img",{src:u,className:"login_googleicon"}),i.a.createElement("div",{className:"login_buttontext"},"Continue with Google"))},buttonText:"Login",onSuccess:function(n){console.log(n);var e=new FormData,t=n.profileObj;e.append("lastname",t.familyName),e.append("firstname",t.givenName),e.append("photo_url",t.imageUrl),e.append("auth_provider","google"),e.append("email",t.email);var a=JSON.parse(String(localStorage.getItem("UserDetails")));console.log("=========>",a.user),e.append("username",a.user),Object(B.a)(nn,e)},onFailure:function(n){console.log(n)},cookiePolicy:"single_host_origin"})),i.a.createElement("div",{className:"login_button_container"},i.a.createElement(v.a,{appId:"976961256166749"},i.a.createElement(p.Login,{scope:"email",onResponse:function(n){console.log(n.profile),console.log(Response);var e=new FormData,t=n.profile;e.append("lastname",t.first_name),e.append("firstname",t.last_name),e.append("photo_url",""),e.append("auth_provider","fb"),e.append("email",t.email);var a=JSON.parse(String(localStorage.getItem("UserDetails")));console.log("=========>",a.user),e.append("username",a.user),Object(B.a)(nn,e)},onError:function(n){console.log(n)}},i.a.createElement("button",{className:"login_facebookbutton"},i.a.createElement("img",{src:f,className:"login_facebookicon"}),i.a.createElement("div",{className:"login_buttontext"},"Continue with Facebook"))))))),i.a.createElement("div",{className:"bgbottombluebar"})):i.a.createElement("div",{className:"login_popupfullscreen"},i.a.createElement("img",{className:"bgimgtop",src:E}),i.a.createElement("div",{className:"menu_mainwindow"},i.a.createElement("div",{className:"titletext"},"Welcome back"),i.a.createElement("div",{className:"loginDescription_Text"},"we saved your progress in your account"),i.a.createElement("div",{className:"login_popupformcontainer"},i.a.createElement("div",{className:"login_button_container"},i.a.createElement("button",{onClick:function(){M(!D)},className:"login_validatebutton"},i.a.createElement("div",{className:"login_buttontext"},"go back"))))),i.a.createElement("div",{className:"bgbottombluebar"}))):null,i.a.createElement("div",{className:"share_icons"},i.a.createElement("div",{className:"share_iconset",onClick:function(){T(!W),M(!1),F(!1)}},i.a.createElement("div",{className:"share_setimg"},i.a.createElement("img",{className:"share_icon",src:o})),i.a.createElement("div",{className:"share_iconText"},"SHARE")),i.a.createElement("div",{className:"share_iconset",onClick:function(){T(!1),M(!D),F(!1),Object(N.a)()}},i.a.createElement("div",{className:"share_setimg"},i.a.createElement("img",{className:"share_icon",src:c})),i.a.createElement("div",{className:"share_iconText"},"SAVE")),i.a.createElement("div",{className:"share_iconset",onClick:function(){T(!1),M(!1),F(!q)}},i.a.createElement("div",{className:"share_setimg"},i.a.createElement("img",{className:"share_icon",src:r})),i.a.createElement("div",{className:"share_iconText"},"SETTINGS")))))}},520:function(n,e,t){n.exports=t.p+"00a99a6e9130e670011a403508635bbc.png"},521:function(n,e,t){n.exports=t.p+"bae80f50e90068d496192297a800fc20.png"},522:function(n,e,t){n.exports=t.p+"f5cb9e0e1b5b6889ddee77c1d52f4970.png"},523:function(n,e,t){n.exports=t.p+"a9337ad45313b8b087c872f523d4d031.png"},524:function(n,e,t){n.exports=t.p+"bd0fdfa9e0003b4d4aff6463a05ade76.png"},525:function(n,e,t){n.exports=t.p+"7aa5e1999766d9357e945f8efc7b5393.png"},526:function(n,e,t){n.exports=t.p+"be1428f10c53925bc6dc1db7d45333a9.png"},527:function(n,e,t){n.exports=t.p+"67d9da798b625516d4c1d1a9768020d4.png"},710:function(n,e,t){"use strict";var a=t(139),i=t.n(a),o=t(140),r=t.n(o)()(i.a);r.push([n.i,".reward_backimg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -100;\n}\n\n.reward_Text {\n    color: #01003c;\n    font-size: 3vh;\n    font-weight: 600;\n    padding: 0 10vw;\n    z-index: 1;\n}\n\n.reward_img {\n    z-index: 1;\n}\n\n.reward_clue {\n    width: 45vw;\n    height: 42vh;\n    object-fit: contain;\n}\n\n.reward_container {\n    font-size: 5.2vw;\n    font-weight: 600;\n    min-height: 64vh;\n    text-align: center;\n    display: grid;\n    align-content: space-between;\n}\n\n","",{version:3,sources:["webpack://./src/components/Rewardcreen/style.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,4BAA4B;AAChC",sourcesContent:[".reward_backimg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -100;\n}\n\n.reward_Text {\n    color: #01003c;\n    font-size: 3vh;\n    font-weight: 600;\n    padding: 0 10vw;\n    z-index: 1;\n}\n\n.reward_img {\n    z-index: 1;\n}\n\n.reward_clue {\n    width: 45vw;\n    height: 42vh;\n    object-fit: contain;\n}\n\n.reward_container {\n    font-size: 5.2vw;\n    font-weight: 600;\n    min-height: 64vh;\n    text-align: center;\n    display: grid;\n    align-content: space-between;\n}\n\n"],sourceRoot:""}]),e.a=r},711:function(n,e,t){n.exports=t.p+"108695b6a29c4ecc586cb4a022ec6b64.png"},814:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t.n(a),o=t(138),r=t.n(o),c=t(710),A={insert:"head",singleton:!1},s=(r()(c.a,A),c.a.locals,t(453)),l=t(451),d=t(520),g=t(521),m=t(522),u=t(523),f=t(524),h=t(525),p=t(526),v=t(527),B=t(711),C=t(14),b=t(452),I=t(471),w=t(476);function x(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],a=!0,i=!1,o=void 0;try{for(var r,c=n[Symbol.iterator]();!(a=(r=c.next()).done)&&(t.push(r.value),!e||t.length!==e);a=!0);}catch(n){i=!0,o=n}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}var E=[{clue:d,message:"Awesome!",desc:"You’re on the track to a cleaner future."},{clue:g,message:"Wow!",desc:"You are a change maker"},{clue:m,message:"Wow!",desc:"You’re bringing back balance to the wheel of life."},{clue:u,message:"Awesome!",desc:"Are you ready to save the world?"},{clue:f,message:"Congrats!",desc:"You’re voyaging new worlds through books"},{clue:h,message:"Awesome!",desc:"Are you ready to sing for new beginnings? "},{clue:p,message:"Congrats!",desc:"Can you smell the change in the air?"},{clue:v,message:"Wow!",desc:"You have learnt how to track the cost of Air Pollution."},{clue:B,message:"Congratulations!",desc:"You Have Successfully completed all the levels!"}];e.default=function(){var n=x(Object(a.useState)(E[0]),2),e=n[0],t=n[1],o=x(Object(a.useState)({}),2),r=o[0],c=o[1],A=x(Object(a.useState)(!0),2),d=A[0],g=A[1],m=Object(C.g)(),u=Object(C.f)();return Object(a.useEffect)((function(){null===localStorage.getItem("isFirsttime")&&Object(b.b)(),g(!1),t(E[Number(m.id)-1]);var n=JSON.parse(String(localStorage.getItem("RewardTextData")));null!==n&&c(n[Number(m.id)-1]),console.log(n),console.log("===================>",m.id-1)}),[]),i.a.createElement("div",{className:"back_color_main"},d?i.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:"0",zIndex:1e3,backgroundColor:"#00243a"}},i.a.createElement(I.a,null)):null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("img",{className:"bgimgtop",src:s})),i.a.createElement(w.a,null),i.a.createElement("div",{className:"reward_container"},i.a.createElement("div",{className:"reward_Text"},r.message),i.a.createElement("div",{className:"reward_img"},i.a.createElement("img",{onClick:function(){console.log("hello++++++")},className:"reward_clue",src:e.clue})),i.a.createElement("div",{className:"reward_Text"},r.desc),i.a.createElement("div",{className:"forword_button_position"},i.a.createElement("img",{className:"forword_button",onClick:function(){u.replace("/TasklistScreen")},src:l}))),i.a.createElement("div",{className:"bgbottombluebar"})))}}}]);
//# sourceMappingURL=15.f5c6c2e3954848fe3374.js.map