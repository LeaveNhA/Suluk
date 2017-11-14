// Compiled by ClojureScript 1.9.946 {}
goog.provide('suluk.process');
goog.require('cljs.core');
goog.require('suluk.requests.core');
suluk.process.classify = (function suluk$process$classify(fs){
var pred__54697 = cljs.core._EQ_;
var expr__54698 = fs;
if(cljs.core.truth_(pred__54697.call(null,new cljs.core.Keyword(null,"get","get",1683182755),expr__54698))){
return suluk.requests.core.get;
} else {
if(cljs.core.truth_(pred__54697.call(null,new cljs.core.Keyword(null,"post","post",269697687),expr__54698))){
return suluk.requests.core.post;
} else {
if(cljs.core.truth_(pred__54697.call(null,new cljs.core.Keyword(null,"post-json","post-json",371555740),expr__54698))){
return suluk.requests.core.post_json;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54698)].join('')));
}
}
}
});
/**
 * Takes Request Type as Keyword,
 * Process;
 * 
 * :get -> (fn [URL & function-map])
 * |> URL: Get Request URL address.
 * |> function-map: A map contains Parameter, Fail, Done and `Rest` functions.
 *    Additionally, it contains middle-ware functions to allow you to do data manipulations on your response with `rest-fs`.
 * 
 * :post -> (fn [URL, DATA, & function-map])
 * |> URL: Get Request URL address.
 * |> DATA: Your Payload.
 * |> function-map: A map contains Parameter, Fail and Done functions.
 *    Additionally, it contains middle-ware functions to allow you to do data manipulations on your response with `rest-fs`.
 * 
 * :post-json -> (fn [URL, DATA, & function-map])
 * |> URL: Get Request URL address.
 * |> DATA: Your Payload. But, implicitly converted JSON with JSON/stringify.
 * |> function-map: A map contains Parameter, Fail and Done functions.
 *    Additionally, it contains middle-ware functions to allow you to do data manipulations on your response with `rest-fs`.
 * 
 * `rest-fs` is sequentially process your data. One function's output is input data for the next.
 */
suluk.process.fetch_BANG_ = (function suluk$process$fetch_BANG_(var_args){
var args__43361__auto__ = [];
var len__43354__auto___54703 = arguments.length;
var i__43355__auto___54704 = (0);
while(true){
if((i__43355__auto___54704 < len__43354__auto___54703)){
args__43361__auto__.push((arguments[i__43355__auto___54704]));

var G__54705 = (i__43355__auto___54704 + (1));
i__43355__auto___54704 = G__54705;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((2) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((2)),(0),null)):null);
return suluk.process.fetch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__43362__auto__);
});

suluk.process.fetch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (r_type,url,args){
var function_type = suluk.process.classify.call(null,r_type);
var function_result = cljs.core.apply.call(null,function_type,url,args);
return function_result;
});

suluk.process.fetch_BANG_.cljs$lang$maxFixedArity = (2);

suluk.process.fetch_BANG_.cljs$lang$applyTo = (function (seq54700){
var G__54701 = cljs.core.first.call(null,seq54700);
var seq54700__$1 = cljs.core.next.call(null,seq54700);
var G__54702 = cljs.core.first.call(null,seq54700__$1);
var seq54700__$2 = cljs.core.next.call(null,seq54700__$1);
return suluk.process.fetch_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54701,G__54702,seq54700__$2);
});

suluk.process.value__GT_app_BANG_ = (function suluk$process$value__GT_app_BANG_(vid,v){
return (document.getElementById(vid)["innerHTML"] = v);
});

//# sourceMappingURL=process.js.map?rel=1510614533332
