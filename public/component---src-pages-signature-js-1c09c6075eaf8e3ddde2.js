(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(t,e,n){"use strict";n.r(e);var i=n(7),o=n.n(i),s=n(0),a=n.n(s),r=(n(34),n(33),n(75)),h=n.n(r),c=n(4),l=n.n(c);class u{constructor(t,e,n){this.x=t,this.y=e,this.time=n||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class d{constructor(t,e,n,i,o,s){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=i,this.startWidth=o,this.endWidth=s}static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,i=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new d(t[1],n,i,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const i=t.x-e.x,o=t.y-e.y,s=e.x-n.x,a=e.y-n.y,r=(t.x+e.x)/2,h=(t.y+e.y)/2,c=(e.x+n.x)/2,l=(e.y+n.y)/2,d=Math.sqrt(i*i+o*o),v=Math.sqrt(s*s+a*a),m=v/(d+v),p=c+(r-c)*m,_=l+(h-l)*m,f=e.x-p,g=e.y-_;return{c1:new u(r+f,h+g),c2:new u(c+f,l+g)}}length(){let t,e,n=0;for(let i=0;i<=10;i+=1){const o=i/10,s=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const i=s-t,o=a-e;n+=Math.sqrt(i*i+o*o)}t=s,e=a}return n}point(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t}}class v{constructor(t,e={}){this.canvas=t,this.options=e,this._handleMouseDown=(t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))}),this._handleMouseMove=(t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)}),this._handleMouseUp=(t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))}),this._handleTouchStart=(t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}}),this._handleTouchMove=(t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)}),this._handleTouchEnd=(t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}}),this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,e=250){let n,i,o,s=0,a=null;const r=()=>{s=Date.now(),a=null,n=t.apply(i,o),a||(i=null,o=[])};return function(...h){const c=Date.now(),l=e-(c-s);return i=this,o=h,l<=0||l>e?(a&&(clearTimeout(a),a=null),s=c,n=t.apply(i,o),a||(i=null,o=[])):a||(a=window.setTimeout(r,l)),n}}(v.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=v.prototype._strokeUpdate,this.dotSize=e.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.onBegin=e.onBegin,this.onEnd=e.onEnd,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const t=this._ctx,e=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},n){const i=new Image,o=e.ratio||window.devicePixelRatio||1,s=e.width||this.canvas.width/o,a=e.height||this.canvas.height/o;this._reset(),i.onload=(()=>{this._ctx.drawImage(i,0,0,s,a),n&&n()}),i.onerror=(t=>{n&&n(t)}),i.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,({color:t,curve:e})=>this._drawCurve({color:t,curve:e}),({color:t,point:e})=>this._drawDot({color:t,point:e})),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};this._data.push(e),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)}_strokeUpdate(t){const e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],s=o.points,a=s.length>0&&s[s.length-1],r=!!a&&i.distanceTo(a)<=this.minDistance,h=o.color;if(!a||!a||!r){const t=this._addPoint(i);a?t&&this._drawCurve({color:h,curve:t}):this._drawDot({color:h,point:i}),s.push({time:i.time,x:i.x,y:i.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const n=this.canvas.getBoundingClientRect();return new u(t-n.left,e-n.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),n=d.fromPoints(e,t);return e.shift(),n}return null}_calculateCurveWidths(t,e){const n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n),o={end:i,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=i,o}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,n){const i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const n=this._ctx,i=e.endWidth-e.startWidth,o=2*Math.floor(e.length());n.beginPath(),n.fillStyle=t;for(let s=0;s<o;s+=1){const t=s/o,n=t*t,a=n*t,r=1-t,h=r*r,c=h*r;let l=c*e.startPoint.x;l+=3*h*t*e.control1.x,l+=3*r*n*e.control2.x,l+=a*e.endPoint.x;let u=c*e.startPoint.y;u+=3*h*t*e.control1.y,u+=3*r*n*e.control2.y,u+=a*e.endPoint.y;const d=e.startWidth+a*i;this._drawCurveSegment(l,u,d)}n.closePath(),n.fill()}_drawDot({color:t,point:e}){const n=this._ctx,i="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(e.x,e.y,i),n.closePath(),n.fillStyle=t,n.fill()}_fromData(t,e,n){for(const i of t){const{color:t,points:o}=i;if(o.length>1)for(let n=0;n<o.length;n+=1){const i=o[n],s=new u(i.x,i.y,i.time);this.penColor=t,0===n&&this._reset();const a=this._addPoint(s);a&&e({color:t,curve:a})}else this._reset(),n({color:t,point:o[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),n=this.canvas.width/e,i=this.canvas.height/e,o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width",this.canvas.width.toString()),o.setAttribute("height",this.canvas.height.toString()),this._fromData(t,({color:t,curve:e})=>{const n=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const i=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} `+`C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} `+`${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} `+`${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;n.setAttribute("d",i),n.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),n.setAttribute("stroke",t),n.setAttribute("fill","none"),n.setAttribute("stroke-linecap","round"),o.appendChild(n)}},({color:t,point:e})=>{const n=document.createElement("circle"),i="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.setAttribute("r",i.toString()),n.setAttribute("cx",e.x.toString()),n.setAttribute("cy",e.y.toString()),n.setAttribute("fill",t),o.appendChild(n)});const s='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+` viewBox="0 0 ${n} ${i}"`+` width="${n}"`+` height="${i}"`+">";let a=o.innerHTML;if(void 0===a){const t=document.createElement("dummy"),e=o.childNodes;t.innerHTML="";for(let n=0;n<e.length;n+=1)t.appendChild(e[n].cloneNode(!0));a=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(s+a+"</svg>")}}var m=v,p=n(216),_=n.n(p),f=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this)._sigPad=null,e._excludeOurProps=function(){var t=e.props;t.canvasProps,t.clearOnResize;return h()(t,["canvasProps","clearOnResize"])},e.getCanvas=function(){return e._canvas},e.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=e._canvas.width,t.height=e._canvas.height,t.getContext("2d").drawImage(e._canvas,0,0),_()(t)},e.getSignaturePad=function(){return e._sigPad},e._checkClearOnResize=function(){e.props.clearOnResize&&e._resizeCanvas()},e._resizeCanvas=function(){var t=e.props.canvasProps||{},n=t.width,i=t.height;if(!n||!i){var o=e._canvas,s=Math.max(window.devicePixelRatio||1,1);n||(o.width=o.offsetWidth*s),i||(o.height=o.offsetHeight*s),o.getContext("2d").scale(s,s),e.clear()}},e.on=function(){return window.addEventListener("resize",e._checkClearOnResize),e._sigPad.on()},e.off=function(){return window.removeEventListener("resize",e._checkClearOnResize),e._sigPad.off()},e.clear=function(){return e._sigPad.clear()},e.isEmpty=function(){return e._sigPad.isEmpty()},e.fromDataURL=function(t,n){return e._sigPad.fromDataURL(t,n)},e.toDataURL=function(t,n){return e._sigPad.toDataURL(t,n)},e.fromData=function(t){return e._sigPad.fromData(t)},e.toData=function(){return e._sigPad.toData()},e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){this._sigPad=new m(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()},n.componentWillUnmount=function(){this.off()},n.componentDidUpdate=function(){Object.assign(this._sigPad,this._excludeOurProps())},n.render=function(){var t=this,e=this.props.canvasProps;return a.a.createElement("canvas",Object.assign({ref:function(e){t._canvas=e}},e))},e}(s.Component);f.propTypes={velocityFilterWeight:l.a.number,minWidth:l.a.number,maxWidth:l.a.number,minDistance:l.a.number,dotSize:l.a.oneOfType([l.a.number,l.a.func]),penColor:l.a.string,throttle:l.a.number,onEnd:l.a.func,onBegin:l.a.func,canvasProps:l.a.object,clearOnResize:l.a.bool},f.defaultProps={clearOnResize:!0};var g=n(217),w=n.n(g),x=n(154),y=function(t){function e(e){var n;return(n=t.call(this,e)||this).sigPad={},n.clear=function(){n.sigPad.clear()},n.trim=function(){n.setState({trimmedDataURL:n.sigPad.getTrimmedCanvas().toDataURL("image/png")})},n.state={trimmedDataURL:null},n}return o()(e,t),e.prototype.render=function(){var t=this,e=this.state.trimmedDataURL;return a.a.createElement("div",{className:w.a.container},a.a.createElement("div",{className:w.a.sigContainer},a.a.createElement(f,{canvasProps:{className:w.a.sigPad},ref:function(e){t.sigPad=e}})),a.a.createElement("div",null,a.a.createElement(x.a,{to:"/main/"},a.a.createElement("button",{className:w.a.buttons,onClick:this.clear},"Submit"))),e?a.a.createElement("img",{className:w.a.sigImage,src:e}):null)},e}(a.a.Component);e.default=y},151:function(t,e,n){var i;t.exports=(i=n(155))&&i.default||i},154:function(t,e,n){"use strict";var i=n(0),o=n.n(i),s=n(4),a=n.n(s),r=n(32),h=n.n(r);n.d(e,"a",function(){return h.a});n(151),o.a.createContext({});a.a.object,a.a.string.isRequired,a.a.func,a.a.func},155:function(t,e,n){"use strict";n.r(e);n(33);var i=n(0),o=n.n(i),s=n(4),a=n.n(s),r=n(54),h=n(2),c=function(t){var e=t.location,n=h.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(r.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},e.default=c},216:function(t,e,n){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e,n,i){return function(t,e,n,i){return{red:i[4*(n*e+t)],green:i[4*(n*e+t)+1],blue:i[4*(n*e+t)+2],alpha:i[4*(n*e+t)+3]}}(t,e,n,i).alpha}function i(t,e,i,o){for(var s=t?1:-1,a=t?0:i-1,r=a;t?r<i:r>-1;r+=s)for(var h=0;h<e;h++)if(n(h,r,e,o))return r;return null}function o(t,e,i,o){for(var s=t?1:-1,a=t?0:e-1,r=a;t?r<e:r>-1;r+=s)for(var h=0;h<i;h++)if(n(r,h,e,o))return r;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.getContext("2d"),n=t.width,s=t.height,a=e.getImageData(0,0,n,s).data,r=i(!0,n,s,a),h=i(!1,n,s,a),c=o(!0,n,s,a),l=o(!1,n,s,a)-c+1,u=h-r+1,d=e.getImageData(c,r,l,u);return t.width=l,t.height=u,e.clearRect(0,0,l,u),e.putImageData(d,0,0),t}}])}}]);
//# sourceMappingURL=component---src-pages-signature-js-1c09c6075eaf8e3ddde2.js.map