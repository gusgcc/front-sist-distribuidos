(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"04d6":function(t,i,n){"use strict";n("fd06")},"157b":function(t,i,n){"use strict";n.r(i);var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"list-my-publications"},[n("formPublicationEdit")],1)},e=[],a=n("4e37"),r=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("q-card",{staticClass:"form-publication"},[n("q-card-section",[n("q-form",{on:{submit:t.registerPublication}},[n("h4",{staticStyle:{margin:"0","text-align":"center"}},[t._v("Editar Publicacion")]),n("q-input",{attrs:{label:"Titulo de la publicacion",rules:[function(t){return t&&t.length>0||"Escriba el titulo."}]},model:{value:t.form.titulo,callback:function(i){t.$set(t.form,"titulo",i)},expression:"form.titulo"}}),n("q-input",{attrs:{label:"Subtitulo de la publicacion",rules:[function(t){return t&&t.length>0||"Escriba el subtitulo."}]},model:{value:t.form.subtitulo,callback:function(i){t.$set(t.form,"subtitulo",i)},expression:"form.subtitulo"}}),n("q-input",{attrs:{label:"Descripcion",rules:[function(t){return t&&t.length>0||"Escriba su descripcion."}]},model:{value:t.form.descripcion,callback:function(i){t.$set(t.form,"descripcion",i)},expression:"form.descripcion"}}),n("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-around"}},[n("q-btn",{attrs:{color:"secondary",label:"Cancelar"},on:{click:function(i){return t.$router.push("/listmypublications")}}}),n("q-btn",{attrs:{color:"primary",type:"submit",label:"Actualizar Publicacion",loading:t.loading}})],1)],1)],1)],1)},u=[],c=n("ded3"),l=n.n(c),s={async mounted(){const t=await a["a"].getPublicationById(this.$route.params.idPublication);console.log("editar",t.data),this.form.titulo=t.data.titulo,this.form.subtitulo=t.data.subtitulo,this.form.descripcion=t.data.descripcion},data(){return{loading:!1,form:{titulo:"",subtitulo:"",descripcion:""}}},methods:{async registerPublication(){try{this.loading=!0;await a["a"].updatePublication(l()({id:this.$route.params.idPublication},this.form));this.$router.push("/listmypublications"),this.$q.notify({type:"positive",message:"Se actualizo publicacion"})}catch(t){console.error(t),this.$q.notify({type:"negative",message:"Error al editar publicacion"})}finally{this.loading=!1}}}},d=s,b=(n("04d6"),n("2877")),f=n("f09f"),p=n("a370"),m=n("0378"),h=n("27f9"),v=n("9c40"),g=n("eebe"),y=n.n(g),P=Object(b["a"])(d,r,u,!1,null,null,null),w=P.exports;y()(P,"components",{QCard:f["a"],QCardSection:p["a"],QForm:m["a"],QInput:h["a"],QBtn:v["a"]});var E={components:{formPublicationEdit:w},async mounted(){const t=await a["a"].getPublicationById(this.$route.params.idPublication);console.log("editar",t.data)},data(){return{}}},$=E,q=Object(b["a"])($,o,e,!1,null,null,null);i["default"]=q.exports},"4e37":function(t,i,n){"use strict";var o=n("bc3a"),e=n.n(o),a=function(t,i,n,o){function e(t){return t instanceof n?t:new n((function(i){i(t)}))}return new(n||(n=Promise))((function(n,a){function r(t){try{c(o.next(t))}catch(i){a(i)}}function u(t){try{c(o["throw"](t))}catch(i){a(i)}}function c(t){t.done?n(t.value):e(t.value).then(r,u)}c((o=o.apply(t,i||[])).next())}))};const r="https://back-sist-distribuidos.herokuapp.com/";i["a"]={createPublication(t){return a(this,void 0,void 0,(function*(){return e()({method:"POST",url:r+"publicacion",data:t})}))},getPublicationsByUser(t){return a(this,void 0,void 0,(function*(){return e()({method:"get",url:r+"publicacion/"+t})}))},getPublicationById(t){return a(this,void 0,void 0,(function*(){return e()({method:"get",url:r+"publicacione/"+t})}))},updatePublication(t){return a(this,void 0,void 0,(function*(){return e()({method:"PUT",url:r+"publicacion",data:t})}))},deletePublication(t){return a(this,void 0,void 0,(function*(){return e()({method:"DELETE",url:r+"publicacion/"+t})}))},getAllPublication(){return a(this,void 0,void 0,(function*(){return e()({method:"get",url:r+"publicacion"})}))},searchPublication(t){return a(this,void 0,void 0,(function*(){return e()({method:"get",url:r+"buscarPublicacion/"+t})}))}}},fd06:function(t,i,n){}}]);