// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49092 = arguments.length;
var i__43355__auto___49093 = (0);
while(true){
if((i__43355__auto___49093 < len__43354__auto___49092)){
args__43361__auto__.push((arguments[i__43355__auto___49093]));

var G__49094 = (i__43355__auto___49093 + (1));
i__43355__auto___49093 = G__49094;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49091){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49091));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49096 = arguments.length;
var i__43355__auto___49097 = (0);
while(true){
if((i__43355__auto___49097 < len__43354__auto___49096)){
args__43361__auto__.push((arguments[i__43355__auto___49097]));

var G__49098 = (i__43355__auto___49097 + (1));
i__43355__auto___49097 = G__49098;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49095){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49095));
});

var g_QMARK__49099 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_49100 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49099){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__49099))
,null));
var mkg_49101 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49099,g_49100){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__49099,g_49100))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49099,g_49100,mkg_49101){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49099).call(null,x);
});})(g_QMARK__49099,g_49100,mkg_49101))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49099,g_49100,mkg_49101){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49101).call(null,gfn);
});})(g_QMARK__49099,g_49100,mkg_49101))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49099,g_49100,mkg_49101){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49100).call(null,generator);
});})(g_QMARK__49099,g_49100,mkg_49101))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__43447__auto___49121 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__43447__auto___49121){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49122 = arguments.length;
var i__43355__auto___49123 = (0);
while(true){
if((i__43355__auto___49123 < len__43354__auto___49122)){
args__43361__auto__.push((arguments[i__43355__auto___49123]));

var G__49124 = (i__43355__auto___49123 + (1));
i__43355__auto___49123 = G__49124;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49121))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49121),args);
});})(g__43447__auto___49121))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__43447__auto___49121){
return (function (seq49102){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49102));
});})(g__43447__auto___49121))
;


var g__43447__auto___49125 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__43447__auto___49125){
return (function cljs$spec$gen$alpha$list(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49126 = arguments.length;
var i__43355__auto___49127 = (0);
while(true){
if((i__43355__auto___49127 < len__43354__auto___49126)){
args__43361__auto__.push((arguments[i__43355__auto___49127]));

var G__49128 = (i__43355__auto___49127 + (1));
i__43355__auto___49127 = G__49128;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49125))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49125),args);
});})(g__43447__auto___49125))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__43447__auto___49125){
return (function (seq49103){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49103));
});})(g__43447__auto___49125))
;


var g__43447__auto___49129 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__43447__auto___49129){
return (function cljs$spec$gen$alpha$map(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49130 = arguments.length;
var i__43355__auto___49131 = (0);
while(true){
if((i__43355__auto___49131 < len__43354__auto___49130)){
args__43361__auto__.push((arguments[i__43355__auto___49131]));

var G__49132 = (i__43355__auto___49131 + (1));
i__43355__auto___49131 = G__49132;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49129))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49129),args);
});})(g__43447__auto___49129))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__43447__auto___49129){
return (function (seq49104){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49104));
});})(g__43447__auto___49129))
;


var g__43447__auto___49133 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__43447__auto___49133){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49134 = arguments.length;
var i__43355__auto___49135 = (0);
while(true){
if((i__43355__auto___49135 < len__43354__auto___49134)){
args__43361__auto__.push((arguments[i__43355__auto___49135]));

var G__49136 = (i__43355__auto___49135 + (1));
i__43355__auto___49135 = G__49136;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49133))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49133),args);
});})(g__43447__auto___49133))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__43447__auto___49133){
return (function (seq49105){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49105));
});})(g__43447__auto___49133))
;


var g__43447__auto___49137 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__43447__auto___49137){
return (function cljs$spec$gen$alpha$set(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49138 = arguments.length;
var i__43355__auto___49139 = (0);
while(true){
if((i__43355__auto___49139 < len__43354__auto___49138)){
args__43361__auto__.push((arguments[i__43355__auto___49139]));

var G__49140 = (i__43355__auto___49139 + (1));
i__43355__auto___49139 = G__49140;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49137))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49137),args);
});})(g__43447__auto___49137))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__43447__auto___49137){
return (function (seq49106){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49106));
});})(g__43447__auto___49137))
;


var g__43447__auto___49141 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__43447__auto___49141){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49142 = arguments.length;
var i__43355__auto___49143 = (0);
while(true){
if((i__43355__auto___49143 < len__43354__auto___49142)){
args__43361__auto__.push((arguments[i__43355__auto___49143]));

var G__49144 = (i__43355__auto___49143 + (1));
i__43355__auto___49143 = G__49144;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49141))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49141),args);
});})(g__43447__auto___49141))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__43447__auto___49141){
return (function (seq49107){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49107));
});})(g__43447__auto___49141))
;


var g__43447__auto___49145 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__43447__auto___49145){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49146 = arguments.length;
var i__43355__auto___49147 = (0);
while(true){
if((i__43355__auto___49147 < len__43354__auto___49146)){
args__43361__auto__.push((arguments[i__43355__auto___49147]));

var G__49148 = (i__43355__auto___49147 + (1));
i__43355__auto___49147 = G__49148;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49145))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49145),args);
});})(g__43447__auto___49145))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__43447__auto___49145){
return (function (seq49108){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49108));
});})(g__43447__auto___49145))
;


var g__43447__auto___49149 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__43447__auto___49149){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49150 = arguments.length;
var i__43355__auto___49151 = (0);
while(true){
if((i__43355__auto___49151 < len__43354__auto___49150)){
args__43361__auto__.push((arguments[i__43355__auto___49151]));

var G__49152 = (i__43355__auto___49151 + (1));
i__43355__auto___49151 = G__49152;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49149))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49149),args);
});})(g__43447__auto___49149))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__43447__auto___49149){
return (function (seq49109){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49109));
});})(g__43447__auto___49149))
;


var g__43447__auto___49153 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__43447__auto___49153){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49154 = arguments.length;
var i__43355__auto___49155 = (0);
while(true){
if((i__43355__auto___49155 < len__43354__auto___49154)){
args__43361__auto__.push((arguments[i__43355__auto___49155]));

var G__49156 = (i__43355__auto___49155 + (1));
i__43355__auto___49155 = G__49156;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49153))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49153),args);
});})(g__43447__auto___49153))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__43447__auto___49153){
return (function (seq49110){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49110));
});})(g__43447__auto___49153))
;


var g__43447__auto___49157 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__43447__auto___49157){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49158 = arguments.length;
var i__43355__auto___49159 = (0);
while(true){
if((i__43355__auto___49159 < len__43354__auto___49158)){
args__43361__auto__.push((arguments[i__43355__auto___49159]));

var G__49160 = (i__43355__auto___49159 + (1));
i__43355__auto___49159 = G__49160;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49157))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49157),args);
});})(g__43447__auto___49157))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__43447__auto___49157){
return (function (seq49111){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49111));
});})(g__43447__auto___49157))
;


var g__43447__auto___49161 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__43447__auto___49161){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49162 = arguments.length;
var i__43355__auto___49163 = (0);
while(true){
if((i__43355__auto___49163 < len__43354__auto___49162)){
args__43361__auto__.push((arguments[i__43355__auto___49163]));

var G__49164 = (i__43355__auto___49163 + (1));
i__43355__auto___49163 = G__49164;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49161))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49161),args);
});})(g__43447__auto___49161))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__43447__auto___49161){
return (function (seq49112){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49112));
});})(g__43447__auto___49161))
;


var g__43447__auto___49165 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__43447__auto___49165){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49166 = arguments.length;
var i__43355__auto___49167 = (0);
while(true){
if((i__43355__auto___49167 < len__43354__auto___49166)){
args__43361__auto__.push((arguments[i__43355__auto___49167]));

var G__49168 = (i__43355__auto___49167 + (1));
i__43355__auto___49167 = G__49168;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49165))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49165),args);
});})(g__43447__auto___49165))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__43447__auto___49165){
return (function (seq49113){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49113));
});})(g__43447__auto___49165))
;


var g__43447__auto___49169 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__43447__auto___49169){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49170 = arguments.length;
var i__43355__auto___49171 = (0);
while(true){
if((i__43355__auto___49171 < len__43354__auto___49170)){
args__43361__auto__.push((arguments[i__43355__auto___49171]));

var G__49172 = (i__43355__auto___49171 + (1));
i__43355__auto___49171 = G__49172;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49169))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49169),args);
});})(g__43447__auto___49169))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__43447__auto___49169){
return (function (seq49114){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49114));
});})(g__43447__auto___49169))
;


var g__43447__auto___49173 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__43447__auto___49173){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49174 = arguments.length;
var i__43355__auto___49175 = (0);
while(true){
if((i__43355__auto___49175 < len__43354__auto___49174)){
args__43361__auto__.push((arguments[i__43355__auto___49175]));

var G__49176 = (i__43355__auto___49175 + (1));
i__43355__auto___49175 = G__49176;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49173))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49173),args);
});})(g__43447__auto___49173))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__43447__auto___49173){
return (function (seq49115){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49115));
});})(g__43447__auto___49173))
;


var g__43447__auto___49177 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__43447__auto___49177){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49178 = arguments.length;
var i__43355__auto___49179 = (0);
while(true){
if((i__43355__auto___49179 < len__43354__auto___49178)){
args__43361__auto__.push((arguments[i__43355__auto___49179]));

var G__49180 = (i__43355__auto___49179 + (1));
i__43355__auto___49179 = G__49180;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49177))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49177),args);
});})(g__43447__auto___49177))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__43447__auto___49177){
return (function (seq49116){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49116));
});})(g__43447__auto___49177))
;


var g__43447__auto___49181 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__43447__auto___49181){
return (function cljs$spec$gen$alpha$return(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49182 = arguments.length;
var i__43355__auto___49183 = (0);
while(true){
if((i__43355__auto___49183 < len__43354__auto___49182)){
args__43361__auto__.push((arguments[i__43355__auto___49183]));

var G__49184 = (i__43355__auto___49183 + (1));
i__43355__auto___49183 = G__49184;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49181))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49181){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49181),args);
});})(g__43447__auto___49181))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__43447__auto___49181){
return (function (seq49117){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49117));
});})(g__43447__auto___49181))
;


var g__43447__auto___49185 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__43447__auto___49185){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49186 = arguments.length;
var i__43355__auto___49187 = (0);
while(true){
if((i__43355__auto___49187 < len__43354__auto___49186)){
args__43361__auto__.push((arguments[i__43355__auto___49187]));

var G__49188 = (i__43355__auto___49187 + (1));
i__43355__auto___49187 = G__49188;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49185))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49185),args);
});})(g__43447__auto___49185))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__43447__auto___49185){
return (function (seq49118){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49118));
});})(g__43447__auto___49185))
;


var g__43447__auto___49189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__43447__auto___49189){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49190 = arguments.length;
var i__43355__auto___49191 = (0);
while(true){
if((i__43355__auto___49191 < len__43354__auto___49190)){
args__43361__auto__.push((arguments[i__43355__auto___49191]));

var G__49192 = (i__43355__auto___49191 + (1));
i__43355__auto___49191 = G__49192;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49189))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49189),args);
});})(g__43447__auto___49189))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__43447__auto___49189){
return (function (seq49119){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49119));
});})(g__43447__auto___49189))
;


var g__43447__auto___49193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__43447__auto___49193){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49194 = arguments.length;
var i__43355__auto___49195 = (0);
while(true){
if((i__43355__auto___49195 < len__43354__auto___49194)){
args__43361__auto__.push((arguments[i__43355__auto___49195]));

var G__49196 = (i__43355__auto___49195 + (1));
i__43355__auto___49195 = G__49196;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43447__auto___49193))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43447__auto___49193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43447__auto___49193),args);
});})(g__43447__auto___49193))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__43447__auto___49193){
return (function (seq49120){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49120));
});})(g__43447__auto___49193))
;

var g__43460__auto___49218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__43460__auto___49218){
return (function cljs$spec$gen$alpha$any(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49219 = arguments.length;
var i__43355__auto___49220 = (0);
while(true){
if((i__43355__auto___49220 < len__43354__auto___49219)){
args__43361__auto__.push((arguments[i__43355__auto___49220]));

var G__49221 = (i__43355__auto___49220 + (1));
i__43355__auto___49220 = G__49221;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49218))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49218){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49218);
});})(g__43460__auto___49218))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__43460__auto___49218){
return (function (seq49197){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49197));
});})(g__43460__auto___49218))
;


var g__43460__auto___49222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__43460__auto___49222){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49223 = arguments.length;
var i__43355__auto___49224 = (0);
while(true){
if((i__43355__auto___49224 < len__43354__auto___49223)){
args__43361__auto__.push((arguments[i__43355__auto___49224]));

var G__49225 = (i__43355__auto___49224 + (1));
i__43355__auto___49224 = G__49225;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49222))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49222){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49222);
});})(g__43460__auto___49222))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__43460__auto___49222){
return (function (seq49198){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49198));
});})(g__43460__auto___49222))
;


var g__43460__auto___49226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__43460__auto___49226){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49227 = arguments.length;
var i__43355__auto___49228 = (0);
while(true){
if((i__43355__auto___49228 < len__43354__auto___49227)){
args__43361__auto__.push((arguments[i__43355__auto___49228]));

var G__49229 = (i__43355__auto___49228 + (1));
i__43355__auto___49228 = G__49229;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49226))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49226){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49226);
});})(g__43460__auto___49226))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__43460__auto___49226){
return (function (seq49199){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49199));
});})(g__43460__auto___49226))
;


var g__43460__auto___49230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__43460__auto___49230){
return (function cljs$spec$gen$alpha$char(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49231 = arguments.length;
var i__43355__auto___49232 = (0);
while(true){
if((i__43355__auto___49232 < len__43354__auto___49231)){
args__43361__auto__.push((arguments[i__43355__auto___49232]));

var G__49233 = (i__43355__auto___49232 + (1));
i__43355__auto___49232 = G__49233;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49230))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49230){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49230);
});})(g__43460__auto___49230))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__43460__auto___49230){
return (function (seq49200){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49200));
});})(g__43460__auto___49230))
;


var g__43460__auto___49234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__43460__auto___49234){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49235 = arguments.length;
var i__43355__auto___49236 = (0);
while(true){
if((i__43355__auto___49236 < len__43354__auto___49235)){
args__43361__auto__.push((arguments[i__43355__auto___49236]));

var G__49237 = (i__43355__auto___49236 + (1));
i__43355__auto___49236 = G__49237;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49234))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49234){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49234);
});})(g__43460__auto___49234))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__43460__auto___49234){
return (function (seq49201){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49201));
});})(g__43460__auto___49234))
;


var g__43460__auto___49238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__43460__auto___49238){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49239 = arguments.length;
var i__43355__auto___49240 = (0);
while(true){
if((i__43355__auto___49240 < len__43354__auto___49239)){
args__43361__auto__.push((arguments[i__43355__auto___49240]));

var G__49241 = (i__43355__auto___49240 + (1));
i__43355__auto___49240 = G__49241;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49238))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49238){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49238);
});})(g__43460__auto___49238))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__43460__auto___49238){
return (function (seq49202){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49202));
});})(g__43460__auto___49238))
;


var g__43460__auto___49242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__43460__auto___49242){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49243 = arguments.length;
var i__43355__auto___49244 = (0);
while(true){
if((i__43355__auto___49244 < len__43354__auto___49243)){
args__43361__auto__.push((arguments[i__43355__auto___49244]));

var G__49245 = (i__43355__auto___49244 + (1));
i__43355__auto___49244 = G__49245;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49242))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49242){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49242);
});})(g__43460__auto___49242))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__43460__auto___49242){
return (function (seq49203){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49203));
});})(g__43460__auto___49242))
;


var g__43460__auto___49246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__43460__auto___49246){
return (function cljs$spec$gen$alpha$double(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49247 = arguments.length;
var i__43355__auto___49248 = (0);
while(true){
if((i__43355__auto___49248 < len__43354__auto___49247)){
args__43361__auto__.push((arguments[i__43355__auto___49248]));

var G__49249 = (i__43355__auto___49248 + (1));
i__43355__auto___49248 = G__49249;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49246))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49246){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49246);
});})(g__43460__auto___49246))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__43460__auto___49246){
return (function (seq49204){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49204));
});})(g__43460__auto___49246))
;


var g__43460__auto___49250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__43460__auto___49250){
return (function cljs$spec$gen$alpha$int(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49251 = arguments.length;
var i__43355__auto___49252 = (0);
while(true){
if((i__43355__auto___49252 < len__43354__auto___49251)){
args__43361__auto__.push((arguments[i__43355__auto___49252]));

var G__49253 = (i__43355__auto___49252 + (1));
i__43355__auto___49252 = G__49253;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49250))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49250){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49250);
});})(g__43460__auto___49250))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__43460__auto___49250){
return (function (seq49205){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49205));
});})(g__43460__auto___49250))
;


var g__43460__auto___49254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__43460__auto___49254){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49255 = arguments.length;
var i__43355__auto___49256 = (0);
while(true){
if((i__43355__auto___49256 < len__43354__auto___49255)){
args__43361__auto__.push((arguments[i__43355__auto___49256]));

var G__49257 = (i__43355__auto___49256 + (1));
i__43355__auto___49256 = G__49257;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49254))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49254){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49254);
});})(g__43460__auto___49254))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__43460__auto___49254){
return (function (seq49206){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49206));
});})(g__43460__auto___49254))
;


var g__43460__auto___49258 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__43460__auto___49258){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49259 = arguments.length;
var i__43355__auto___49260 = (0);
while(true){
if((i__43355__auto___49260 < len__43354__auto___49259)){
args__43361__auto__.push((arguments[i__43355__auto___49260]));

var G__49261 = (i__43355__auto___49260 + (1));
i__43355__auto___49260 = G__49261;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49258))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49258){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49258);
});})(g__43460__auto___49258))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__43460__auto___49258){
return (function (seq49207){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49207));
});})(g__43460__auto___49258))
;


var g__43460__auto___49262 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__43460__auto___49262){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49263 = arguments.length;
var i__43355__auto___49264 = (0);
while(true){
if((i__43355__auto___49264 < len__43354__auto___49263)){
args__43361__auto__.push((arguments[i__43355__auto___49264]));

var G__49265 = (i__43355__auto___49264 + (1));
i__43355__auto___49264 = G__49265;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49262))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49262){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49262);
});})(g__43460__auto___49262))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__43460__auto___49262){
return (function (seq49208){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49208));
});})(g__43460__auto___49262))
;


var g__43460__auto___49266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__43460__auto___49266){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49267 = arguments.length;
var i__43355__auto___49268 = (0);
while(true){
if((i__43355__auto___49268 < len__43354__auto___49267)){
args__43361__auto__.push((arguments[i__43355__auto___49268]));

var G__49269 = (i__43355__auto___49268 + (1));
i__43355__auto___49268 = G__49269;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49266))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49266){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49266);
});})(g__43460__auto___49266))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__43460__auto___49266){
return (function (seq49209){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49209));
});})(g__43460__auto___49266))
;


var g__43460__auto___49270 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__43460__auto___49270){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49271 = arguments.length;
var i__43355__auto___49272 = (0);
while(true){
if((i__43355__auto___49272 < len__43354__auto___49271)){
args__43361__auto__.push((arguments[i__43355__auto___49272]));

var G__49273 = (i__43355__auto___49272 + (1));
i__43355__auto___49272 = G__49273;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49270))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49270){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49270);
});})(g__43460__auto___49270))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__43460__auto___49270){
return (function (seq49210){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49210));
});})(g__43460__auto___49270))
;


var g__43460__auto___49274 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__43460__auto___49274){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49275 = arguments.length;
var i__43355__auto___49276 = (0);
while(true){
if((i__43355__auto___49276 < len__43354__auto___49275)){
args__43361__auto__.push((arguments[i__43355__auto___49276]));

var G__49277 = (i__43355__auto___49276 + (1));
i__43355__auto___49276 = G__49277;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49274))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49274){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49274);
});})(g__43460__auto___49274))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__43460__auto___49274){
return (function (seq49211){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49211));
});})(g__43460__auto___49274))
;


var g__43460__auto___49278 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__43460__auto___49278){
return (function cljs$spec$gen$alpha$string(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49279 = arguments.length;
var i__43355__auto___49280 = (0);
while(true){
if((i__43355__auto___49280 < len__43354__auto___49279)){
args__43361__auto__.push((arguments[i__43355__auto___49280]));

var G__49281 = (i__43355__auto___49280 + (1));
i__43355__auto___49280 = G__49281;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49278))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49278){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49278);
});})(g__43460__auto___49278))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__43460__auto___49278){
return (function (seq49212){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49212));
});})(g__43460__auto___49278))
;


var g__43460__auto___49282 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__43460__auto___49282){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49283 = arguments.length;
var i__43355__auto___49284 = (0);
while(true){
if((i__43355__auto___49284 < len__43354__auto___49283)){
args__43361__auto__.push((arguments[i__43355__auto___49284]));

var G__49285 = (i__43355__auto___49284 + (1));
i__43355__auto___49284 = G__49285;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49282))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49282){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49282);
});})(g__43460__auto___49282))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__43460__auto___49282){
return (function (seq49213){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49213));
});})(g__43460__auto___49282))
;


var g__43460__auto___49286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__43460__auto___49286){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49287 = arguments.length;
var i__43355__auto___49288 = (0);
while(true){
if((i__43355__auto___49288 < len__43354__auto___49287)){
args__43361__auto__.push((arguments[i__43355__auto___49288]));

var G__49289 = (i__43355__auto___49288 + (1));
i__43355__auto___49288 = G__49289;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49286))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49286){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49286);
});})(g__43460__auto___49286))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__43460__auto___49286){
return (function (seq49214){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49214));
});})(g__43460__auto___49286))
;


var g__43460__auto___49290 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__43460__auto___49290){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49291 = arguments.length;
var i__43355__auto___49292 = (0);
while(true){
if((i__43355__auto___49292 < len__43354__auto___49291)){
args__43361__auto__.push((arguments[i__43355__auto___49292]));

var G__49293 = (i__43355__auto___49292 + (1));
i__43355__auto___49292 = G__49293;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49290))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49290){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49290);
});})(g__43460__auto___49290))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__43460__auto___49290){
return (function (seq49215){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49215));
});})(g__43460__auto___49290))
;


var g__43460__auto___49294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__43460__auto___49294){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49295 = arguments.length;
var i__43355__auto___49296 = (0);
while(true){
if((i__43355__auto___49296 < len__43354__auto___49295)){
args__43361__auto__.push((arguments[i__43355__auto___49296]));

var G__49297 = (i__43355__auto___49296 + (1));
i__43355__auto___49296 = G__49297;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49294))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49294){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49294);
});})(g__43460__auto___49294))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__43460__auto___49294){
return (function (seq49216){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49216));
});})(g__43460__auto___49294))
;


var g__43460__auto___49298 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__43460__auto___49298){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49299 = arguments.length;
var i__43355__auto___49300 = (0);
while(true){
if((i__43355__auto___49300 < len__43354__auto___49299)){
args__43361__auto__.push((arguments[i__43355__auto___49300]));

var G__49301 = (i__43355__auto___49300 + (1));
i__43355__auto___49300 = G__49301;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});})(g__43460__auto___49298))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43460__auto___49298){
return (function (args){
return cljs.core.deref.call(null,g__43460__auto___49298);
});})(g__43460__auto___49298))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__43460__auto___49298){
return (function (seq49217){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49217));
});})(g__43460__auto___49298))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__43361__auto__ = [];
var len__43354__auto___49304 = arguments.length;
var i__43355__auto___49305 = (0);
while(true){
if((i__43355__auto___49305 < len__43354__auto___49304)){
args__43361__auto__.push((arguments[i__43355__auto___49305]));

var G__49306 = (i__43355__auto___49305 + (1));
i__43355__auto___49305 = G__49306;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__49302_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__49302_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq49303){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49303));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__49307_SHARP_){
return (new Date(p1__49307_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1510612165413
