// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49887){
var map__49888 = p__49887;
var map__49888__$1 = ((((!((map__49888 == null)))?((((map__49888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49888):map__49888);
var m = map__49888__$1;
var n = cljs.core.get.call(null,map__49888__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49890_49912 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49891_49913 = null;
var count__49892_49914 = (0);
var i__49893_49915 = (0);
while(true){
if((i__49893_49915 < count__49892_49914)){
var f_49916 = cljs.core._nth.call(null,chunk__49891_49913,i__49893_49915);
cljs.core.println.call(null,"  ",f_49916);

var G__49917 = seq__49890_49912;
var G__49918 = chunk__49891_49913;
var G__49919 = count__49892_49914;
var G__49920 = (i__49893_49915 + (1));
seq__49890_49912 = G__49917;
chunk__49891_49913 = G__49918;
count__49892_49914 = G__49919;
i__49893_49915 = G__49920;
continue;
} else {
var temp__4657__auto___49921 = cljs.core.seq.call(null,seq__49890_49912);
if(temp__4657__auto___49921){
var seq__49890_49922__$1 = temp__4657__auto___49921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49890_49922__$1)){
var c__43022__auto___49923 = cljs.core.chunk_first.call(null,seq__49890_49922__$1);
var G__49924 = cljs.core.chunk_rest.call(null,seq__49890_49922__$1);
var G__49925 = c__43022__auto___49923;
var G__49926 = cljs.core.count.call(null,c__43022__auto___49923);
var G__49927 = (0);
seq__49890_49912 = G__49924;
chunk__49891_49913 = G__49925;
count__49892_49914 = G__49926;
i__49893_49915 = G__49927;
continue;
} else {
var f_49928 = cljs.core.first.call(null,seq__49890_49922__$1);
cljs.core.println.call(null,"  ",f_49928);

var G__49929 = cljs.core.next.call(null,seq__49890_49922__$1);
var G__49930 = null;
var G__49931 = (0);
var G__49932 = (0);
seq__49890_49912 = G__49929;
chunk__49891_49913 = G__49930;
count__49892_49914 = G__49931;
i__49893_49915 = G__49932;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49933 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__42183__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49933);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49933)))?cljs.core.second.call(null,arglists_49933):arglists_49933));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49894_49934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49895_49935 = null;
var count__49896_49936 = (0);
var i__49897_49937 = (0);
while(true){
if((i__49897_49937 < count__49896_49936)){
var vec__49898_49938 = cljs.core._nth.call(null,chunk__49895_49935,i__49897_49937);
var name_49939 = cljs.core.nth.call(null,vec__49898_49938,(0),null);
var map__49901_49940 = cljs.core.nth.call(null,vec__49898_49938,(1),null);
var map__49901_49941__$1 = ((((!((map__49901_49940 == null)))?((((map__49901_49940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49901_49940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49901_49940):map__49901_49940);
var doc_49942 = cljs.core.get.call(null,map__49901_49941__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49943 = cljs.core.get.call(null,map__49901_49941__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49939);

cljs.core.println.call(null," ",arglists_49943);

if(cljs.core.truth_(doc_49942)){
cljs.core.println.call(null," ",doc_49942);
} else {
}

var G__49944 = seq__49894_49934;
var G__49945 = chunk__49895_49935;
var G__49946 = count__49896_49936;
var G__49947 = (i__49897_49937 + (1));
seq__49894_49934 = G__49944;
chunk__49895_49935 = G__49945;
count__49896_49936 = G__49946;
i__49897_49937 = G__49947;
continue;
} else {
var temp__4657__auto___49948 = cljs.core.seq.call(null,seq__49894_49934);
if(temp__4657__auto___49948){
var seq__49894_49949__$1 = temp__4657__auto___49948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49894_49949__$1)){
var c__43022__auto___49950 = cljs.core.chunk_first.call(null,seq__49894_49949__$1);
var G__49951 = cljs.core.chunk_rest.call(null,seq__49894_49949__$1);
var G__49952 = c__43022__auto___49950;
var G__49953 = cljs.core.count.call(null,c__43022__auto___49950);
var G__49954 = (0);
seq__49894_49934 = G__49951;
chunk__49895_49935 = G__49952;
count__49896_49936 = G__49953;
i__49897_49937 = G__49954;
continue;
} else {
var vec__49903_49955 = cljs.core.first.call(null,seq__49894_49949__$1);
var name_49956 = cljs.core.nth.call(null,vec__49903_49955,(0),null);
var map__49906_49957 = cljs.core.nth.call(null,vec__49903_49955,(1),null);
var map__49906_49958__$1 = ((((!((map__49906_49957 == null)))?((((map__49906_49957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49906_49957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49906_49957):map__49906_49957);
var doc_49959 = cljs.core.get.call(null,map__49906_49958__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49960 = cljs.core.get.call(null,map__49906_49958__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49956);

cljs.core.println.call(null," ",arglists_49960);

if(cljs.core.truth_(doc_49959)){
cljs.core.println.call(null," ",doc_49959);
} else {
}

var G__49961 = cljs.core.next.call(null,seq__49894_49949__$1);
var G__49962 = null;
var G__49963 = (0);
var G__49964 = (0);
seq__49894_49934 = G__49961;
chunk__49895_49935 = G__49962;
count__49896_49936 = G__49963;
i__49897_49937 = G__49964;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__49908 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49909 = null;
var count__49910 = (0);
var i__49911 = (0);
while(true){
if((i__49911 < count__49910)){
var role = cljs.core._nth.call(null,chunk__49909,i__49911);
var temp__4657__auto___49965__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49965__$1)){
var spec_49966 = temp__4657__auto___49965__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49966));
} else {
}

var G__49967 = seq__49908;
var G__49968 = chunk__49909;
var G__49969 = count__49910;
var G__49970 = (i__49911 + (1));
seq__49908 = G__49967;
chunk__49909 = G__49968;
count__49910 = G__49969;
i__49911 = G__49970;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__49908);
if(temp__4657__auto____$1){
var seq__49908__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49908__$1)){
var c__43022__auto__ = cljs.core.chunk_first.call(null,seq__49908__$1);
var G__49971 = cljs.core.chunk_rest.call(null,seq__49908__$1);
var G__49972 = c__43022__auto__;
var G__49973 = cljs.core.count.call(null,c__43022__auto__);
var G__49974 = (0);
seq__49908 = G__49971;
chunk__49909 = G__49972;
count__49910 = G__49973;
i__49911 = G__49974;
continue;
} else {
var role = cljs.core.first.call(null,seq__49908__$1);
var temp__4657__auto___49975__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49975__$2)){
var spec_49976 = temp__4657__auto___49975__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49976));
} else {
}

var G__49977 = cljs.core.next.call(null,seq__49908__$1);
var G__49978 = null;
var G__49979 = (0);
var G__49980 = (0);
seq__49908 = G__49977;
chunk__49909 = G__49978;
count__49910 = G__49979;
i__49911 = G__49980;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1510612166211
