(this["webpackJsonpneural-graph"]=this["webpackJsonpneural-graph"]||[]).push([[0],{84:function(t,e,n){t.exports=n(96)},95:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var i=n(43),a=n(60),r=n(0),o=n.n(r),s=n(9),l=n.n(s),u=n(2),c=n(34),d=n(10),h=n(24),p=n(49),m=n.n(p),f=n(25);function b(){var t=Object(h.a)(["\n  z-index: 1;\n  cursor: pointer;\n  position: absolute;\n  box-shadow: 0 1px 4px 1px #eee;\n  padding: 6px;\n  background: #fff;\n  border-radius: 6;\n  border: 1px solid #eee;\n"]);return b=function(){return t},t}var v=f.a.div(b()),g=Object(d.a)((function(t){var e=t.operation,n=o.a.useCallback((function(t,n){e.move(n.deltaX,n.deltaY)}),[e]),i=void 0!==Zt.selectingInputFor,a=i&&Zt.selectingInputFor.data.validInput(e),r=o.a.useCallback((function(t){console.log(e),i?a&&Zt.assignInput(e):Zt.selectOperation(e)}),[e,i,a]),s=e.x,l=e.y,u=e.name;return o.a.createElement(m.a,{onDrag:n,position:{x:s,y:l},bounds:"parent"},o.a.createElement(v,{ref:function(t){null!==t&&e.setSize(t.getBoundingClientRect())},onClick:r,style:i?{cursor:a?"pointer":"not-allowed"}:void 0},"Layer ".concat(u)))})),y=n(17),w=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:14,a=e+n;return"M".concat(t," ").concat(e," L").concat(t-i/2," ").concat(a," L").concat(t+i/2," ").concat(a," Z")},x=Object(d.a)((function(t){var e,n,i=t.arrow,a=i.from,r=i.to,s=a.data.outputShape,l=a.x+a.width/2,u=a.y+a.height/2,c=r.x+r.width/2,d=r.y+r.height/2,h=d-u,p=c-l;if(0===p)e=0,n=(d>u?1:-1)*r.height/2;else if(0===h)n=0,e=(c>l?1:-1)*r.width/2;else{var m=Math.abs(h/p),f=m>r.height/r.width?[r.height/2/m,r.height/2]:[r.width/2,r.width/2*m],b=Object(y.a)(f,2),v=b[0];n=(d>u?1:-1)*b[1],e=(c>l?1:-1)*v}var g=c-e,x=d-n,j=(l+c)/2,E=(u+d)/2,k=90+180*Math.atan2(d-u,c-l)/Math.PI;return o.a.createElement(o.a.Fragment,null,o.a.createElement("path",{style:{strokeWidth:2,stroke:"black"},d:"M".concat(l," ").concat(u," L").concat(c," ").concat(d),onDoubleClick:function(t){console.log(t)}}),o.a.createElement(O,{text:"[".concat(s.map((function(t){return t||"?"})).join(", "),"]"),x:j,y:E}),o.a.createElement("path",{d:w(g,x),transform:"rotate(".concat(k," ").concat(g," ").concat(x,")")}))})),O=Object(d.a)((function(t){var e=t.text,n=t.x,i=t.y,a=t.rectFill,r=void 0===a?"#eee":a,s=t.padding,l=void 0===s?3:s,u=o.a.useState(null),c=Object(y.a)(u,2),d=c[0],h=c[1],p=o.a.useState(e),m=Object(y.a)(p,2),f=m[0],b=m[1],v=null===d||void 0===d?void 0:d.getBBox();return o.a.useEffect((function(){if(f!==e){var t=setTimeout((function(){return b(e)}),0);return function(){return clearTimeout(t)}}})),o.a.createElement(o.a.Fragment,null,void 0!==v&&o.a.createElement("rect",{width:v.width+2*l,height:v.height+2*l,x:n-v.width/2-l,y:i-v.height+l,fill:r}),o.a.createElement("text",{x:void 0!==v?n-v.width/2:n,y:i,fill:"black",ref:h},e))})),j=Object(d.a)((function(){var t=Object(c.a)(Zt.operations.values());return o.a.createElement("div",{style:{position:"relative",border:"1px solid #eee",height:"auto",background:"#fff",margin:"10px",borderRadius:"6px",flex:1}},t.map((function(t){return console.log(t),o.a.createElement(g,{operation:t,key:t.key})})),o.a.createElement("svg",{style:{width:"100%",height:"100%"}},t.flatMap((function(t){return t.data.inputs.map((function(e){return{from:e,to:t}}))})).map((function(t){return o.a.createElement(x,{arrow:t,key:t.from.key+t.to.key})}))))})),E=n(59),k=n(38),I=n(56);function z(t){return t.reduce((function(t,e){return t[e.toString()]=e,t}),{})}var S={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1};function N(t){return Object.entries(t).reduce((function(t,e){var n=Object(y.a)(e,2),i=n[0],a=n[1];return void 0!==a&&(t[i]=a),t}),Object(I.a)({},S))}var L,M,C,F,_,A,B,R,D,P,T,W,J,q,H,K,V,G,U,X,Y,Z=Object(d.a)((function(){for(var t=Object(c.a)(Zt.operations.values()),e=t.reduce((function(t,e){return e.data.inputs.forEach((function(n){var i=t.get(n);void 0===i&&(i=[],t.set(n,i)),i.push(e)})),t}),new Map),n=[],i=new Map(t.filter((function(t){var e=0!==t.data.inputs.length;return e||n.push(t),e})).map((function(t){return[t,t.data.inputs.length]}))),a=0;0!==i.size&&n.length!==a;){var r,s=Object(E.a)(n.slice(a));try{for(s.s();!(r=s.n()).done;){var l=r.value;a+=1;var u=e.get(l);if(void 0!==u){var d,h=Object(E.a)(u);try{for(h.s();!(d=h.n()).done;){var p=d.value,m=i.get(p);1===m?(i.delete(p),n.push(p)):i.set(p,m-1)}}catch(f){h.e(f)}finally{h.f()}}}}catch(f){s.e(f)}finally{s.f()}}return i.size,o.a.createElement(k.Resizable,{minWidth:200,defaultSize:{height:"auto",width:300},style:{position:"relative",background:"white",boxShadow:"0 1px 4px 1px #eee",border:"1px solid #eee"},enable:N({left:!0})},o.a.createElement("div",{style:{overflow:"auto",height:"100%",padding:"0 10px"}},t.map((function(t){return o.a.createElement("pre",{key:t.key},t.name+" = "+t.data.pythonCode+"\n")})),n.map((function(t){return t.data.inputs.length>0?o.a.createElement("pre",{key:t.key+"input"},"".concat(t.name,"_output = ").concat(t.name,"(").concat(t.data.inputs.map((function(t){return t.name})).join(","),");")):null}))))})),$=n(14),Q=n(16),tt=n(15),et=(n(68),n(143)),nt=(L=function t(e){Object(Q.a)(this,t),Object($.a)(this,"key",M,this),Object($.a)(this,"name",C,this),Object($.a)(this,"x",F,this),Object($.a)(this,"y",_,this),Object($.a)(this,"width",A,this),Object($.a)(this,"height",B,this),Object($.a)(this,"data",R,this),Object($.a)(this,"move",D,this),Object($.a)(this,"setSize",P,this),Object($.a)(this,"setName",T,this),this.key=e.key,this.name=e.name,this.x=e.x,this.y=e.y,this.data=e.data},M=Object(tt.a)(L.prototype,"key",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=Object(tt.a)(L.prototype,"name",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=Object(tt.a)(L.prototype,"x",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=Object(tt.a)(L.prototype,"y",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=Object(tt.a)(L.prototype,"width",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 60}}),B=Object(tt.a)(L.prototype,"height",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 60}}),R=Object(tt.a)(L.prototype,"data",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=Object(tt.a)(L.prototype,"move",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e,n){t.x+=e,t.y+=n}}}),P=Object(tt.a)(L.prototype,"setSize",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.width=e.width,t.height=e.height}}}),T=Object(tt.a)(L.prototype,"setName",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.name=e}}}),L),it=(W=function t(e){Object(Q.a)(this,t),Object($.a)(this,"operations",J,this),Object($.a)(this,"arrows",q,this),Object($.a)(this,"selection",H,this),Object($.a)(this,"selectingInputFor",K,this),Object($.a)(this,"selectOperation",V,this),Object($.a)(this,"addOperation",G,this),Object($.a)(this,"selectingInput",U,this),Object($.a)(this,"assignInput",X,this),Object($.a)(this,"selectingInputKeyListener",Y,this),this.operations=e.operations,this.arrows=e.arrows},J=Object(tt.a)(W.prototype,"operations",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=Object(tt.a)(W.prototype,"arrows",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=Object(tt.a)(W.prototype,"selection",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=Object(tt.a)(W.prototype,"selectingInputFor",[u.s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=Object(tt.a)(W.prototype,"selectOperation",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.selection=e}}}),G=Object(tt.a)(W.prototype,"addOperation",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){var n=new nt({data:e,key:Object(et.a)(),name:e.NAME,x:100,y:100});t.operations.set(n.key,n)}}}),U=Object(tt.a)(W.prototype,"selectingInput",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.selectingInputFor=e,window.addEventListener("keyup",t.selectingInputKeyListener)}}}),X=Object(tt.a)(W.prototype,"assignInput",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.selectingInputFor.data.inputs.push(e),t.selectingInputFor=void 0}}}),Y=Object(tt.a)(W.prototype,"selectingInputKeyListener",[u.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){"Escape"===e.key&&(t.selectingInputFor=void 0,window.removeEventListener("keyup",t.selectingInputKeyListener))}}}),W),at=n(72),rt=n(140),ot=n(137),st=n(97),lt=n(145),ut=n(73),ct=n(57),dt=n(8),ht=n(98),pt=n(139),mt=n(138),ft=n(141);function bt(){var t=Object(h.a)(["\n  min-height: 38px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return bt=function(){return t},t}var vt=f.a.div(bt()),gt=function t(e){var n=this;if(Object(Q.a)(this,t),this.choices=void 0,this.default=void 0,this.isObservableMap=function(){return"function"===typeof n.choices.keys&&"number"===typeof n.choices.size&&Symbol.toStringTag in n.choices},this.mobxProp=function(){return void 0!==n.default?dt.a.optional(dt.a.string,n.default):dt.a.string},this.plotField=Object(d.a)((function(t){var e,i=t.name,a=t.model;return(e=n.isObservableMap()?Array.from(n.choices.keys()):Object.keys(n.choices)).length>3?o.a.createElement(ft.a,{value:a[i],onChange:function(t){a[i]=t.target.value},autoWidth:!0},e.map((function(t){return o.a.createElement(mt.a,{key:t,value:t},t)}))):o.a.createElement(vt,{key:i},o.a.createElement(pt.a,{size:"small",color:"primary","aria-label":"outlined primary button group"},e.map((function(t){var e=t===a[i]?{background:"#3f51b5",color:"white"}:{};return o.a.createElement(ht.a,{key:t,onClick:function(){a[i]=t},style:e},t)}))))})),this.choices=e.choices,this.default=e.default,this.isObservableMap()&&null===this.choices.get(this.default))throw Error("")},yt=n(142),wt=function t(e){var n,i=this;if(Object(Q.a)(this,t),this.default=void 0,this.pattern=void 0,this.maxLength=void 0,this.minLength=void 0,this.transform=void 0,this.transformFrom=void 0,this.transformInto=void 0,this.deps=void 0,this.isTransformed=function(){return(void 0===i.transform||void 0===i.transformInto)&&"string"===typeof i.default},this.mobxProp=function(){return dt.a.optional(i.transformInto,i.default)},this.plotField=Object(d.a)((function(t){var e=t.name,n=t.model,a=o.a.useState(i.transformFrom(n[e])),r=Object(y.a)(a,2),s=r[0],l=r[1],u=n.errors,d=void 0!==i.deps?[].concat(Object(c.a)(i.deps.map((function(t){return n[t]}))),[i.pattern,n]):[i.pattern,n];return o.a.useEffect((function(){if(void 0!==i.pattern&&"function"===typeof i.pattern){var t=u.get(e);if("Pattern doesn't match."===t){var a=s.match(i.pattern(n));null!==a&&0===a.index&&u.delete(e)}else if(void 0===t){var r=s.match(i.pattern(n));null!==r&&0===r.index||u.set(e,"Pattern doesn't match.")}}}),[s].concat(Object(c.a)(d))),o.a.createElement(yt.a,{key:e,value:s,inputProps:{style:{textAlign:"center"}},onChange:function(t){var a=t.target.value.replace(/\s/g,"");l(a);var r="function"===typeof i.pattern?i.pattern(n):i.pattern,o=a.match(r);void 0!==i.maxLength&&a.length>i.maxLength?u.set(e,"Max length exceded."):void 0!==i.minLength&&a.length<i.minLength?u.set(e,"Min length exceded."):null===o||0!==(null===o||void 0===o?void 0:o.index)?u.set(e,"Pattern doesn't match."):void 0!==i.transform?(u.delete(e),n[e]=i.transform(a)):(u.delete(e),n[e]=a)},error:void 0!==u.get(e),fullWidth:!0,style:{width:"120px"}})})),this.default=e.default,this.pattern=e.pattern,this.maxLength=e.maxLength,this.minLength=e.minLength,this.transform=e.transform,this.transformInto=e.transformInto,this.deps=e.deps,this.transformFrom=null!==(n=e.transformFrom)&&void 0!==n?n:JSON.stringify,"string"===typeof this.default){if(void 0!==this.minLength&&this.default.length<this.minLength)throw Error("");if(void 0!==this.maxLength&&this.default.length>this.maxLength)throw Error("");if(void 0!==this.pattern&&"function"!==typeof this.pattern&&!this.default.match(this.pattern))throw Error("RegExp pattern doesn't match")}if(void 0!==this.transform&&void 0===this.transformInto||void 0===this.transform&&void 0!==this.transformInto)throw Error("Transform")},xt=n(144),Ot=function t(e){var n=this;Object(Q.a)(this,t),this.default=void 0,this.required=void 0,this.mobxProp=function(){return void 0===n.default?dt.a.boolean:dt.a.optional(dt.a.boolean,n.default)},this.plotField=Object(d.a)((function(t){var e=t.name,n=t.model;return o.a.createElement(xt.a,{checked:n[e],onChange:function(){n[e]=!n[e]},color:"primary"})})),this.default=e.default,this.required=void 0===e.required||e.required},jt=function t(e){var n=this;if(Object(Q.a)(this,t),this.default=void 0,this.min=void 0,this.max=void 0,this.step=void 0,this.isInt=void 0,this.mobxProp=function(){return void 0!==n.default?dt.a.optional(dt.a.number,n.default):dt.a.number},this.plotField=Object(d.a)((function(t){var e=t.name,i=t.model,a=o.a.useState(i[e].toString()),r=Object(y.a)(a,2),s=r[0],l=r[1],u=i.errors,c=u.get(e);return o.a.createElement(yt.a,{key:e,value:s,inputProps:{min:n.min,max:n.max,step:n.step,style:{textAlign:"center"}},type:"number",error:void 0!==c,fullWidth:!0,style:{width:"80px"},onChange:function(t){var a,r=t.target.value;void 0!==n.min&&n.min>=0&&(r=r.replace(/-/g,"")),n.isInt&&(r=r.replace(/\./g,"")),l(r),a=n.isInt?parseInt(r,10):parseFloat(r),Number.isNaN(a)?u.set(e,"Invalid"):void 0!==n.min&&n.min>a?u.set(e,"Smaller than minimum ".concat(n.min)):void 0!==n.max&&n.max<a?u.set(e,"Greater than maximum ".concat(n.max)):(u.delete(e),i[e]=a)}})})),this.default=e.default,this.min=e.min,this.max=e.max,this.step=e.step,this.isInt=void 0!==e.isInt&&e.isInt,void 0!==this.min&&this.default<this.min)throw Error("");if(void 0!==this.max&&this.default>this.max)throw Error("");this.isInt&&(this.default=Math.round(this.default),void 0===this.step?this.step=1:this.step=Math.round(this.step))},Et={"1D":1,"2D":2,"3D":3};var kt=function(t){var e=JSON.parse(t.replace(",]","]"));return"number"===typeof e?[e]:e},It=function(t){return 3===(e=Et[t.dimensions])?/\d+|\[\d+\]|\[\d+,\d+\]|\[\d+,\d+,\d+\]/:2===e?/\d+|\[\d+\]|\[\d+,\d+\]/:/\d+|\[\d+\]/;var e},zt=function(t){return Object(I.a)({},Object.keys(t).reduce((function(t,e){return t[e]=u.s,t}),{}),{inputs:u.s,errors:u.s,outputShape:u.h})},St={dimensions:new gt({choices:Et,default:"1D"}),separable:new Ot({default:!0}),filters:new jt({default:32,min:1,isInt:!0}),kernelSize:new wt({default:[3],pattern:It,deps:["dimensions"],transform:kt,transformInto:dt.a.union(dt.a.number,dt.a.array(dt.a.number))}),padding:new gt({choices:z(["VALID","SAME","CAUSAL"]),default:"SAME"}),strides:new wt({default:[2],pattern:It,deps:["dimensions"],transform:kt,transformInto:dt.a.union(dt.a.number,dt.a.array(dt.a.number))}),dilationRate:new wt({default:[1],pattern:It,deps:["dimensions"],transform:kt,transformInto:dt.a.union(dt.a.number,dt.a.array(dt.a.number))}),depthMultiplier:new jt({default:1,min:.1,step:.1}),useBias:new Ot({default:!0})},Nt=function(t,e){return 1===t.length?Array(e).fill(t[0]):t},Lt=function(t){return"boolean"===typeof t?t?"True":"False":"(".concat(t.map((function(t){return void 0===t?"None":t.toString()})).join(","),")")},Mt=function(){function t(){var e,n,i,a,r,o,s,l,c,d=this,h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(Q.a)(this,t),this.NAME="Convolution",this.spec=St,this.nInputs=1,this.validInput=function(t){return t.data.outputShape.length===Et[d.dimensions]+2},this.depthMultiplier=void 0,this.separable=void 0,this.dimensions=void 0,this.filters=void 0,this.kernelSize=void 0,this.padding=void 0,this.strides=void 0,this.dilationRate=void 0,this.useBias=void 0,this.inputs=void 0,this.errors=u.s.map(),this.dimensions=null!==(e=h.dimensions)&&void 0!==e?e:St.dimensions.default,this.filters=null!==(n=h.filters)&&void 0!==n?n:St.filters.default,this.kernelSize=null!==(i=h.kernelSize)&&void 0!==i?i:St.kernelSize.default,this.padding=null!==(a=h.padding)&&void 0!==a?a:St.padding.default,this.strides=null!==(r=h.strides)&&void 0!==r?r:St.strides.default,this.dilationRate=null!==(o=h.dilationRate)&&void 0!==o?o:St.dilationRate.default,this.useBias=null!==(s=h.trainable)&&void 0!==s?s:St.useBias.default,this.inputs=h.inputs?u.s.array(h.inputs):u.s.array([]),this.separable=null!==(l=h.separable)&&void 0!==l?l:St.useBias.default,this.depthMultiplier=null!==(c=h.depthMultiplier)&&void 0!==c?c:St.depthMultiplier.default}return Object(ct.a)(t,[{key:"pythonCode",get:function(){return"\n    tf.keras.layers.".concat(this.separable?"Separable":"","Conv").concat(this.dimensions,"(\n      ").concat(this.filters,", ").concat(Lt(this.kernelSize),", strides=").concat(Lt(this.strides),',\n      padding="').concat(this.padding,'", dilation_rate=').concat(Lt(this.dilationRate),", \n      activation=None, use_bias=").concat(Lt(this.useBias),",").concat(this.separable?"\n      depth_multiplier="+this.depthMultiplier:"","\n      kernel_initializer='glorot_uniform', \n      bias_initializer='zeros',\n      kernel_regularizer=None, bias_regularizer=None, \n      activity_regularizer=None,\n      kernel_constraint=None, bias_constraint=None,\n    )\n  ")}},{key:"outputShape",get:function(){if(0===this.inputs.length||this.errors.size>0)return[];var t=this.inputs[0].data.outputShape;if(0===t.length)return[];var e=Nt(this.strides,Et[this.dimensions]),n=[t[0]];switch(this.padding){case"CAUSAL":case"SAME":for(var i=0;i<e.length;i++){var a=t[i+1];n.push(void 0!==a?Math.ceil(a/e[i]):void 0)}break;case"VALID":for(var r=Nt(this.kernelSize,Et[this.dimensions]),o=0;o<e.length;o++){var s=t[o+1];void 0!==s?n.push(Math.ceil((s-r[o]+1)/e[o])):n.push(void 0)}}return n}}]),t}();Object(u.k)(Mt,zt(St));var Ct,Ft={units:new jt({default:32,min:1,isInt:!0}),useBias:new Ot({default:!0})},_t=function(){function t(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(Q.a)(this,t),this.spec=Ft,this.NAME="Dense",this.units=void 0,this.useBias=void 0,this.nInputs=1,this.validInput=function(t){return 2===t.data.outputShape.length},this.inputs=void 0,this.errors=u.s.map(),this.units=null!==(e=i.units)&&void 0!==e?e:Ft.units.default,this.useBias=null!==(n=i.useBias)&&void 0!==n?n:Ft.useBias.default,this.inputs=i.inputs?u.s.array(i.inputs):u.s.array([])}return Object(ct.a)(t,[{key:"outputShape",get:function(){if(0===this.inputs.length||this.errors.size>0)return[];var t=this.inputs[0].data.outputShape;return 0===t.length?[]:[t[0],this.units]}},{key:"pythonCode",get:function(){return"\n    tf.keras.layers.Dense(\n      ".concat(this.units,", activation=None, use_bias=").concat(Lt(this.useBias),", \n      kernel_initializer='glorot_uniform',\n      bias_initializer='zeros', kernel_regularizer=None, \n      bias_regularizer=None, activity_regularizer=None, \n      kernel_constraint=None, bias_constraint=None,\n    )\n  ")}}]),t}();Object(u.k)(_t,zt(Ft)),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64",t.string="string"}(Ct||(Ct={}));var At={shape:new wt({default:[void 0,10],pattern:/(\d+|\?)|\[(\d+|\?)(,\d+)*(,)?\]/,transform:function(t){var e=JSON.parse(t.replace("?","null").replace(",]","]"));return"number"===typeof e?[e]:null===e?[void 0]:e.map((function(t){return null===t?void 0:t}))},transformFrom:function(t){return JSON.stringify(t).replace("null","?")},transformInto:dt.a.union(dt.a.maybe(dt.a.number),dt.a.array(dt.a.maybe(dt.a.number)))}),dtype:new gt({default:"float32",choices:z(Object.values(Ct))})},Bt=function(){function t(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(Q.a)(this,t),this.NAME="Input",this.spec=At,this.shape=void 0,this.dtype=void 0,this.nInputs=0,this.validInput=function(t){return!1},this.inputs=void 0,this.errors=u.s.map(),this.shape=null!==(e=i.shape)&&void 0!==e?e:At.shape.default,this.dtype=null!==(n=i.dtype)&&void 0!==n?n:At.dtype.default,this.inputs=i.inputs?u.s.array(i.inputs):u.s.array([])}return Object(ct.a)(t,[{key:"outputShape",get:function(){return this.shape}},{key:"pythonCode",get:function(){return"\n    tf.keras.Input(\n      shape=".concat(Lt(this.shape),', batch_size=None, name=None, \n      dtype="').concat(this.dtype,'", sparse=False, ragged=False\n    )\n  ')}}]),t}();function Rt(){var t=Object(h.a)(["\n  overflow-y: scroll;\n  height: 100%;\n  margin: 0;\n  padding: 0px 10px 25px;\n\n  .group {\n    padding-left: 10px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    border-top: 2px solid #eee;\n    margin-top: 6px;\n    .MuiListItemText-primary {\n      font-weight: bold;\n    }\n  }\n  .nested {\n    padding-left: 25px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n"]);return Rt=function(){return t},t}Object(u.k)(Bt,zt(At));var Dt=f.a.ul(Rt()),Pt={Input:function(){return new Bt},Convolutional:function(){return new Mt},Dense:function(){return new _t}},Tt={Model:["Input","Loss","Metric","Optimizer","Callback"],Layers:["Convolutional","Dense","Recurrent","Transformer","Dropout","Embedding","Normalization"],Activations:["Softmax","Sigmoid","Relu"],"Slice / Shape":["Concat","Gather","Stack","Tile","Slice","Split","Reshape","Traspose"]},Wt=Object(d.a)((function(){return o.a.createElement(ut.a,{disableDragging:!0,maxWidth:300,minWidth:200,style:{position:"relative",maxHeight:"100%",display:"flex",flexDirection:"column"},enableResizing:N({right:!0})},o.a.createElement("input",{type:"text"}),o.a.createElement(Dt,null,o.a.createElement(ot.a,{component:"nav"},Object.entries(Tt).map((function(t){var e=Object(y.a)(t,2),n=e[0],i=e[1];return o.a.createElement(Jt,{key:n,name:n,list:i})})))))})),Jt=Object(d.a)((function(t){var e=t.name,n=t.list,i=o.a.useState(!0),a=Object(y.a)(i,2),r=a[0],s=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(st.a,{button:!0,onClick:function(){return s(!r)},className:"group"},o.a.createElement(lt.a,{primary:e}),o.a.createElement(at.a,{icon:r?"chevron-up":"chevron-down"})),o.a.createElement(rt.a,{in:r,timeout:"auto",unmountOnExit:!0},o.a.createElement(ot.a,{component:"div",disablePadding:!0},n.map((function(t){return o.a.createElement(st.a,{button:!0,key:t,className:"nested",onClick:function(){if(t in Pt){var e=Pt[t]();Zt.addOperation(e)}}},o.a.createElement(lt.a,{primary:t}))})))))}));function qt(){var t=Object(h.a)(["\n  padding-bottom: 10px;\n  thead {\n    font-size: 1.1em;\n    font-weight: bolder;\n  }\n  tr td {\n    padding: 0;\n  }\n  tr td:first-child {\n    padding-right: 15px;\n    height: 32px;\n  }\n  tr td:last-child {\n    margin: auto auto;\n    padding-left: 10px;\n    text-align: center;\n    align-self: center;\n  }\n"]);return qt=function(){return t},t}var Ht=Object(d.a)((function(t){var e=t.model,n=e.data,i=n.inputs.length>=n.nInputs;return o.a.createElement(Kt,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Property"),o.a.createElement("td",null,"Value"))),o.a.createElement("tbody",null,0!==n.nInputs&&o.a.createElement("tr",null,o.a.createElement("td",null,"Inputs"),o.a.createElement("td",null,n.inputs.map((function(t){return o.a.createElement("div",{key:t.key},t.name)})),!i&&o.a.createElement("div",{onClick:function(){return Zt.selectingInput(e)}},"Add Input"))),Object.entries(n.spec).map((function(t){var e=Object(y.a)(t,2),i=e[0],a=e[1];return o.a.createElement("tr",{key:i},o.a.createElement("td",null,i),o.a.createElement("td",null,o.a.createElement(a.plotField,{name:i,model:n})))}))))})),Kt=f.a.table(qt()),Vt=Object(d.a)((function(){var t;if(null!=Zt.selection){var e=Zt.selection;t=o.a.createElement("div",{style:{overflow:"auto",maxHeight:"100%",maxWidth:"100%"},key:Zt.selection.key,className:"row"},o.a.createElement("div",{style:{padding:"15px"}},o.a.createElement("input",{type:"text",value:e.name,onInput:function(t){return e.setName(t.currentTarget.value)},onChange:function(){}}),o.a.createElement(Ht,{model:Zt.selection})),o.a.createElement("div",null,o.a.createElement("pre",null,Zt.selection.data.pythonCode)))}else t=o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"center"},"Not Selected"));return o.a.createElement(k.Resizable,{minHeight:200,defaultSize:{height:280,width:"auto"},style:{position:"relative",background:"white",boxShadow:"0 1px 4px 1px #eee",border:"1px solid #eee"},enable:N({top:!0})},t)})),Gt=new nt({key:"input1",name:"input1",x:72,y:60,data:new Bt}),Ut=new nt({key:"dense1",name:"dense1",x:261,y:170,data:new _t({inputs:[Gt]})}),Xt=new nt({key:"conv1",name:"conv1",x:441,y:316,data:new Mt({inputs:[Ut]})}),Yt=new nt({key:"dense2",name:"dense2",x:211,y:410,data:new _t({inputs:[Xt,Ut]})}),Zt=new it({operations:u.s.map({input1:Gt,dense1:Ut,conv1:Xt,dense2:Yt}),arrows:u.s.array([])});function $t(){return o.a.createElement("div",{className:"row",style:{background:"rgba(250,250,250,0.7)",height:"100%"}},o.a.createElement(Wt,null),o.a.createElement("div",{className:"col",style:{width:"100%",background:"rgba(250,250,250,0.7)"}},o.a.createElement("div",{className:"row",style:{minHeight:0}},o.a.createElement(j,null),o.a.createElement(Z,null)),o.a.createElement(Vt,null)))}n(95),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.b.add(a.a,a.b),l.a.render(o.a.createElement($t,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.6c9f5f4a.chunk.js.map