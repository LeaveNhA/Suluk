// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__42183__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__42183__auto__){
return or__42183__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__42183__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
var or__42183__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__42183__auto____$1)){
return or__42183__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48397_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48397_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__48398 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48399 = null;
var count__48400 = (0);
var i__48401 = (0);
while(true){
if((i__48401 < count__48400)){
var n = cljs.core._nth.call(null,chunk__48399,i__48401);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48402 = seq__48398;
var G__48403 = chunk__48399;
var G__48404 = count__48400;
var G__48405 = (i__48401 + (1));
seq__48398 = G__48402;
chunk__48399 = G__48403;
count__48400 = G__48404;
i__48401 = G__48405;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48398);
if(temp__4657__auto__){
var seq__48398__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48398__$1)){
var c__43022__auto__ = cljs.core.chunk_first.call(null,seq__48398__$1);
var G__48406 = cljs.core.chunk_rest.call(null,seq__48398__$1);
var G__48407 = c__43022__auto__;
var G__48408 = cljs.core.count.call(null,c__43022__auto__);
var G__48409 = (0);
seq__48398 = G__48406;
chunk__48399 = G__48407;
count__48400 = G__48408;
i__48401 = G__48409;
continue;
} else {
var n = cljs.core.first.call(null,seq__48398__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48410 = cljs.core.next.call(null,seq__48398__$1);
var G__48411 = null;
var G__48412 = (0);
var G__48413 = (0);
seq__48398 = G__48410;
chunk__48399 = G__48411;
count__48400 = G__48412;
i__48401 = G__48413;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__48414){
var vec__48415 = p__48414;
var _ = cljs.core.nth.call(null,vec__48415,(0),null);
var v = cljs.core.nth.call(null,vec__48415,(1),null);
var and__42171__auto__ = v;
if(cljs.core.truth_(and__42171__auto__)){
return v.call(null,dep);
} else {
return and__42171__auto__;
}
}),cljs.core.filter.call(null,(function (p__48418){
var vec__48419 = p__48418;
var k = cljs.core.nth.call(null,vec__48419,(0),null);
var v = cljs.core.nth.call(null,vec__48419,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__48431_48439 = cljs.core.seq.call(null,deps);
var chunk__48432_48440 = null;
var count__48433_48441 = (0);
var i__48434_48442 = (0);
while(true){
if((i__48434_48442 < count__48433_48441)){
var dep_48443 = cljs.core._nth.call(null,chunk__48432_48440,i__48434_48442);
if(cljs.core.truth_((function (){var and__42171__auto__ = dep_48443;
if(cljs.core.truth_(and__42171__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48443));
} else {
return and__42171__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48443,(depth + (1)),state);
} else {
}

var G__48444 = seq__48431_48439;
var G__48445 = chunk__48432_48440;
var G__48446 = count__48433_48441;
var G__48447 = (i__48434_48442 + (1));
seq__48431_48439 = G__48444;
chunk__48432_48440 = G__48445;
count__48433_48441 = G__48446;
i__48434_48442 = G__48447;
continue;
} else {
var temp__4657__auto___48448 = cljs.core.seq.call(null,seq__48431_48439);
if(temp__4657__auto___48448){
var seq__48431_48449__$1 = temp__4657__auto___48448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48431_48449__$1)){
var c__43022__auto___48450 = cljs.core.chunk_first.call(null,seq__48431_48449__$1);
var G__48451 = cljs.core.chunk_rest.call(null,seq__48431_48449__$1);
var G__48452 = c__43022__auto___48450;
var G__48453 = cljs.core.count.call(null,c__43022__auto___48450);
var G__48454 = (0);
seq__48431_48439 = G__48451;
chunk__48432_48440 = G__48452;
count__48433_48441 = G__48453;
i__48434_48442 = G__48454;
continue;
} else {
var dep_48455 = cljs.core.first.call(null,seq__48431_48449__$1);
if(cljs.core.truth_((function (){var and__42171__auto__ = dep_48455;
if(cljs.core.truth_(and__42171__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48455));
} else {
return and__42171__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48455,(depth + (1)),state);
} else {
}

var G__48456 = cljs.core.next.call(null,seq__48431_48449__$1);
var G__48457 = null;
var G__48458 = (0);
var G__48459 = (0);
seq__48431_48439 = G__48456;
chunk__48432_48440 = G__48457;
count__48433_48441 = G__48458;
i__48434_48442 = G__48459;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48435){
var vec__48436 = p__48435;
var seq__48437 = cljs.core.seq.call(null,vec__48436);
var first__48438 = cljs.core.first.call(null,seq__48437);
var seq__48437__$1 = cljs.core.next.call(null,seq__48437);
var x = first__48438;
var xs = seq__48437__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48436,seq__48437,first__48438,seq__48437__$1,x,xs,get_deps__$1){
return (function (p1__48422_SHARP_){
return clojure.set.difference.call(null,p1__48422_SHARP_,x);
});})(vec__48436,seq__48437,first__48438,seq__48437__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__48460 = cljs.core.seq.call(null,provides);
var chunk__48461 = null;
var count__48462 = (0);
var i__48463 = (0);
while(true){
if((i__48463 < count__48462)){
var prov = cljs.core._nth.call(null,chunk__48461,i__48463);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48464_48472 = cljs.core.seq.call(null,requires);
var chunk__48465_48473 = null;
var count__48466_48474 = (0);
var i__48467_48475 = (0);
while(true){
if((i__48467_48475 < count__48466_48474)){
var req_48476 = cljs.core._nth.call(null,chunk__48465_48473,i__48467_48475);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48476,prov);

var G__48477 = seq__48464_48472;
var G__48478 = chunk__48465_48473;
var G__48479 = count__48466_48474;
var G__48480 = (i__48467_48475 + (1));
seq__48464_48472 = G__48477;
chunk__48465_48473 = G__48478;
count__48466_48474 = G__48479;
i__48467_48475 = G__48480;
continue;
} else {
var temp__4657__auto___48481 = cljs.core.seq.call(null,seq__48464_48472);
if(temp__4657__auto___48481){
var seq__48464_48482__$1 = temp__4657__auto___48481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48464_48482__$1)){
var c__43022__auto___48483 = cljs.core.chunk_first.call(null,seq__48464_48482__$1);
var G__48484 = cljs.core.chunk_rest.call(null,seq__48464_48482__$1);
var G__48485 = c__43022__auto___48483;
var G__48486 = cljs.core.count.call(null,c__43022__auto___48483);
var G__48487 = (0);
seq__48464_48472 = G__48484;
chunk__48465_48473 = G__48485;
count__48466_48474 = G__48486;
i__48467_48475 = G__48487;
continue;
} else {
var req_48488 = cljs.core.first.call(null,seq__48464_48482__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48488,prov);

var G__48489 = cljs.core.next.call(null,seq__48464_48482__$1);
var G__48490 = null;
var G__48491 = (0);
var G__48492 = (0);
seq__48464_48472 = G__48489;
chunk__48465_48473 = G__48490;
count__48466_48474 = G__48491;
i__48467_48475 = G__48492;
continue;
}
} else {
}
}
break;
}

var G__48493 = seq__48460;
var G__48494 = chunk__48461;
var G__48495 = count__48462;
var G__48496 = (i__48463 + (1));
seq__48460 = G__48493;
chunk__48461 = G__48494;
count__48462 = G__48495;
i__48463 = G__48496;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48460);
if(temp__4657__auto__){
var seq__48460__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48460__$1)){
var c__43022__auto__ = cljs.core.chunk_first.call(null,seq__48460__$1);
var G__48497 = cljs.core.chunk_rest.call(null,seq__48460__$1);
var G__48498 = c__43022__auto__;
var G__48499 = cljs.core.count.call(null,c__43022__auto__);
var G__48500 = (0);
seq__48460 = G__48497;
chunk__48461 = G__48498;
count__48462 = G__48499;
i__48463 = G__48500;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48460__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48468_48501 = cljs.core.seq.call(null,requires);
var chunk__48469_48502 = null;
var count__48470_48503 = (0);
var i__48471_48504 = (0);
while(true){
if((i__48471_48504 < count__48470_48503)){
var req_48505 = cljs.core._nth.call(null,chunk__48469_48502,i__48471_48504);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48505,prov);

var G__48506 = seq__48468_48501;
var G__48507 = chunk__48469_48502;
var G__48508 = count__48470_48503;
var G__48509 = (i__48471_48504 + (1));
seq__48468_48501 = G__48506;
chunk__48469_48502 = G__48507;
count__48470_48503 = G__48508;
i__48471_48504 = G__48509;
continue;
} else {
var temp__4657__auto___48510__$1 = cljs.core.seq.call(null,seq__48468_48501);
if(temp__4657__auto___48510__$1){
var seq__48468_48511__$1 = temp__4657__auto___48510__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48468_48511__$1)){
var c__43022__auto___48512 = cljs.core.chunk_first.call(null,seq__48468_48511__$1);
var G__48513 = cljs.core.chunk_rest.call(null,seq__48468_48511__$1);
var G__48514 = c__43022__auto___48512;
var G__48515 = cljs.core.count.call(null,c__43022__auto___48512);
var G__48516 = (0);
seq__48468_48501 = G__48513;
chunk__48469_48502 = G__48514;
count__48470_48503 = G__48515;
i__48471_48504 = G__48516;
continue;
} else {
var req_48517 = cljs.core.first.call(null,seq__48468_48511__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48517,prov);

var G__48518 = cljs.core.next.call(null,seq__48468_48511__$1);
var G__48519 = null;
var G__48520 = (0);
var G__48521 = (0);
seq__48468_48501 = G__48518;
chunk__48469_48502 = G__48519;
count__48470_48503 = G__48520;
i__48471_48504 = G__48521;
continue;
}
} else {
}
}
break;
}

var G__48522 = cljs.core.next.call(null,seq__48460__$1);
var G__48523 = null;
var G__48524 = (0);
var G__48525 = (0);
seq__48460 = G__48522;
chunk__48461 = G__48523;
count__48462 = G__48524;
i__48463 = G__48525;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__48526_48530 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48527_48531 = null;
var count__48528_48532 = (0);
var i__48529_48533 = (0);
while(true){
if((i__48529_48533 < count__48528_48532)){
var ns_48534 = cljs.core._nth.call(null,chunk__48527_48531,i__48529_48533);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48534);

var G__48535 = seq__48526_48530;
var G__48536 = chunk__48527_48531;
var G__48537 = count__48528_48532;
var G__48538 = (i__48529_48533 + (1));
seq__48526_48530 = G__48535;
chunk__48527_48531 = G__48536;
count__48528_48532 = G__48537;
i__48529_48533 = G__48538;
continue;
} else {
var temp__4657__auto___48539 = cljs.core.seq.call(null,seq__48526_48530);
if(temp__4657__auto___48539){
var seq__48526_48540__$1 = temp__4657__auto___48539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48526_48540__$1)){
var c__43022__auto___48541 = cljs.core.chunk_first.call(null,seq__48526_48540__$1);
var G__48542 = cljs.core.chunk_rest.call(null,seq__48526_48540__$1);
var G__48543 = c__43022__auto___48541;
var G__48544 = cljs.core.count.call(null,c__43022__auto___48541);
var G__48545 = (0);
seq__48526_48530 = G__48542;
chunk__48527_48531 = G__48543;
count__48528_48532 = G__48544;
i__48529_48533 = G__48545;
continue;
} else {
var ns_48546 = cljs.core.first.call(null,seq__48526_48540__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48546);

var G__48547 = cljs.core.next.call(null,seq__48526_48540__$1);
var G__48548 = null;
var G__48549 = (0);
var G__48550 = (0);
seq__48526_48530 = G__48547;
chunk__48527_48531 = G__48548;
count__48528_48532 = G__48549;
i__48529_48533 = G__48550;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__42183__auto__ = goog.require__;
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__48551__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48552__i = 0, G__48552__a = new Array(arguments.length -  0);
while (G__48552__i < G__48552__a.length) {G__48552__a[G__48552__i] = arguments[G__48552__i + 0]; ++G__48552__i;}
  args = new cljs.core.IndexedSeq(G__48552__a,0,null);
} 
return G__48551__delegate.call(this,args);};
G__48551.cljs$lang$maxFixedArity = 0;
G__48551.cljs$lang$applyTo = (function (arglist__48553){
var args = cljs.core.seq(arglist__48553);
return G__48551__delegate(args);
});
G__48551.cljs$core$IFn$_invoke$arity$variadic = G__48551__delegate;
return G__48551;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__48554_SHARP_,p2__48555_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48554_SHARP_)].join('')),p2__48555_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__48556_SHARP_,p2__48557_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48556_SHARP_)].join(''),p2__48557_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__48558 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__48558.addCallback(((function (G__48558){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__48558))
);

G__48558.addErrback(((function (G__48558){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__48558))
);

return G__48558;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e48559){if((e48559 instanceof Error)){
var e = e48559;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48559;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48560){if((e48560 instanceof Error)){
var e = e48560;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48560;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48561 = cljs.core._EQ_;
var expr__48562 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48561.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48562))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__48561.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48562))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__48561.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__48562))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__48561,expr__48562){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48561,expr__48562))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48564,callback){
var map__48565 = p__48564;
var map__48565__$1 = ((((!((map__48565 == null)))?((((map__48565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48565):map__48565);
var file_msg = map__48565__$1;
var request_url = cljs.core.get.call(null,map__48565__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__42183__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__48565,map__48565__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48565,map__48565__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__){
return (function (state_48605){
var state_val_48606 = (state_48605[(1)]);
if((state_val_48606 === (7))){
var inst_48601 = (state_48605[(2)]);
var state_48605__$1 = state_48605;
var statearr_48607_48634 = state_48605__$1;
(statearr_48607_48634[(2)] = inst_48601);

(statearr_48607_48634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (1))){
var state_48605__$1 = state_48605;
var statearr_48608_48635 = state_48605__$1;
(statearr_48608_48635[(2)] = null);

(statearr_48608_48635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (4))){
var inst_48569 = (state_48605[(7)]);
var inst_48569__$1 = (state_48605[(2)]);
var state_48605__$1 = (function (){var statearr_48609 = state_48605;
(statearr_48609[(7)] = inst_48569__$1);

return statearr_48609;
})();
if(cljs.core.truth_(inst_48569__$1)){
var statearr_48610_48636 = state_48605__$1;
(statearr_48610_48636[(1)] = (5));

} else {
var statearr_48611_48637 = state_48605__$1;
(statearr_48611_48637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (15))){
var inst_48583 = (state_48605[(8)]);
var inst_48586 = (state_48605[(9)]);
var inst_48588 = inst_48586.call(null,inst_48583);
var state_48605__$1 = state_48605;
var statearr_48612_48638 = state_48605__$1;
(statearr_48612_48638[(2)] = inst_48588);

(statearr_48612_48638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (13))){
var inst_48595 = (state_48605[(2)]);
var state_48605__$1 = state_48605;
var statearr_48613_48639 = state_48605__$1;
(statearr_48613_48639[(2)] = inst_48595);

(statearr_48613_48639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (6))){
var state_48605__$1 = state_48605;
var statearr_48614_48640 = state_48605__$1;
(statearr_48614_48640[(2)] = null);

(statearr_48614_48640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (17))){
var inst_48592 = (state_48605[(2)]);
var state_48605__$1 = state_48605;
var statearr_48615_48641 = state_48605__$1;
(statearr_48615_48641[(2)] = inst_48592);

(statearr_48615_48641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (3))){
var inst_48603 = (state_48605[(2)]);
var state_48605__$1 = state_48605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48605__$1,inst_48603);
} else {
if((state_val_48606 === (12))){
var state_48605__$1 = state_48605;
var statearr_48616_48642 = state_48605__$1;
(statearr_48616_48642[(2)] = null);

(statearr_48616_48642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (2))){
var state_48605__$1 = state_48605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48605__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48606 === (11))){
var inst_48574 = (state_48605[(10)]);
var inst_48581 = figwheel.client.file_reloading.blocking_load.call(null,inst_48574);
var state_48605__$1 = state_48605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48605__$1,(14),inst_48581);
} else {
if((state_val_48606 === (9))){
var inst_48574 = (state_48605[(10)]);
var state_48605__$1 = state_48605;
if(cljs.core.truth_(inst_48574)){
var statearr_48617_48643 = state_48605__$1;
(statearr_48617_48643[(1)] = (11));

} else {
var statearr_48618_48644 = state_48605__$1;
(statearr_48618_48644[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (5))){
var inst_48569 = (state_48605[(7)]);
var inst_48575 = (state_48605[(11)]);
var inst_48574 = cljs.core.nth.call(null,inst_48569,(0),null);
var inst_48575__$1 = cljs.core.nth.call(null,inst_48569,(1),null);
var state_48605__$1 = (function (){var statearr_48619 = state_48605;
(statearr_48619[(11)] = inst_48575__$1);

(statearr_48619[(10)] = inst_48574);

return statearr_48619;
})();
if(cljs.core.truth_(inst_48575__$1)){
var statearr_48620_48645 = state_48605__$1;
(statearr_48620_48645[(1)] = (8));

} else {
var statearr_48621_48646 = state_48605__$1;
(statearr_48621_48646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (14))){
var inst_48586 = (state_48605[(9)]);
var inst_48574 = (state_48605[(10)]);
var inst_48583 = (state_48605[(2)]);
var inst_48584 = console.log("Loading!",inst_48574);
var inst_48585 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48586__$1 = cljs.core.get.call(null,inst_48585,inst_48574);
var state_48605__$1 = (function (){var statearr_48622 = state_48605;
(statearr_48622[(8)] = inst_48583);

(statearr_48622[(9)] = inst_48586__$1);

(statearr_48622[(12)] = inst_48584);

return statearr_48622;
})();
if(cljs.core.truth_(inst_48586__$1)){
var statearr_48623_48647 = state_48605__$1;
(statearr_48623_48647[(1)] = (15));

} else {
var statearr_48624_48648 = state_48605__$1;
(statearr_48624_48648[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (16))){
var inst_48583 = (state_48605[(8)]);
var inst_48590 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48583);
var state_48605__$1 = state_48605;
var statearr_48625_48649 = state_48605__$1;
(statearr_48625_48649[(2)] = inst_48590);

(statearr_48625_48649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (10))){
var inst_48597 = (state_48605[(2)]);
var state_48605__$1 = (function (){var statearr_48626 = state_48605;
(statearr_48626[(13)] = inst_48597);

return statearr_48626;
})();
var statearr_48627_48650 = state_48605__$1;
(statearr_48627_48650[(2)] = null);

(statearr_48627_48650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48606 === (8))){
var inst_48575 = (state_48605[(11)]);
var inst_48577 = console.log("Evaling!",inst_48575);
var inst_48578 = eval(inst_48575);
var state_48605__$1 = (function (){var statearr_48628 = state_48605;
(statearr_48628[(14)] = inst_48577);

return statearr_48628;
})();
var statearr_48629_48651 = state_48605__$1;
(statearr_48629_48651[(2)] = inst_48578);

(statearr_48629_48651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45169__auto__))
;
return ((function (switch__45081__auto__,c__45169__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45082__auto__ = null;
var figwheel$client$file_reloading$state_machine__45082__auto____0 = (function (){
var statearr_48630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48630[(0)] = figwheel$client$file_reloading$state_machine__45082__auto__);

(statearr_48630[(1)] = (1));

return statearr_48630;
});
var figwheel$client$file_reloading$state_machine__45082__auto____1 = (function (state_48605){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_48605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e48631){if((e48631 instanceof Object)){
var ex__45085__auto__ = e48631;
var statearr_48632_48652 = state_48605;
(statearr_48632_48652[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48653 = state_48605;
state_48605 = G__48653;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45082__auto__ = function(state_48605){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45082__auto____1.call(this,state_48605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45082__auto____0;
figwheel$client$file_reloading$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45082__auto____1;
return figwheel$client$file_reloading$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__))
})();
var state__45171__auto__ = (function (){var statearr_48633 = f__45170__auto__.call(null);
(statearr_48633[(6)] = c__45169__auto__);

return statearr_48633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__))
);

return c__45169__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__48655 = arguments.length;
switch (G__48655) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48657,callback){
var map__48658 = p__48657;
var map__48658__$1 = ((((!((map__48658 == null)))?((((map__48658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48658):map__48658);
var file_msg = map__48658__$1;
var namespace = cljs.core.get.call(null,map__48658__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48658,map__48658__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48658,map__48658__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__48660){
var map__48661 = p__48660;
var map__48661__$1 = ((((!((map__48661 == null)))?((((map__48661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48661):map__48661);
var file_msg = map__48661__$1;
var namespace = cljs.core.get.call(null,map__48661__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48663){
var map__48664 = p__48663;
var map__48664__$1 = ((((!((map__48664 == null)))?((((map__48664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48664):map__48664);
var file_msg = map__48664__$1;
var namespace = cljs.core.get.call(null,map__48664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__42171__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__42171__auto__){
var or__42183__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
var or__42183__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__42183__auto____$1)){
return or__42183__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__42171__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48666,callback){
var map__48667 = p__48666;
var map__48667__$1 = ((((!((map__48667 == null)))?((((map__48667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48667):map__48667);
var file_msg = map__48667__$1;
var request_url = cljs.core.get.call(null,map__48667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48667__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__45169__auto___48717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___48717,out){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___48717,out){
return (function (state_48702){
var state_val_48703 = (state_48702[(1)]);
if((state_val_48703 === (1))){
var inst_48676 = cljs.core.seq.call(null,files);
var inst_48677 = cljs.core.first.call(null,inst_48676);
var inst_48678 = cljs.core.next.call(null,inst_48676);
var inst_48679 = files;
var state_48702__$1 = (function (){var statearr_48704 = state_48702;
(statearr_48704[(7)] = inst_48679);

(statearr_48704[(8)] = inst_48678);

(statearr_48704[(9)] = inst_48677);

return statearr_48704;
})();
var statearr_48705_48718 = state_48702__$1;
(statearr_48705_48718[(2)] = null);

(statearr_48705_48718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48703 === (2))){
var inst_48679 = (state_48702[(7)]);
var inst_48685 = (state_48702[(10)]);
var inst_48684 = cljs.core.seq.call(null,inst_48679);
var inst_48685__$1 = cljs.core.first.call(null,inst_48684);
var inst_48686 = cljs.core.next.call(null,inst_48684);
var inst_48687 = (inst_48685__$1 == null);
var inst_48688 = cljs.core.not.call(null,inst_48687);
var state_48702__$1 = (function (){var statearr_48706 = state_48702;
(statearr_48706[(11)] = inst_48686);

(statearr_48706[(10)] = inst_48685__$1);

return statearr_48706;
})();
if(inst_48688){
var statearr_48707_48719 = state_48702__$1;
(statearr_48707_48719[(1)] = (4));

} else {
var statearr_48708_48720 = state_48702__$1;
(statearr_48708_48720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48703 === (3))){
var inst_48700 = (state_48702[(2)]);
var state_48702__$1 = state_48702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48702__$1,inst_48700);
} else {
if((state_val_48703 === (4))){
var inst_48685 = (state_48702[(10)]);
var inst_48690 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48685);
var state_48702__$1 = state_48702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48702__$1,(7),inst_48690);
} else {
if((state_val_48703 === (5))){
var inst_48696 = cljs.core.async.close_BANG_.call(null,out);
var state_48702__$1 = state_48702;
var statearr_48709_48721 = state_48702__$1;
(statearr_48709_48721[(2)] = inst_48696);

(statearr_48709_48721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48703 === (6))){
var inst_48698 = (state_48702[(2)]);
var state_48702__$1 = state_48702;
var statearr_48710_48722 = state_48702__$1;
(statearr_48710_48722[(2)] = inst_48698);

(statearr_48710_48722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48703 === (7))){
var inst_48686 = (state_48702[(11)]);
var inst_48692 = (state_48702[(2)]);
var inst_48693 = cljs.core.async.put_BANG_.call(null,out,inst_48692);
var inst_48679 = inst_48686;
var state_48702__$1 = (function (){var statearr_48711 = state_48702;
(statearr_48711[(12)] = inst_48693);

(statearr_48711[(7)] = inst_48679);

return statearr_48711;
})();
var statearr_48712_48723 = state_48702__$1;
(statearr_48712_48723[(2)] = null);

(statearr_48712_48723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__45169__auto___48717,out))
;
return ((function (switch__45081__auto__,c__45169__auto___48717,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto____0 = (function (){
var statearr_48713 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48713[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto__);

(statearr_48713[(1)] = (1));

return statearr_48713;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto____1 = (function (state_48702){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_48702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e48714){if((e48714 instanceof Object)){
var ex__45085__auto__ = e48714;
var statearr_48715_48724 = state_48702;
(statearr_48715_48724[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48725 = state_48702;
state_48702 = G__48725;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto__ = function(state_48702){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto____1.call(this,state_48702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___48717,out))
})();
var state__45171__auto__ = (function (){var statearr_48716 = f__45170__auto__.call(null);
(statearr_48716[(6)] = c__45169__auto___48717);

return statearr_48716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___48717,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48726,opts){
var map__48727 = p__48726;
var map__48727__$1 = ((((!((map__48727 == null)))?((((map__48727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48727):map__48727);
var eval_body = cljs.core.get.call(null,map__48727__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__42171__auto__ = eval_body;
if(cljs.core.truth_(and__42171__auto__)){
return typeof eval_body === 'string';
} else {
return and__42171__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e48729){var e = e48729;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__48730_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48730_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__48731){
var vec__48732 = p__48731;
var k = cljs.core.nth.call(null,vec__48732,(0),null);
var v = cljs.core.nth.call(null,vec__48732,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48735){
var vec__48736 = p__48735;
var k = cljs.core.nth.call(null,vec__48736,(0),null);
var v = cljs.core.nth.call(null,vec__48736,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48742,p__48743){
var map__48744 = p__48742;
var map__48744__$1 = ((((!((map__48744 == null)))?((((map__48744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48744):map__48744);
var opts = map__48744__$1;
var before_jsload = cljs.core.get.call(null,map__48744__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48744__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48744__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48745 = p__48743;
var map__48745__$1 = ((((!((map__48745 == null)))?((((map__48745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48745):map__48745);
var msg = map__48745__$1;
var files = cljs.core.get.call(null,map__48745__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48745__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48745__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48899){
var state_val_48900 = (state_48899[(1)]);
if((state_val_48900 === (7))){
var inst_48759 = (state_48899[(7)]);
var inst_48761 = (state_48899[(8)]);
var inst_48760 = (state_48899[(9)]);
var inst_48762 = (state_48899[(10)]);
var inst_48767 = cljs.core._nth.call(null,inst_48760,inst_48762);
var inst_48768 = figwheel.client.file_reloading.eval_body.call(null,inst_48767,opts);
var inst_48769 = (inst_48762 + (1));
var tmp48901 = inst_48759;
var tmp48902 = inst_48761;
var tmp48903 = inst_48760;
var inst_48759__$1 = tmp48901;
var inst_48760__$1 = tmp48903;
var inst_48761__$1 = tmp48902;
var inst_48762__$1 = inst_48769;
var state_48899__$1 = (function (){var statearr_48904 = state_48899;
(statearr_48904[(7)] = inst_48759__$1);

(statearr_48904[(11)] = inst_48768);

(statearr_48904[(8)] = inst_48761__$1);

(statearr_48904[(9)] = inst_48760__$1);

(statearr_48904[(10)] = inst_48762__$1);

return statearr_48904;
})();
var statearr_48905_48988 = state_48899__$1;
(statearr_48905_48988[(2)] = null);

(statearr_48905_48988[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (20))){
var inst_48802 = (state_48899[(12)]);
var inst_48810 = figwheel.client.file_reloading.sort_files.call(null,inst_48802);
var state_48899__$1 = state_48899;
var statearr_48906_48989 = state_48899__$1;
(statearr_48906_48989[(2)] = inst_48810);

(statearr_48906_48989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (27))){
var state_48899__$1 = state_48899;
var statearr_48907_48990 = state_48899__$1;
(statearr_48907_48990[(2)] = null);

(statearr_48907_48990[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (1))){
var inst_48751 = (state_48899[(13)]);
var inst_48748 = before_jsload.call(null,files);
var inst_48749 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48750 = (function (){return ((function (inst_48751,inst_48748,inst_48749,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48739_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48739_SHARP_);
});
;})(inst_48751,inst_48748,inst_48749,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48751__$1 = cljs.core.filter.call(null,inst_48750,files);
var inst_48752 = cljs.core.not_empty.call(null,inst_48751__$1);
var state_48899__$1 = (function (){var statearr_48908 = state_48899;
(statearr_48908[(14)] = inst_48748);

(statearr_48908[(15)] = inst_48749);

(statearr_48908[(13)] = inst_48751__$1);

return statearr_48908;
})();
if(cljs.core.truth_(inst_48752)){
var statearr_48909_48991 = state_48899__$1;
(statearr_48909_48991[(1)] = (2));

} else {
var statearr_48910_48992 = state_48899__$1;
(statearr_48910_48992[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (24))){
var state_48899__$1 = state_48899;
var statearr_48911_48993 = state_48899__$1;
(statearr_48911_48993[(2)] = null);

(statearr_48911_48993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (39))){
var inst_48852 = (state_48899[(16)]);
var state_48899__$1 = state_48899;
var statearr_48912_48994 = state_48899__$1;
(statearr_48912_48994[(2)] = inst_48852);

(statearr_48912_48994[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (46))){
var inst_48894 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
var statearr_48913_48995 = state_48899__$1;
(statearr_48913_48995[(2)] = inst_48894);

(statearr_48913_48995[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (4))){
var inst_48796 = (state_48899[(2)]);
var inst_48797 = cljs.core.List.EMPTY;
var inst_48798 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48797);
var inst_48799 = (function (){return ((function (inst_48796,inst_48797,inst_48798,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48740_SHARP_){
var and__42171__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48740_SHARP_);
if(cljs.core.truth_(and__42171__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48740_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__48740_SHARP_)));
} else {
return and__42171__auto__;
}
});
;})(inst_48796,inst_48797,inst_48798,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48800 = cljs.core.filter.call(null,inst_48799,files);
var inst_48801 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48802 = cljs.core.concat.call(null,inst_48800,inst_48801);
var state_48899__$1 = (function (){var statearr_48914 = state_48899;
(statearr_48914[(17)] = inst_48796);

(statearr_48914[(12)] = inst_48802);

(statearr_48914[(18)] = inst_48798);

return statearr_48914;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48915_48996 = state_48899__$1;
(statearr_48915_48996[(1)] = (16));

} else {
var statearr_48916_48997 = state_48899__$1;
(statearr_48916_48997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (15))){
var inst_48786 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
var statearr_48917_48998 = state_48899__$1;
(statearr_48917_48998[(2)] = inst_48786);

(statearr_48917_48998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (21))){
var inst_48812 = (state_48899[(19)]);
var inst_48812__$1 = (state_48899[(2)]);
var inst_48813 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48812__$1);
var state_48899__$1 = (function (){var statearr_48918 = state_48899;
(statearr_48918[(19)] = inst_48812__$1);

return statearr_48918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48899__$1,(22),inst_48813);
} else {
if((state_val_48900 === (31))){
var inst_48897 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48899__$1,inst_48897);
} else {
if((state_val_48900 === (32))){
var inst_48852 = (state_48899[(16)]);
var inst_48857 = inst_48852.cljs$lang$protocol_mask$partition0$;
var inst_48858 = (inst_48857 & (64));
var inst_48859 = inst_48852.cljs$core$ISeq$;
var inst_48860 = (cljs.core.PROTOCOL_SENTINEL === inst_48859);
var inst_48861 = (inst_48858) || (inst_48860);
var state_48899__$1 = state_48899;
if(cljs.core.truth_(inst_48861)){
var statearr_48919_48999 = state_48899__$1;
(statearr_48919_48999[(1)] = (35));

} else {
var statearr_48920_49000 = state_48899__$1;
(statearr_48920_49000[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (40))){
var inst_48874 = (state_48899[(20)]);
var inst_48873 = (state_48899[(2)]);
var inst_48874__$1 = cljs.core.get.call(null,inst_48873,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48875 = cljs.core.get.call(null,inst_48873,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48876 = cljs.core.not_empty.call(null,inst_48874__$1);
var state_48899__$1 = (function (){var statearr_48921 = state_48899;
(statearr_48921[(20)] = inst_48874__$1);

(statearr_48921[(21)] = inst_48875);

return statearr_48921;
})();
if(cljs.core.truth_(inst_48876)){
var statearr_48922_49001 = state_48899__$1;
(statearr_48922_49001[(1)] = (41));

} else {
var statearr_48923_49002 = state_48899__$1;
(statearr_48923_49002[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (33))){
var state_48899__$1 = state_48899;
var statearr_48924_49003 = state_48899__$1;
(statearr_48924_49003[(2)] = false);

(statearr_48924_49003[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (13))){
var inst_48772 = (state_48899[(22)]);
var inst_48776 = cljs.core.chunk_first.call(null,inst_48772);
var inst_48777 = cljs.core.chunk_rest.call(null,inst_48772);
var inst_48778 = cljs.core.count.call(null,inst_48776);
var inst_48759 = inst_48777;
var inst_48760 = inst_48776;
var inst_48761 = inst_48778;
var inst_48762 = (0);
var state_48899__$1 = (function (){var statearr_48925 = state_48899;
(statearr_48925[(7)] = inst_48759);

(statearr_48925[(8)] = inst_48761);

(statearr_48925[(9)] = inst_48760);

(statearr_48925[(10)] = inst_48762);

return statearr_48925;
})();
var statearr_48926_49004 = state_48899__$1;
(statearr_48926_49004[(2)] = null);

(statearr_48926_49004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (22))){
var inst_48815 = (state_48899[(23)]);
var inst_48812 = (state_48899[(19)]);
var inst_48820 = (state_48899[(24)]);
var inst_48816 = (state_48899[(25)]);
var inst_48815__$1 = (state_48899[(2)]);
var inst_48816__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48815__$1);
var inst_48817 = (function (){var all_files = inst_48812;
var res_SINGLEQUOTE_ = inst_48815__$1;
var res = inst_48816__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48815,inst_48812,inst_48820,inst_48816,inst_48815__$1,inst_48816__$1,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48741_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48741_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48815,inst_48812,inst_48820,inst_48816,inst_48815__$1,inst_48816__$1,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48818 = cljs.core.filter.call(null,inst_48817,inst_48815__$1);
var inst_48819 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48820__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48819);
var inst_48821 = cljs.core.not_empty.call(null,inst_48820__$1);
var state_48899__$1 = (function (){var statearr_48927 = state_48899;
(statearr_48927[(23)] = inst_48815__$1);

(statearr_48927[(26)] = inst_48818);

(statearr_48927[(24)] = inst_48820__$1);

(statearr_48927[(25)] = inst_48816__$1);

return statearr_48927;
})();
if(cljs.core.truth_(inst_48821)){
var statearr_48928_49005 = state_48899__$1;
(statearr_48928_49005[(1)] = (23));

} else {
var statearr_48929_49006 = state_48899__$1;
(statearr_48929_49006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (36))){
var state_48899__$1 = state_48899;
var statearr_48930_49007 = state_48899__$1;
(statearr_48930_49007[(2)] = false);

(statearr_48930_49007[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (41))){
var inst_48874 = (state_48899[(20)]);
var inst_48878 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48879 = cljs.core.map.call(null,inst_48878,inst_48874);
var inst_48880 = cljs.core.pr_str.call(null,inst_48879);
var inst_48881 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48880)].join('');
var inst_48882 = figwheel.client.utils.log.call(null,inst_48881);
var state_48899__$1 = state_48899;
var statearr_48931_49008 = state_48899__$1;
(statearr_48931_49008[(2)] = inst_48882);

(statearr_48931_49008[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (43))){
var inst_48875 = (state_48899[(21)]);
var inst_48885 = (state_48899[(2)]);
var inst_48886 = cljs.core.not_empty.call(null,inst_48875);
var state_48899__$1 = (function (){var statearr_48932 = state_48899;
(statearr_48932[(27)] = inst_48885);

return statearr_48932;
})();
if(cljs.core.truth_(inst_48886)){
var statearr_48933_49009 = state_48899__$1;
(statearr_48933_49009[(1)] = (44));

} else {
var statearr_48934_49010 = state_48899__$1;
(statearr_48934_49010[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (29))){
var inst_48815 = (state_48899[(23)]);
var inst_48818 = (state_48899[(26)]);
var inst_48812 = (state_48899[(19)]);
var inst_48820 = (state_48899[(24)]);
var inst_48852 = (state_48899[(16)]);
var inst_48816 = (state_48899[(25)]);
var inst_48848 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48851 = (function (){var all_files = inst_48812;
var res_SINGLEQUOTE_ = inst_48815;
var res = inst_48816;
var files_not_loaded = inst_48818;
var dependencies_that_loaded = inst_48820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48852,inst_48816,inst_48848,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48850){
var map__48935 = p__48850;
var map__48935__$1 = ((((!((map__48935 == null)))?((((map__48935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48935):map__48935);
var namespace = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48852,inst_48816,inst_48848,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48852__$1 = cljs.core.group_by.call(null,inst_48851,inst_48818);
var inst_48854 = (inst_48852__$1 == null);
var inst_48855 = cljs.core.not.call(null,inst_48854);
var state_48899__$1 = (function (){var statearr_48937 = state_48899;
(statearr_48937[(28)] = inst_48848);

(statearr_48937[(16)] = inst_48852__$1);

return statearr_48937;
})();
if(inst_48855){
var statearr_48938_49011 = state_48899__$1;
(statearr_48938_49011[(1)] = (32));

} else {
var statearr_48939_49012 = state_48899__$1;
(statearr_48939_49012[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (44))){
var inst_48875 = (state_48899[(21)]);
var inst_48888 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48875);
var inst_48889 = cljs.core.pr_str.call(null,inst_48888);
var inst_48890 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48889)].join('');
var inst_48891 = figwheel.client.utils.log.call(null,inst_48890);
var state_48899__$1 = state_48899;
var statearr_48940_49013 = state_48899__$1;
(statearr_48940_49013[(2)] = inst_48891);

(statearr_48940_49013[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (6))){
var inst_48793 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
var statearr_48941_49014 = state_48899__$1;
(statearr_48941_49014[(2)] = inst_48793);

(statearr_48941_49014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (28))){
var inst_48818 = (state_48899[(26)]);
var inst_48845 = (state_48899[(2)]);
var inst_48846 = cljs.core.not_empty.call(null,inst_48818);
var state_48899__$1 = (function (){var statearr_48942 = state_48899;
(statearr_48942[(29)] = inst_48845);

return statearr_48942;
})();
if(cljs.core.truth_(inst_48846)){
var statearr_48943_49015 = state_48899__$1;
(statearr_48943_49015[(1)] = (29));

} else {
var statearr_48944_49016 = state_48899__$1;
(statearr_48944_49016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (25))){
var inst_48816 = (state_48899[(25)]);
var inst_48832 = (state_48899[(2)]);
var inst_48833 = cljs.core.not_empty.call(null,inst_48816);
var state_48899__$1 = (function (){var statearr_48945 = state_48899;
(statearr_48945[(30)] = inst_48832);

return statearr_48945;
})();
if(cljs.core.truth_(inst_48833)){
var statearr_48946_49017 = state_48899__$1;
(statearr_48946_49017[(1)] = (26));

} else {
var statearr_48947_49018 = state_48899__$1;
(statearr_48947_49018[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (34))){
var inst_48868 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
if(cljs.core.truth_(inst_48868)){
var statearr_48948_49019 = state_48899__$1;
(statearr_48948_49019[(1)] = (38));

} else {
var statearr_48949_49020 = state_48899__$1;
(statearr_48949_49020[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (17))){
var state_48899__$1 = state_48899;
var statearr_48950_49021 = state_48899__$1;
(statearr_48950_49021[(2)] = recompile_dependents);

(statearr_48950_49021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (3))){
var state_48899__$1 = state_48899;
var statearr_48951_49022 = state_48899__$1;
(statearr_48951_49022[(2)] = null);

(statearr_48951_49022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (12))){
var inst_48789 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
var statearr_48952_49023 = state_48899__$1;
(statearr_48952_49023[(2)] = inst_48789);

(statearr_48952_49023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (2))){
var inst_48751 = (state_48899[(13)]);
var inst_48758 = cljs.core.seq.call(null,inst_48751);
var inst_48759 = inst_48758;
var inst_48760 = null;
var inst_48761 = (0);
var inst_48762 = (0);
var state_48899__$1 = (function (){var statearr_48953 = state_48899;
(statearr_48953[(7)] = inst_48759);

(statearr_48953[(8)] = inst_48761);

(statearr_48953[(9)] = inst_48760);

(statearr_48953[(10)] = inst_48762);

return statearr_48953;
})();
var statearr_48954_49024 = state_48899__$1;
(statearr_48954_49024[(2)] = null);

(statearr_48954_49024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (23))){
var inst_48815 = (state_48899[(23)]);
var inst_48818 = (state_48899[(26)]);
var inst_48812 = (state_48899[(19)]);
var inst_48820 = (state_48899[(24)]);
var inst_48816 = (state_48899[(25)]);
var inst_48823 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48825 = (function (){var all_files = inst_48812;
var res_SINGLEQUOTE_ = inst_48815;
var res = inst_48816;
var files_not_loaded = inst_48818;
var dependencies_that_loaded = inst_48820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48816,inst_48823,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48824){
var map__48955 = p__48824;
var map__48955__$1 = ((((!((map__48955 == null)))?((((map__48955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48955):map__48955);
var request_url = cljs.core.get.call(null,map__48955__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48816,inst_48823,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48826 = cljs.core.reverse.call(null,inst_48820);
var inst_48827 = cljs.core.map.call(null,inst_48825,inst_48826);
var inst_48828 = cljs.core.pr_str.call(null,inst_48827);
var inst_48829 = figwheel.client.utils.log.call(null,inst_48828);
var state_48899__$1 = (function (){var statearr_48957 = state_48899;
(statearr_48957[(31)] = inst_48823);

return statearr_48957;
})();
var statearr_48958_49025 = state_48899__$1;
(statearr_48958_49025[(2)] = inst_48829);

(statearr_48958_49025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (35))){
var state_48899__$1 = state_48899;
var statearr_48959_49026 = state_48899__$1;
(statearr_48959_49026[(2)] = true);

(statearr_48959_49026[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (19))){
var inst_48802 = (state_48899[(12)]);
var inst_48808 = figwheel.client.file_reloading.expand_files.call(null,inst_48802);
var state_48899__$1 = state_48899;
var statearr_48960_49027 = state_48899__$1;
(statearr_48960_49027[(2)] = inst_48808);

(statearr_48960_49027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (11))){
var state_48899__$1 = state_48899;
var statearr_48961_49028 = state_48899__$1;
(statearr_48961_49028[(2)] = null);

(statearr_48961_49028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (9))){
var inst_48791 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
var statearr_48962_49029 = state_48899__$1;
(statearr_48962_49029[(2)] = inst_48791);

(statearr_48962_49029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (5))){
var inst_48761 = (state_48899[(8)]);
var inst_48762 = (state_48899[(10)]);
var inst_48764 = (inst_48762 < inst_48761);
var inst_48765 = inst_48764;
var state_48899__$1 = state_48899;
if(cljs.core.truth_(inst_48765)){
var statearr_48963_49030 = state_48899__$1;
(statearr_48963_49030[(1)] = (7));

} else {
var statearr_48964_49031 = state_48899__$1;
(statearr_48964_49031[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (14))){
var inst_48772 = (state_48899[(22)]);
var inst_48781 = cljs.core.first.call(null,inst_48772);
var inst_48782 = figwheel.client.file_reloading.eval_body.call(null,inst_48781,opts);
var inst_48783 = cljs.core.next.call(null,inst_48772);
var inst_48759 = inst_48783;
var inst_48760 = null;
var inst_48761 = (0);
var inst_48762 = (0);
var state_48899__$1 = (function (){var statearr_48965 = state_48899;
(statearr_48965[(7)] = inst_48759);

(statearr_48965[(8)] = inst_48761);

(statearr_48965[(32)] = inst_48782);

(statearr_48965[(9)] = inst_48760);

(statearr_48965[(10)] = inst_48762);

return statearr_48965;
})();
var statearr_48966_49032 = state_48899__$1;
(statearr_48966_49032[(2)] = null);

(statearr_48966_49032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (45))){
var state_48899__$1 = state_48899;
var statearr_48967_49033 = state_48899__$1;
(statearr_48967_49033[(2)] = null);

(statearr_48967_49033[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (26))){
var inst_48815 = (state_48899[(23)]);
var inst_48818 = (state_48899[(26)]);
var inst_48812 = (state_48899[(19)]);
var inst_48820 = (state_48899[(24)]);
var inst_48816 = (state_48899[(25)]);
var inst_48835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48837 = (function (){var all_files = inst_48812;
var res_SINGLEQUOTE_ = inst_48815;
var res = inst_48816;
var files_not_loaded = inst_48818;
var dependencies_that_loaded = inst_48820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48816,inst_48835,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48836){
var map__48968 = p__48836;
var map__48968__$1 = ((((!((map__48968 == null)))?((((map__48968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48968):map__48968);
var namespace = cljs.core.get.call(null,map__48968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48968__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48816,inst_48835,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48838 = cljs.core.map.call(null,inst_48837,inst_48816);
var inst_48839 = cljs.core.pr_str.call(null,inst_48838);
var inst_48840 = figwheel.client.utils.log.call(null,inst_48839);
var inst_48841 = (function (){var all_files = inst_48812;
var res_SINGLEQUOTE_ = inst_48815;
var res = inst_48816;
var files_not_loaded = inst_48818;
var dependencies_that_loaded = inst_48820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48816,inst_48835,inst_48837,inst_48838,inst_48839,inst_48840,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48815,inst_48818,inst_48812,inst_48820,inst_48816,inst_48835,inst_48837,inst_48838,inst_48839,inst_48840,state_val_48900,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48842 = setTimeout(inst_48841,(10));
var state_48899__$1 = (function (){var statearr_48970 = state_48899;
(statearr_48970[(33)] = inst_48835);

(statearr_48970[(34)] = inst_48840);

return statearr_48970;
})();
var statearr_48971_49034 = state_48899__$1;
(statearr_48971_49034[(2)] = inst_48842);

(statearr_48971_49034[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (16))){
var state_48899__$1 = state_48899;
var statearr_48972_49035 = state_48899__$1;
(statearr_48972_49035[(2)] = reload_dependents);

(statearr_48972_49035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (38))){
var inst_48852 = (state_48899[(16)]);
var inst_48870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48852);
var state_48899__$1 = state_48899;
var statearr_48973_49036 = state_48899__$1;
(statearr_48973_49036[(2)] = inst_48870);

(statearr_48973_49036[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (30))){
var state_48899__$1 = state_48899;
var statearr_48974_49037 = state_48899__$1;
(statearr_48974_49037[(2)] = null);

(statearr_48974_49037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (10))){
var inst_48772 = (state_48899[(22)]);
var inst_48774 = cljs.core.chunked_seq_QMARK_.call(null,inst_48772);
var state_48899__$1 = state_48899;
if(inst_48774){
var statearr_48975_49038 = state_48899__$1;
(statearr_48975_49038[(1)] = (13));

} else {
var statearr_48976_49039 = state_48899__$1;
(statearr_48976_49039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (18))){
var inst_48806 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
if(cljs.core.truth_(inst_48806)){
var statearr_48977_49040 = state_48899__$1;
(statearr_48977_49040[(1)] = (19));

} else {
var statearr_48978_49041 = state_48899__$1;
(statearr_48978_49041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (42))){
var state_48899__$1 = state_48899;
var statearr_48979_49042 = state_48899__$1;
(statearr_48979_49042[(2)] = null);

(statearr_48979_49042[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (37))){
var inst_48865 = (state_48899[(2)]);
var state_48899__$1 = state_48899;
var statearr_48980_49043 = state_48899__$1;
(statearr_48980_49043[(2)] = inst_48865);

(statearr_48980_49043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48900 === (8))){
var inst_48772 = (state_48899[(22)]);
var inst_48759 = (state_48899[(7)]);
var inst_48772__$1 = cljs.core.seq.call(null,inst_48759);
var state_48899__$1 = (function (){var statearr_48981 = state_48899;
(statearr_48981[(22)] = inst_48772__$1);

return statearr_48981;
})();
if(inst_48772__$1){
var statearr_48982_49044 = state_48899__$1;
(statearr_48982_49044[(1)] = (10));

} else {
var statearr_48983_49045 = state_48899__$1;
(statearr_48983_49045[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45081__auto__,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto____0 = (function (){
var statearr_48984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48984[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto__);

(statearr_48984[(1)] = (1));

return statearr_48984;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto____1 = (function (state_48899){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_48899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e48985){if((e48985 instanceof Object)){
var ex__45085__auto__ = e48985;
var statearr_48986_49046 = state_48899;
(statearr_48986_49046[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49047 = state_48899;
state_48899 = G__49047;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto__ = function(state_48899){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto____1.call(this,state_48899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__45171__auto__ = (function (){var statearr_48987 = f__45170__auto__.call(null);
(statearr_48987[(6)] = c__45169__auto__);

return statearr_48987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__,map__48744,map__48744__$1,opts,before_jsload,on_jsload,reload_dependents,map__48745,map__48745__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__45169__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49050,link){
var map__49051 = p__49050;
var map__49051__$1 = ((((!((map__49051 == null)))?((((map__49051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49051):map__49051);
var file = cljs.core.get.call(null,map__49051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__49051,map__49051__$1,file){
return (function (p1__49048_SHARP_,p2__49049_SHARP_){
if(cljs.core._EQ_.call(null,p1__49048_SHARP_,p2__49049_SHARP_)){
return p1__49048_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__49051,map__49051__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49054){
var map__49055 = p__49054;
var map__49055__$1 = ((((!((map__49055 == null)))?((((map__49055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49055):map__49055);
var match_length = cljs.core.get.call(null,map__49055__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49055__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49053_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49053_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49057_SHARP_,p2__49058_SHARP_){
return cljs.core.assoc.call(null,p1__49057_SHARP_,cljs.core.get.call(null,p2__49058_SHARP_,key),p2__49058_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_49059 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49059);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49059);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49060,p__49061){
var map__49062 = p__49060;
var map__49062__$1 = ((((!((map__49062 == null)))?((((map__49062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49062):map__49062);
var on_cssload = cljs.core.get.call(null,map__49062__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49063 = p__49061;
var map__49063__$1 = ((((!((map__49063 == null)))?((((map__49063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49063):map__49063);
var files_msg = map__49063__$1;
var files = cljs.core.get.call(null,map__49063__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1510612165140
