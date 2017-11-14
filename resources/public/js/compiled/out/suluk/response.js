// Compiled by ClojureScript 1.9.946 {}
goog.provide('suluk.response');
goog.require('cljs.core');
suluk.response.res__GT_text = (function suluk$response$res__GT_text(response){
return response.text();
});
suluk.response.res__GT_blob = (function suluk$response$res__GT_blob(response){
return response.blob();
});
suluk.response.res__GT_json = (function suluk$response$res__GT_json(response){
return response.json();
});
suluk.response.v_STAR_ = (function suluk$response$v_STAR_(i){
if(cljs.core.truth_(i)){
return i;
} else {
return null;
}
});
suluk.response.v_BANG_ = (function suluk$response$v_BANG_(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50661 = arguments.length;
var i__43355__auto___50662 = (0);
while(true){
if((i__43355__auto___50662 < len__43354__auto___50661)){
args__43361__auto__.push((arguments[i__43355__auto___50662]));

var G__50663 = (i__43355__auto___50662 + (1));
i__43355__auto___50662 = G__50663;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return suluk.response.v_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

suluk.response.v_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (v,args){
return v;
});

suluk.response.v_BANG_.cljs$lang$maxFixedArity = (1);

suluk.response.v_BANG_.cljs$lang$applyTo = (function (seq50659){
var G__50660 = cljs.core.first.call(null,seq50659);
var seq50659__$1 = cljs.core.next.call(null,seq50659);
return suluk.response.v_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50660,seq50659__$1);
});


//# sourceMappingURL=response.js.map?rel=1510612166618
