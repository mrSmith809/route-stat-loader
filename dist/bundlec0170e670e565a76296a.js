(()=>{"use strict";var n={559:(n,e,t)=>{t.d(e,{Z:()=>h});var o=t(537),r=t.n(o),i=t(645),a=t.n(i),s=t(667),A=t.n(s),d=new URL(t(812),t.b),l=new URL(t(72),t.b),c=a()(r()),u=A()(d),p=A()(l);c.push([n.id,"@media only screen and (max-width: 600px) {\n    div.borough { width: 100% !important; }\n    div.borough-label { background-color: #fff; }\n}\n\n@media only screen and (max-width: 1350px) {\n    div.route { width: 100% !important; }\n}\n\n@media only screen and (max-width: 390px) {\n    section.toolbar-container div.brand { max-width: 300px;  }\n    section.toolbar-container div.brand h2 { padding: 0 0 0 4rem !important; }\n}\n\n@media only screen and (max-width: 395px) {\n    section.toolbar-container div.brand h2 { padding: 0 0 0 5rem !important; }\n}\n\nhtml, body {\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 0.90em;\n    position: relative;\n    margin: 0;\n    padding: 0;\n}\n\nsection.toolbar-container {\n    position: relative;\n    padding: 1rem;\n    border-bottom: solid 1px #333;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n}\n\nsection.toolbar-container div.brand h2 { \n    margin: 0;\n    padding: .32rem 0 .32rem 3rem;\n    background: url("+u+") no-repeat center left;\n    background-size: contain;\n}\n\nsection.toolbar-container div.tool-list {\n    display: flex;\n    flex-flow: row wrap;\n}\n\nsection.toolbar-container div.tool-list a.tool {\n    display: block;\n    padding: .2rem .3rem;\n    color: #eee;\n    text-decoration: none;\n    font-weight: bold;\n    margin: 0 0.3rem;\n    height: 24px;\n    width: 30px;\n    border-radius: 9px;\n    border: solid 1px #0B6623;\n    background: linear-gradient(145deg, #0a5c20, #0c6d25);\n    box-shadow:  4px 4px 8px #09571e,\n                 -4px -4px 8px #0d7528;\n}\nspan.icon {\n    display: block; \n    height: 100%;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: contain;\n}\n\nspan.home-icon { background-image: url("+p+"); }\n\nsection.toolbar-container div.tool-list .tool:hover { border: solid 1px #008000; }\n\n.display-none { display: none !important; }\n.primary-color { background-color: #0B6623 !important; color: #fff !important; }\n.red-bg { background-color: #ff0000; }\n.yellow-bg { background-color: #FFFF00; }\n.light-green-bg { background-color: #adff2f; }\n.mid-green-bg { background-color: #00ff00; }\n.dark-green-bg { background-color: #32cd32; }\n\n\n.logo-bg {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url("+u+') no-repeat center center;\n    opacity: .1;\n    z-index: -1;\n    background-size: contain;\n\n    -webkit-filter: blur(1px);\n    -moz-filter: blur(1px);\n    -ms-filter: blur(1px);\n    -o-filter: blur(1px);\n}\n\n.modal-bg { position: fixed; }\n\n.modal-bg { \n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    z-index: 9990;\n    opacity: 0.6;\n}\n\n.container-fluid,\n.borough-container { position: inherit; }\n.borough { float: left; width: 33.33%; }\n\ndiv.borough div.borough-label {\n    text-transform: uppercase;\n    box-shadow: 0 4px 3px -4px #008000;\n    font-size: 1.5em;\n    backdrop-filter: blur(7px);\n    border-bottom: solid 1px #999;\n    border-top: solid 1px #fff;\n    white-space: nowrap;\n    font-weight: bold;\n}\n\ndiv.borough div.borough-label > div,\ndiv.borough div.route-container { padding: 1rem; }\n\ndiv.route {\n    position: relative;\n    display: inline-block; \n    white-space: nowrap;\n    min-height: 3rem;\n}\n\ndiv.route .link { \n    text-decoration: none;\n    display: inline-block;\n    padding: 5px 0;\n    color: rgb(86, 129, 209);\n    font-weight: bold;\n}\n\n.borough-container .borough div.route {\n    width: 46%;\n    margin-right: 1rem !important;\n    cursor: pointer;\n    margin: 2.5rem 0;\n}\n\n.borough-container .borough div.route .truck-map { display: none; }\n\n.route-detail-container .route-detail div.route { width: 100%; margin: 1.5rem 0; }\n.route-detail-container .route-detail div.route div.route-label::before { content: "Equipment: "; }\n.route-detail-container .route-detail div.route .route-map { display: none; }\n\ndiv.route div.route-label {\n    font-size: 1.2rem;\n    text-transform: capitalize;\n    font-weight: bold;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\ndiv.route div.outer-progress-bar,\ndiv.route div.outer-progress-bar .inner-progress-bar { border-radius: 20px; }\n\ndiv.route div.outer-progress-bar {\n    position: relative;\n    min-height: inherit;\n    overflow: hidden;\n    border: solid 1px #aaa;\n    backdrop-filter: blur(5px);\n}\n\ndiv.route div.outer-progress-bar .inner-progress-bar,\ndiv.route div.outer-progress-bar .progress-percent { position: absolute; top:0; left: 0; width: 100%; }\ndiv.route div.outer-progress-bar .inner-progress-bar { height: 100%; width: 0; transition: ease-in-out .8s; }\n\ndiv.route div.outer-progress-bar .progress-percent {\n    text-align: center;\n    font-size: 1.4rem;\n    padding: .7rem 0;\n    transition: ease-in-out .1s;\n}\n\n.borough-container .borough div.route:hover div.outer-progress-bar .progress-percent { font-size: 2rem;  }\n\naside.route-detail-container {\n    position: fixed;\n    top: 0;\n    right:0;\n    height: 100%;\n    width: 0;\n    z-index: 9991;\n    background-color: #fff;\n    max-width: 400px;\n    box-shadow: 1px 0 3px #333;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    transition: ease-in-out .3s;\n}\n\naside.route-detail-container div.tool-list { text-align: right; font-weight: 100; color: #444; }\n\naside.route-detail-container div.tool-list .tool { \n    display: inline-block; \n    font-size: 2.6rem; \n    cursor: pointer; \n    padding: 0 2rem; \n    outline: none;\n    user-select: none;\n}\n\ndiv.selected-route-label { padding: 0 2rem; font-weight: bold; font-size: 1.2rem; }\n\nsection.route-detail {\n    padding: 2rem;\n    padding-top: 0;\n    display: flex;\n    flex-flow: row wrap;\n}\n\nsection.route-detail .inner-progress-bar { background-color: rgb(222, 222, 222) !important; }\n\n/* NOTIFICATION STYLES */\n\ndiv.notification-container {\n    width: 300px;\n    min-height: 70px;\n    background-color: #fff;\n    position: fixed;\n    right: 4%;\n    bottom: 8%;\n    box-shadow: 0 0 10px 1px #444;\n    border-radius: 8px;\n    border: solid 2px #000;\n}\n\ndiv.message-list {\n    padding: 10px 20px;\n    position: relative;\n    height: 100%;\n    width: calc(100% - 40px);\n}\n\ndiv.message { border-bottom: solid 1px #eee; padding-bottom: 15px; }\ndiv.message:first-child { border-bottom: none !important; }\ndiv.message-actions { display: flex; }\n\ndiv.message-actions button {\n    border: none;\n    background: none;\n    cursor: pointer;\n    margin-left: auto;\n}\n\ndiv.message-body { font-size: 1rem; }\n\nsection.datetime-container {\n    padding-right: 1rem;\n    text-align: right;\n    color: #333;\n    backdrop-filter: blur(7px);\n}\n\n',"",{version:3,sources:["webpack://./src/app/styles.css"],names:[],mappings:"AAAA;IACI,cAAc,sBAAsB,EAAE;IACtC,oBAAoB,sBAAsB,EAAE;AAChD;;AAEA;IACI,YAAY,sBAAsB,EAAE;AACxC;;AAEA;IACI,sCAAsC,gBAAgB,GAAG;IACzD,yCAAyC,8BAA8B,EAAE;AAC7E;;AAEA;IACI,yCAAyC,8BAA8B,EAAE;AAC7E;;AAEA;IACI,yCAAyC;IACzC,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA;IACI,SAAS;IACT,6BAA6B;IAC7B,yEAA6D;IAC7D,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,qDAAqD;IACrD;sCACkC;AACtC;AACA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA,iBAAiB,yDAA4C,EAAE;;AAE/D,sDAAsD,yBAAyB,EAAE;;AAEjF,gBAAgB,wBAAwB,EAAE;AAC1C,iBAAiB,oCAAoC,EAAE,sBAAsB,EAAE;AAC/E,UAAU,yBAAyB,EAAE;AACrC,aAAa,yBAAyB,EAAE;AACxC,kBAAkB,yBAAyB,EAAE;AAC7C,gBAAgB,yBAAyB,EAAE;AAC3C,iBAAiB,yBAAyB,EAAE;;;AAG5C;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,2EAA+D;IAC/D,WAAW;IACX,WAAW;IACX,wBAAwB;;IAExB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA,YAAY,eAAe,EAAE;;AAE7B;IACI,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,YAAY;AAChB;;AAEA;qBACqB,iBAAiB,EAAE;AACxC,WAAW,WAAW,EAAE,aAAa,EAAE;;AAEvC;IACI,yBAAyB;IACzB,kCAAkC;IAClC,gBAAgB;IAChB,0BAA0B;IAC1B,6BAA6B;IAC7B,0BAA0B;IAC1B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;kCACkC,aAAa,EAAE;;AAEjD;IACI,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;AACpB;;AAEA,mDAAmD,aAAa,EAAE;;AAElE,kDAAkD,WAAW,EAAE,gBAAgB,EAAE;AACjF,0EAA0E,sBAAsB,EAAE;AAClG,6DAA6D,aAAa,EAAE;;AAE5E;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;uDACuD,mBAAmB,EAAE;;AAE5E;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;qDACqD,kBAAkB,EAAE,KAAK,EAAE,OAAO,EAAE,WAAW,EAAE;AACtG,uDAAuD,YAAY,EAAE,QAAQ,EAAE,2BAA2B,EAAE;;AAE5G;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA,uFAAuF,eAAe,GAAG;;AAEzG;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,QAAQ;IACR,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA,6CAA6C,iBAAiB,EAAE,gBAAgB,EAAE,WAAW,EAAE;;AAE/F;IACI,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA,2BAA2B,eAAe,EAAE,iBAAiB,EAAE,iBAAiB,EAAE;;AAElF;IACI,aAAa;IACb,cAAc;IACd,aAAa;IACb,mBAAmB;AACvB;;AAEA,2CAA2C,+CAA+C,EAAE;;AAE5F,wBAAwB;;AAExB;IACI,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,eAAe;IACf,SAAS;IACT,UAAU;IACV,6BAA6B;IAC7B,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA,cAAc,6BAA6B,EAAE,oBAAoB,EAAE;AACnE,0BAA0B,8BAA8B,EAAE;AAC1D,sBAAsB,aAAa,EAAE;;AAErC;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA,mBAAmB,eAAe,EAAE;;AAEpC;IACI,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,0BAA0B;AAC9B",sourcesContent:['@media only screen and (max-width: 600px) {\n    div.borough { width: 100% !important; }\n    div.borough-label { background-color: #fff; }\n}\n\n@media only screen and (max-width: 1350px) {\n    div.route { width: 100% !important; }\n}\n\n@media only screen and (max-width: 390px) {\n    section.toolbar-container div.brand { max-width: 300px;  }\n    section.toolbar-container div.brand h2 { padding: 0 0 0 4rem !important; }\n}\n\n@media only screen and (max-width: 395px) {\n    section.toolbar-container div.brand h2 { padding: 0 0 0 5rem !important; }\n}\n\nhtml, body {\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 0.90em;\n    position: relative;\n    margin: 0;\n    padding: 0;\n}\n\nsection.toolbar-container {\n    position: relative;\n    padding: 1rem;\n    border-bottom: solid 1px #333;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n}\n\nsection.toolbar-container div.brand h2 { \n    margin: 0;\n    padding: .32rem 0 .32rem 3rem;\n    background: url(./assets/dsny_logo.png) no-repeat center left;\n    background-size: contain;\n}\n\nsection.toolbar-container div.tool-list {\n    display: flex;\n    flex-flow: row wrap;\n}\n\nsection.toolbar-container div.tool-list a.tool {\n    display: block;\n    padding: .2rem .3rem;\n    color: #eee;\n    text-decoration: none;\n    font-weight: bold;\n    margin: 0 0.3rem;\n    height: 24px;\n    width: 30px;\n    border-radius: 9px;\n    border: solid 1px #0B6623;\n    background: linear-gradient(145deg, #0a5c20, #0c6d25);\n    box-shadow:  4px 4px 8px #09571e,\n                 -4px -4px 8px #0d7528;\n}\nspan.icon {\n    display: block; \n    height: 100%;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: contain;\n}\n\nspan.home-icon { background-image: url(./assets/home_ico.png); }\n\nsection.toolbar-container div.tool-list .tool:hover { border: solid 1px #008000; }\n\n.display-none { display: none !important; }\n.primary-color { background-color: #0B6623 !important; color: #fff !important; }\n.red-bg { background-color: #ff0000; }\n.yellow-bg { background-color: #FFFF00; }\n.light-green-bg { background-color: #adff2f; }\n.mid-green-bg { background-color: #00ff00; }\n.dark-green-bg { background-color: #32cd32; }\n\n\n.logo-bg {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url(./assets/dsny_logo.png) no-repeat center center;\n    opacity: .1;\n    z-index: -1;\n    background-size: contain;\n\n    -webkit-filter: blur(1px);\n    -moz-filter: blur(1px);\n    -ms-filter: blur(1px);\n    -o-filter: blur(1px);\n}\n\n.modal-bg { position: fixed; }\n\n.modal-bg { \n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    z-index: 9990;\n    opacity: 0.6;\n}\n\n.container-fluid,\n.borough-container { position: inherit; }\n.borough { float: left; width: 33.33%; }\n\ndiv.borough div.borough-label {\n    text-transform: uppercase;\n    box-shadow: 0 4px 3px -4px #008000;\n    font-size: 1.5em;\n    backdrop-filter: blur(7px);\n    border-bottom: solid 1px #999;\n    border-top: solid 1px #fff;\n    white-space: nowrap;\n    font-weight: bold;\n}\n\ndiv.borough div.borough-label > div,\ndiv.borough div.route-container { padding: 1rem; }\n\ndiv.route {\n    position: relative;\n    display: inline-block; \n    white-space: nowrap;\n    min-height: 3rem;\n}\n\ndiv.route .link { \n    text-decoration: none;\n    display: inline-block;\n    padding: 5px 0;\n    color: rgb(86, 129, 209);\n    font-weight: bold;\n}\n\n.borough-container .borough div.route {\n    width: 46%;\n    margin-right: 1rem !important;\n    cursor: pointer;\n    margin: 2.5rem 0;\n}\n\n.borough-container .borough div.route .truck-map { display: none; }\n\n.route-detail-container .route-detail div.route { width: 100%; margin: 1.5rem 0; }\n.route-detail-container .route-detail div.route div.route-label::before { content: "Equipment: "; }\n.route-detail-container .route-detail div.route .route-map { display: none; }\n\ndiv.route div.route-label {\n    font-size: 1.2rem;\n    text-transform: capitalize;\n    font-weight: bold;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\ndiv.route div.outer-progress-bar,\ndiv.route div.outer-progress-bar .inner-progress-bar { border-radius: 20px; }\n\ndiv.route div.outer-progress-bar {\n    position: relative;\n    min-height: inherit;\n    overflow: hidden;\n    border: solid 1px #aaa;\n    backdrop-filter: blur(5px);\n}\n\ndiv.route div.outer-progress-bar .inner-progress-bar,\ndiv.route div.outer-progress-bar .progress-percent { position: absolute; top:0; left: 0; width: 100%; }\ndiv.route div.outer-progress-bar .inner-progress-bar { height: 100%; width: 0; transition: ease-in-out .8s; }\n\ndiv.route div.outer-progress-bar .progress-percent {\n    text-align: center;\n    font-size: 1.4rem;\n    padding: .7rem 0;\n    transition: ease-in-out .1s;\n}\n\n.borough-container .borough div.route:hover div.outer-progress-bar .progress-percent { font-size: 2rem;  }\n\naside.route-detail-container {\n    position: fixed;\n    top: 0;\n    right:0;\n    height: 100%;\n    width: 0;\n    z-index: 9991;\n    background-color: #fff;\n    max-width: 400px;\n    box-shadow: 1px 0 3px #333;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    transition: ease-in-out .3s;\n}\n\naside.route-detail-container div.tool-list { text-align: right; font-weight: 100; color: #444; }\n\naside.route-detail-container div.tool-list .tool { \n    display: inline-block; \n    font-size: 2.6rem; \n    cursor: pointer; \n    padding: 0 2rem; \n    outline: none;\n    user-select: none;\n}\n\ndiv.selected-route-label { padding: 0 2rem; font-weight: bold; font-size: 1.2rem; }\n\nsection.route-detail {\n    padding: 2rem;\n    padding-top: 0;\n    display: flex;\n    flex-flow: row wrap;\n}\n\nsection.route-detail .inner-progress-bar { background-color: rgb(222, 222, 222) !important; }\n\n/* NOTIFICATION STYLES */\n\ndiv.notification-container {\n    width: 300px;\n    min-height: 70px;\n    background-color: #fff;\n    position: fixed;\n    right: 4%;\n    bottom: 8%;\n    box-shadow: 0 0 10px 1px #444;\n    border-radius: 8px;\n    border: solid 2px #000;\n}\n\ndiv.message-list {\n    padding: 10px 20px;\n    position: relative;\n    height: 100%;\n    width: calc(100% - 40px);\n}\n\ndiv.message { border-bottom: solid 1px #eee; padding-bottom: 15px; }\ndiv.message:first-child { border-bottom: none !important; }\ndiv.message-actions { display: flex; }\n\ndiv.message-actions button {\n    border: none;\n    background: none;\n    cursor: pointer;\n    margin-left: auto;\n}\n\ndiv.message-body { font-size: 1rem; }\n\nsection.datetime-container {\n    padding-right: 1rem;\n    text-align: right;\n    color: #333;\n    backdrop-filter: blur(7px);\n}\n\n'],sourceRoot:""}]);const h=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var A=n[s],d=o.base?A[0]+o.base:A[0],l=i[d]||0,c="".concat(d," ").concat(l);i[d]=l+1;var u=t(c),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var h=r(p,o);o.byIndex=s,e.splice(s,0,{identifier:c,updater:h,references:1})}a.push(c)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var A=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=A}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},812:(n,e,t)=>{n.exports=t.p+"dsny_logo.png"},72:(n,e,t)=>{n.exports=t.p+"home_ico.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),A=t.n(s),d=t(216),l=t.n(d),c=t(589),u=t.n(c),p=t(559),h={};h.styleTagTransform=u(),h.setAttributes=A(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;class g{executables=[];constructor(n){if(this.constructor===g)throw new Error("Artifact class cannot be instantiated.");Object.defineProperty(this,"element",{value:n,writable:!1})}}class m extends g{constructor(n){if(super(n),this.constructor===m)throw new Error("Abstract class cannot be instantiated.")}_show=()=>this.element.classList.remove("display-none");_hide=()=>this.element.classList.add("display-none")}const B=new class extends m{constructor(){super(document.querySelector(".modal-bg")),this.element&&this.element.addEventListener("click",(()=>this.executables.forEach((n=>n()))))}init=n=>this.executables=n;show=()=>this._show();hide=()=>this._hide()};class b extends g{constructor(n){if(super(n),this.constructor===b)throw new Error("Abstract class cannot be instantiated.")}_show=n=>this.element.style.width=n;_hide=()=>this.element.style.width=0}const f=new class extends b{constructor(){super(document.querySelector(".route-detail-container"))}show=()=>this._show("70%");hide=()=>this._hide()};f.selectedRoute=new class extends g{constructor(){super(document.querySelector(".selected-route-label"))}},f.closeBtn=new class extends g{constructor(){super(document.getElementById("closeRouteDetailBtn")),this.element&&this.element.addEventListener("click",(()=>this.executables.forEach((n=>n()))))}init=n=>this.executables=n};const C={MB:{name:"Manhattan-Bronx",orderNum:1},BQ:{name:"Brooklyn-Queens",orderNum:2},SI:{name:"Staten Island",orderNum:3}},v={BQ_99_RH_H101:"Belt Parkway",MB_99_RH_H101:"Bronx River Parkway",BQ_99_RH_H102:"Brooklyn Queens Expressway",MB_99_RH_H102:"Bruckner Expressway",BQ_99_RH_H103:"Clearview Expressway",MB_99_RH_H103:"Cross Bronx Expressway",BQ_99_RH_H104:"Cross Island Parkway",SI_99_RH_H101:"Dr M L King Jr Expressway",MB_99_RH_H104:"Franklin D Roosevelt Drive",BQ_99_RH_H105:"Gowanus Expressway",BQ_99_RH_H106:"Grand Central Parkway",MB_99_RH_H105:"Harlem River Drive",MB_99_RH_H106:"Henry Hudson Parkway",MB_99_RH_H107:"Hutchinson River Parkway",BQ_99_RH_H107:"Jackie Robinson Parkway",SI_99_RH_H102:"Korean War Vets Parkway",BQ_99_RH_H108:"Long Island Expressway",MB_99_RH_H108:"Major Deegan Expressway",MB_99_RH_H109:"Mosholu Parkway",BQ_99_RH_H109:"Nassau Expressway",MB_99_RH_H110:"Pelham Parkway",BQ_99_RH_H110:"Prospect Expressway",MB_99_RH_H111:"Sheridan Boulevard",SI_99_RH_H103:"Staten Island Expressway",BQ_99_RH_H111:"Van Wyck Expressway",SI_99_RH_H104:"West Shore Expressway"};class x{constructor(){this.description="No class identified to properly instantiate"}}const w=new class{constructor(n){Object.assign(this,n)}create=(n,e)=>{try{return new this[n](e)}catch{return new x}}}({Route:class{#n(n){const e=Math.abs(100*n);return e<50?"red-bg":e>=50&&e<70?"yellow-bg":e>=70&&e<80?"light-green-bg":e>=80&&e<90?"mid-green-bg":"dark-green-bg"}constructor(n){Object.assign(this,n),this.fullName=v[this.route_name],this.equipments=[]}template(n="fullName",e="pctcomp_combined",t){const o=document.createElement("div");return o.classList.add("route"),o.id=this.route_name,o.title=this[n],o.innerHTML=`\n            <div class="route-label">${this[n]}</div>  \n            <a class="link route-map" href="http://10.155.228.80:4200/ruto-pub/percent-complete/${this.mongo_id}?startTime=${this.dateTimeStamp.start}&endTime=${this.dateTimeStamp.end}&equipment=${this.equipments.join(",")}" title="Route Map">Route Map</a>\n            <a class="link truck-map" href="http://10.155.228.80:4200/ruto-pub/percent-complete/${this.mongo_id}?startTime=${this.dateTimeStamp.start}&endTime=${this.dateTimeStamp.end}&equipment=${this.equipment_id}" title="Truck Map">Truck Map</a>\n            <div class="outer-progress-bar">\n                <div class="inner-progress-bar ${this.#n(this[e])}"></div>\n                <div class="progress-percent">${(100*this[e]).toFixed(1)}%</div>\n            </div>`,t&&o.addEventListener("click",(function(){t(this)})),o}},Borough:class{constructor(n){Object.assign(this,n),this.fullName=C[this.borough]&&C[this.borough].name,this.Route=[]}template(n){const e=document.createElement("div");return e.classList.add("borough"),e.id=this.borough,e.innerHTML=`\n            <div class="borough-label">\n                <div>${this.fullName}</div>\n            </div>\n            <div class="route-container"></div>`,n&&e.addEventListener("click",n),e}},Schema:class{constructor(n){Object.assign(this,n),this.table,this.relation}},NonArtifact:x,Message:function(n){this.template=()=>`\n        <div class="message">\n            <div class="message-actions">\n                <button class="btn message-close-btn" title="Close Message">X</button>\n            </div>\n            <div class="message-body">${n}</div>\n        </div>`}}),I=new class{#e;#t=[];#o=[];#r;#i={start:null,end:null};#a(n){return[...new Set(n.map((n=>n.borough)))].map((e=>n.find((n=>n.borough===e))))}#s=n=>n.map((n=>this.#e.create("Borough",n)));#A=n=>n.map((n=>(n.dateTimeStamp=this.#i,this.#e.create("Route",n))));constructor(n){this.#e=n}load(n){this.#t=this.#s(this.#a(n.routes)),this.#o=this.#A(n.routes),this.#i.start=`${n.startStamp.date} ${n.startStamp.time}`,this.#i.end=`${n.endStamp.date} ${n.endStamp.time}`}sortByOrderNum(){this.#t=this.#t.sort(((n,e)=>C[n.shortName]&&C[e.shortName]&&C[n.shortName].orderNum<C[e.shortName].orderNum?-1:1))}getUniqueRoutes(){const n={};for(let e of this.#o)n[e.route_name]?n[e.route_name].equipments.push(e.equipment_id):(e.equipments.push(e.equipment_id),n[e.route_name]=e);return Object.values(n)}getBoroughs=()=>this.#t;getRoutesByName=n=>this.#o.filter((e=>e.route_name===n));getDatetime=()=>`${this.#i.start} - ${this.#i.end}`;getRouteMapLink=()=>this.#r}(w),E=new class{#d;domain(n){return this.#d=n,this}getParameters=()=>window.location.hash.substring(1);get(n){const e=this.#d+n;return fetch(e).then((n=>{if(n.ok)return n.json();throw new Error("Unable to load data")}))}};class y{constructor(){if(this.constructor===y)throw new Error("Renderer class cannot be instantiated.")}render(n,e,t){return new Promise(((o,r)=>{for(let o of e)n(o).appendChild(t(o));setTimeout(o,100)}))}}const k=new class extends y{getContainer=()=>document.getElementById("boroughContainer");renderBoroughs=n=>this.render(this.getContainer,n,(n=>n.template()))};class _ extends y{getContainer=n=>{let e=n?document.getElementById(n.borough):document;return e=e.querySelectorAll(".route-container"),n?e[0]:e};getRoutesFromContainers(n){const e=[];return n.forEach((n=>e.push(...n.children))),e}setPercentageFill(){let n=this.getContainer();n=n.tagName?[n]:n;const e=this.getRoutesFromContainers(n);let t,o;for(let n of e)o=n.querySelector(".progress-percent").innerHTML,t=n.querySelector(".inner-progress-bar"),t.style.width=o}renderRoute=(n,e)=>this.render(this.getContainer,n,(n=>n.template(void 0,void 0,e)))}const R=new _,H=new class extends _{getContainer=()=>document.getElementById("routeDetail");renderRoute=async n=>{this.getContainer().innerHTML="",await this.render(this.getContainer,n,(n=>n.template("equipment_id","pctcomp_specific")))}},S=new class extends g{constructor(){super(document.querySelector(".datetime-container"))}};B.init([n=>B.hide(),n=>f.hide()]),f.closeBtn.init([n=>B.hide(),n=>f.hide()]),E.domain("./json_dataset.json").get(E.getParameters()).then((n=>I.load(n))).then((n=>I.sortByOrderNum())).then((n=>k.renderBoroughs(I.getBoroughs()))).then((n=>R.renderRoute(I.getUniqueRoutes(),(n=>{const e=I.getRoutesByName(n.id);H.renderRoute(e).then((n=>{f.selectedRoute.element.textContent=e[0].fullName,f.show(),B.show()})).then((n=>H.setPercentageFill()))})))).then((n=>R.setPercentageFill())).then((n=>S.element.textContent=I.getDatetime())).catch((n=>{console.error(n)})),t.p})()})();
//# sourceMappingURL=bundlec0170e670e565a76296a.js.map