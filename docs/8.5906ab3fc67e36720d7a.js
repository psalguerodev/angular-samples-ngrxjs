(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DMMi:function(a,r,n){"use strict";n.r(r);var l=n("CcnG"),e=n("mrSG"),t=n("z0FN"),i=n("psW0"),s=n("vubp"),o=n("VnD/"),b=n("0/uQ"),u=n("t/Na"),m=function(a){function r(r){var n=a.call(this,r)||this;return n.http=r,n}return e.c(r,a),r.prototype.mergeMapUsers=function(){var a=this;return Object(b.a)(["1","2","3","4"]).pipe(Object(i.a)(function(r,n){return console.log("Merge map value "+r+" index "+n),a.http.get(a.getApiUrlGitHub(r)).pipe(Object(s.a)(1e3),Object(o.a)(function(a){return void 0!==a}))}))},r.ngInjectableDef=l.T({factory:function(){return new r(l.X(u.c))},token:r,providedIn:"root"}),r}(t.a),c=n("2WpN"),p=function(){function a(a){this.usersService=a,this.users=[]}return a.prototype.ngOnInit=function(){this.loadUsers()},a.prototype.loadUsers=function(){var a=this;this.loading=!0,this.users=[],this.usersService.mergeMapUsers().pipe(Object(c.a)(function(){a.loading=!1,a.users=a.users.sort()})).subscribe(function(r){r&&a.users.push(r)})},a}(),g=function(){return function(){}}(),d=n("NcP4"),f=n("t68o"),y=n("pMnS"),h=n("Z+uX"),x=n("Ip0R"),v=n("Fzqc"),k=n("Wf4p"),q=n("ZYjt"),w=n("wFw1"),z=l.ob({encapsulation:2,styles:[".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],data:{}});function X(a){return l.Hb(2,[l.Db(402653184,1,{_primaryValueBar:0}),(a()(),l.qb(1,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","4"],["width","100%"]],null,null,null,null,null)),(a()(),l.qb(2,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(a()(),l.qb(3,0,null,null,1,":svg:pattern",[["height","4"],["patternUnits","userSpaceOnUse"],["width","8"],["x","4"],["y","0"]],[[8,"id",0]],null,null,null,null)),(a()(),l.qb(4,0,null,null,0,":svg:circle",[["cx","2"],["cy","2"],["r","2"]],null,null,null,null,null)),(a()(),l.qb(5,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(a()(),l.qb(6,0,null,null,1,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),l.pb(7,278528,null,0,x.o,[l.t,l.k,l.E],{ngStyle:[0,"ngStyle"]},null),(a()(),l.qb(8,0,[[1,0],["primaryValueBar",1]],null,1,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),l.pb(9,278528,null,0,x.o,[l.t,l.k,l.E],{ngStyle:[0,"ngStyle"]},null),(a()(),l.qb(10,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(a,r){var n=r.component;a(r,7,0,n._bufferTransform()),a(r,9,0,n._primaryTransform())},function(a,r){var n=r.component;a(r,3,0,n.progressbarId),a(r,5,0,n._rectangleFillValue)})}var _=n("lzlj"),j=n("FVSy"),M=n("v9Dh"),F=n("eDkP"),S=n("qAlS"),I=n("dWZg"),O=n("lLAP"),P=n("bujt"),U=n("UodH"),A=n("Mr+X"),D=n("SMsm"),H=l.ob({encapsulation:0,styles:[[""]],data:{}});function N(a){return l.Hb(0,[(a()(),l.qb(0,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","example-margin mat-progress-bar"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,X,z)),l.pb(1,4374528,null,0,h.b,[l.k,l.z,[2,w.a],[2,h.a]],{color:[0,"color"],value:[1,"value"],mode:[2,"mode"]},null)],function(a,r){a(r,1,0,"warn","100","indeterminate")},function(a,r){a(r,0,0,l.zb(r,1).value,l.zb(r,1).mode,l.zb(r,1)._isNoopAnimation)})}function V(a){return l.Hb(0,[(a()(),l.qb(0,0,null,null,13,"mat-card",[["class","example-card mat-card"]],null,null,null,_.d,_.a)),l.pb(1,49152,null,0,j.a,[],null,null),(a()(),l.qb(2,0,null,0,11,"mat-card-header",[["class","mat-card-header"]],null,null,null,_.c,_.b)),l.pb(3,49152,null,0,j.d,[],null,null),(a()(),l.qb(4,0,null,0,1,"div",[["class","example-header-image-user mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),l.pb(5,16384,null,0,j.c,[],null,null),(a()(),l.qb(6,16777216,null,1,3,"mat-card-title",[["class","mat-card-title"],["fxLayout.gt-xs","row"],["fxLayout.xs","column"],["matTooltip","Please open console for view results"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(a,r,n){var e=!0;return"longpress"===r&&(e=!1!==l.zb(a,8).show()&&e),"keydown"===r&&(e=!1!==l.zb(a,8)._handleKeydown(n)&&e),"touchend"===r&&(e=!1!==l.zb(a,8)._handleTouchend()&&e),e},null,null)),l.pb(7,16384,null,0,j.g,[],null,null),l.pb(8,147456,null,0,M.d,[F.a,l.k,S.a,l.P,l.z,I.a,O.b,O.d,M.b,[2,v.b],[2,M.a],[2,q.g]],{message:[0,"message"]},null),(a()(),l.Fb(9,null,[" "," | ID: "," "])),(a()(),l.qb(10,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),l.pb(11,16384,null,0,j.f,[],null,null),(a()(),l.Fb(12,null,["",""])),l.Bb(13,1)],function(a,r){a(r,8,0,"Please open console for view results")},function(a,r){a(r,9,0,r.context.$implicit.name,r.context.$implicit.id);var n=l.Gb(r,12,0,a(r,13,0,l.zb(r.parent,0),r.context.$implicit.email));a(r,12,0,n)})}function L(a){return l.Hb(0,[l.Ab(0,x.i,[]),(a()(),l.hb(16777216,null,null,1,null,N)),l.pb(2,16384,null,0,x.l,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(a()(),l.qb(3,0,null,null,3,"section",[["class","wave"]],null,null,null,null,null)),(a()(),l.qb(4,0,null,null,2,"div",[["class",""]],null,null,null,null,null)),(a()(),l.qb(5,0,null,null,1,"h3",[["class","title"]],null,null,null,null,null)),(a()(),l.Fb(-1,null,["Interceptors fault tolerant"])),(a()(),l.qb(7,0,null,null,2,"div",[["class","cardList"]],null,null,null,null,null)),(a()(),l.hb(16777216,null,null,1,null,V)),l.pb(9,278528,null,0,x.k,[l.P,l.M,l.s],{ngForOf:[0,"ngForOf"]},null),(a()(),l.qb(10,0,null,null,5,"div",[["fxLayoutAlign","right"]],null,null,null,null,null)),(a()(),l.qb(11,0,null,null,4,"button",[["color","primary"],["mat-fab",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(a,r,n){var l=!0;return"click"===r&&(l=!1!==a.component.loadUsers()&&l),l},P.b,P.a)),l.pb(12,180224,null,0,U.b,[l.k,I.a,O.d,[2,w.a]],{color:[0,"color"]},null),(a()(),l.qb(13,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,A.b,A.a)),l.pb(14,9158656,null,0,D.b,[l.k,D.d,[8,null],[2,D.a]],null,null),(a()(),l.Fb(-1,0,["refresh"]))],function(a,r){var n=r.component;a(r,2,0,n.loading),a(r,9,0,n.users),a(r,12,0,"primary"),a(r,14,0)},function(a,r){a(r,11,0,l.zb(r,12).disabled||null,"NoopAnimations"===l.zb(r,12)._animationMode),a(r,13,0,l.zb(r,14).inline,"primary"!==l.zb(r,14).color&&"accent"!==l.zb(r,14).color&&"warn"!==l.zb(r,14).color)})}function Z(a){return l.Hb(0,[(a()(),l.qb(0,0,null,null,1,"app-repositories",[],null,null,null,L,H)),l.pb(1,114688,null,0,p,[m],null,null)],function(a,r){a(r,1,0)},null)}var T=l.mb("app-repositories",p,Z,{},{},[]),W=n("M2Lx"),Y=n("mVsa"),G=n("o3x0"),B=n("8mMr"),C=n("r43C"),$=n("4c35"),E=n("/VYK"),J=n("seP3"),K=n("b716"),R=n("6Wmm"),Q=n("hctd"),aa=n("ZYCi");n.d(r,"RepositoriesModuleNgFactory",function(){return ra});var ra=l.nb(g,[],function(a){return l.wb([l.xb(512,l.j,l.cb,[[8,[d.a,f.a,y.a,T]],[3,l.j],l.x]),l.xb(4608,x.n,x.m,[l.u,[2,x.x]]),l.xb(4608,W.c,W.c,[]),l.xb(4608,F.a,F.a,[F.g,F.c,l.j,F.f,F.d,l.q,l.z,x.d,v.b,[2,x.g]]),l.xb(5120,F.h,F.i,[F.a]),l.xb(5120,M.b,M.c,[F.a]),l.xb(4608,q.f,k.b,[[2,k.d],[2,k.g]]),l.xb(5120,Y.b,Y.g,[F.a]),l.xb(5120,G.b,G.c,[F.a]),l.xb(135680,G.d,G.d,[F.a,l.q,[2,x.g],[2,G.a],G.b,[3,G.d],F.c]),l.xb(4608,k.a,k.a,[]),l.xb(1073742336,x.c,x.c,[]),l.xb(1073742336,v.a,v.a,[]),l.xb(1073742336,k.g,k.g,[[2,k.c],[2,q.g]]),l.xb(1073742336,B.b,B.b,[]),l.xb(1073742336,j.e,j.e,[]),l.xb(1073742336,k.h,k.h,[]),l.xb(1073742336,C.a,C.a,[]),l.xb(1073742336,I.b,I.b,[]),l.xb(1073742336,k.j,k.j,[]),l.xb(1073742336,U.c,U.c,[]),l.xb(1073742336,W.d,W.d,[]),l.xb(1073742336,O.a,O.a,[]),l.xb(1073742336,$.f,$.f,[]),l.xb(1073742336,S.b,S.b,[]),l.xb(1073742336,F.e,F.e,[]),l.xb(1073742336,M.e,M.e,[]),l.xb(1073742336,D.c,D.c,[]),l.xb(1073742336,Y.e,Y.e,[]),l.xb(1073742336,G.g,G.g,[]),l.xb(1073742336,h.c,h.c,[]),l.xb(1073742336,E.c,E.c,[]),l.xb(1073742336,J.d,J.d,[]),l.xb(1073742336,K.b,K.b,[]),l.xb(1073742336,R.a,R.a,[]),l.xb(1073742336,Q.a,Q.a,[]),l.xb(1073742336,aa.l,aa.l,[[2,aa.r],[2,aa.k]]),l.xb(1073742336,g,g,[]),l.xb(1024,aa.i,function(){return[[{path:"",component:p}]]},[])])})}}]);