(function(t){function e(e){for(var s,a,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},i=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/snakeJS/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var h=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0008":function(t,e,r){"use strict";var s=r("4176"),n=r.n(s);n.a},"034f":function(t,e,r){"use strict";var s=r("85ec"),n=r.n(s);n.a},"0f08":function(t,e,r){},"1f3c":function(t,e,r){},"2b52":function(t,e,r){},"2ee0":function(t,e,r){},"3b20":function(t,e,r){},"3bdc":function(t,e,r){"use strict";var s=r("1f3c"),n=r.n(s);n.a},4117:function(t,e,r){},4176:function(t,e,r){},4344:function(t,e,r){"use strict";var s=r("8e12"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=r("2f62"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("grayout"),r("highscoreBoard"),r("selectColor"),r("navigation"),r("mainBoard")],1)},a=[],o=(r("cb29"),r("d4ec")),c=r("bee2"),u=(r("fb6a"),function(){function t(){Object(o["a"])(this,t),this._stepWidth=20,this._dx=0,this._dy=this._stepWidth,this._partRadius=10,this._direction="s",this._head={x:210,y:210},this._parts=[],this._headColor="#005d00",this._firstColor="#038c00",this._secondColor="#50bd3d"}return Object(c["a"])(t,[{key:"randomDirection",value:function(t){var e=Math.floor(Math.random()*t.length);return t[e]}},{key:"keyBoardHandler",value:function(t){var e=t.key,r="ArrowUp"===e||"ArrowDown"===e||"ArrowLeft"===e||"ArrowRight"===e,s="w"===e||"a"===e||"s"===e||"d"===e;e!==this.direction&&(r||s)&&this.changeDirection(e)}},{key:"changeDirection",value:function(t){var e=this.isDirectionInverse(t);if(!e)switch(t){case"a":this.dx=-this.stepWidth,this.dy=0,this.direction=t;break;case"d":this.dx=this.stepWidth,this.dy=0,this.direction=t;break;case"w":this.dx=0,this.dy=-this.stepWidth,this.direction=t;break;case"s":this.dx=0,this.dy=this.stepWidth,this.direction=t;break;case"ArrowLeft":this.dx=-this.stepWidth,this.dy=0,this.direction=t;break;case"ArrowRight":this.dx=this.stepWidth,this.dy=0,this.direction=t;break;case"ArrowUp":this.dx=0,this.dy=-this.stepWidth,this.direction=t;break;case"ArrowDown":this.dx=0,this.dy=this.stepWidth,this.direction=t;break}}},{key:"isDirectionInverse",value:function(t){var e=this.direction+t;switch(e){case"da":return!0;case"ad":return!0;case"ws":return!0;case"sw":return!0;case"ArrowUpArrowDown":return!0;case"ArrowDownArrowUp":return!0;case"ArrowLeftArrowRight":return!0;case"ArrowRightArrowLeft":return!0;case"sArrowUp":return!0;case"ArrowUps":return!0;case"dArrowLeft":return!0;case"ArrowLeftd":return!0;case"aArrowRight":return!0;case"ArrowRighta":return!0;case"wArrowDown":return!0;case"ArrowDownw":return!0}}},{key:"createBody",value:function(){for(var t=this.head.x,e=this.head.y-this.stepWidth,r=0;r<10;r++){var s={x:t,y:e};this._parts.push(s),e-=this.stepWidth}}},{key:"addBodyPart",value:function(){var t=this._parts.slice(-1)[0],e={x:t.x,y:t.y};this._parts.push(e)}},{key:"borderDetection",value:function(t){var e=this.direction,r=this.dx,s=this.dy,n=qt.state.height,i=qt.state.width;switch(e){case"d":return t["x"]+r>i;case"a":return t["x"]<0;case"w":return t["y"]<0;case"s":return t["y"]+s>n;case"ArrowRight":return t["x"]+r>i;case"ArrowLeft":return t["x"]<0;case"ArrowUp":return t["y"]<0;case"ArrowDown":return t["y"]+s>n}}},{key:"checkBorderProximity",value:function(t){if(this.borderDetection(t))switch(this.direction){case"d":t["x"]=-this.partRadius;break;case"a":t["x"]=qt.state.width+this.partRadius;break;case"w":t["y"]=qt.state.height+this.partRadius;break;case"s":t["y"]=-this.partRadius;break;case"ArrowRight":t["x"]=-this.partRadius;break;case"ArrowLeft":t["x"]=qt.state.width+this.partRadius;break;case"ArrowUp":t["y"]=qt.state.height+this.partRadius;break;case"ArrowDown":t["y"]=-this.partRadius;break}}},{key:"move",value:function(){var t=this.head,e={x:t.x,y:t.y};this.checkBorderProximity(t),t.x+=this.dx,t.y+=this.dy,this._parts.unshift(e),this._parts.pop()}},{key:"eatMeatBall",value:function(){this.addBodyPart()}},{key:"headColor",get:function(){return this._headColor},set:function(t){this._headColor=t}},{key:"firstColor",get:function(){return this._firstColor},set:function(t){this._firstColor=t}},{key:"secondColor",get:function(){return this._secondColor},set:function(t){this._secondColor=t}},{key:"stepWidth",get:function(){return this._stepWidth}},{key:"dx",get:function(){return this._dx},set:function(t){this._dx=t}},{key:"dy",get:function(){return this._dy},set:function(t){this._dy=t}},{key:"direction",get:function(){return this._direction},set:function(t){this._direction=t}},{key:"parts",get:function(){return this._parts}},{key:"head",get:function(){return this._head}},{key:"partRadius",get:function(){return this._partRadius}}]),t}()),h=function(){function t(){Object(o["a"])(this,t),this._radius=10,this._wasEaten=!1,this._outerColor="#E46565",this._innerColor="#ad343b"}return Object(c["a"])(t,[{key:"newRandomPosition",value:function(t,e){var r=10,s=t-10,n=10,i=e-10,a=Math.floor(Math.random()*(s-r+1)+r);while(a%10!=0)a=Math.floor(Math.random()*(s-r+1)+r);a%20==0&&(a+=10),this.x=a;var o=Math.floor(Math.random()*(i-n+1)+n);while(o%10!=0)o=Math.floor(Math.random()*(i-n+1)+n);o%20==0&&(o+=10),this.y=o}},{key:"x",get:function(){return this._x},set:function(t){this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._y=t}},{key:"outerColor",get:function(){return this._outerColor}},{key:"innerColor",get:function(){return this._innerColor}},{key:"radius",get:function(){return this._radius}},{key:"wasEaten",get:function(){return this._wasEaten},set:function(t){this._wasEaten=t}},{key:"toleranceArea",get:function(){return this._toleranceArea}}]),t}(),l=function(){function t(){Object(o["a"])(this,t),this.snake=new u,this.meatball=new h}return Object(c["a"])(t,[{key:"init",value:function(){document.addEventListener("keydown",function(t){this.snake.keyBoardHandler(t)}.bind(this)),this.snake.createBody(),this.setSnakeColorSet(),this.meatball.newRandomPosition(qt.state.width,qt.state.height),this.run()}},{key:"run",value:function(){var t=this;qt.commit("checkHighScore"),this.clearCanvas(),this.drawCanvas();var e=this.meatball;e.wasEaten&&(e.wasEaten=!1,this.meatball.newRandomPosition(qt.state.width,this.store.state.height));var r=0;window.requestAnimationFrame((function(){return t.update(r)}))}},{key:"update",value:function(t){var e=this;t<5?window.requestAnimationFrame((function(){return e.update(t+=1)})):(t=0,qt.state.showGameOver||(this.snake.move(),this.snakeBodyCollision(),this.checkMeatBallCollision(),this.clearCanvas(),this.drawCanvas(),window.requestAnimationFrame((function(){return e.update(t+=1)}))))}},{key:"setSnakeColorSet",value:function(){var t=qt.state.choosenColor,e=qt.state.colorSets[t];this.snake.headColor=e["dark"],this.snake.firstColor=e["primary"],this.snake.secondColor=e["light"]}},{key:"clearCanvas",value:function(){qt.state.ctx.clearRect(0,0,qt.state.width,qt.state.height)}},{key:"drawCanvas",value:function(){this.drawMeatBall(),this.drawBody(),this.drawHead()}},{key:"drawHead",value:function(){var t=this.snake;qt.state.ctx.fillStyle=t.headColor,qt.state.ctx.beginPath(),qt.state.ctx.arc(t.head.x,t.head.y,this.snake.partRadius,0,2*Math.PI,!1),qt.state.ctx.fill()}},{key:"drawBody",value:function(){for(var t=this.snake.parts,e=0,r=t.length;e<r;e++){qt.state.ctx.fillStyle=e%2?this.snake.firstColor:this.snake.secondColor;var s=t[e];qt.state.ctx.beginPath(),qt.state.ctx.arc(s.x,s.y,this.snake.partRadius,0,2*Math.PI,!1),qt.state.ctx.fill(),qt.state.ctx.closePath()}}},{key:"drawMeatBall",value:function(){var t=this.meatball;qt.state.ctx.beginPath(),qt.state.ctx.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),qt.state.ctx.fillStyle=t.outerColor,qt.state.ctx.fill(),qt.state.ctx.beginPath(),qt.state.ctx.arc(t.x,t.y,t.radius/2,0,2*Math.PI,!1),qt.state.ctx.fillStyle=t.innerColor,qt.state.ctx.fill()}},{key:"checkMeatBallCollision",value:function(){var t=this.meatball,e=this.snake.head,r=this.euclidDistance(e,t),s=this.containsCircle(t.radius,this.snake.partRadius,r);if(s){var n=this.snake.parts;t.newRandomPosition(qt.state.width,qt.state.height);for(var i=0,a=n.length;i<a;i++){var o=n[i];o.x===this.meatball.x&&o.y===this.meatball.y&&(i=0,t.newRandomPosition(qt.state.width,qt.state.height))}this.snake.eatMeatBall(),qt.state.scoreHandler.increaseScore()}}},{key:"snakeBodyCollision",value:function(){for(var t=this.snake.head,e=this.snake.parts,r=0,s=e.length;r<s;r++){var n=e[r],i=2*this.snake.partRadius,a=this.euclidDistance(t,n),o=this.touchedCircle(i,a);o&&qt.commit("finisheGame")}}},{key:"euclidDistance",value:function(t,e){var r=t["x"]-e["x"],s=t["y"]-e["y"];return Math.sqrt(r*r+s*s)}},{key:"containsCircle",value:function(t,e,r){return t>=e+r}},{key:"touchedCircle",value:function(t,e){return t>e}},{key:"gameAreaWidth",get:function(){return this._gameAreaWidth}},{key:"gameAreaHeight",get:function(){return this._gameAreaHeight}}]),t}(),d=function(){function t(){Object(o["a"])(this,t),this._score=0,this._highscore=0}return Object(c["a"])(t,[{key:"increaseScore",value:function(){this._score+=10,this._score>this._highscore&&(this._highscore=this._score)}},{key:"highscore",get:function(){return this._highscore},set:function(t){this._highscore=t}},{key:"score",get:function(){return this._score}}]),t}(),f=function(){function t(){Object(o["a"])(this,t),this._storage=window.localStorage}return Object(c["a"])(t,[{key:"getUsername",value:function(){if(this.getPlayerStats())return JSON.parse(this._storage.getItem("playerStats"))["username"]}},{key:"getSnakeColor",value:function(){return this._storage.getItem("snakecolor")}},{key:"setSnakeColor",value:function(t){this._storage.setItem("snakecolor",t)}},{key:"getHighScores",value:function(){return JSON.parse(this._storage.getItem("highscores"))}},{key:"getHighScore",value:function(){if(this.getPlayerStats())return JSON.parse(this._storage.getItem("playerStats"))["score"]}},{key:"setHighScore",value:function(){var t=this.getHighScores(),e=this.getPlayerStats();if(null===t&&(t=[]),t.length<10)return e.id=t.length+1,t.push(e),t.sort((function(t,e){return e.score-t.score})),void this._storage.setItem("highscores",JSON.stringify(t));for(var r=9;r>=0;r--){var s=e["score"],n=t[r]["score"];if(s>n){e.id=t[r].id,t[r]=e;break}}t.sort((function(t,e){return e.score-t.score})),this._storage.setItem("highscores",JSON.stringify(t))}},{key:"getPlayerStats",value:function(){return JSON.parse(this._storage.getItem("playerStats"))}},{key:"setPlayerStats",value:function(t,e){var r={username:t,score:e};return this._storage.setItem("playerStats",JSON.stringify(r))}}]),t}(),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.grayoutVisible,expression:"grayoutVisible"}],staticClass:"grayout"})])},m=[];s["a"].use(n["a"]);var g={name:"grayout",computed:{grayoutVisible:function(){return this.$store.state.grayoutVisible}}},y=g,p=(r("b92e"),r("2877")),w=Object(p["a"])(y,v,m,!1,null,null,null),b=w.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[t.colorVisible?r("div",{staticClass:"selectColor",style:t.colorStyle,attrs:{tabindex:"0"},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeColorMenu(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveColor(e)}]}},[r("div",{staticClass:"holder"},[r("div",[t._v("Choose a snake color:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{type:"radio",value:"green"},domProps:{checked:t._q(t.selected,"green")},on:{change:function(e){t.selected="green"}}}),r("label",[t._v("green")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{type:"radio",value:"blue"},domProps:{checked:t._q(t.selected,"blue")},on:{change:function(e){t.selected="blue"}}}),r("label",[t._v("blue")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{type:"radio",value:"red"},domProps:{checked:t._q(t.selected,"red")},on:{change:function(e){t.selected="red"}}}),r("label",[t._v("red")]),r("br"),r("buttonbar",{attrs:{text1:"Cancel",text2:"Ok"},on:{callback1:t.closeColorMenu,callback2:t.saveColor}})],1)]):t._e()])},_=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"buttonbar"},[r("button",{on:{click:function(e){return t.$emit("callback1")}}},[t._v(t._s(t.text1))]),r("button",{on:{click:function(e){return t.$emit("callback2")}}},[t._v(t._s(t.text2))])])},C=[],S={name:"buttonbar",props:{text1:String,text2:String}},$=S,O=(r("d759"),Object(p["a"])($,x,C,!1,null,null,null)),A=O.exports,H={name:"selectColor",components:{buttonbar:A},data:function(){return{selected:"green"}},computed:{colorStyle:function(){return{overflow:"hidden"}},colorVisible:function(){return this.$store.state.colorVisible}},methods:{saveColor:function(){this.closeColorMenu(),this.$store.state.choosenColor=this.selected},closeColorMenu:function(){this.$store.state.colorVisible=!1,this.$store.state.grayoutVisible=!1}}},M=H,E=(r("0008"),Object(p["a"])(M,k,_,!1,null,null,null)),B=E.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navigation"},[r("navbarEntry",{attrs:{url:"domain",text:"Home"}}),r("navbarEntry",{attrs:{text:"HighScores"},on:{callback:t.showHighscores}}),r("navbarEntry",{attrs:{url:"https://github.com/KevvKo/snakeJS",text:"GitHub"}}),r("navbarEntry",{attrs:{url:"https://github.com/KevvKo/snakeJS/issues",text:"Report Bugs"}})],1)},j=[],R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbarEntry"},[r("a",{attrs:{href:t.url},on:{click:function(e){return t.$emit("callback")}}},[t._v(" "+t._s(t.text))])])},V=[],G={name:"navbarEntry",props:{url:String,text:String,callback:Function}},W=G,D=(r("5b08"),Object(p["a"])(W,R,V,!1,null,null,null)),N=D.exports,I={name:"navigation",components:{navbarEntry:N},data:function(){return{domain:this.$store.state.domain}},methods:{showHighscores:function(){this.$store.state.highscoreBoardVisible=!0,this.$store.state.grayoutVisible=!0}}},J=I,L=(r("f90c"),Object(p["a"])(J,P,j,!1,null,null,null)),U=L.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.highscoreBoardVisible,expression:"highscoreBoardVisible"}],attrs:{tabindex:"0",id:"highscoreBoard"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeHighscoreMenu(e)}}},[r("div",{attrs:{id:"upperbar"}},[r("div",{attrs:{id:"highscoreTitle"}},[t._v("Highscorelist")])]),r("div",{attrs:{id:"highscoreContent"}},[r("div",{staticClass:"flexbox"},[r("table",{attrs:{id:"highscoreTable"}},[r("thead",[r("tr",[r("th",[t._v("Player")]),r("th",[t._v("Highscore")])])]),null!=t.highscores?r("tbody",t._l(t.highscores,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.username))]),r("td",[t._v(t._s(e.score))])])})),0):t._e()])])]),r("button",{on:{click:t.closeHighscoreMenu}},[t._v("Close")])])])},F=[],T={name:"highscoreBoard",computed:{highscoreBoardVisible:function(){return this.$store.state.highscoreBoardVisible},highscores:function(){return this.$store.state.db.getHighScores()}},methods:{closeHighscoreMenu:function(){this.$store.state.highscoreBoardVisible=!1,this.$store.state.grayoutVisible=!1}}},K=T,Y=(r("7906"),Object(p["a"])(K,q,F,!1,null,null,null)),z=Y.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mainBoard",style:{width:t.width}},[r("game")],1)},X=[],Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"game",style:{width:t.width}},[r("mainMenu",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],attrs:{title:"SnakeJS"}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showGame,expression:"showGame"}],staticClass:"gameArea"},[r("scorebar"),r("gameBoard")],1),r("gameOver",{directives:[{name:"show",rawName:"v-show",value:t.showGameOver,expression:"showGameOver"}]})],1)},tt=[],et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"scorebar",style:{width:t.width}},[r("div",[r("span",[t._v("Your Highscore:")]),r("span",{attrs:{id:"highscore"}},[t._v(t._s(t.highscore))])]),r("div",[r("span",[t._v("Your Score:")]),r("span",{attrs:{id:"score"}},[t._v(t._s(t.score))])])])},rt=[],st={name:"scorebar",computed:{score:function(){return this.$store.state.scoreHandler.score},highscore:function(){return this.$store.state.scoreHandler.highscore},width:function(){return this.$store.state.width+"px"}}},nt=st,it=(r("e1f5"),Object(p["a"])(nt,et,rt,!1,null,null,null)),at=it.exports,ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mainMenu",style:{width:t.width}},[r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),r("menuEntry",{attrs:{text:"Play",id:"playButton"},on:{callback:t.startGame}}),r("menuEntry",{attrs:{text:"Change color",id:"colorButton"},on:{callback:t.changeSnakeColor}})],1)])},ct=[],ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menuEntry"},[r("button",{attrs:{id:t.id},on:{click:function(e){return t.$emit("callback")}}},[t._v(t._s(t.text))])])},ht=[],lt={name:"menuEntry",props:{id:String,text:String,callback:Function}},dt=lt,ft=(r("9d85"),Object(p["a"])(dt,ut,ht,!1,null,null,null)),vt=ft.exports;s["a"].use(n["a"]);var mt={name:"mainMenu",props:{title:String},components:{menuEntry:vt},mounted:function(){this.$store.state.width=this.$el.offsetWidth},computed:{width:function(){return this.$store.state.width+"px"}},methods:{startGame:function(){this.$store.commit("changeVisibility")},changeSnakeColor:function(){this.$store.state.grayoutVisible=!this.$store.state.grayoutVisible,this.$store.state.grayoutVisible?this.$store.state.colorVisible=!0:this.$store.state.colorVisible=!1}}},gt=mt,yt=(r("4344"),Object(p["a"])(gt,ot,ct,!1,null,null,null)),pt=yt.exports,wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gameBoard"},[r("canvas",{attrs:{id:"gameArea",height:t.height,width:t.width}})])},bt=[],kt={name:"gameBoard",computed:{height:function(){return this.$store.state.height},width:function(){return this.$store.state.width}},mounted:function(){this.$store.state.canvas=document.querySelector("canvas"),this.$store.state.ctx=this.$store.state.canvas.getContext("2d")}},_t=kt,xt=(r("d761"),Object(p["a"])(_t,wt,bt,!1,null,null,null)),Ct=xt.exports,St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gameOver"},[r("div",{staticClass:"gameoverContent"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),r("div",{staticClass:"score"},[r("div",[t._v("Your score: "+t._s(t.score))]),r("username")],1)])])},$t=[],Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"username",style:t.usernameStyle},[r("div",{staticClass:"holder"},[r("label",[t._v("Username: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{placeholder:"name",maxlength:"5"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t.emptyField?r("div",{staticClass:"error"},[t._v(t._s(t.rule))]):t._e(),r("div",{attrs:{id:"buttons"}},[r("button",{on:{click:t.goToHome}},[t._v("Home")]),r("button",{on:{click:t.restartGame}},[t._v("Restart")])])])])])},At=[],Ht={name:"username",data:function(){return{username:"AAAAA",rule:"Please enter a new username.",emptyField:null}},computed:{usernameStyle:function(){return{overflow:"hidden",opacity:this.$store.state.usernameOpacity}},usernameVisible:function(){return this.$store.state.usernameVisible}},methods:{saveHighScore:function(){var t=this.$store.state.scoreHandler.score;this.$store.state.db.setPlayerStats(this.username,t),this.$store.state.db.setHighScore()},goToHome:function(){this.saveHighScore(),window.open(this.$store.state.domain,"_self")},restartGame:function(){this.saveHighScore(),this.$store.state.showGameOver=!1,this.$store.state.showGame=!0,this.$store.state.game=new l,this.$store.state.scoreHandler=new d}}},Mt=Ht,Et=(r("c375"),Object(p["a"])(Mt,Ot,At,!1,null,null,null)),Bt=Et.exports,Pt={name:"gameOver",components:{username:Bt},data:function(){return{title:"Game Over"}},computed:{score:function(){return this.$store.state.scoreHandler.score}}},jt=Pt,Rt=(r("be73"),Object(p["a"])(jt,St,$t,!1,null,null,null)),Vt=Rt.exports;s["a"].use(n["a"]);var Gt={name:"game",components:{scorebar:at,mainMenu:pt,gameBoard:Ct,gameOver:Vt},computed:{width:function(){return this.$store.state.width+"px"},showMenu:function(){return this.$store.state.showMenu},showGame:function(){return this.$store.state.showGame},showGameOver:function(){return this.$store.state.showGameOver}},watch:{showGame:function(){this.load()}},methods:{load:function(){this.$store.state.game.init()}}},Wt=Gt,Dt=(r("886f"),Object(p["a"])(Wt,Z,tt,!1,null,null,null)),Nt=Dt.exports,It={name:"mainBoard",components:{game:Nt},computed:{width:function(){return this.$store.state.width+"px"}}},Jt=It,Lt=(r("3bdc"),Object(p["a"])(Jt,Q,X,!1,null,null,null)),Ut=Lt.exports;s["a"].use(n["a"]);var qt=new n["a"].Store({state:{grayoutVisible:!1,colorVisible:!1,highscoreBoardVisible:!1,showMenu:!0,showGame:!1,showGameOver:!1,width:.8*window.innerWidth-.8*window.innerWidth%20,height:.7*window.innerHeight-.7*window.innerHeight%20,game:new l,scoreHandler:new d,db:new f,domain:window.location.href,choosenColor:"green",colorSets:{green:{primary:"#038c00",light:"#50bd3d",dark:"#005d00"},blue:{primary:"#00639e",light:"#4f90cf",dark:"#00396f"},red:{primary:"#a30000",light:"#dc462b",dark:"#6d0000"}}},mutations:{changeVisibility:function(t){t.showMenu=!1,t.showGame=!0},checkHighScore:function(t){t.db.getPlayerStats()&&(t.scoreHandler.highscore=t.db.getHighScore())},finisheGame:function(t){t.showGameOver=!0,t.showGame=!1,t.game.clearCanvas()}}});window.addEventListener("resize",(function(){var t=.8*window.innerWidth;qt.state.width=t}));var Ft={name:"App",store:qt,components:{grayout:b,selectColor:B,navigation:U,highscoreBoard:z,mainBoard:Ut}},Tt=Ft,Kt=(r("034f"),Object(p["a"])(Tt,i,a,!1,null,null,null)),Yt=Kt.exports;s["a"].use(n["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Yt)}}).$mount("#app")},"5b08":function(t,e,r){"use strict";var s=r("fdb6"),n=r.n(s);n.a},7906:function(t,e,r){"use strict";var s=r("acc6"),n=r.n(s);n.a},"7d77":function(t,e,r){},"814e":function(t,e,r){},"85ec":function(t,e,r){},"886f":function(t,e,r){"use strict";var s=r("814e"),n=r.n(s);n.a},"8e12":function(t,e,r){},"9d85":function(t,e,r){"use strict";var s=r("2ee0"),n=r.n(s);n.a},acc6:function(t,e,r){},b92e:function(t,e,r){"use strict";var s=r("0f08"),n=r.n(s);n.a},be73:function(t,e,r){"use strict";var s=r("2b52"),n=r.n(s);n.a},c375:function(t,e,r){"use strict";var s=r("fdd5"),n=r.n(s);n.a},d42d:function(t,e,r){},d759:function(t,e,r){"use strict";var s=r("3b20"),n=r.n(s);n.a},d761:function(t,e,r){"use strict";var s=r("7d77"),n=r.n(s);n.a},e1f5:function(t,e,r){"use strict";var s=r("4117"),n=r.n(s);n.a},f90c:function(t,e,r){"use strict";var s=r("d42d"),n=r.n(s);n.a},fdb6:function(t,e,r){},fdd5:function(t,e,r){}});
//# sourceMappingURL=app.383dbe69.js.map