(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1HXD":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("tadm"),o=u("ZZ/e"),i=function(n,l,u,e){return new(u||(u=Promise))(function(t,o){function i(n){try{a(e.next(n))}catch(l){o(l)}}function r(n){try{a(e.throw(n))}catch(l){o(l)}}function a(n){n.done?t(n.value):new u(function(l){l(n.value)}).then(i,r)}a((e=e.apply(n,l||[])).next())})},r=function(n,l){var u,e,t,o,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,e&&(t=2&o[0]?e.return:o[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,o[1])).done)return t;switch(e=0,t&&(o=[2&o[0],t.value]),o[0]){case 0:case 1:t=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,e=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!t||o[1]>t[0]&&o[1]<t[3])){i.label=o[1];break}if(6===o[0]&&i.label<t[1]){i.label=t[1],t=o;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(o);break}t[2]&&i.ops.pop(),i.trys.pop();continue}o=l.call(n,i)}catch(r){o=[6,r],e=0}finally{u=t=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},a=function(){function n(n,l,u,e){this.todoService=n,this.route=l,this.loadingController=u,this.nav=e,this.todo={task:"Test 123",createdAt:(new Date).getTime(),priority:2},this.todoId=null}return n.prototype.ngOnInit=function(){this.todoId=this.route.snapshot.params.id,this.todoId&&this.loadTodo()},n.prototype.loadTodo=function(){return i(this,void 0,void 0,function(){var n,l=this;return r(this,function(u){switch(u.label){case 0:return[4,this.loadingController.create({message:"Loading Todo..."})];case 1:return[4,(n=u.sent()).present()];case 2:return u.sent(),this.todoService.getTodo(this.todoId).subscribe(function(u){n.dismiss(),l.todo=u}),[2]}})})},n.prototype.saveTodo=function(){return i(this,void 0,void 0,function(){var n,l=this;return r(this,function(u){switch(u.label){case 0:return[4,this.loadingController.create({message:"Saving Todo..."})];case 1:return[4,(n=u.sent()).present()];case 2:return u.sent(),this.todoId?this.todoService.updateTodo(this.todo,this.todoId).then(function(){n.dismiss(),l.nav.back()}):this.todoService.addTodo(this.todo).then(function(){n.dismiss(),l.nav.back()}),[2]}})})},n}(),d=function(){return function(){}}(),b=u("pMnS"),s=u("oBZk"),c=u("gIcY"),h=u("ZYCi"),p=e.nb({encapsulation:0,styles:[[""]],data:{}});function f(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,s.B,s.h)),e.ob(1,49152,null,0,o.z,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.N,s.t)),e.ob(3,49152,null,0,o.zb,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.x,s.d)),e.ob(5,49152,null,0,o.j,[e.h,e.k],null,null),(n()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.yb(n,8).onClick(u)&&t),t},s.v,s.b)),e.ob(7,49152,null,0,o.e,[e.h,e.k],{defaultHref:[0,"defaultHref"]},null),e.ob(8,16384,null,0,o.f,[[2,o.fb],o.Fb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,s.M,s.s)),e.ob(10,49152,null,0,o.xb,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["Details"])),(n()(),e.pb(12,0,null,null,28,"ion-content",[["padding",""]],null,null,null,s.y,s.e)),e.ob(13,49152,null,0,o.s,[e.h,e.k],null,null),(n()(),e.pb(14,0,null,0,23,"ion-list",[["lines","full"]],null,null,null,s.J,s.p)),e.ob(15,49152,null,0,o.M,[e.h,e.k],{lines:[0,"lines"]},null),(n()(),e.pb(16,0,null,0,10,"ion-item",[],null,null,null,s.H,s.k)),e.ob(17,49152,null,0,o.F,[e.h,e.k],null,null),(n()(),e.pb(18,0,null,0,8,"ion-input",[["placeholder","Task"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.yb(n,21)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,21)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.todo.task=u)&&t),t},s.D,s.j)),e.ob(19,16384,null,0,c.g,[],{required:[0,"required"]},null),e.Cb(1024,null,c.b,function(n){return[n]},[c.g]),e.ob(21,16384,null,0,o.Kb,[e.k],null,null),e.Cb(1024,null,c.c,function(n){return[n]},[o.Kb]),e.ob(23,671744,null,0,c.f,[[8,null],[6,c.b],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,c.d,null,[c.f]),e.ob(25,16384,null,0,c.e,[[4,c.d]],null,null),e.ob(26,49152,null,0,o.E,[e.h,e.k],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(n()(),e.pb(27,0,null,0,10,"ion-item",[],null,null,null,s.H,s.k)),e.ob(28,49152,null,0,o.F,[e.h,e.k],null,null),(n()(),e.pb(29,0,null,0,8,"ion-input",[["placeholder","Priority"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.yb(n,32)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,32)._handleIonChange(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.todo.priority=u)&&t),t},s.D,s.j)),e.ob(30,16384,null,0,c.g,[],{required:[0,"required"]},null),e.Cb(1024,null,c.b,function(n){return[n]},[c.g]),e.ob(32,16384,null,0,o.Gb,[e.k],null,null),e.Cb(1024,null,c.c,function(n){return[n]},[o.Gb]),e.ob(34,671744,null,0,c.f,[[8,null],[6,c.b],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,c.d,null,[c.f]),e.ob(36,16384,null,0,c.e,[[4,c.d]],null,null),e.ob(37,49152,null,0,o.E,[e.h,e.k],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(n()(),e.pb(38,0,null,0,2,"ion-button",[["expand","full"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.saveTodo()&&e),e},s.w,s.c)),e.ob(39,49152,null,0,o.i,[e.h,e.k],{expand:[0,"expand"]},null),(n()(),e.Fb(-1,0,["Save"]))],function(n,l){var u=l.component;n(l,3,0,"primary"),n(l,7,0,"/home"),n(l,8,0,"/home"),n(l,15,0,"full"),n(l,19,0,""),n(l,23,0,u.todo.task),n(l,26,0,"Task","","text"),n(l,30,0,""),n(l,34,0,u.todo.priority),n(l,37,0,"Priority","","number"),n(l,39,0,"full")},function(n,l){n(l,18,0,e.yb(l,19).required?"":null,e.yb(l,25).ngClassUntouched,e.yb(l,25).ngClassTouched,e.yb(l,25).ngClassPristine,e.yb(l,25).ngClassDirty,e.yb(l,25).ngClassValid,e.yb(l,25).ngClassInvalid,e.yb(l,25).ngClassPending),n(l,29,0,e.yb(l,30).required?"":null,e.yb(l,36).ngClassUntouched,e.yb(l,36).ngClassTouched,e.yb(l,36).ngClassPristine,e.yb(l,36).ngClassDirty,e.yb(l,36).ngClassValid,e.yb(l,36).ngClassInvalid,e.yb(l,36).ngClassPending)})}function g(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-todo-detail",[],null,null,null,f,p)),e.ob(1,114688,null,0,a,[t.a,h.a,o.Db,o.Fb],null,null)],function(n,l){n(l,1,0)},null)}var y=e.lb("app-todo-detail",a,g,{},{},[]),v=u("Ip0R");u.d(l,"TodoDetailPageModuleNgFactory",function(){return k});var k=e.mb(d,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[b.a,y]],[3,e.j],e.x]),e.wb(4608,v.l,v.k,[e.u,[2,v.s]]),e.wb(4608,c.i,c.i,[]),e.wb(4608,o.a,o.a,[e.z,e.g]),e.wb(4608,o.Eb,o.Eb,[o.a,e.j,e.q]),e.wb(4608,o.Ib,o.Ib,[o.a,e.j,e.q]),e.wb(1073742336,v.b,v.b,[]),e.wb(1073742336,c.h,c.h,[]),e.wb(1073742336,c.a,c.a,[]),e.wb(1073742336,o.Bb,o.Bb,[]),e.wb(1073742336,h.o,h.o,[[2,h.u],[2,h.m]]),e.wb(1073742336,d,d,[]),e.wb(1024,h.k,function(){return[[{path:"",component:a}]]},[])])})}}]);