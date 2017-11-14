// Compiled by ClojureScript 1.9.946 {}
goog.provide('suluk.requests.post');
goog.require('cljs.core');
goog.require('suluk.constants.constants');
goog.require('suluk.requests.type');
suluk.requests.post.assoc_post_method_type = (function suluk$requests$post$assoc_post_method_type(req){
return cljs.core.assoc_in.call(null,req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"method","method",55703592)], null),"POST");
});
suluk.requests.post.post = (function suluk$requests$post$post(var_args){
var args__43361__auto__ = [];
var len__43354__auto___54624 = arguments.length;
var i__43355__auto___54625 = (0);
while(true){
if((i__43355__auto___54625 < len__43354__auto___54624)){
args__43361__auto__.push((arguments[i__43355__auto___54625]));

var G__54626 = (i__43355__auto___54625 + (1));
i__43355__auto___54625 = G__54626;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return suluk.requests.post.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

suluk.requests.post.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,prop_QMARK__function_map_QMARK_){
var req = cljs.core.apply.call(null,suluk.requests.type.__GT_request,url,prop_QMARK__function_map_QMARK_);
return suluk.requests.type.__GT_fetch.call(null,cljs.core.assoc_in.call(null,suluk.requests.post.assoc_post_method_type.call(null,req),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),"Content-Type"], null),new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(suluk.constants.constants.content_types)));
});

suluk.requests.post.post.cljs$lang$maxFixedArity = (1);

suluk.requests.post.post.cljs$lang$applyTo = (function (seq54622){
var G__54623 = cljs.core.first.call(null,seq54622);
var seq54622__$1 = cljs.core.next.call(null,seq54622);
return suluk.requests.post.post.cljs$core$IFn$_invoke$arity$variadic(G__54623,seq54622__$1);
});

suluk.requests.post.post_json = (function suluk$requests$post$post_json(var_args){
var args__43361__auto__ = [];
var len__43354__auto___54629 = arguments.length;
var i__43355__auto___54630 = (0);
while(true){
if((i__43355__auto___54630 < len__43354__auto___54629)){
args__43361__auto__.push((arguments[i__43355__auto___54630]));

var G__54631 = (i__43355__auto___54630 + (1));
i__43355__auto___54630 = G__54631;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return suluk.requests.post.post_json.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

suluk.requests.post.post_json.cljs$core$IFn$_invoke$arity$variadic = (function (url,prop_QMARK__function_map_QMARK_){
var req = cljs.core.apply.call(null,suluk.requests.type.__GT_request,url,prop_QMARK__function_map_QMARK_);
return suluk.requests.type.__GT_fetch.call(null,cljs.core.assoc_in.call(null,suluk.requests.post.assoc_post_method_type.call(null,req),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),"Content-Type"], null),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(suluk.constants.constants.content_types)));
});

suluk.requests.post.post_json.cljs$lang$maxFixedArity = (1);

suluk.requests.post.post_json.cljs$lang$applyTo = (function (seq54627){
var G__54628 = cljs.core.first.call(null,seq54627);
var seq54627__$1 = cljs.core.next.call(null,seq54627);
return suluk.requests.post.post_json.cljs$core$IFn$_invoke$arity$variadic(G__54628,seq54627__$1);
});


//# sourceMappingURL=post.js.map?rel=1510614110455
