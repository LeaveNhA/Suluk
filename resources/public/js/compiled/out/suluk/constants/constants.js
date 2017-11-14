// Compiled by ClojureScript 1.9.946 {}
goog.provide('suluk.constants.constants');
goog.require('cljs.core');
goog.require('suluk.response');
suluk.constants.constants.status_safe_QMARK_ = (function suluk$constants$constants$status_safe_QMARK_(response){
var status = response.status;
if(((status >= (200))) && ((status < (300)))){
return Promise.resolve(response);
} else {
return Promise.reject((new Error(response.statusText)));
}
});
suluk.constants.constants.content_types = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"post","post",269697687),"application/x-www-form-urlencoded",new cljs.core.Keyword(null,"json","json",1279968570),"application/json",new cljs.core.Keyword(null,"default","default",-1987822328),"text/html; charset=utf-8"], null);
suluk.constants.constants.accept = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json","json",1279968570),"application/json"], null);
suluk.constants.constants.function_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fail-f","fail-f",-1590992019),console.error,new cljs.core.Keyword(null,"status-safe-f","status-safe-f",1059993828),suluk.constants.constants.status_safe_QMARK_,new cljs.core.Keyword(null,"param-f","param-f",1898396613),suluk.response.res__GT_text,new cljs.core.Keyword(null,"done-f","done-f",1768081833),console.log], null);
suluk.constants.constants.add_content_type__GT_request = (function suluk$constants$constants$add_content_type__GT_request(request,type_of_request){
return cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),type_of_request.call(null,suluk.constants.constants.content_types));
});

//# sourceMappingURL=constants.js.map?rel=1510614110398
