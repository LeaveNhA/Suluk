// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e50175){if((e50175 instanceof Error)){
var e = e50175;
return "Error: Unable to stringify";
} else {
throw e50175;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50178 = arguments.length;
switch (G__50178) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50176_SHARP_){
if(typeof p1__50176_SHARP_ === 'string'){
return p1__50176_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50176_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50181 = arguments.length;
var i__43355__auto___50182 = (0);
while(true){
if((i__43355__auto___50182 < len__43354__auto___50181)){
args__43361__auto__.push((arguments[i__43355__auto___50182]));

var G__50183 = (i__43355__auto___50182 + (1));
i__43355__auto___50182 = G__50183;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50180){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50180));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50185 = arguments.length;
var i__43355__auto___50186 = (0);
while(true){
if((i__43355__auto___50186 < len__43354__auto___50185)){
args__43361__auto__.push((arguments[i__43355__auto___50186]));

var G__50187 = (i__43355__auto___50186 + (1));
i__43355__auto___50186 = G__50187;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50184){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50184));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50188){
var map__50189 = p__50188;
var map__50189__$1 = ((((!((map__50189 == null)))?((((map__50189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50189):map__50189);
var message = cljs.core.get.call(null,map__50189__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50189__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__42183__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__42171__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__42171__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__42171__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__45169__auto___50268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___50268,ch){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___50268,ch){
return (function (state_50240){
var state_val_50241 = (state_50240[(1)]);
if((state_val_50241 === (7))){
var inst_50236 = (state_50240[(2)]);
var state_50240__$1 = state_50240;
var statearr_50242_50269 = state_50240__$1;
(statearr_50242_50269[(2)] = inst_50236);

(statearr_50242_50269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (1))){
var state_50240__$1 = state_50240;
var statearr_50243_50270 = state_50240__$1;
(statearr_50243_50270[(2)] = null);

(statearr_50243_50270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (4))){
var inst_50193 = (state_50240[(7)]);
var inst_50193__$1 = (state_50240[(2)]);
var state_50240__$1 = (function (){var statearr_50244 = state_50240;
(statearr_50244[(7)] = inst_50193__$1);

return statearr_50244;
})();
if(cljs.core.truth_(inst_50193__$1)){
var statearr_50245_50271 = state_50240__$1;
(statearr_50245_50271[(1)] = (5));

} else {
var statearr_50246_50272 = state_50240__$1;
(statearr_50246_50272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (15))){
var inst_50200 = (state_50240[(8)]);
var inst_50215 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50200);
var inst_50216 = cljs.core.first.call(null,inst_50215);
var inst_50217 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50216);
var inst_50218 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50217)].join('');
var inst_50219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50218);
var state_50240__$1 = state_50240;
var statearr_50247_50273 = state_50240__$1;
(statearr_50247_50273[(2)] = inst_50219);

(statearr_50247_50273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (13))){
var inst_50224 = (state_50240[(2)]);
var state_50240__$1 = state_50240;
var statearr_50248_50274 = state_50240__$1;
(statearr_50248_50274[(2)] = inst_50224);

(statearr_50248_50274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (6))){
var state_50240__$1 = state_50240;
var statearr_50249_50275 = state_50240__$1;
(statearr_50249_50275[(2)] = null);

(statearr_50249_50275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (17))){
var inst_50222 = (state_50240[(2)]);
var state_50240__$1 = state_50240;
var statearr_50250_50276 = state_50240__$1;
(statearr_50250_50276[(2)] = inst_50222);

(statearr_50250_50276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (3))){
var inst_50238 = (state_50240[(2)]);
var state_50240__$1 = state_50240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50240__$1,inst_50238);
} else {
if((state_val_50241 === (12))){
var inst_50199 = (state_50240[(9)]);
var inst_50213 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50199,opts);
var state_50240__$1 = state_50240;
if(cljs.core.truth_(inst_50213)){
var statearr_50251_50277 = state_50240__$1;
(statearr_50251_50277[(1)] = (15));

} else {
var statearr_50252_50278 = state_50240__$1;
(statearr_50252_50278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (2))){
var state_50240__$1 = state_50240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50240__$1,(4),ch);
} else {
if((state_val_50241 === (11))){
var inst_50200 = (state_50240[(8)]);
var inst_50205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50206 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50200);
var inst_50207 = cljs.core.async.timeout.call(null,(1000));
var inst_50208 = [inst_50206,inst_50207];
var inst_50209 = (new cljs.core.PersistentVector(null,2,(5),inst_50205,inst_50208,null));
var state_50240__$1 = state_50240;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50240__$1,(14),inst_50209);
} else {
if((state_val_50241 === (9))){
var inst_50200 = (state_50240[(8)]);
var inst_50226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50227 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50200);
var inst_50228 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50227);
var inst_50229 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50228)].join('');
var inst_50230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50229);
var state_50240__$1 = (function (){var statearr_50253 = state_50240;
(statearr_50253[(10)] = inst_50226);

return statearr_50253;
})();
var statearr_50254_50279 = state_50240__$1;
(statearr_50254_50279[(2)] = inst_50230);

(statearr_50254_50279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (5))){
var inst_50193 = (state_50240[(7)]);
var inst_50195 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50196 = (new cljs.core.PersistentArrayMap(null,2,inst_50195,null));
var inst_50197 = (new cljs.core.PersistentHashSet(null,inst_50196,null));
var inst_50198 = figwheel.client.focus_msgs.call(null,inst_50197,inst_50193);
var inst_50199 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50198);
var inst_50200 = cljs.core.first.call(null,inst_50198);
var inst_50201 = figwheel.client.autoload_QMARK_.call(null);
var state_50240__$1 = (function (){var statearr_50255 = state_50240;
(statearr_50255[(9)] = inst_50199);

(statearr_50255[(8)] = inst_50200);

return statearr_50255;
})();
if(cljs.core.truth_(inst_50201)){
var statearr_50256_50280 = state_50240__$1;
(statearr_50256_50280[(1)] = (8));

} else {
var statearr_50257_50281 = state_50240__$1;
(statearr_50257_50281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (14))){
var inst_50211 = (state_50240[(2)]);
var state_50240__$1 = state_50240;
var statearr_50258_50282 = state_50240__$1;
(statearr_50258_50282[(2)] = inst_50211);

(statearr_50258_50282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (16))){
var state_50240__$1 = state_50240;
var statearr_50259_50283 = state_50240__$1;
(statearr_50259_50283[(2)] = null);

(statearr_50259_50283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (10))){
var inst_50232 = (state_50240[(2)]);
var state_50240__$1 = (function (){var statearr_50260 = state_50240;
(statearr_50260[(11)] = inst_50232);

return statearr_50260;
})();
var statearr_50261_50284 = state_50240__$1;
(statearr_50261_50284[(2)] = null);

(statearr_50261_50284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50241 === (8))){
var inst_50199 = (state_50240[(9)]);
var inst_50203 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50199,opts);
var state_50240__$1 = state_50240;
if(cljs.core.truth_(inst_50203)){
var statearr_50262_50285 = state_50240__$1;
(statearr_50262_50285[(1)] = (11));

} else {
var statearr_50263_50286 = state_50240__$1;
(statearr_50263_50286[(1)] = (12));

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
});})(c__45169__auto___50268,ch))
;
return ((function (switch__45081__auto__,c__45169__auto___50268,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45082__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45082__auto____0 = (function (){
var statearr_50264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50264[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45082__auto__);

(statearr_50264[(1)] = (1));

return statearr_50264;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45082__auto____1 = (function (state_50240){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_50240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e50265){if((e50265 instanceof Object)){
var ex__45085__auto__ = e50265;
var statearr_50266_50287 = state_50240;
(statearr_50266_50287[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50288 = state_50240;
state_50240 = G__50288;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45082__auto__ = function(state_50240){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45082__auto____1.call(this,state_50240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45082__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45082__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___50268,ch))
})();
var state__45171__auto__ = (function (){var statearr_50267 = f__45170__auto__.call(null);
(statearr_50267[(6)] = c__45169__auto___50268);

return statearr_50267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___50268,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50289_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50289_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_50291 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50291){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50290){if((e50290 instanceof Error)){
var e = e50290;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50291], null));
} else {
var e = e50290;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50291))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50292){
var map__50293 = p__50292;
var map__50293__$1 = ((((!((map__50293 == null)))?((((map__50293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50293):map__50293);
var opts = map__50293__$1;
var build_id = cljs.core.get.call(null,map__50293__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50293,map__50293__$1,opts,build_id){
return (function (p__50295){
var vec__50296 = p__50295;
var seq__50297 = cljs.core.seq.call(null,vec__50296);
var first__50298 = cljs.core.first.call(null,seq__50297);
var seq__50297__$1 = cljs.core.next.call(null,seq__50297);
var map__50299 = first__50298;
var map__50299__$1 = ((((!((map__50299 == null)))?((((map__50299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50299):map__50299);
var msg = map__50299__$1;
var msg_name = cljs.core.get.call(null,map__50299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50297__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50296,seq__50297,first__50298,seq__50297__$1,map__50299,map__50299__$1,msg,msg_name,_,map__50293,map__50293__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50296,seq__50297,first__50298,seq__50297__$1,map__50299,map__50299__$1,msg,msg_name,_,map__50293,map__50293__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50293,map__50293__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50301){
var vec__50302 = p__50301;
var seq__50303 = cljs.core.seq.call(null,vec__50302);
var first__50304 = cljs.core.first.call(null,seq__50303);
var seq__50303__$1 = cljs.core.next.call(null,seq__50303);
var map__50305 = first__50304;
var map__50305__$1 = ((((!((map__50305 == null)))?((((map__50305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50305):map__50305);
var msg = map__50305__$1;
var msg_name = cljs.core.get.call(null,map__50305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50303__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50307){
var map__50308 = p__50307;
var map__50308__$1 = ((((!((map__50308 == null)))?((((map__50308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50308):map__50308);
var on_compile_warning = cljs.core.get.call(null,map__50308__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50308__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50308,map__50308__$1,on_compile_warning,on_compile_fail){
return (function (p__50310){
var vec__50311 = p__50310;
var seq__50312 = cljs.core.seq.call(null,vec__50311);
var first__50313 = cljs.core.first.call(null,seq__50312);
var seq__50312__$1 = cljs.core.next.call(null,seq__50312);
var map__50314 = first__50313;
var map__50314__$1 = ((((!((map__50314 == null)))?((((map__50314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50314):map__50314);
var msg = map__50314__$1;
var msg_name = cljs.core.get.call(null,map__50314__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50312__$1;
var pred__50316 = cljs.core._EQ_;
var expr__50317 = msg_name;
if(cljs.core.truth_(pred__50316.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50317))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50316.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50317))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50308,map__50308__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__,msg_hist,msg_names,msg){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__,msg_hist,msg_names,msg){
return (function (state_50406){
var state_val_50407 = (state_50406[(1)]);
if((state_val_50407 === (7))){
var inst_50326 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50326)){
var statearr_50408_50455 = state_50406__$1;
(statearr_50408_50455[(1)] = (8));

} else {
var statearr_50409_50456 = state_50406__$1;
(statearr_50409_50456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (20))){
var inst_50400 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50410_50457 = state_50406__$1;
(statearr_50410_50457[(2)] = inst_50400);

(statearr_50410_50457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (27))){
var inst_50396 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50411_50458 = state_50406__$1;
(statearr_50411_50458[(2)] = inst_50396);

(statearr_50411_50458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (1))){
var inst_50319 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50319)){
var statearr_50412_50459 = state_50406__$1;
(statearr_50412_50459[(1)] = (2));

} else {
var statearr_50413_50460 = state_50406__$1;
(statearr_50413_50460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (24))){
var inst_50398 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50414_50461 = state_50406__$1;
(statearr_50414_50461[(2)] = inst_50398);

(statearr_50414_50461[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (4))){
var inst_50404 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50406__$1,inst_50404);
} else {
if((state_val_50407 === (15))){
var inst_50402 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50415_50462 = state_50406__$1;
(statearr_50415_50462[(2)] = inst_50402);

(statearr_50415_50462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (21))){
var inst_50355 = (state_50406[(2)]);
var inst_50356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50357 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50356);
var state_50406__$1 = (function (){var statearr_50416 = state_50406;
(statearr_50416[(7)] = inst_50355);

return statearr_50416;
})();
var statearr_50417_50463 = state_50406__$1;
(statearr_50417_50463[(2)] = inst_50357);

(statearr_50417_50463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (31))){
var inst_50385 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50385)){
var statearr_50418_50464 = state_50406__$1;
(statearr_50418_50464[(1)] = (34));

} else {
var statearr_50419_50465 = state_50406__$1;
(statearr_50419_50465[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (32))){
var inst_50394 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50420_50466 = state_50406__$1;
(statearr_50420_50466[(2)] = inst_50394);

(statearr_50420_50466[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (33))){
var inst_50381 = (state_50406[(2)]);
var inst_50382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50383 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50382);
var state_50406__$1 = (function (){var statearr_50421 = state_50406;
(statearr_50421[(8)] = inst_50381);

return statearr_50421;
})();
var statearr_50422_50467 = state_50406__$1;
(statearr_50422_50467[(2)] = inst_50383);

(statearr_50422_50467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (13))){
var inst_50340 = figwheel.client.heads_up.clear.call(null);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(16),inst_50340);
} else {
if((state_val_50407 === (22))){
var inst_50361 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50362 = figwheel.client.heads_up.append_warning_message.call(null,inst_50361);
var state_50406__$1 = state_50406;
var statearr_50423_50468 = state_50406__$1;
(statearr_50423_50468[(2)] = inst_50362);

(statearr_50423_50468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (36))){
var inst_50392 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50424_50469 = state_50406__$1;
(statearr_50424_50469[(2)] = inst_50392);

(statearr_50424_50469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (29))){
var inst_50372 = (state_50406[(2)]);
var inst_50373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50374 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50373);
var state_50406__$1 = (function (){var statearr_50425 = state_50406;
(statearr_50425[(9)] = inst_50372);

return statearr_50425;
})();
var statearr_50426_50470 = state_50406__$1;
(statearr_50426_50470[(2)] = inst_50374);

(statearr_50426_50470[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (6))){
var inst_50321 = (state_50406[(10)]);
var state_50406__$1 = state_50406;
var statearr_50427_50471 = state_50406__$1;
(statearr_50427_50471[(2)] = inst_50321);

(statearr_50427_50471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (28))){
var inst_50368 = (state_50406[(2)]);
var inst_50369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50370 = figwheel.client.heads_up.display_warning.call(null,inst_50369);
var state_50406__$1 = (function (){var statearr_50428 = state_50406;
(statearr_50428[(11)] = inst_50368);

return statearr_50428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(29),inst_50370);
} else {
if((state_val_50407 === (25))){
var inst_50366 = figwheel.client.heads_up.clear.call(null);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(28),inst_50366);
} else {
if((state_val_50407 === (34))){
var inst_50387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(37),inst_50387);
} else {
if((state_val_50407 === (17))){
var inst_50346 = (state_50406[(2)]);
var inst_50347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50348 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50347);
var state_50406__$1 = (function (){var statearr_50429 = state_50406;
(statearr_50429[(12)] = inst_50346);

return statearr_50429;
})();
var statearr_50430_50472 = state_50406__$1;
(statearr_50430_50472[(2)] = inst_50348);

(statearr_50430_50472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (3))){
var inst_50338 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50338)){
var statearr_50431_50473 = state_50406__$1;
(statearr_50431_50473[(1)] = (13));

} else {
var statearr_50432_50474 = state_50406__$1;
(statearr_50432_50474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (12))){
var inst_50334 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50433_50475 = state_50406__$1;
(statearr_50433_50475[(2)] = inst_50334);

(statearr_50433_50475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (2))){
var inst_50321 = (state_50406[(10)]);
var inst_50321__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50406__$1 = (function (){var statearr_50434 = state_50406;
(statearr_50434[(10)] = inst_50321__$1);

return statearr_50434;
})();
if(cljs.core.truth_(inst_50321__$1)){
var statearr_50435_50476 = state_50406__$1;
(statearr_50435_50476[(1)] = (5));

} else {
var statearr_50436_50477 = state_50406__$1;
(statearr_50436_50477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (23))){
var inst_50364 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50364)){
var statearr_50437_50478 = state_50406__$1;
(statearr_50437_50478[(1)] = (25));

} else {
var statearr_50438_50479 = state_50406__$1;
(statearr_50438_50479[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (35))){
var state_50406__$1 = state_50406;
var statearr_50439_50480 = state_50406__$1;
(statearr_50439_50480[(2)] = null);

(statearr_50439_50480[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (19))){
var inst_50359 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50359)){
var statearr_50440_50481 = state_50406__$1;
(statearr_50440_50481[(1)] = (22));

} else {
var statearr_50441_50482 = state_50406__$1;
(statearr_50441_50482[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (11))){
var inst_50330 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50442_50483 = state_50406__$1;
(statearr_50442_50483[(2)] = inst_50330);

(statearr_50442_50483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (9))){
var inst_50332 = figwheel.client.heads_up.clear.call(null);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(12),inst_50332);
} else {
if((state_val_50407 === (5))){
var inst_50323 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50406__$1 = state_50406;
var statearr_50443_50484 = state_50406__$1;
(statearr_50443_50484[(2)] = inst_50323);

(statearr_50443_50484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (14))){
var inst_50350 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50350)){
var statearr_50444_50485 = state_50406__$1;
(statearr_50444_50485[(1)] = (18));

} else {
var statearr_50445_50486 = state_50406__$1;
(statearr_50445_50486[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (26))){
var inst_50376 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50376)){
var statearr_50446_50487 = state_50406__$1;
(statearr_50446_50487[(1)] = (30));

} else {
var statearr_50447_50488 = state_50406__$1;
(statearr_50447_50488[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (16))){
var inst_50342 = (state_50406[(2)]);
var inst_50343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50344 = figwheel.client.heads_up.display_exception.call(null,inst_50343);
var state_50406__$1 = (function (){var statearr_50448 = state_50406;
(statearr_50448[(13)] = inst_50342);

return statearr_50448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(17),inst_50344);
} else {
if((state_val_50407 === (30))){
var inst_50378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50379 = figwheel.client.heads_up.display_warning.call(null,inst_50378);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(33),inst_50379);
} else {
if((state_val_50407 === (10))){
var inst_50336 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50449_50489 = state_50406__$1;
(statearr_50449_50489[(2)] = inst_50336);

(statearr_50449_50489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (18))){
var inst_50352 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50353 = figwheel.client.heads_up.display_exception.call(null,inst_50352);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(21),inst_50353);
} else {
if((state_val_50407 === (37))){
var inst_50389 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50450_50490 = state_50406__$1;
(statearr_50450_50490[(2)] = inst_50389);

(statearr_50450_50490[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (8))){
var inst_50328 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(11),inst_50328);
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
});})(c__45169__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45081__auto__,c__45169__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto____0 = (function (){
var statearr_50451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50451[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto__);

(statearr_50451[(1)] = (1));

return statearr_50451;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto____1 = (function (state_50406){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_50406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e50452){if((e50452 instanceof Object)){
var ex__45085__auto__ = e50452;
var statearr_50453_50491 = state_50406;
(statearr_50453_50491[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50492 = state_50406;
state_50406 = G__50492;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto__ = function(state_50406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto____1.call(this,state_50406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__,msg_hist,msg_names,msg))
})();
var state__45171__auto__ = (function (){var statearr_50454 = f__45170__auto__.call(null);
(statearr_50454[(6)] = c__45169__auto__);

return statearr_50454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__,msg_hist,msg_names,msg))
);

return c__45169__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__45169__auto___50521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___50521,ch){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___50521,ch){
return (function (state_50507){
var state_val_50508 = (state_50507[(1)]);
if((state_val_50508 === (1))){
var state_50507__$1 = state_50507;
var statearr_50509_50522 = state_50507__$1;
(statearr_50509_50522[(2)] = null);

(statearr_50509_50522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50508 === (2))){
var state_50507__$1 = state_50507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50507__$1,(4),ch);
} else {
if((state_val_50508 === (3))){
var inst_50505 = (state_50507[(2)]);
var state_50507__$1 = state_50507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50507__$1,inst_50505);
} else {
if((state_val_50508 === (4))){
var inst_50495 = (state_50507[(7)]);
var inst_50495__$1 = (state_50507[(2)]);
var state_50507__$1 = (function (){var statearr_50510 = state_50507;
(statearr_50510[(7)] = inst_50495__$1);

return statearr_50510;
})();
if(cljs.core.truth_(inst_50495__$1)){
var statearr_50511_50523 = state_50507__$1;
(statearr_50511_50523[(1)] = (5));

} else {
var statearr_50512_50524 = state_50507__$1;
(statearr_50512_50524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50508 === (5))){
var inst_50495 = (state_50507[(7)]);
var inst_50497 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50495);
var state_50507__$1 = state_50507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50507__$1,(8),inst_50497);
} else {
if((state_val_50508 === (6))){
var state_50507__$1 = state_50507;
var statearr_50513_50525 = state_50507__$1;
(statearr_50513_50525[(2)] = null);

(statearr_50513_50525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50508 === (7))){
var inst_50503 = (state_50507[(2)]);
var state_50507__$1 = state_50507;
var statearr_50514_50526 = state_50507__$1;
(statearr_50514_50526[(2)] = inst_50503);

(statearr_50514_50526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50508 === (8))){
var inst_50499 = (state_50507[(2)]);
var state_50507__$1 = (function (){var statearr_50515 = state_50507;
(statearr_50515[(8)] = inst_50499);

return statearr_50515;
})();
var statearr_50516_50527 = state_50507__$1;
(statearr_50516_50527[(2)] = null);

(statearr_50516_50527[(1)] = (2));


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
});})(c__45169__auto___50521,ch))
;
return ((function (switch__45081__auto__,c__45169__auto___50521,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45082__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45082__auto____0 = (function (){
var statearr_50517 = [null,null,null,null,null,null,null,null,null];
(statearr_50517[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45082__auto__);

(statearr_50517[(1)] = (1));

return statearr_50517;
});
var figwheel$client$heads_up_plugin_$_state_machine__45082__auto____1 = (function (state_50507){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_50507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e50518){if((e50518 instanceof Object)){
var ex__45085__auto__ = e50518;
var statearr_50519_50528 = state_50507;
(statearr_50519_50528[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50529 = state_50507;
state_50507 = G__50529;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45082__auto__ = function(state_50507){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45082__auto____1.call(this,state_50507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45082__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45082__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___50521,ch))
})();
var state__45171__auto__ = (function (){var statearr_50520 = f__45170__auto__.call(null);
(statearr_50520[(6)] = c__45169__auto___50521);

return statearr_50520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___50521,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__){
return (function (state_50535){
var state_val_50536 = (state_50535[(1)]);
if((state_val_50536 === (1))){
var inst_50530 = cljs.core.async.timeout.call(null,(3000));
var state_50535__$1 = state_50535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50535__$1,(2),inst_50530);
} else {
if((state_val_50536 === (2))){
var inst_50532 = (state_50535[(2)]);
var inst_50533 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50535__$1 = (function (){var statearr_50537 = state_50535;
(statearr_50537[(7)] = inst_50532);

return statearr_50537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50535__$1,inst_50533);
} else {
return null;
}
}
});})(c__45169__auto__))
;
return ((function (switch__45081__auto__,c__45169__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45082__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45082__auto____0 = (function (){
var statearr_50538 = [null,null,null,null,null,null,null,null];
(statearr_50538[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45082__auto__);

(statearr_50538[(1)] = (1));

return statearr_50538;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45082__auto____1 = (function (state_50535){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_50535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e50539){if((e50539 instanceof Object)){
var ex__45085__auto__ = e50539;
var statearr_50540_50542 = state_50535;
(statearr_50540_50542[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50543 = state_50535;
state_50535 = G__50543;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45082__auto__ = function(state_50535){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45082__auto____1.call(this,state_50535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45082__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45082__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__))
})();
var state__45171__auto__ = (function (){var statearr_50541 = f__45170__auto__.call(null);
(statearr_50541[(6)] = c__45169__auto__);

return statearr_50541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__))
);

return c__45169__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__,figwheel_version,temp__4657__auto__){
return (function (state_50550){
var state_val_50551 = (state_50550[(1)]);
if((state_val_50551 === (1))){
var inst_50544 = cljs.core.async.timeout.call(null,(2000));
var state_50550__$1 = state_50550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50550__$1,(2),inst_50544);
} else {
if((state_val_50551 === (2))){
var inst_50546 = (state_50550[(2)]);
var inst_50547 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50548 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50547);
var state_50550__$1 = (function (){var statearr_50552 = state_50550;
(statearr_50552[(7)] = inst_50546);

return statearr_50552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50550__$1,inst_50548);
} else {
return null;
}
}
});})(c__45169__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__45081__auto__,c__45169__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto____0 = (function (){
var statearr_50553 = [null,null,null,null,null,null,null,null];
(statearr_50553[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto__);

(statearr_50553[(1)] = (1));

return statearr_50553;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto____1 = (function (state_50550){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_50550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e50554){if((e50554 instanceof Object)){
var ex__45085__auto__ = e50554;
var statearr_50555_50557 = state_50550;
(statearr_50555_50557[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50558 = state_50550;
state_50550 = G__50558;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto__ = function(state_50550){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto____1.call(this,state_50550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__,figwheel_version,temp__4657__auto__))
})();
var state__45171__auto__ = (function (){var statearr_50556 = f__45170__auto__.call(null);
(statearr_50556[(6)] = c__45169__auto__);

return statearr_50556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__,figwheel_version,temp__4657__auto__))
);

return c__45169__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50559){
var map__50560 = p__50559;
var map__50560__$1 = ((((!((map__50560 == null)))?((((map__50560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50560):map__50560);
var file = cljs.core.get.call(null,map__50560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50560__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50560__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50562 = "";
var G__50562__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50562),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50562);
var G__50562__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50562__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50562__$1);
if(cljs.core.truth_((function (){var and__42171__auto__ = line;
if(cljs.core.truth_(and__42171__auto__)){
return column;
} else {
return and__42171__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50562__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50562__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50563){
var map__50564 = p__50563;
var map__50564__$1 = ((((!((map__50564 == null)))?((((map__50564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50564):map__50564);
var ed = map__50564__$1;
var formatted_exception = cljs.core.get.call(null,map__50564__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50564__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50564__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50566_50570 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50567_50571 = null;
var count__50568_50572 = (0);
var i__50569_50573 = (0);
while(true){
if((i__50569_50573 < count__50568_50572)){
var msg_50574 = cljs.core._nth.call(null,chunk__50567_50571,i__50569_50573);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50574);

var G__50575 = seq__50566_50570;
var G__50576 = chunk__50567_50571;
var G__50577 = count__50568_50572;
var G__50578 = (i__50569_50573 + (1));
seq__50566_50570 = G__50575;
chunk__50567_50571 = G__50576;
count__50568_50572 = G__50577;
i__50569_50573 = G__50578;
continue;
} else {
var temp__4657__auto___50579 = cljs.core.seq.call(null,seq__50566_50570);
if(temp__4657__auto___50579){
var seq__50566_50580__$1 = temp__4657__auto___50579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50566_50580__$1)){
var c__43022__auto___50581 = cljs.core.chunk_first.call(null,seq__50566_50580__$1);
var G__50582 = cljs.core.chunk_rest.call(null,seq__50566_50580__$1);
var G__50583 = c__43022__auto___50581;
var G__50584 = cljs.core.count.call(null,c__43022__auto___50581);
var G__50585 = (0);
seq__50566_50570 = G__50582;
chunk__50567_50571 = G__50583;
count__50568_50572 = G__50584;
i__50569_50573 = G__50585;
continue;
} else {
var msg_50586 = cljs.core.first.call(null,seq__50566_50580__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50586);

var G__50587 = cljs.core.next.call(null,seq__50566_50580__$1);
var G__50588 = null;
var G__50589 = (0);
var G__50590 = (0);
seq__50566_50570 = G__50587;
chunk__50567_50571 = G__50588;
count__50568_50572 = G__50589;
i__50569_50573 = G__50590;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50591){
var map__50592 = p__50591;
var map__50592__$1 = ((((!((map__50592 == null)))?((((map__50592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50592):map__50592);
var w = map__50592__$1;
var message = cljs.core.get.call(null,map__50592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__42171__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__42171__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__42171__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__50594 = cljs.core.seq.call(null,plugins);
var chunk__50595 = null;
var count__50596 = (0);
var i__50597 = (0);
while(true){
if((i__50597 < count__50596)){
var vec__50598 = cljs.core._nth.call(null,chunk__50595,i__50597);
var k = cljs.core.nth.call(null,vec__50598,(0),null);
var plugin = cljs.core.nth.call(null,vec__50598,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50604 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50594,chunk__50595,count__50596,i__50597,pl_50604,vec__50598,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50604.call(null,msg_hist);
});})(seq__50594,chunk__50595,count__50596,i__50597,pl_50604,vec__50598,k,plugin))
);
} else {
}

var G__50605 = seq__50594;
var G__50606 = chunk__50595;
var G__50607 = count__50596;
var G__50608 = (i__50597 + (1));
seq__50594 = G__50605;
chunk__50595 = G__50606;
count__50596 = G__50607;
i__50597 = G__50608;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50594);
if(temp__4657__auto__){
var seq__50594__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50594__$1)){
var c__43022__auto__ = cljs.core.chunk_first.call(null,seq__50594__$1);
var G__50609 = cljs.core.chunk_rest.call(null,seq__50594__$1);
var G__50610 = c__43022__auto__;
var G__50611 = cljs.core.count.call(null,c__43022__auto__);
var G__50612 = (0);
seq__50594 = G__50609;
chunk__50595 = G__50610;
count__50596 = G__50611;
i__50597 = G__50612;
continue;
} else {
var vec__50601 = cljs.core.first.call(null,seq__50594__$1);
var k = cljs.core.nth.call(null,vec__50601,(0),null);
var plugin = cljs.core.nth.call(null,vec__50601,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50613 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50594,chunk__50595,count__50596,i__50597,pl_50613,vec__50601,k,plugin,seq__50594__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50613.call(null,msg_hist);
});})(seq__50594,chunk__50595,count__50596,i__50597,pl_50613,vec__50601,k,plugin,seq__50594__$1,temp__4657__auto__))
);
} else {
}

var G__50614 = cljs.core.next.call(null,seq__50594__$1);
var G__50615 = null;
var G__50616 = (0);
var G__50617 = (0);
seq__50594 = G__50614;
chunk__50595 = G__50615;
count__50596 = G__50616;
i__50597 = G__50617;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__50619 = arguments.length;
switch (G__50619) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__50620_50625 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50621_50626 = null;
var count__50622_50627 = (0);
var i__50623_50628 = (0);
while(true){
if((i__50623_50628 < count__50622_50627)){
var msg_50629 = cljs.core._nth.call(null,chunk__50621_50626,i__50623_50628);
figwheel.client.socket.handle_incoming_message.call(null,msg_50629);

var G__50630 = seq__50620_50625;
var G__50631 = chunk__50621_50626;
var G__50632 = count__50622_50627;
var G__50633 = (i__50623_50628 + (1));
seq__50620_50625 = G__50630;
chunk__50621_50626 = G__50631;
count__50622_50627 = G__50632;
i__50623_50628 = G__50633;
continue;
} else {
var temp__4657__auto___50634 = cljs.core.seq.call(null,seq__50620_50625);
if(temp__4657__auto___50634){
var seq__50620_50635__$1 = temp__4657__auto___50634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50620_50635__$1)){
var c__43022__auto___50636 = cljs.core.chunk_first.call(null,seq__50620_50635__$1);
var G__50637 = cljs.core.chunk_rest.call(null,seq__50620_50635__$1);
var G__50638 = c__43022__auto___50636;
var G__50639 = cljs.core.count.call(null,c__43022__auto___50636);
var G__50640 = (0);
seq__50620_50625 = G__50637;
chunk__50621_50626 = G__50638;
count__50622_50627 = G__50639;
i__50623_50628 = G__50640;
continue;
} else {
var msg_50641 = cljs.core.first.call(null,seq__50620_50635__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50641);

var G__50642 = cljs.core.next.call(null,seq__50620_50635__$1);
var G__50643 = null;
var G__50644 = (0);
var G__50645 = (0);
seq__50620_50625 = G__50642;
chunk__50621_50626 = G__50643;
count__50622_50627 = G__50644;
i__50623_50628 = G__50645;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__43361__auto__ = [];
var len__43354__auto___50650 = arguments.length;
var i__43355__auto___50651 = (0);
while(true){
if((i__43355__auto___50651 < len__43354__auto___50650)){
args__43361__auto__.push((arguments[i__43355__auto___50651]));

var G__50652 = (i__43355__auto___50651 + (1));
i__43355__auto___50651 = G__50652;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((0) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__43362__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50647){
var map__50648 = p__50647;
var map__50648__$1 = ((((!((map__50648 == null)))?((((map__50648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50648):map__50648);
var opts = map__50648__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50646){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50646));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50653){if((e50653 instanceof Error)){
var e = e50653;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50653;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__50654){
var map__50655 = p__50654;
var map__50655__$1 = ((((!((map__50655 == null)))?((((map__50655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50655):map__50655);
var msg_name = cljs.core.get.call(null,map__50655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510612166583
