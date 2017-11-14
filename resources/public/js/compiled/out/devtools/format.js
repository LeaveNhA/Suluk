// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__42866__auto__ = (((value == null))?null:value);
var m__42867__auto__ = (devtools.format._header[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,value);
} else {
var m__42867__auto____$1 = (devtools.format._header["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__42866__auto__ = (((value == null))?null:value);
var m__42867__auto__ = (devtools.format._has_body[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,value);
} else {
var m__42867__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__42866__auto__ = (((value == null))?null:value);
var m__42867__auto__ = (devtools.format._body[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,value);
} else {
var m__42867__auto____$1 = (devtools.format._body["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o50720 = temp__4655__auto__;
var temp__4655__auto____$1 = (o50720["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o50721 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o50721["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o50722 = temp__4655__auto____$2;
return (o50722["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o50723 = temp__4655__auto__;
var temp__4655__auto____$1 = (o50723["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o50724 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o50724["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o50725 = temp__4655__auto____$2;
return (o50725["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o50726 = temp__4655__auto__;
var temp__4655__auto____$1 = (o50726["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o50727 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o50727["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o50728 = temp__4655__auto____$2;
return (o50728["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o50729 = temp__4655__auto__;
var temp__4655__auto____$1 = (o50729["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o50730 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o50730["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o50731 = temp__4655__auto____$2;
return (o50731["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o50732 = temp__4655__auto__;
var temp__4655__auto____$1 = (o50732["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o50733 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o50733["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o50734 = temp__4655__auto____$2;
return (o50734["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o50735 = temp__4655__auto__;
var temp__4655__auto____$1 = (o50735["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o50736 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o50736["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o50737 = temp__4655__auto____$2;
return (o50737["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o50738 = temp__4655__auto__;
var temp__4655__auto____$1 = (o50738["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o50739 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o50739["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o50740 = temp__4655__auto____$2;
return (o50740["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50742 = arguments.length;
var i__43355__auto___50743 = (0);
while(true){
if((i__43355__auto___50743 < len__43354__auto___50742)){
args__43361__auto__.push((arguments[i__43355__auto___50743]));

var G__50744 = (i__43355__auto___50743 + (1));
i__43355__auto___50743 = G__50744;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50741){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50741));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50746 = arguments.length;
var i__43355__auto___50747 = (0);
while(true){
if((i__43355__auto___50747 < len__43354__auto___50746)){
args__43361__auto__.push((arguments[i__43355__auto___50747]));

var G__50748 = (i__43355__auto___50747 + (1));
i__43355__auto___50747 = G__50748;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq50745){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50745));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50750 = arguments.length;
var i__43355__auto___50751 = (0);
while(true){
if((i__43355__auto___50751 < len__43354__auto___50750)){
args__43361__auto__.push((arguments[i__43355__auto___50751]));

var G__50752 = (i__43355__auto___50751 + (1));
i__43355__auto___50751 = G__50752;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq50749){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50749));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50754 = arguments.length;
var i__43355__auto___50755 = (0);
while(true){
if((i__43355__auto___50755 < len__43354__auto___50754)){
args__43361__auto__.push((arguments[i__43355__auto___50755]));

var G__50756 = (i__43355__auto___50755 + (1));
i__43355__auto___50755 = G__50756;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50753){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50753));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50758 = arguments.length;
var i__43355__auto___50759 = (0);
while(true){
if((i__43355__auto___50759 < len__43354__auto___50758)){
args__43361__auto__.push((arguments[i__43355__auto___50759]));

var G__50760 = (i__43355__auto___50759 + (1));
i__43355__auto___50759 = G__50760;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq50757){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50757));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50762 = arguments.length;
var i__43355__auto___50763 = (0);
while(true){
if((i__43355__auto___50763 < len__43354__auto___50762)){
args__43361__auto__.push((arguments[i__43355__auto___50763]));

var G__50764 = (i__43355__auto___50763 + (1));
i__43355__auto___50763 = G__50764;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq50761){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50761));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50766 = arguments.length;
var i__43355__auto___50767 = (0);
while(true){
if((i__43355__auto___50767 < len__43354__auto___50766)){
args__43361__auto__.push((arguments[i__43355__auto___50767]));

var G__50768 = (i__43355__auto___50767 + (1));
i__43355__auto___50767 = G__50768;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50765){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50765));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50776 = arguments.length;
var i__43355__auto___50777 = (0);
while(true){
if((i__43355__auto___50777 < len__43354__auto___50776)){
args__43361__auto__.push((arguments[i__43355__auto___50777]));

var G__50778 = (i__43355__auto___50777 + (1));
i__43355__auto___50777 = G__50778;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50772){
var vec__50773 = p__50772;
var state_override = cljs.core.nth.call(null,vec__50773,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50773,state_override){
return (function (p1__50769_SHARP_){
return cljs.core.merge.call(null,p1__50769_SHARP_,state_override);
});})(vec__50773,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50770){
var G__50771 = cljs.core.first.call(null,seq50770);
var seq50770__$1 = cljs.core.next.call(null,seq50770);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50771,seq50770__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50780 = arguments.length;
var i__43355__auto___50781 = (0);
while(true){
if((i__43355__auto___50781 < len__43354__auto___50780)){
args__43361__auto__.push((arguments[i__43355__auto___50781]));

var G__50782 = (i__43355__auto___50781 + (1));
i__43355__auto___50781 = G__50782;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq50779){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50779));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50785 = arguments.length;
var i__43355__auto___50786 = (0);
while(true){
if((i__43355__auto___50786 < len__43354__auto___50785)){
args__43361__auto__.push((arguments[i__43355__auto___50786]));

var G__50787 = (i__43355__auto___50786 + (1));
i__43355__auto___50786 = G__50787;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50783){
var G__50784 = cljs.core.first.call(null,seq50783);
var seq50783__$1 = cljs.core.next.call(null,seq50783);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50784,seq50783__$1);
});


//# sourceMappingURL=format.js.map?rel=1510612166764
