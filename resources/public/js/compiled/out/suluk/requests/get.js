// Compiled by ClojureScript 1.9.946 {}
goog.provide('suluk.requests.get');
goog.require('cljs.core');
goog.require('suluk.constants.constants');
goog.require('suluk.requests.type');
goog.require('suluk.response');
suluk.requests.get.get = (function suluk$requests$get$get(var_args){
var args__43361__auto__ = [];
var len__43354__auto___54690 = arguments.length;
var i__43355__auto___54691 = (0);
while(true){
if((i__43355__auto___54691 < len__43354__auto___54690)){
args__43361__auto__.push((arguments[i__43355__auto___54691]));

var G__54692 = (i__43355__auto___54691 + (1));
i__43355__auto___54691 = G__54692;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return suluk.requests.get.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

suluk.requests.get.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,prop_QMARK__function_map_QMARK_){
var req = cljs.core.apply.call(null,suluk.requests.type.__GT_request,url,prop_QMARK__function_map_QMARK_);
return suluk.requests.type.__GT_fetch.call(null,cljs.core.assoc_in.call(null,suluk.constants.constants.add_content_type__GT_request.call(null,req,new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"method","method",55703592)], null),"GET"));
});

suluk.requests.get.get.cljs$lang$maxFixedArity = (1);

suluk.requests.get.get.cljs$lang$applyTo = (function (seq54688){
var G__54689 = cljs.core.first.call(null,seq54688);
var seq54688__$1 = cljs.core.next.call(null,seq54688);
return suluk.requests.get.get.cljs$core$IFn$_invoke$arity$variadic(G__54689,seq54688__$1);
});

suluk.requests.get.get.call(null,"http://192.168.1.1");

//# sourceMappingURL=get.js.map?rel=1510614533288
