// Compiled by ClojureScript 1.9.946 {}
goog.provide('suluk.requests.type');
goog.require('cljs.core');
goog.require('suluk.constants.constants');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
suluk.requests.type.__GT_Fetch_Request = (function (url,prop,function_map,__meta,__extmap,__hash){
this.url = url;
this.prop = prop;
this.function_map = function_map;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42823__auto__,k__42824__auto__){
var self__ = this;
var this__42823__auto____$1 = this;
return this__42823__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42824__auto__,null);
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42825__auto__,k54601,else__42826__auto__){
var self__ = this;
var this__42825__auto____$1 = this;
var G__54605 = k54601;
var G__54605__$1 = (((G__54605 instanceof cljs.core.Keyword))?G__54605.fqn:null);
switch (G__54605__$1) {
case "url":
return self__.url;

break;
case "prop":
return self__.prop;

break;
case "function-map":
return self__.function_map;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54601,else__42826__auto__);

}
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42837__auto__,writer__42838__auto__,opts__42839__auto__){
var self__ = this;
var this__42837__auto____$1 = this;
var pr_pair__42840__auto__ = ((function (this__42837__auto____$1){
return (function (keyval__42841__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42838__auto__,cljs.core.pr_writer,""," ","",opts__42839__auto__,keyval__42841__auto__);
});})(this__42837__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42838__auto__,pr_pair__42840__auto__,"#suluk.requests.type.->Fetch-Request{",", ","}",opts__42839__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prop","prop",-515168332),self__.prop],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function-map","function-map",873210429),self__.function_map],null))], null),self__.__extmap));
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54600){
var self__ = this;
var G__54600__$1 = this;
return (new cljs.core.RecordIter((0),G__54600__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"function-map","function-map",873210429)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42821__auto__){
var self__ = this;
var this__42821__auto____$1 = this;
return self__.__meta;
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42818__auto__){
var self__ = this;
var this__42818__auto____$1 = this;
return (new suluk.requests.type.__GT_Fetch_Request(self__.url,self__.prop,self__.function_map,self__.__meta,self__.__extmap,self__.__hash));
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42827__auto__){
var self__ = this;
var this__42827__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42819__auto__){
var self__ = this;
var this__42819__auto____$1 = this;
var h__42637__auto__ = self__.__hash;
if(!((h__42637__auto__ == null))){
return h__42637__auto__;
} else {
var h__42637__auto____$1 = ((function (h__42637__auto__,this__42819__auto____$1){
return (function (coll__42820__auto__){
return (-1914026821 ^ cljs.core.hash_unordered_coll.call(null,coll__42820__auto__));
});})(h__42637__auto__,this__42819__auto____$1))
.call(null,this__42819__auto____$1);
self__.__hash = h__42637__auto____$1;

return h__42637__auto____$1;
}
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54602,other54603){
var self__ = this;
var this54602__$1 = this;
return (!((other54603 == null))) && ((this54602__$1.constructor === other54603.constructor)) && (cljs.core._EQ_.call(null,this54602__$1.url,other54603.url)) && (cljs.core._EQ_.call(null,this54602__$1.prop,other54603.prop)) && (cljs.core._EQ_.call(null,this54602__$1.function_map,other54603.function_map)) && (cljs.core._EQ_.call(null,this54602__$1.__extmap,other54603.__extmap));
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42832__auto__,k__42833__auto__){
var self__ = this;
var this__42832__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"function-map","function-map",873210429),null], null), null),k__42833__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42832__auto____$1),self__.__meta),k__42833__auto__);
} else {
return (new suluk.requests.type.__GT_Fetch_Request(self__.url,self__.prop,self__.function_map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42833__auto__)),null));
}
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42830__auto__,k__42831__auto__,G__54600){
var self__ = this;
var this__42830__auto____$1 = this;
var pred__54606 = cljs.core.keyword_identical_QMARK_;
var expr__54607 = k__42831__auto__;
if(cljs.core.truth_(pred__54606.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__54607))){
return (new suluk.requests.type.__GT_Fetch_Request(G__54600,self__.prop,self__.function_map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54606.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332),expr__54607))){
return (new suluk.requests.type.__GT_Fetch_Request(self__.url,G__54600,self__.function_map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54606.call(null,new cljs.core.Keyword(null,"function-map","function-map",873210429),expr__54607))){
return (new suluk.requests.type.__GT_Fetch_Request(self__.url,self__.prop,G__54600,self__.__meta,self__.__extmap,null));
} else {
return (new suluk.requests.type.__GT_Fetch_Request(self__.url,self__.prop,self__.function_map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42831__auto__,G__54600),null));
}
}
}
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42835__auto__){
var self__ = this;
var this__42835__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prop","prop",-515168332),self__.prop],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function-map","function-map",873210429),self__.function_map],null))], null),self__.__extmap));
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42822__auto__,G__54600){
var self__ = this;
var this__42822__auto____$1 = this;
return (new suluk.requests.type.__GT_Fetch_Request(self__.url,self__.prop,self__.function_map,G__54600,self__.__extmap,self__.__hash));
});

suluk.requests.type.__GT_Fetch_Request.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42828__auto__,entry__42829__auto__){
var self__ = this;
var this__42828__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42829__auto__)){
return this__42828__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42829__auto__,(0)),cljs.core._nth.call(null,entry__42829__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42828__auto____$1,entry__42829__auto__);
}
});

suluk.requests.type.__GT_Fetch_Request.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"prop","prop",1125363195,null),new cljs.core.Symbol(null,"function-map","function-map",-1781225340,null)], null);
});

suluk.requests.type.__GT_Fetch_Request.cljs$lang$type = true;

suluk.requests.type.__GT_Fetch_Request.cljs$lang$ctorPrSeq = (function (this__42859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"suluk.requests.type/->Fetch-Request");
});

suluk.requests.type.__GT_Fetch_Request.cljs$lang$ctorPrWriter = (function (this__42859__auto__,writer__42860__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"suluk.requests.type/->Fetch-Request");
});

/**
 * A record type for fetch.
 */
suluk.requests.type.__GT___GT_Fetch_Request = (function suluk$requests$type$__GT___GT_Fetch_Request(url,prop,function_map){
return (new suluk.requests.type.__GT_Fetch_Request(url,prop,function_map,null,null,null));
});

/**
 * A record type for fetch.
 */
suluk.requests.type.map__GT___GT_Fetch_Request = (function suluk$requests$type$map__GT___GT_Fetch_Request(G__54604){
return (new suluk.requests.type.__GT_Fetch_Request(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__54604),new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(G__54604),new cljs.core.Keyword(null,"function-map","function-map",873210429).cljs$core$IFn$_invoke$arity$1(G__54604),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__54604,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"function-map","function-map",873210429))),null));
});

suluk.requests.type.get_url = (function suluk$requests$type$get_url(request){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
});
suluk.requests.type.get_prop = (function suluk$requests$type$get_prop(request){
return new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(request);
});
suluk.requests.type.get_function_map = (function suluk$requests$type$get_function_map(request){
return new cljs.core.Keyword(null,"function-map","function-map",873210429).cljs$core$IFn$_invoke$arity$1(request);
});
suluk.requests.type.get_function = (function suluk$requests$type$get_function(request,function_name){
return function_name.call(null,suluk.requests.type.get_function_map.call(null,request));
});
suluk.requests.type.map__GT_headers = (function suluk$requests$type$map__GT_headers(header_args){
var header_value = (new Headers());
cljs.core.reduce.call(null,((function (header_value){
return (function (r,v){
header_value.append(cljs.core.first.call(null,v),cljs.core.second.call(null,v));

return header_value;
});})(header_value))
,header_value,header_args);

return header_value;
});
suluk.requests.type.process_headers = (function suluk$requests$type$process_headers(fetch_request){
return cljs.core.update_in.call(null,fetch_request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"headers","headers",-835030129)], null),suluk.requests.type.map__GT_headers);
});
suluk.requests.type.request__GT_cFetch = (function suluk$requests$type$request__GT_cFetch(request){
if(cljs.core.truth_(fetch)){
return fetch(suluk.requests.type.get_url.call(null,request),cljs.core.clj__GT_js.call(null,(function (){var or__42183__auto__ = suluk.requests.type.get_prop.call(null,request);
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return null;
}
});
suluk.requests.type.apply_fn__GT_cFetch = (function suluk$requests$type$apply_fn__GT_cFetch(fetch_instance,f){
if(cljs.core.truth_(f)){
return fetch_instance.then(f);
} else {
return fetch_instance;
}
});
suluk.requests.type.apply_all_fns__GT_cFetch = (function suluk$requests$type$apply_all_fns__GT_cFetch(fetch_instance,fs){
if(cljs.core.truth_(fs)){
return cljs.core.reduce.call(null,suluk.requests.type.apply_fn__GT_cFetch,fetch_instance,fs);
} else {
return fetch_instance;
}
});
suluk.requests.type.apply_catch__GT_cFetch = (function suluk$requests$type$apply_catch__GT_cFetch(fetch_instance,f){
if(cljs.core.truth_(f)){
return fetch_instance.catch(f);
} else {
return fetch_instance;
}
});
suluk.requests.type.process_function_map_on_cFetch = (function suluk$requests$type$process_function_map_on_cFetch(fetch_instance,f_map){
if(cljs.core.truth_(f_map)){
var map__54610 = f_map;
var map__54610__$1 = ((((!((map__54610 == null)))?((((map__54610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54610):map__54610);
var param_function = cljs.core.get.call(null,map__54610__$1,new cljs.core.Keyword(null,"param-f","param-f",1898396613),new cljs.core.Keyword(null,"param-f","param-f",1898396613).cljs$core$IFn$_invoke$arity$1(suluk.constants.constants.function_map));
var status_safe_function = cljs.core.get.call(null,map__54610__$1,new cljs.core.Keyword(null,"status-safe-f","status-safe-f",1059993828),new cljs.core.Keyword(null,"status-safe-f","status-safe-f",1059993828).cljs$core$IFn$_invoke$arity$1(suluk.constants.constants.function_map));
var fail_function = cljs.core.get.call(null,map__54610__$1,new cljs.core.Keyword(null,"fail-f","fail-f",-1590992019),new cljs.core.Keyword(null,"fail-f","fail-f",-1590992019).cljs$core$IFn$_invoke$arity$1(suluk.constants.constants.function_map));
var done_function = cljs.core.get.call(null,map__54610__$1,new cljs.core.Keyword(null,"done-f","done-f",1768081833),new cljs.core.Keyword(null,"done-f","done-f",1768081833).cljs$core$IFn$_invoke$arity$1(suluk.constants.constants.function_map));
var fns = cljs.core.get.call(null,map__54610__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
return suluk.requests.type.apply_fn__GT_cFetch.call(null,suluk.requests.type.apply_all_fns__GT_cFetch.call(null,suluk.requests.type.apply_fn__GT_cFetch.call(null,suluk.requests.type.apply_fn__GT_cFetch.call(null,suluk.requests.type.apply_catch__GT_cFetch.call(null,fetch_instance,fail_function),status_safe_function),param_function),fns),done_function);
} else {
return fetch_instance;
}
});
suluk.requests.type.__GT_request = (function suluk$requests$type$__GT_request(var_args){
var args__43361__auto__ = [];
var len__43354__auto___54617 = arguments.length;
var i__43355__auto___54618 = (0);
while(true){
if((i__43355__auto___54618 < len__43354__auto___54617)){
args__43361__auto__.push((arguments[i__43355__auto___54618]));

var G__54619 = (i__43355__auto___54618 + (1));
i__43355__auto___54618 = G__54619;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return suluk.requests.type.__GT_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

suluk.requests.type.__GT_request.cljs$core$IFn$_invoke$arity$variadic = (function (url,prop_QMARK__function_map_QMARK_){
var vec__54614 = (((cljs.core.count.call(null,prop_QMARK__function_map_QMARK_) === (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null):(((cljs.core.mod.call(null,cljs.core.count.call(null,prop_QMARK__function_map_QMARK_),(2)) === (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.hash_map,prop_QMARK__function_map_QMARK_)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,prop_QMARK__function_map_QMARK_),cljs.core.rest.call(null,prop_QMARK__function_map_QMARK_)], null)
));
var prop = cljs.core.nth.call(null,vec__54614,(0),null);
var function_map = cljs.core.nth.call(null,vec__54614,(1),null);
return (new suluk.requests.type.__GT_Fetch_Request(url,prop,function_map,null,null,null));
});

suluk.requests.type.__GT_request.cljs$lang$maxFixedArity = (1);

suluk.requests.type.__GT_request.cljs$lang$applyTo = (function (seq54612){
var G__54613 = cljs.core.first.call(null,seq54612);
var seq54612__$1 = cljs.core.next.call(null,seq54612);
return suluk.requests.type.__GT_request.cljs$core$IFn$_invoke$arity$variadic(G__54613,seq54612__$1);
});

suluk.requests.type.__GT_fetch = (function suluk$requests$type$__GT_fetch(fetch_request){
return suluk.requests.type.process_function_map_on_cFetch.call(null,suluk.requests.type.request__GT_cFetch.call(null,suluk.requests.type.process_headers.call(null,fetch_request)),suluk.requests.type.get_function_map.call(null,fetch_request));
});

//# sourceMappingURL=type.js.map?rel=1510614110439
