(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0065":function(t,e,a){"use strict";a("80a5")},"34b4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("5f5b"),o=a("bc3a"),i=a.n(o),s=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("catalog")],1)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isAuthenticated?a("div",{staticStyle:{display:"block"}},[a("span",[t._v("Search: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.updateQuery}},[t._v("Search")])]),a("div",{attrs:{id:"app"}},[a("ul",{staticClass:"card-list",style:t.gridStyle},t._l(t.books,(function(t){return a("li",{key:t,staticClass:"card-item",attrs:{id:"bookCard"}},[a("book-card",{attrs:{title:t.title,price:t.price,thumbnail:t.thumbnail,isbn:t.id,description:t.description}})],1)})),0)]),a("span",[a("button",{staticClass:"btn btn-primary",attrs:{disabled:0==this.page},on:{click:t.previousPage}},[t._v("Previous Page")]),t._v(" "+t._s(this.page)+" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:this.books.length<this.items_per_page},on:{click:t.nextPage}},[t._v("Next Page")])])]):a("div",[a("p",[t._v("please login to continue")])])},d=[],p=a("5530"),f=a("2f62"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"details"}},[a("p",{staticClass:"shortened-details"},[a("b",[t._v("Title:")]),t._v(" "+t._s(t.title))]),a("p",{staticClass:"shortened-details"},[a("b",[t._v("Price:")]),t._v(" $ "+t._s(t.price))]),a("p",{staticClass:"shortened-details"},[a("b",[t._v("ISBN:")]),t._v(" "+t._s(t.isbn))])]),a("input",{attrs:{id:"thumbnail",type:"image",src:t.thumbnail},on:{click:t.showModal}}),a("br"),a("button",{staticClass:"btn btn-primary",attrs:{id:"addToCartButton"},on:{click:t.addToCart}},[t._v("Add to Cart")]),a("b-modal",{ref:"bookModal",attrs:{id:"bookModal"+t.isbn,"hide-footer":""}},[a("p",[a("b",[t._v("Title:")]),t._v(" "+t._s(t.title))]),a("p",[a("b",[t._v("Price:")]),t._v(" $ "+t._s(t.price))]),a("img",{attrs:{src:t.thumbnail}}),a("p",[a("b",[t._v("ISBN:")]),t._v(" "+t._s(t.isbn))]),a("p",[a("b",[t._v("Description:")]),t._v(" "+t._s(t.description))]),a("button",{staticClass:"btn btn-primary",on:{click:t.addToCart}},[t._v("Add to Cart")])])],1)},m=[],h=(a("b680"),a("a4d3"),a("e01a"),{props:["title","price","thumbnail","isbn","description"],computed:Object(p["a"])({},Object(f["c"])("context",["cart"])),data:function(){return{}},setup:function(t){this.title=t.title,this.price=parseFloat(t.price).toFixed(),this.isbn=t.isbn,this.thumbnail=t.thumbnail,this.description=t.description},methods:Object(p["a"])(Object(p["a"])({},Object(f["d"])("context",["setCart"])),{},{addToCart:function(){var t=this,e=this.cart.id;console.log(e),i.a.post("/api/carts/"+e+"/addToCart",{Isbn:this.isbn,Price:this.price,Quantity:1}).then((function(e){t.setCart(e.data),alert("Added "+t.title+" to cart")})),this.$bvModal.hide("bookModal"+this.isbn)},showModal:function(){this.$bvModal.show("bookModal"+this.isbn)}})}),v=h,g=(a("aa7d"),a("2877")),y=Object(g["a"])(v,b,m,!1,null,"2b63d5b2",null),_=y.exports,C={components:{bookCard:_},mounted:function(){this.runQuery()},data:function(){return{cards:[1,2,3,4,5,6,7,8,9],numberOfColumns:3,books:{},page:0,items_per_page:6,query:"*"}},computed:Object(p["a"])(Object(p["a"])(Object(p["a"])({},Object(f["e"])("context",["profile"])),Object(f["c"])("context",["isAuthenticated"])),{},{gridStyle:function(){return{gridTemplateColumns:"repeat(".concat(this.numberOfColumns,", minmax(100px, 1fr))")}}}),methods:Object(p["a"])(Object(p["a"])({addCard:function(){this.cards.push("new-card")}},Object(f["b"])("context",["logout"])),{},{onclick:function(t){t.preventDefault()},previousPage:function(){this.page-=1,this.runQuery()},nextPage:function(){this.page+=1,this.runQuery()},updateQuery:function(){this.page=0,this.runQuery()},runQuery:function(){var t=this;i.a.get("/api/books?page="+this.page+"&pageSize="+this.items_per_page+"&q="+this.query).then((function(e){t.books=e.data}))}})},w=C,O=(a("0065"),Object(g["a"])(w,u,d,!1,null,"0a09ba96",null)),j=O.exports,k={name:"Home",components:{Catalog:j}},x=k,M=Object(g["a"])(x,l,c,!1,null,null,null),$=M.exports;n["default"].use(s["a"]);var P=[{path:"/",name:"Home",component:$}],S=new s["a"]({mode:"history",base:"/",routes:P}),T=S,E=a("b85c"),N=(a("b0c0"),{namespaced:!0,state:{profile:{},cart:{}},getters:{profile:function(t){return t.profile},isAuthenticated:function(t){return t.profile.name&&t.profile.email},cart:function(t){return t.cart},cartTotal:function(t){if(null!=t.cart&&null!=t.cart.items){var e,a=0,n=Object(E["a"])(t.cart.items);try{for(n.s();!(e=n.n()).done;){var r=e.value;a+=parseFloat(r.price)}}catch(o){n.e(o)}finally{n.f()}return a}return 0}},mutations:{setProfile:function(t,e){t.profile=e},setCart:function(t,e){t.cart=e,console.log(e)},setNewUserInfo:function(t,e){t.newUserInfo=e}},actions:{login:function(t,e){var a=t.commit;return console.log(e.credentials),i.a.post("/api/users/login",e.credentials).then((function(t){return a("setProfile",t.data),console.log(t.data),i.a.get("api/carts/getByUserId?userId="+t.data["id"]).then((function(t){a("setCart",t.data)}))}))},logout:function(t){var e=t.commit;return i.a.post("/api/users/logout").then((function(){e("setProfile",{})}))},register:function(t,e){var a=t.commit;return i.a.post("/api/users/create",e).then((function(t){return console.log("registered"),a("setNewUserInfo",t.data),t.data}))}}});n["default"].use(f["a"]);var q=new f["a"].Store({modules:{context:N}}),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("MainNavbar"),a("main",{staticClass:"container mt-4",attrs:{role:"main"}},[a("router-view")],1),a("login-modal"),a("cart-modal"),a("registration-modal")],1)},D=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"cartModal",attrs:{id:"cartModal","hide-footer":"",title:"Cart"},on:{hidden:t.onHidden}},[null!=t.cart?a("b-form",{on:{submit:function(e){return e.preventDefault(),t.checkout.apply(null,arguments)},reset:function(e){return e.preventDefault(),t.onCancel.apply(null,arguments)}}},[a("ul",t._l(t.cart.items,(function(e){return a("li",{key:e},[a("p",[t._v("ISBN:"+t._s(e.isbn)+" - price:"+t._s(e.price))])])})),0),a("p",[t._v("total: "+t._s(t.cartTotal))]),a("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{type:"submit"}},[t._v("checkout")])]):t._e()],1)},Q=[],B={computed:Object(p["a"])(Object(p["a"])({},Object(f["e"])("context",["cart"])),Object(f["c"])("context",["cart","cartTotal","profile"])),methods:Object(p["a"])(Object(p["a"])({},Object(f["d"])("context",["setCart"])),{},{checkout:function(){var t=this,e=this.cart.id;console.log("checking out "+e+" for user: "+this.profile.id),i.a.post("/api/carts/"+e+"/checkout").then((function(e){alert(e.data),console.log("Creating new cart for "+t.profile.id),i.a.post("/api/carts/create?userId="+t.profile.id).then((function(e){t.setCart(e.data)}))})),this.$refs.cartModal.hide()},onCancel:function(){this.$refs.cartModal.hide()}})},H=B,L=Object(g["a"])(H,I,Q,!1,null,null,null),R=L.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"loginModal",attrs:{id:"loginModal","hide-footer":"",title:"Login"},on:{hidden:t.onHidden}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},reset:function(e){return e.preventDefault(),t.onCancel.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Email:","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter your email address"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"Enter your password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{type:"submit"}},[t._v("Login")]),a("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"}},[t._v("Cancel")])],1)],1)},F=[],z={data:function(){return{form:{email:"",password:""},authMode:"cookie"}},methods:Object(p["a"])(Object(p["a"])({},Object(f["b"])("context",["login"])),{},{onSubmit:function(t){var e=this;console.log(t),this.login({authMethod:this.authMode,credentials:this.form}).then((function(){e.$refs.loginModal.hide()})).catch((function(){alert("Email Password combination not valid")}))},onCancel:function(t){console.log(t),this.$refs.loginModal.hide()},onHidden:function(){Object.assign(this.form,{email:"",password:""})}})},J=z,W=Object(g["a"])(J,U,F,!1,null,null,null),G=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark shadow"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#/"}},[t._v("NRedi2Read")]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"main-navbar"}},[t.isAuthenticated?a("span",{staticClass:"navbar-text mr-2"},[t._v(" Welcome back, "+t._s(t.profile.name)+" ")]):t._e(),t.isAuthenticated?a("form",{staticStyle:{width:"100%"},on:{click:t.onclick}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("Logout")]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.prevent.cartModal",modifiers:{prevent:!0,cartModal:!0}}],staticClass:"btn btn-primary",attrs:{id:"cartButton",type:"submit"},on:{click:t.showCartModal}},[t._v("Cart")])]):a("form",{staticStyle:{width:"100%"}},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.prevent.loginModal",modifiers:{prevent:!0,loginModal:!0}}],staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.onclick}},[t._v("Login")]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.prevent.registrationModal",modifiers:{prevent:!0,registrationModal:!0}}],staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.onclick}},[t._v("Register")])])])])},V=[],X={computed:Object(p["a"])(Object(p["a"])({},Object(f["e"])("context",["profile"])),Object(f["c"])("context",["isAuthenticated"])),methods:Object(p["a"])(Object(p["a"])({},Object(f["b"])("context",["logout"])),{},{onclick:function(t){console.log("whale hello there"),t.preventDefault()},showCartModal:function(){this.$bvModal.show("cartModal")}})},Y=X,Z=(a("7e9d"),Object(g["a"])(Y,K,V,!1,null,"89f93c9c",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"registrationModal",attrs:{id:"registrationModal","hide-footer":"",title:"Register"},on:{hidden:t.onHidden}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},reset:function(e){return e.preventDefault(),t.onCancel.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Name:","label-for":"name"}},[a("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Enter your Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"Email:","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter your email address"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"Enter your password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{type:"submit"}},[t._v("register")]),a("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"}},[t._v("Cancel")])],1)],1)},at=[],nt={data:function(){return{form:{email:"",password:"",name:""}}},methods:Object(p["a"])(Object(p["a"])({},Object(f["b"])("context",["register"])),{},{onSubmit:function(t){var e=this;console.log(t),this.register(this.form).then((function(t){e.$bvModal.hide("registrationModal"),alert("Thank you "+t.name+" Account Created!")})).catch((function(t){console.log(t),alert(t.response.data)}))},onCancel:function(t){console.log(t),this.$refs.registrationModal.hide()},onHidden:function(){Object.assign(this.form,{email:"",password:"",name:""})}})},rt=nt,ot=Object(g["a"])(rt,et,at,!1,null,null,null),it=ot.exports,st={name:"App",components:{MainNavbar:tt,LoginModal:G,CartModal:R,RegistrationModal:it}},lt=st,ct=(a("5c0b"),Object(g["a"])(lt,A,D,!1,null,null,null)),ut=ct.exports;a("f9e3"),a("2dd8");n["default"].config.productionTip=!1,i.a.defaults.baseURL="http://localhost:5000",i.a.defaults.withCredentials=!0,i.a.interceptors.request.use((function(t){return q.state.context.jwtToken&&(t.headers["Authorization"]="Bearer "+q.state.context.jwtToken),t})),n["default"].prototype.$http=i.a,n["default"].use(r["a"]),new n["default"]({router:T,store:q,render:function(t){return t(ut)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"7e9d":function(t,e,a){"use strict";a("a338")},"80a5":function(t,e,a){},"9c0c":function(t,e,a){},a338:function(t,e,a){},aa7d:function(t,e,a){"use strict";a("34b4")}});
//# sourceMappingURL=app.147ecce0.js.map