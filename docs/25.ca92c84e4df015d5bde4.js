(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{451:function(n,r,e){n.exports=e.p+"12c31d4081a9828edb9d938ac731984d.png"},798:function(n,r,e){"use strict";var t=e(139),o=e.n(t),i=e(140),a=e.n(i)()(o.a);a.push([n.i,".background {\r\n    background-color: #3998ac;\r\n    display: grid;\r\n    height: 100vh;\r\n}\r\n\r\n.topband {\r\n    background-color: #00243a;\r\n    border-style: solid;\r\n    border-color: #ff9400;\r\n    border-width: 6px 0 6px;\r\n    width: 100vw;\r\n    height: 37vh;\r\n    margin-top: 21%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.videoplayer {\r\n    height: inherit;\r\n    width: inherit;\r\n    text-align: center;\r\n}\r\n\r\n.bottomband {\r\n    background-color: #FFFFFF;\r\n    width: 80vw;\r\n    height: 40vh;\r\n    align-self: end;\r\n    justify-self: center;\r\n    justify-items: center;\r\n    display: grid;\r\n    padding: 3.3vh 0;\r\n}\r\n\r\n.startscanneriocn {\r\n    width: 31vw;\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n.conclusion_screen_text {\r\n    font-size: 5.5vw;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    text-align: center;\r\n    align-self: center;\r\n}\r\n\r\n.conclusion_screen_text_container {\r\n    display: grid;\r\n}\r\n\r\n.feedback_container {\r\n    align-self: center;\r\n}\r\n\r\n.feedback_button {\r\n    color: #f7941d;\r\n    font-size: 5.5vw;\r\n    font-weight: 600;\r\n    border-radius: 25px;\r\n    background-color: #01003c;\r\n    padding: 3vh 7vw;\r\n    border-color: #f7941d;\r\n    border-width: 1.5vw;\r\n    line-height: 6.5vw;\r\n    border-style: solid;\r\n}\r\n\r\n.completion_backposition{\r\n    display: grid;\r\n    align-self: center;\r\n}\r\n\r\n.completion_backicon {\r\n    width: 8vw;\r\n    height: 6vh;\r\n    object-fit: contain;\r\n}","",{version:3,sources:["webpack://./src/components/CompletionScreen/style.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;AACvB",sourcesContent:[".background {\r\n    background-color: #3998ac;\r\n    display: grid;\r\n    height: 100vh;\r\n}\r\n\r\n.topband {\r\n    background-color: #00243a;\r\n    border-style: solid;\r\n    border-color: #ff9400;\r\n    border-width: 6px 0 6px;\r\n    width: 100vw;\r\n    height: 37vh;\r\n    margin-top: 21%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.videoplayer {\r\n    height: inherit;\r\n    width: inherit;\r\n    text-align: center;\r\n}\r\n\r\n.bottomband {\r\n    background-color: #FFFFFF;\r\n    width: 80vw;\r\n    height: 40vh;\r\n    align-self: end;\r\n    justify-self: center;\r\n    justify-items: center;\r\n    display: grid;\r\n    padding: 3.3vh 0;\r\n}\r\n\r\n.startscanneriocn {\r\n    width: 31vw;\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n.conclusion_screen_text {\r\n    font-size: 5.5vw;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    text-align: center;\r\n    align-self: center;\r\n}\r\n\r\n.conclusion_screen_text_container {\r\n    display: grid;\r\n}\r\n\r\n.feedback_container {\r\n    align-self: center;\r\n}\r\n\r\n.feedback_button {\r\n    color: #f7941d;\r\n    font-size: 5.5vw;\r\n    font-weight: 600;\r\n    border-radius: 25px;\r\n    background-color: #01003c;\r\n    padding: 3vh 7vw;\r\n    border-color: #f7941d;\r\n    border-width: 1.5vw;\r\n    line-height: 6.5vw;\r\n    border-style: solid;\r\n}\r\n\r\n.completion_backposition{\r\n    display: grid;\r\n    align-self: center;\r\n}\r\n\r\n.completion_backicon {\r\n    width: 8vw;\r\n    height: 6vh;\r\n    object-fit: contain;\r\n}"],sourceRoot:""}]),r.a=a},819:function(n,r,e){"use strict";e.r(r);var t=e(1),o=e.n(t),i=e(138),a=e.n(i),c=e(798),A={insert:"head",singleton:!1},l=(a()(c.a,A),c.a.locals,e(451)),s=e(14),d=e(471),u=e(452);function f(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],t=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(t=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);t=!0);}catch(n){o=!0,i=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return e}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return g(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}r.default=function(){var n=f(Object(t.useState)(!0),2),r=n[0],e=n[1],i=Object(s.f)();Object(t.useEffect)((function(){null===localStorage.getItem("isFirsttime")&&Object(u.b)(),setTimeout((function(){null===localStorage.getItem("ShownIntroscreen")?(localStorage.setItem("ShownIntroscreen","true"),e(!1)):e(!1)}),1e3)}),[]);window.innerHeight;var a=f(Object(t.useState)(!1),2),c=a[0],A=a[1];Object(t.useEffect)((function(){c&&new Promise((function(n){return setTimeout(n,2e3)})).then((function(){A(!1)}))}),[c]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"background"},r?o.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:"0",zIndex:10,backgroundColor:"#00243a"}},o.a.createElement(d.a,null)):null,o.a.createElement("div",{className:"topband"},o.a.createElement("div",{className:"videoplayer"},o.a.createElement("iframe",{src:"https://player.vimeo.com/video/506001435?byline=false&playsinline=false&title=false",width:"100%",height:"100%",frameBorder:"0"}))),o.a.createElement("div",{className:"bottomband"},o.a.createElement("div",{className:"conclusion_screen_text_container"},o.a.createElement("div",{className:"conclusion_screen_text"},"Enjoyed the game?")),o.a.createElement("div",{className:"feedback_container"},o.a.createElement("button",{className:"feedback_button",variant:"primary",disabled:c,onClick:function(){window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeqHIQW4_p_7EcDwgOC3_Z1WNfagdWjwdpxNJkzuvQKnSmePA/viewform?usp=sf_link"}},c?"Loading…":o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Share"),o.a.createElement("div",null,"your"),o.a.createElement("div",null,"feedback!")))),o.a.createElement("div",{className:"completion_backposition"},o.a.createElement("img",{className:"completion_backicon",onClick:function(){i.replace("/RewardScreen/9")},src:l}))))))}}}]);
//# sourceMappingURL=25.ca92c84e4df015d5bde4.js.map