(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("1c93b39a",content,!0,{sourceMap:!1})},164:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("36873827",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";var o=n(163);n.n(o).a},298:function(t,e,n){(t.exports=n(48)(!1)).push([t.i,".Logo,.wrap{width:100vmin;height:100vmin;font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.pins{-webkit-animation:rotate 4s cubic-bezier(.15,.48,.34,1);animation:rotate 4s cubic-bezier(.15,.48,.34,1);-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(-480deg);transform:rotate(-480deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@keyframes rotate{0%{-webkit-transform:rotate(-480deg);transform:rotate(-480deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}.pin{-webkit-transition:r .1s;transition:r .1s}.pin-constraint{r:8;stroke-width:5}.pin-constraint-enter-active,.pin-constraint-leave-active{-webkit-transition:all .1s;transition:all .1s}.pin-constraint-enter,.pin-constraint-leave-to{r:0}.body{-webkit-animation:show 1.5s;animation:show 1.5s;cursor:pointer}.body .remove{opacity:0;-webkit-transition:opacity .1s;transition:opacity .1s}.body:hover .remove{opacity:.8}@-webkit-keyframes show{0%{opacity:0}to{opacity:1}}@keyframes show{0%{opacity:0}to{opacity:1}}.overlay{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;pointer-events:none}.main-title{letter-spacing:.15em;-webkit-animation:bring-up 1.5s cubic-bezier(.16,.5,.5,1) 2s both;animation:bring-up 1.5s cubic-bezier(.16,.5,.5,1) 2s both;color:#001f62;font-weight:700}.links{-webkit-animation:bring-up 1.5s cubic-bezier(.16,.5,.5,1) 2.5s both;animation:bring-up 1.5s cubic-bezier(.16,.5,.5,1) 2.5s both}@-webkit-keyframes bring-up{0%{-webkit-transform:translateY(100px);transform:translateY(100px);opacity:0}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes bring-up{0%{-webkit-transform:translateY(100px);transform:translateY(100px);opacity:0}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}.link{margin-top:.5rem;padding:.3rem 1rem;outline:none;border:none;border-radius:5px;background-color:transparent;color:#001f62;font-weight:700;font-size:1rem;opacity:.7;pointer-events:auto;cursor:pointer;text-decoration:none}.modal-wrap{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;-webkit-box-pack:center;justify-content:center;overflow:hidden}.modal-body,.modal-wrap{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.modal-body{width:50rem;height:50rem;padding:5vmin;max-width:100%;max-height:100%;border:2px solid #001f62;background:#fff;color:#001f62;font-size:3vmin;pointer-events:auto;cursor:pointer;-webkit-transform:translate(0);transform:translate(0);-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around}.modal-enter-active,.modal-leave-active{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.modal-enter{-webkit-transform:translateY(100vh);transform:translateY(100vh)}.modal-leave-to{-webkit-transform:translateY(-100vh);transform:translateY(-100vh)}.modal-body .title{font-size:6vmin;letter-spacing:.1em;font-weight:700}.modal-body .subtitle{font-size:3vmin;text-align:center}.modal-body .subtitle a{font-weight:700;color:inherit;text-decoration:none}.modal-body p{width:100%;text-align:left}",""])},299:function(t,e,n){"use strict";var o=n(164);n.n(o).a},300:function(t,e,n){(t.exports=n(48)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}",""])},302:function(t,e,n){"use strict";n.r(e);var o=n(32),r=(n(188),n(165),n(65),n(190),n(301)),d=(n(18),n(35),n(5)),l=(n(66),n(67),n(47),n(191),n(193)),c=n(194),y=n.n(c),h=n(199),f=n.n(h),v=n(283),m=n.n(v),w=450*Math.sin(Math.PI/24)*2/(Math.sqrt(3)+2+Math.sqrt(2)+Math.sqrt(6))*2,x=[{width:w*(Math.sqrt(3)+2),height:w},{width:w*(Math.sqrt(2)+Math.sqrt(6))/2,height:w*(3*Math.sqrt(2)+Math.sqrt(6))/2},{width:w*(Math.sqrt(3)+1),height:w*(Math.sqrt(3)+1)}],k={data:function(){return{bodies:[],pins:Array(24).fill().map(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[1];return{x:500+450*Math.sin(15*(i+.5)/180*Math.PI),y:500+450*Math.cos(15*(i+.5)/180*Math.PI)}}),constraintCandidates:[],constraints:[],isModal:!1}},computed:{pinConstraints:function(){var t=Array(24).fill().map(function(){return[]}),e=!0,n=!1,o=void 0;try{for(var r,d=this.constraints[Symbol.iterator]();!(e=(r=d.next()).done);e=!0){var l=r.value;"pin"===l.bodyA.type&&t[l.bodyA.id].push(l)}}catch(t){n=!0,o=t}finally{try{e||null==d.return||d.return()}finally{if(n)throw o}}return t}},mounted:function(){var t=Object(d.a)(regeneratorRuntime.mark(function t(){var e,n,o,d,c,y=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t){setTimeout(t,2e3)});case 2:this.engine=l.Engine.create(),e=Array(6).fill().map(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[1];return l.Bodies.rectangle(0===i?y.pins[14].x:800*Math.random()+100,0===i?y.pins[14].y:500*Math.random()+200,x[i%3].width,x[i%3].height,{label:i%3})}),n=l.Bodies.rectangle(500,1250,2e3,500,{isStatic:!0}),o=l.Bodies.rectangle(500,-250,2e3,500,{isStatic:!0}),d=l.Bodies.rectangle(1250,500,500,1e3,{isStatic:!0}),c=l.Bodies.rectangle(-250,500,500,1e3,{isStatic:!0}),l.World.add(this.engine.world,[].concat(Object(r.a)(e),[n,o,c,d])),this.mouse=l.Mouse.create(this.$refs.wrap),this.mouseConstraint=l.MouseConstraint.create(this.engine,{mouse:this.mouse,constraint:{stiffness:.2,render:{visible:!1}}}),l.Events.on(this.mouseConstraint,"enddrag",this.onEndDrag),l.World.add(this.engine.world,this.mouseConstraint),this.constrainedVertices=new Map,this.pieces=new Set(e),this.addConstraint({type:"pin",id:14},{type:"body",body:e[0],vertixIndex:0}),l.Engine.run(this.engine),this.tickInterval=setInterval(this.onTick,100),window.addEventListener("resize",this.onWindowResize),this.onWindowResize();case 20:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),destroyed:function(){clearInterval(this.tickInterval),window.removeEventListener("resize",this.onWindowResize)},methods:{addConstraint:function(t,e){if("pin"===t.type){y()("body"===e.type);var n=e.body.vertices[e.vertixIndex],d=l.Constraint.create({bodyB:e.body,pointA:this.pins[t.id],pointB:{x:n.x-e.body.position.x,y:n.y-e.body.position.y},length:0,stiffness:.8});l.World.add(this.engine.world,d),this.constrainedVertices.has(e.body.id)||this.constrainedVertices.set(e.body.id,new Set),this.constrainedVertices.get(e.body.id).add(e.vertixIndex),this.constraints.push({bodyA:t,bodyB:e,constraint:d})}else if("body"===t.type){y()("body"===e.type);var c=t.body.vertices[t.vertixIndex],h=e.body.vertices[e.vertixIndex],f=l.Constraint.create({bodyA:t.body,bodyB:e.body,pointA:{x:c.x-t.body.position.x,y:c.y-t.body.position.y},pointB:{x:h.x-e.body.position.x,y:h.y-e.body.position.y},length:0,stiffness:.8});l.World.add(this.engine.world,f);for(var v=0,w=[t,e];v<w.length;v++){var k=w[v],body=k.body,C=k.vertixIndex;this.constrainedVertices.has(body.id)||this.constrainedVertices.set(body.id,new Set),this.constrainedVertices.get(body.id).add(C)}this.constraints.push({bodyA:t,bodyB:e,constraint:f})}if(this.constrainedVertices.get(e.body.id).size>=2){var _=e.body.label,M=function(t,e){var n=m()(t),r=n.positions,d=n.cells,l=new Set,c=0,y=null,h=!0,f=!1,v=void 0;try{for(var w,x=d.entries()[Symbol.iterator]();!(h=(w=x.next()).done);h=!0){var k=Object(o.a)(w.value,2),C=k[0],_=k[1],M=Object(o.a)(t[C],2),B=M[0],S=M[1],A=!0,z=!1,I=void 0;try{for(var j,V=_[Symbol.iterator]();!(A=(j=V.next()).done);A=!0){var O=j.value;if(-1!==O&&!l.has(O)){var W=Object(o.a)(r[O],2),Y=W[0],E=W[1];if(!(Y<=0||Y>=e.width||E<=0||E>=e.height)){var L=Math.sqrt(Math.pow(B-Y,2)+Math.pow(S-E,2));c<L&&(c=L,y={x:Y,y:E}),l.add(O)}}}}catch(t){z=!0,I=t}finally{try{A||null==V.return||V.return()}finally{if(z)throw I}}}}catch(t){f=!0,v=t}finally{try{h||null==x.return||x.return()}finally{if(f)throw v}}return y}([].concat(Object(r.a)(Array.from(this.pieces).map(function(t){var e=t.position;return[e.x,e.y]})),[[0,0],[0,1e3],[1e3,1e3],[1e3,0]]),{width:1e3,height:1e3}),B=l.Bodies.rectangle(M.x,M.y,x[_].width,x[_].height,{label:_});l.World.add(this.engine.world,B),this.pieces.add(B),setTimeout(function(){l.Body.setStatic(e.body,!0)},500)}},getConstraintCandidates:function(body){var t=1/0,e=null;this.constrainedVertices.has(body.id)||this.constrainedVertices.set(body.id,new Set);var n=this.constrainedVertices.get(body.id),r=!0,d=!1,l=void 0;try{for(var c,y=body.vertices.entries()[Symbol.iterator]();!(r=(c=y.next()).done);r=!0){var h=Object(o.a)(c.value,2),f=h[0],v=h[1];if(!n.has(f)){var m=!0,w=!1,x=void 0;try{for(var k,C=this.pins.entries()[Symbol.iterator]();!(m=(k=C.next()).done);m=!0){var _=Object(o.a)(k.value,2),M=_[0],B=_[1];if(!(this.pinConstraints[M].length>=1)){var S=Math.sqrt(Math.pow(v.x-B.x,2)+Math.pow(v.y-B.y,2));t>S&&(t=S,e={bodyA:{type:"pin",id:M},bodyB:{type:"body",body:body,vertixIndex:f},position:B})}}}catch(t){w=!0,x=t}finally{try{m||null==C.return||C.return()}finally{if(w)throw x}}var A=!0,z=!1,I=void 0;try{for(var j,V=this.pieces[Symbol.iterator]();!(A=(j=V.next()).done);A=!0){var O=j.value;if(O.id!==body.id&&O.isStatic){var W=this.constrainedVertices.get(O.id),Y=!0,E=!1,L=void 0;try{for(var R,P=O.vertices.entries()[Symbol.iterator]();!(Y=(R=P.next()).done);Y=!0){var T=Object(o.a)(R.value,2),H=T[0],$=T[1];if(!W.has(H)){var D=Math.sqrt(Math.pow(v.x-$.x,2)+Math.pow(v.y-$.y,2));t>D&&(t=D,e={bodyA:{type:"body",body:O,vertixIndex:H},bodyB:{type:"body",body:body,vertixIndex:f},position:$})}}}catch(t){E=!0,L=t}finally{try{Y||null==P.return||P.return()}finally{if(E)throw L}}}}}catch(t){z=!0,I=t}finally{try{A||null==V.return||V.return()}finally{if(z)throw I}}}}}catch(t){d=!0,l=t}finally{try{r||null==y.return||y.return()}finally{if(d)throw l}}return 0===n.size&&t<25||1===n.size&&t<10?[e]:[]},onTick:function(){var t=l.Composite.allBodies(this.engine.world);this.bodies=t,null!==this.mouseConstraint.body&&(this.constraintCandidates=this.getConstraintCandidates(this.mouseConstraint.body))},onWindowResize:function(){var t=1e3/Math.min(window.innerWidth,window.innerHeight);l.Mouse.setScale(this.mouse,l.Vector.create(t,t))},onEndDrag:function(t){if(this.pieces.has(t.body)){var e=this.getConstraintCandidates(t.body),n=Object(o.a)(e,1)[0];void 0!==n&&this.addConstraint(n.bodyA,n.bodyB),this.constraintCandidates=[]}},removeBody:function(body){var t=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.pieces.has(body)&&(!e||body.isStatic)){l.World.remove(this.engine.world,body);var n=[],r=!0,d=!1,c=void 0;try{for(var y,h=this.constraints.entries()[Symbol.iterator]();!(r=(y=h.next()).done);r=!0){var v=Object(o.a)(y.value,2),m=v[0],w=v[1];"body"!==w.bodyA.type||w.bodyA.body.id!==body.id?"body"!==w.bodyB.type||w.bodyB.body.id!==body.id||(l.World.remove(this.engine.world,w.constraint),"body"===w.bodyA.type&&this.constrainedVertices.get(w.bodyA.body.id).delete(w.bodyA.vertixIndex),this.constrainedVertices.get(w.bodyB.body.id).delete(w.bodyB.vertixIndex),n.push(m)):(l.World.remove(this.engine.world,w.constraint),this.constrainedVertices.get(w.bodyA.body.id).delete(w.bodyA.vertixIndex),"body"===w.bodyB.type&&this.constrainedVertices.get(w.bodyB.body.id).delete(w.bodyB.vertixIndex),n.push(m))}}catch(t){d=!0,c=t}finally{try{r||null==h.return||h.return()}finally{if(d)throw c}}n.sort(function(a,b){return b-a});for(var x=0,k=n;x<k.length;x++){var C=k[x];this.constraints.splice(C,1)}this.pieces.delete(body);var _=[],M=!0,B=!1,S=void 0;try{for(var A,z=function(){var e=A.value,n=t.constrainedVertices.get(e.id);if(e.isStatic&&n.size<=1){l.Body.setStatic(e,!1);var o=f()(Array.from(t.pieces),function(n){if(n.label!==e.label)return 1/0;if(_.some(function(t){return t.id===n.id}))return 1/0;var o=t.constrainedVertices.get(n.id);return o?o.size:0});o&&(console.log(o.id),_.push(o))}},I=this.pieces[Symbol.iterator]();!(M=(A=I.next()).done);M=!0)z()}catch(t){B=!0,S=t}finally{try{M||null==I.return||I.return()}finally{if(B)throw S}}for(var j=0,V=_;j<V.length;j++){var O=V[j];this.removeBody(O)}}},onClickBody:function(body){this.removeBody(body,!0)}}},C=(n(297),n(23)),_={components:{Logo:Object(C.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrap",staticClass:"wrap"},[n("svg",{staticClass:"Logo",attrs:{viewBox:"0 0 1000 1000"}},[n("g",{staticClass:"pins"},t._l(t.pins,function(e,i){return n("circle",{key:i,staticClass:"pin",attrs:{r:0===t.pinConstraints[i].length?5:0,fill:"#001f62",cx:e.x,cy:e.y}})}),0),t._v(" "),n("g",{staticClass:"bodies"},t._l(t.bodies,function(body){return n("g",{key:body.id,staticClass:"body",on:{click:function(e){return t.onClickBody(body)}}},[n("polygon",{attrs:{points:body.vertices.map(function(t){return t.x+","+t.y}).join(" "),fill:"#001f62"}}),t._v(" "),body.isStatic?n("path",{staticClass:"remove",attrs:{d:"M0-8A8,8,0,0,0-8,0,8,8,0,0,0,0,8,8,8,0,0,0,8,0,8,8,0,0,0,0-8ZM4.53,3,3,4.53l-3-3-3,3L-4.53,3l3-3-3-3L-3-4.53l3,3,3-3L4.53-3l-3,3Z",fill:"white",transform:"translate("+body.position.x+", "+body.position.y+")"}}):t._e()])}),0),t._v(" "),n("transition-group",{attrs:{name:"pin-constraint",tag:"g"}},t._l(t.constraintCandidates,function(t){return n("circle",{key:[t.position.x,t.position.y].join(","),staticClass:"pin-constraint",attrs:{fill:"white",stroke:"#001f62",cx:t.position.x,cy:t.position.y}})}),0)],1),t._v(" "),n("div",{staticClass:"overlay"},[n("h1",{staticClass:"main-title"},[t._v("tokyo-olym.pics")]),t._v(" "),n("p",{staticClass:"links"},[n("button",{staticClass:"link",on:{click:function(e){t.isModal=!0}}},[t._v("About")]),t._v(" "),n("a",{staticClass:"link",attrs:{href:"https://github.com/hakatashi/tokyo-olym.pics",target:"_blank",rel:"nofollow"}},[t._v("GitHub")])])]),t._v(" "),n("div",{staticClass:"modal-wrap",on:{click:function(e){t.isModal=!1}}},[n("transition",{attrs:{name:"modal"}},[t.isModal?n("div",{staticClass:"modal-body"},[n("h1",{staticClass:"title"},[t._v("tokyo-olym.pics")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("\n\t\t\t\t\tby "),n("a",{attrs:{href:"https://github.com/hakatashi",target:"_blank",rel:"nofollow"}},[t._v("@hakatashi")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("tokyo-olym.pics")]),t._v("は四角形を動かしたり"),n("br"),t._v("\n\t\t\t\t\tくっつけたりすることができるウェブサイトです。"),n("br"),t._v("\n\t\t\t\t\t四角形を動かしたりくっつけたりして遊びましょう。\n\t\t\t\t")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t※本サイトは実在の人物、団体、および"),n("br"),t._v("\n\t\t\t\t\t国際的な総合スポーツ大会とは一切関係ありません。\n\t\t\t\t")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("tokyo-olym.pics")]),t._v(" is the website in which"),n("br"),t._v("\n\t\t\t\t\tyou can drag and glue the rectangles."),n("br"),t._v("\n\t\t\t\t\tSo let's drag and glue the rectangles.\n\t\t\t\t")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t* This website is fictitious."),n("br"),t._v("\n\t\t\t\t\tAny similarity to actual persons, entity,"),n("br"),t._v("\n\t\t\t\t\tor an international sports event is unintentional.\n\t\t\t\t")])]):t._e()])],1)])},[],!1,null,null,null).exports}},M=(n(299),Object(C.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("logo")],1)},[],!1,null,null,null));e.default=M.exports}}]);