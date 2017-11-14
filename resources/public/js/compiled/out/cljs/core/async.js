// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45215 = arguments.length;
switch (G__45215) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45216 = (function (f,blockable,meta45217){
this.f = f;
this.blockable = blockable;
this.meta45217 = meta45217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45218,meta45217__$1){
var self__ = this;
var _45218__$1 = this;
return (new cljs.core.async.t_cljs$core$async45216(self__.f,self__.blockable,meta45217__$1));
});

cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45218){
var self__ = this;
var _45218__$1 = this;
return self__.meta45217;
});

cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45217","meta45217",1309057,null)], null);
});

cljs.core.async.t_cljs$core$async45216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45216";

cljs.core.async.t_cljs$core$async45216.cljs$lang$ctorPrWriter = (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async45216");
});

cljs.core.async.__GT_t_cljs$core$async45216 = (function cljs$core$async$__GT_t_cljs$core$async45216(f__$1,blockable__$1,meta45217){
return (new cljs.core.async.t_cljs$core$async45216(f__$1,blockable__$1,meta45217));
});

}

return (new cljs.core.async.t_cljs$core$async45216(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45222 = arguments.length;
switch (G__45222) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45225 = arguments.length;
switch (G__45225) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45228 = arguments.length;
switch (G__45228) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45230 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45230);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45230,ret){
return (function (){
return fn1.call(null,val_45230);
});})(val_45230,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45232 = arguments.length;
switch (G__45232) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__43130__auto___45234 = n;
var x_45235 = (0);
while(true){
if((x_45235 < n__43130__auto___45234)){
(a[x_45235] = (0));

var G__45236 = (x_45235 + (1));
x_45235 = G__45236;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45237 = (i + (1));
i = G__45237;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45238 = (function (flag,meta45239){
this.flag = flag;
this.meta45239 = meta45239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45240,meta45239__$1){
var self__ = this;
var _45240__$1 = this;
return (new cljs.core.async.t_cljs$core$async45238(self__.flag,meta45239__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45240){
var self__ = this;
var _45240__$1 = this;
return self__.meta45239;
});})(flag))
;

cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45238.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45239","meta45239",-406545856,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45238";

cljs.core.async.t_cljs$core$async45238.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async45238");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45238 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45238(flag__$1,meta45239){
return (new cljs.core.async.t_cljs$core$async45238(flag__$1,meta45239));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45238(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45241 = (function (flag,cb,meta45242){
this.flag = flag;
this.cb = cb;
this.meta45242 = meta45242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45243,meta45242__$1){
var self__ = this;
var _45243__$1 = this;
return (new cljs.core.async.t_cljs$core$async45241(self__.flag,self__.cb,meta45242__$1));
});

cljs.core.async.t_cljs$core$async45241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45243){
var self__ = this;
var _45243__$1 = this;
return self__.meta45242;
});

cljs.core.async.t_cljs$core$async45241.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45241.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45242","meta45242",1384618792,null)], null);
});

cljs.core.async.t_cljs$core$async45241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45241";

cljs.core.async.t_cljs$core$async45241.cljs$lang$ctorPrWriter = (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async45241");
});

cljs.core.async.__GT_t_cljs$core$async45241 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45241(flag__$1,cb__$1,meta45242){
return (new cljs.core.async.t_cljs$core$async45241(flag__$1,cb__$1,meta45242));
});

}

return (new cljs.core.async.t_cljs$core$async45241(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45244_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45244_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45245_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45245_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__42183__auto__ = wport;
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45246 = (i + (1));
i = G__45246;
continue;
}
} else {
return null;
}
break;
}
})();
var or__42183__auto__ = ret;
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__42171__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__42171__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__42171__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__43361__auto__ = [];
var len__43354__auto___45252 = arguments.length;
var i__43355__auto___45253 = (0);
while(true){
if((i__43355__auto___45253 < len__43354__auto___45252)){
args__43361__auto__.push((arguments[i__43355__auto___45253]));

var G__45254 = (i__43355__auto___45253 + (1));
i__43355__auto___45253 = G__45254;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((1) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43362__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45249){
var map__45250 = p__45249;
var map__45250__$1 = ((((!((map__45250 == null)))?((((map__45250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45250):map__45250);
var opts = map__45250__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45247){
var G__45248 = cljs.core.first.call(null,seq45247);
var seq45247__$1 = cljs.core.next.call(null,seq45247);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45248,seq45247__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45256 = arguments.length;
switch (G__45256) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45169__auto___45302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___45302){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___45302){
return (function (state_45280){
var state_val_45281 = (state_45280[(1)]);
if((state_val_45281 === (7))){
var inst_45276 = (state_45280[(2)]);
var state_45280__$1 = state_45280;
var statearr_45282_45303 = state_45280__$1;
(statearr_45282_45303[(2)] = inst_45276);

(statearr_45282_45303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (1))){
var state_45280__$1 = state_45280;
var statearr_45283_45304 = state_45280__$1;
(statearr_45283_45304[(2)] = null);

(statearr_45283_45304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (4))){
var inst_45259 = (state_45280[(7)]);
var inst_45259__$1 = (state_45280[(2)]);
var inst_45260 = (inst_45259__$1 == null);
var state_45280__$1 = (function (){var statearr_45284 = state_45280;
(statearr_45284[(7)] = inst_45259__$1);

return statearr_45284;
})();
if(cljs.core.truth_(inst_45260)){
var statearr_45285_45305 = state_45280__$1;
(statearr_45285_45305[(1)] = (5));

} else {
var statearr_45286_45306 = state_45280__$1;
(statearr_45286_45306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (13))){
var state_45280__$1 = state_45280;
var statearr_45287_45307 = state_45280__$1;
(statearr_45287_45307[(2)] = null);

(statearr_45287_45307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (6))){
var inst_45259 = (state_45280[(7)]);
var state_45280__$1 = state_45280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45280__$1,(11),to,inst_45259);
} else {
if((state_val_45281 === (3))){
var inst_45278 = (state_45280[(2)]);
var state_45280__$1 = state_45280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45280__$1,inst_45278);
} else {
if((state_val_45281 === (12))){
var state_45280__$1 = state_45280;
var statearr_45288_45308 = state_45280__$1;
(statearr_45288_45308[(2)] = null);

(statearr_45288_45308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (2))){
var state_45280__$1 = state_45280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45280__$1,(4),from);
} else {
if((state_val_45281 === (11))){
var inst_45269 = (state_45280[(2)]);
var state_45280__$1 = state_45280;
if(cljs.core.truth_(inst_45269)){
var statearr_45289_45309 = state_45280__$1;
(statearr_45289_45309[(1)] = (12));

} else {
var statearr_45290_45310 = state_45280__$1;
(statearr_45290_45310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (9))){
var state_45280__$1 = state_45280;
var statearr_45291_45311 = state_45280__$1;
(statearr_45291_45311[(2)] = null);

(statearr_45291_45311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (5))){
var state_45280__$1 = state_45280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45292_45312 = state_45280__$1;
(statearr_45292_45312[(1)] = (8));

} else {
var statearr_45293_45313 = state_45280__$1;
(statearr_45293_45313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (14))){
var inst_45274 = (state_45280[(2)]);
var state_45280__$1 = state_45280;
var statearr_45294_45314 = state_45280__$1;
(statearr_45294_45314[(2)] = inst_45274);

(statearr_45294_45314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (10))){
var inst_45266 = (state_45280[(2)]);
var state_45280__$1 = state_45280;
var statearr_45295_45315 = state_45280__$1;
(statearr_45295_45315[(2)] = inst_45266);

(statearr_45295_45315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45281 === (8))){
var inst_45263 = cljs.core.async.close_BANG_.call(null,to);
var state_45280__$1 = state_45280;
var statearr_45296_45316 = state_45280__$1;
(statearr_45296_45316[(2)] = inst_45263);

(statearr_45296_45316[(1)] = (10));


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
});})(c__45169__auto___45302))
;
return ((function (switch__45081__auto__,c__45169__auto___45302){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_45297 = [null,null,null,null,null,null,null,null];
(statearr_45297[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_45297[(1)] = (1));

return statearr_45297;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_45280){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45298){if((e45298 instanceof Object)){
var ex__45085__auto__ = e45298;
var statearr_45299_45317 = state_45280;
(statearr_45299_45317[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45318 = state_45280;
state_45280 = G__45318;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_45280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_45280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___45302))
})();
var state__45171__auto__ = (function (){var statearr_45300 = f__45170__auto__.call(null);
(statearr_45300[(6)] = c__45169__auto___45302);

return statearr_45300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___45302))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45319){
var vec__45320 = p__45319;
var v = cljs.core.nth.call(null,vec__45320,(0),null);
var p = cljs.core.nth.call(null,vec__45320,(1),null);
var job = vec__45320;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__45169__auto___45491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___45491,res,vec__45320,v,p,job,jobs,results){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___45491,res,vec__45320,v,p,job,jobs,results){
return (function (state_45327){
var state_val_45328 = (state_45327[(1)]);
if((state_val_45328 === (1))){
var state_45327__$1 = state_45327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45327__$1,(2),res,v);
} else {
if((state_val_45328 === (2))){
var inst_45324 = (state_45327[(2)]);
var inst_45325 = cljs.core.async.close_BANG_.call(null,res);
var state_45327__$1 = (function (){var statearr_45329 = state_45327;
(statearr_45329[(7)] = inst_45324);

return statearr_45329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45327__$1,inst_45325);
} else {
return null;
}
}
});})(c__45169__auto___45491,res,vec__45320,v,p,job,jobs,results))
;
return ((function (switch__45081__auto__,c__45169__auto___45491,res,vec__45320,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0 = (function (){
var statearr_45330 = [null,null,null,null,null,null,null,null];
(statearr_45330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__);

(statearr_45330[(1)] = (1));

return statearr_45330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1 = (function (state_45327){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45331){if((e45331 instanceof Object)){
var ex__45085__auto__ = e45331;
var statearr_45332_45492 = state_45327;
(statearr_45332_45492[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45493 = state_45327;
state_45327 = G__45493;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = function(state_45327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1.call(this,state_45327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___45491,res,vec__45320,v,p,job,jobs,results))
})();
var state__45171__auto__ = (function (){var statearr_45333 = f__45170__auto__.call(null);
(statearr_45333[(6)] = c__45169__auto___45491);

return statearr_45333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___45491,res,vec__45320,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45334){
var vec__45335 = p__45334;
var v = cljs.core.nth.call(null,vec__45335,(0),null);
var p = cljs.core.nth.call(null,vec__45335,(1),null);
var job = vec__45335;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__43130__auto___45494 = n;
var __45495 = (0);
while(true){
if((__45495 < n__43130__auto___45494)){
var G__45338_45496 = type;
var G__45338_45497__$1 = (((G__45338_45496 instanceof cljs.core.Keyword))?G__45338_45496.fqn:null);
switch (G__45338_45497__$1) {
case "compute":
var c__45169__auto___45499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45495,c__45169__auto___45499,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (__45495,c__45169__auto___45499,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async){
return (function (state_45351){
var state_val_45352 = (state_45351[(1)]);
if((state_val_45352 === (1))){
var state_45351__$1 = state_45351;
var statearr_45353_45500 = state_45351__$1;
(statearr_45353_45500[(2)] = null);

(statearr_45353_45500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (2))){
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45351__$1,(4),jobs);
} else {
if((state_val_45352 === (3))){
var inst_45349 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45351__$1,inst_45349);
} else {
if((state_val_45352 === (4))){
var inst_45341 = (state_45351[(2)]);
var inst_45342 = process.call(null,inst_45341);
var state_45351__$1 = state_45351;
if(cljs.core.truth_(inst_45342)){
var statearr_45354_45501 = state_45351__$1;
(statearr_45354_45501[(1)] = (5));

} else {
var statearr_45355_45502 = state_45351__$1;
(statearr_45355_45502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (5))){
var state_45351__$1 = state_45351;
var statearr_45356_45503 = state_45351__$1;
(statearr_45356_45503[(2)] = null);

(statearr_45356_45503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (6))){
var state_45351__$1 = state_45351;
var statearr_45357_45504 = state_45351__$1;
(statearr_45357_45504[(2)] = null);

(statearr_45357_45504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (7))){
var inst_45347 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
var statearr_45358_45505 = state_45351__$1;
(statearr_45358_45505[(2)] = inst_45347);

(statearr_45358_45505[(1)] = (3));


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
});})(__45495,c__45169__auto___45499,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async))
;
return ((function (__45495,switch__45081__auto__,c__45169__auto___45499,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0 = (function (){
var statearr_45359 = [null,null,null,null,null,null,null];
(statearr_45359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__);

(statearr_45359[(1)] = (1));

return statearr_45359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1 = (function (state_45351){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45360){if((e45360 instanceof Object)){
var ex__45085__auto__ = e45360;
var statearr_45361_45506 = state_45351;
(statearr_45361_45506[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45507 = state_45351;
state_45351 = G__45507;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = function(state_45351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1.call(this,state_45351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__;
})()
;})(__45495,switch__45081__auto__,c__45169__auto___45499,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async))
})();
var state__45171__auto__ = (function (){var statearr_45362 = f__45170__auto__.call(null);
(statearr_45362[(6)] = c__45169__auto___45499);

return statearr_45362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(__45495,c__45169__auto___45499,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async))
);


break;
case "async":
var c__45169__auto___45508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45495,c__45169__auto___45508,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (__45495,c__45169__auto___45508,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async){
return (function (state_45375){
var state_val_45376 = (state_45375[(1)]);
if((state_val_45376 === (1))){
var state_45375__$1 = state_45375;
var statearr_45377_45509 = state_45375__$1;
(statearr_45377_45509[(2)] = null);

(statearr_45377_45509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (2))){
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45375__$1,(4),jobs);
} else {
if((state_val_45376 === (3))){
var inst_45373 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45375__$1,inst_45373);
} else {
if((state_val_45376 === (4))){
var inst_45365 = (state_45375[(2)]);
var inst_45366 = async.call(null,inst_45365);
var state_45375__$1 = state_45375;
if(cljs.core.truth_(inst_45366)){
var statearr_45378_45510 = state_45375__$1;
(statearr_45378_45510[(1)] = (5));

} else {
var statearr_45379_45511 = state_45375__$1;
(statearr_45379_45511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (5))){
var state_45375__$1 = state_45375;
var statearr_45380_45512 = state_45375__$1;
(statearr_45380_45512[(2)] = null);

(statearr_45380_45512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (6))){
var state_45375__$1 = state_45375;
var statearr_45381_45513 = state_45375__$1;
(statearr_45381_45513[(2)] = null);

(statearr_45381_45513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (7))){
var inst_45371 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
var statearr_45382_45514 = state_45375__$1;
(statearr_45382_45514[(2)] = inst_45371);

(statearr_45382_45514[(1)] = (3));


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
});})(__45495,c__45169__auto___45508,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async))
;
return ((function (__45495,switch__45081__auto__,c__45169__auto___45508,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0 = (function (){
var statearr_45383 = [null,null,null,null,null,null,null];
(statearr_45383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__);

(statearr_45383[(1)] = (1));

return statearr_45383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1 = (function (state_45375){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45384){if((e45384 instanceof Object)){
var ex__45085__auto__ = e45384;
var statearr_45385_45515 = state_45375;
(statearr_45385_45515[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45516 = state_45375;
state_45375 = G__45516;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = function(state_45375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1.call(this,state_45375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__;
})()
;})(__45495,switch__45081__auto__,c__45169__auto___45508,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async))
})();
var state__45171__auto__ = (function (){var statearr_45386 = f__45170__auto__.call(null);
(statearr_45386[(6)] = c__45169__auto___45508);

return statearr_45386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(__45495,c__45169__auto___45508,G__45338_45496,G__45338_45497__$1,n__43130__auto___45494,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45338_45497__$1)].join('')));

}

var G__45517 = (__45495 + (1));
__45495 = G__45517;
continue;
} else {
}
break;
}

var c__45169__auto___45518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___45518,jobs,results,process,async){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___45518,jobs,results,process,async){
return (function (state_45408){
var state_val_45409 = (state_45408[(1)]);
if((state_val_45409 === (1))){
var state_45408__$1 = state_45408;
var statearr_45410_45519 = state_45408__$1;
(statearr_45410_45519[(2)] = null);

(statearr_45410_45519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (2))){
var state_45408__$1 = state_45408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45408__$1,(4),from);
} else {
if((state_val_45409 === (3))){
var inst_45406 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45408__$1,inst_45406);
} else {
if((state_val_45409 === (4))){
var inst_45389 = (state_45408[(7)]);
var inst_45389__$1 = (state_45408[(2)]);
var inst_45390 = (inst_45389__$1 == null);
var state_45408__$1 = (function (){var statearr_45411 = state_45408;
(statearr_45411[(7)] = inst_45389__$1);

return statearr_45411;
})();
if(cljs.core.truth_(inst_45390)){
var statearr_45412_45520 = state_45408__$1;
(statearr_45412_45520[(1)] = (5));

} else {
var statearr_45413_45521 = state_45408__$1;
(statearr_45413_45521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (5))){
var inst_45392 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45408__$1 = state_45408;
var statearr_45414_45522 = state_45408__$1;
(statearr_45414_45522[(2)] = inst_45392);

(statearr_45414_45522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (6))){
var inst_45389 = (state_45408[(7)]);
var inst_45394 = (state_45408[(8)]);
var inst_45394__$1 = cljs.core.async.chan.call(null,(1));
var inst_45395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45396 = [inst_45389,inst_45394__$1];
var inst_45397 = (new cljs.core.PersistentVector(null,2,(5),inst_45395,inst_45396,null));
var state_45408__$1 = (function (){var statearr_45415 = state_45408;
(statearr_45415[(8)] = inst_45394__$1);

return statearr_45415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45408__$1,(8),jobs,inst_45397);
} else {
if((state_val_45409 === (7))){
var inst_45404 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
var statearr_45416_45523 = state_45408__$1;
(statearr_45416_45523[(2)] = inst_45404);

(statearr_45416_45523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (8))){
var inst_45394 = (state_45408[(8)]);
var inst_45399 = (state_45408[(2)]);
var state_45408__$1 = (function (){var statearr_45417 = state_45408;
(statearr_45417[(9)] = inst_45399);

return statearr_45417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45408__$1,(9),results,inst_45394);
} else {
if((state_val_45409 === (9))){
var inst_45401 = (state_45408[(2)]);
var state_45408__$1 = (function (){var statearr_45418 = state_45408;
(statearr_45418[(10)] = inst_45401);

return statearr_45418;
})();
var statearr_45419_45524 = state_45408__$1;
(statearr_45419_45524[(2)] = null);

(statearr_45419_45524[(1)] = (2));


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
});})(c__45169__auto___45518,jobs,results,process,async))
;
return ((function (switch__45081__auto__,c__45169__auto___45518,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0 = (function (){
var statearr_45420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__);

(statearr_45420[(1)] = (1));

return statearr_45420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1 = (function (state_45408){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45421){if((e45421 instanceof Object)){
var ex__45085__auto__ = e45421;
var statearr_45422_45525 = state_45408;
(statearr_45422_45525[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45526 = state_45408;
state_45408 = G__45526;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = function(state_45408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1.call(this,state_45408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___45518,jobs,results,process,async))
})();
var state__45171__auto__ = (function (){var statearr_45423 = f__45170__auto__.call(null);
(statearr_45423[(6)] = c__45169__auto___45518);

return statearr_45423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___45518,jobs,results,process,async))
);


var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__,jobs,results,process,async){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__,jobs,results,process,async){
return (function (state_45461){
var state_val_45462 = (state_45461[(1)]);
if((state_val_45462 === (7))){
var inst_45457 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
var statearr_45463_45527 = state_45461__$1;
(statearr_45463_45527[(2)] = inst_45457);

(statearr_45463_45527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (20))){
var state_45461__$1 = state_45461;
var statearr_45464_45528 = state_45461__$1;
(statearr_45464_45528[(2)] = null);

(statearr_45464_45528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (1))){
var state_45461__$1 = state_45461;
var statearr_45465_45529 = state_45461__$1;
(statearr_45465_45529[(2)] = null);

(statearr_45465_45529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (4))){
var inst_45426 = (state_45461[(7)]);
var inst_45426__$1 = (state_45461[(2)]);
var inst_45427 = (inst_45426__$1 == null);
var state_45461__$1 = (function (){var statearr_45466 = state_45461;
(statearr_45466[(7)] = inst_45426__$1);

return statearr_45466;
})();
if(cljs.core.truth_(inst_45427)){
var statearr_45467_45530 = state_45461__$1;
(statearr_45467_45530[(1)] = (5));

} else {
var statearr_45468_45531 = state_45461__$1;
(statearr_45468_45531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (15))){
var inst_45439 = (state_45461[(8)]);
var state_45461__$1 = state_45461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45461__$1,(18),to,inst_45439);
} else {
if((state_val_45462 === (21))){
var inst_45452 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
var statearr_45469_45532 = state_45461__$1;
(statearr_45469_45532[(2)] = inst_45452);

(statearr_45469_45532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (13))){
var inst_45454 = (state_45461[(2)]);
var state_45461__$1 = (function (){var statearr_45470 = state_45461;
(statearr_45470[(9)] = inst_45454);

return statearr_45470;
})();
var statearr_45471_45533 = state_45461__$1;
(statearr_45471_45533[(2)] = null);

(statearr_45471_45533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (6))){
var inst_45426 = (state_45461[(7)]);
var state_45461__$1 = state_45461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45461__$1,(11),inst_45426);
} else {
if((state_val_45462 === (17))){
var inst_45447 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
if(cljs.core.truth_(inst_45447)){
var statearr_45472_45534 = state_45461__$1;
(statearr_45472_45534[(1)] = (19));

} else {
var statearr_45473_45535 = state_45461__$1;
(statearr_45473_45535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (3))){
var inst_45459 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45461__$1,inst_45459);
} else {
if((state_val_45462 === (12))){
var inst_45436 = (state_45461[(10)]);
var state_45461__$1 = state_45461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45461__$1,(14),inst_45436);
} else {
if((state_val_45462 === (2))){
var state_45461__$1 = state_45461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45461__$1,(4),results);
} else {
if((state_val_45462 === (19))){
var state_45461__$1 = state_45461;
var statearr_45474_45536 = state_45461__$1;
(statearr_45474_45536[(2)] = null);

(statearr_45474_45536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (11))){
var inst_45436 = (state_45461[(2)]);
var state_45461__$1 = (function (){var statearr_45475 = state_45461;
(statearr_45475[(10)] = inst_45436);

return statearr_45475;
})();
var statearr_45476_45537 = state_45461__$1;
(statearr_45476_45537[(2)] = null);

(statearr_45476_45537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (9))){
var state_45461__$1 = state_45461;
var statearr_45477_45538 = state_45461__$1;
(statearr_45477_45538[(2)] = null);

(statearr_45477_45538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (5))){
var state_45461__$1 = state_45461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45478_45539 = state_45461__$1;
(statearr_45478_45539[(1)] = (8));

} else {
var statearr_45479_45540 = state_45461__$1;
(statearr_45479_45540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (14))){
var inst_45441 = (state_45461[(11)]);
var inst_45439 = (state_45461[(8)]);
var inst_45439__$1 = (state_45461[(2)]);
var inst_45440 = (inst_45439__$1 == null);
var inst_45441__$1 = cljs.core.not.call(null,inst_45440);
var state_45461__$1 = (function (){var statearr_45480 = state_45461;
(statearr_45480[(11)] = inst_45441__$1);

(statearr_45480[(8)] = inst_45439__$1);

return statearr_45480;
})();
if(inst_45441__$1){
var statearr_45481_45541 = state_45461__$1;
(statearr_45481_45541[(1)] = (15));

} else {
var statearr_45482_45542 = state_45461__$1;
(statearr_45482_45542[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (16))){
var inst_45441 = (state_45461[(11)]);
var state_45461__$1 = state_45461;
var statearr_45483_45543 = state_45461__$1;
(statearr_45483_45543[(2)] = inst_45441);

(statearr_45483_45543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (10))){
var inst_45433 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
var statearr_45484_45544 = state_45461__$1;
(statearr_45484_45544[(2)] = inst_45433);

(statearr_45484_45544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (18))){
var inst_45444 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
var statearr_45485_45545 = state_45461__$1;
(statearr_45485_45545[(2)] = inst_45444);

(statearr_45485_45545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (8))){
var inst_45430 = cljs.core.async.close_BANG_.call(null,to);
var state_45461__$1 = state_45461;
var statearr_45486_45546 = state_45461__$1;
(statearr_45486_45546[(2)] = inst_45430);

(statearr_45486_45546[(1)] = (10));


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
});})(c__45169__auto__,jobs,results,process,async))
;
return ((function (switch__45081__auto__,c__45169__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0 = (function (){
var statearr_45487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__);

(statearr_45487[(1)] = (1));

return statearr_45487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1 = (function (state_45461){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45488){if((e45488 instanceof Object)){
var ex__45085__auto__ = e45488;
var statearr_45489_45547 = state_45461;
(statearr_45489_45547[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45548 = state_45461;
state_45461 = G__45548;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__ = function(state_45461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1.call(this,state_45461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__,jobs,results,process,async))
})();
var state__45171__auto__ = (function (){var statearr_45490 = f__45170__auto__.call(null);
(statearr_45490[(6)] = c__45169__auto__);

return statearr_45490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__,jobs,results,process,async))
);

return c__45169__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45550 = arguments.length;
switch (G__45550) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45553 = arguments.length;
switch (G__45553) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45556 = arguments.length;
switch (G__45556) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__45169__auto___45605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___45605,tc,fc){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___45605,tc,fc){
return (function (state_45582){
var state_val_45583 = (state_45582[(1)]);
if((state_val_45583 === (7))){
var inst_45578 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45584_45606 = state_45582__$1;
(statearr_45584_45606[(2)] = inst_45578);

(statearr_45584_45606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (1))){
var state_45582__$1 = state_45582;
var statearr_45585_45607 = state_45582__$1;
(statearr_45585_45607[(2)] = null);

(statearr_45585_45607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (4))){
var inst_45559 = (state_45582[(7)]);
var inst_45559__$1 = (state_45582[(2)]);
var inst_45560 = (inst_45559__$1 == null);
var state_45582__$1 = (function (){var statearr_45586 = state_45582;
(statearr_45586[(7)] = inst_45559__$1);

return statearr_45586;
})();
if(cljs.core.truth_(inst_45560)){
var statearr_45587_45608 = state_45582__$1;
(statearr_45587_45608[(1)] = (5));

} else {
var statearr_45588_45609 = state_45582__$1;
(statearr_45588_45609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (13))){
var state_45582__$1 = state_45582;
var statearr_45589_45610 = state_45582__$1;
(statearr_45589_45610[(2)] = null);

(statearr_45589_45610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (6))){
var inst_45559 = (state_45582[(7)]);
var inst_45565 = p.call(null,inst_45559);
var state_45582__$1 = state_45582;
if(cljs.core.truth_(inst_45565)){
var statearr_45590_45611 = state_45582__$1;
(statearr_45590_45611[(1)] = (9));

} else {
var statearr_45591_45612 = state_45582__$1;
(statearr_45591_45612[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (3))){
var inst_45580 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45582__$1,inst_45580);
} else {
if((state_val_45583 === (12))){
var state_45582__$1 = state_45582;
var statearr_45592_45613 = state_45582__$1;
(statearr_45592_45613[(2)] = null);

(statearr_45592_45613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (2))){
var state_45582__$1 = state_45582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45582__$1,(4),ch);
} else {
if((state_val_45583 === (11))){
var inst_45559 = (state_45582[(7)]);
var inst_45569 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45582__$1,(8),inst_45569,inst_45559);
} else {
if((state_val_45583 === (9))){
var state_45582__$1 = state_45582;
var statearr_45593_45614 = state_45582__$1;
(statearr_45593_45614[(2)] = tc);

(statearr_45593_45614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (5))){
var inst_45562 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45563 = cljs.core.async.close_BANG_.call(null,fc);
var state_45582__$1 = (function (){var statearr_45594 = state_45582;
(statearr_45594[(8)] = inst_45562);

return statearr_45594;
})();
var statearr_45595_45615 = state_45582__$1;
(statearr_45595_45615[(2)] = inst_45563);

(statearr_45595_45615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (14))){
var inst_45576 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45596_45616 = state_45582__$1;
(statearr_45596_45616[(2)] = inst_45576);

(statearr_45596_45616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (10))){
var state_45582__$1 = state_45582;
var statearr_45597_45617 = state_45582__$1;
(statearr_45597_45617[(2)] = fc);

(statearr_45597_45617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (8))){
var inst_45571 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
if(cljs.core.truth_(inst_45571)){
var statearr_45598_45618 = state_45582__$1;
(statearr_45598_45618[(1)] = (12));

} else {
var statearr_45599_45619 = state_45582__$1;
(statearr_45599_45619[(1)] = (13));

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
});})(c__45169__auto___45605,tc,fc))
;
return ((function (switch__45081__auto__,c__45169__auto___45605,tc,fc){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_45600 = [null,null,null,null,null,null,null,null,null];
(statearr_45600[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_45600[(1)] = (1));

return statearr_45600;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_45582){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45601){if((e45601 instanceof Object)){
var ex__45085__auto__ = e45601;
var statearr_45602_45620 = state_45582;
(statearr_45602_45620[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45621 = state_45582;
state_45582 = G__45621;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_45582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_45582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___45605,tc,fc))
})();
var state__45171__auto__ = (function (){var statearr_45603 = f__45170__auto__.call(null);
(statearr_45603[(6)] = c__45169__auto___45605);

return statearr_45603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___45605,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__){
return (function (state_45642){
var state_val_45643 = (state_45642[(1)]);
if((state_val_45643 === (7))){
var inst_45638 = (state_45642[(2)]);
var state_45642__$1 = state_45642;
var statearr_45644_45662 = state_45642__$1;
(statearr_45644_45662[(2)] = inst_45638);

(statearr_45644_45662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45643 === (1))){
var inst_45622 = init;
var state_45642__$1 = (function (){var statearr_45645 = state_45642;
(statearr_45645[(7)] = inst_45622);

return statearr_45645;
})();
var statearr_45646_45663 = state_45642__$1;
(statearr_45646_45663[(2)] = null);

(statearr_45646_45663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45643 === (4))){
var inst_45625 = (state_45642[(8)]);
var inst_45625__$1 = (state_45642[(2)]);
var inst_45626 = (inst_45625__$1 == null);
var state_45642__$1 = (function (){var statearr_45647 = state_45642;
(statearr_45647[(8)] = inst_45625__$1);

return statearr_45647;
})();
if(cljs.core.truth_(inst_45626)){
var statearr_45648_45664 = state_45642__$1;
(statearr_45648_45664[(1)] = (5));

} else {
var statearr_45649_45665 = state_45642__$1;
(statearr_45649_45665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45643 === (6))){
var inst_45622 = (state_45642[(7)]);
var inst_45625 = (state_45642[(8)]);
var inst_45629 = (state_45642[(9)]);
var inst_45629__$1 = f.call(null,inst_45622,inst_45625);
var inst_45630 = cljs.core.reduced_QMARK_.call(null,inst_45629__$1);
var state_45642__$1 = (function (){var statearr_45650 = state_45642;
(statearr_45650[(9)] = inst_45629__$1);

return statearr_45650;
})();
if(inst_45630){
var statearr_45651_45666 = state_45642__$1;
(statearr_45651_45666[(1)] = (8));

} else {
var statearr_45652_45667 = state_45642__$1;
(statearr_45652_45667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45643 === (3))){
var inst_45640 = (state_45642[(2)]);
var state_45642__$1 = state_45642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45642__$1,inst_45640);
} else {
if((state_val_45643 === (2))){
var state_45642__$1 = state_45642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45642__$1,(4),ch);
} else {
if((state_val_45643 === (9))){
var inst_45629 = (state_45642[(9)]);
var inst_45622 = inst_45629;
var state_45642__$1 = (function (){var statearr_45653 = state_45642;
(statearr_45653[(7)] = inst_45622);

return statearr_45653;
})();
var statearr_45654_45668 = state_45642__$1;
(statearr_45654_45668[(2)] = null);

(statearr_45654_45668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45643 === (5))){
var inst_45622 = (state_45642[(7)]);
var state_45642__$1 = state_45642;
var statearr_45655_45669 = state_45642__$1;
(statearr_45655_45669[(2)] = inst_45622);

(statearr_45655_45669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45643 === (10))){
var inst_45636 = (state_45642[(2)]);
var state_45642__$1 = state_45642;
var statearr_45656_45670 = state_45642__$1;
(statearr_45656_45670[(2)] = inst_45636);

(statearr_45656_45670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45643 === (8))){
var inst_45629 = (state_45642[(9)]);
var inst_45632 = cljs.core.deref.call(null,inst_45629);
var state_45642__$1 = state_45642;
var statearr_45657_45671 = state_45642__$1;
(statearr_45657_45671[(2)] = inst_45632);

(statearr_45657_45671[(1)] = (10));


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
});})(c__45169__auto__))
;
return ((function (switch__45081__auto__,c__45169__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45082__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45082__auto____0 = (function (){
var statearr_45658 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45658[(0)] = cljs$core$async$reduce_$_state_machine__45082__auto__);

(statearr_45658[(1)] = (1));

return statearr_45658;
});
var cljs$core$async$reduce_$_state_machine__45082__auto____1 = (function (state_45642){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45659){if((e45659 instanceof Object)){
var ex__45085__auto__ = e45659;
var statearr_45660_45672 = state_45642;
(statearr_45660_45672[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45673 = state_45642;
state_45642 = G__45673;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45082__auto__ = function(state_45642){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45082__auto____1.call(this,state_45642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45082__auto____0;
cljs$core$async$reduce_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45082__auto____1;
return cljs$core$async$reduce_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__))
})();
var state__45171__auto__ = (function (){var statearr_45661 = f__45170__auto__.call(null);
(statearr_45661[(6)] = c__45169__auto__);

return statearr_45661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__))
);

return c__45169__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__,f__$1){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__,f__$1){
return (function (state_45679){
var state_val_45680 = (state_45679[(1)]);
if((state_val_45680 === (1))){
var inst_45674 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45679__$1,(2),inst_45674);
} else {
if((state_val_45680 === (2))){
var inst_45676 = (state_45679[(2)]);
var inst_45677 = f__$1.call(null,inst_45676);
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45679__$1,inst_45677);
} else {
return null;
}
}
});})(c__45169__auto__,f__$1))
;
return ((function (switch__45081__auto__,c__45169__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45082__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45082__auto____0 = (function (){
var statearr_45681 = [null,null,null,null,null,null,null];
(statearr_45681[(0)] = cljs$core$async$transduce_$_state_machine__45082__auto__);

(statearr_45681[(1)] = (1));

return statearr_45681;
});
var cljs$core$async$transduce_$_state_machine__45082__auto____1 = (function (state_45679){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45682){if((e45682 instanceof Object)){
var ex__45085__auto__ = e45682;
var statearr_45683_45685 = state_45679;
(statearr_45683_45685[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45686 = state_45679;
state_45679 = G__45686;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45082__auto__ = function(state_45679){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45082__auto____1.call(this,state_45679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45082__auto____0;
cljs$core$async$transduce_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45082__auto____1;
return cljs$core$async$transduce_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__,f__$1))
})();
var state__45171__auto__ = (function (){var statearr_45684 = f__45170__auto__.call(null);
(statearr_45684[(6)] = c__45169__auto__);

return statearr_45684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__,f__$1))
);

return c__45169__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45688 = arguments.length;
switch (G__45688) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__){
return (function (state_45713){
var state_val_45714 = (state_45713[(1)]);
if((state_val_45714 === (7))){
var inst_45695 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
var statearr_45715_45736 = state_45713__$1;
(statearr_45715_45736[(2)] = inst_45695);

(statearr_45715_45736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (1))){
var inst_45689 = cljs.core.seq.call(null,coll);
var inst_45690 = inst_45689;
var state_45713__$1 = (function (){var statearr_45716 = state_45713;
(statearr_45716[(7)] = inst_45690);

return statearr_45716;
})();
var statearr_45717_45737 = state_45713__$1;
(statearr_45717_45737[(2)] = null);

(statearr_45717_45737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (4))){
var inst_45690 = (state_45713[(7)]);
var inst_45693 = cljs.core.first.call(null,inst_45690);
var state_45713__$1 = state_45713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45713__$1,(7),ch,inst_45693);
} else {
if((state_val_45714 === (13))){
var inst_45707 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
var statearr_45718_45738 = state_45713__$1;
(statearr_45718_45738[(2)] = inst_45707);

(statearr_45718_45738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (6))){
var inst_45698 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
if(cljs.core.truth_(inst_45698)){
var statearr_45719_45739 = state_45713__$1;
(statearr_45719_45739[(1)] = (8));

} else {
var statearr_45720_45740 = state_45713__$1;
(statearr_45720_45740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (3))){
var inst_45711 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45713__$1,inst_45711);
} else {
if((state_val_45714 === (12))){
var state_45713__$1 = state_45713;
var statearr_45721_45741 = state_45713__$1;
(statearr_45721_45741[(2)] = null);

(statearr_45721_45741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (2))){
var inst_45690 = (state_45713[(7)]);
var state_45713__$1 = state_45713;
if(cljs.core.truth_(inst_45690)){
var statearr_45722_45742 = state_45713__$1;
(statearr_45722_45742[(1)] = (4));

} else {
var statearr_45723_45743 = state_45713__$1;
(statearr_45723_45743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (11))){
var inst_45704 = cljs.core.async.close_BANG_.call(null,ch);
var state_45713__$1 = state_45713;
var statearr_45724_45744 = state_45713__$1;
(statearr_45724_45744[(2)] = inst_45704);

(statearr_45724_45744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (9))){
var state_45713__$1 = state_45713;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45725_45745 = state_45713__$1;
(statearr_45725_45745[(1)] = (11));

} else {
var statearr_45726_45746 = state_45713__$1;
(statearr_45726_45746[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (5))){
var inst_45690 = (state_45713[(7)]);
var state_45713__$1 = state_45713;
var statearr_45727_45747 = state_45713__$1;
(statearr_45727_45747[(2)] = inst_45690);

(statearr_45727_45747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (10))){
var inst_45709 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
var statearr_45728_45748 = state_45713__$1;
(statearr_45728_45748[(2)] = inst_45709);

(statearr_45728_45748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (8))){
var inst_45690 = (state_45713[(7)]);
var inst_45700 = cljs.core.next.call(null,inst_45690);
var inst_45690__$1 = inst_45700;
var state_45713__$1 = (function (){var statearr_45729 = state_45713;
(statearr_45729[(7)] = inst_45690__$1);

return statearr_45729;
})();
var statearr_45730_45749 = state_45713__$1;
(statearr_45730_45749[(2)] = null);

(statearr_45730_45749[(1)] = (2));


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
});})(c__45169__auto__))
;
return ((function (switch__45081__auto__,c__45169__auto__){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_45731 = [null,null,null,null,null,null,null,null];
(statearr_45731[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_45731[(1)] = (1));

return statearr_45731;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_45713){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45732){if((e45732 instanceof Object)){
var ex__45085__auto__ = e45732;
var statearr_45733_45750 = state_45713;
(statearr_45733_45750[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45751 = state_45713;
state_45713 = G__45751;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_45713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_45713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__))
})();
var state__45171__auto__ = (function (){var statearr_45734 = f__45170__auto__.call(null);
(statearr_45734[(6)] = c__45169__auto__);

return statearr_45734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__))
);

return c__45169__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__42866__auto__ = (((_ == null))?null:_);
var m__42867__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,_);
} else {
var m__42867__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__42867__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m,ch);
} else {
var m__42867__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m);
} else {
var m__42867__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45752 = (function (ch,cs,meta45753){
this.ch = ch;
this.cs = cs;
this.meta45753 = meta45753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45754,meta45753__$1){
var self__ = this;
var _45754__$1 = this;
return (new cljs.core.async.t_cljs$core$async45752(self__.ch,self__.cs,meta45753__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45754){
var self__ = this;
var _45754__$1 = this;
return self__.meta45753;
});})(cs))
;

cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45752.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45752.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45753","meta45753",1649805900,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45752";

cljs.core.async.t_cljs$core$async45752.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async45752");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45752 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45752(ch__$1,cs__$1,meta45753){
return (new cljs.core.async.t_cljs$core$async45752(ch__$1,cs__$1,meta45753));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45752(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__45169__auto___45974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___45974,cs,m,dchan,dctr,done){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___45974,cs,m,dchan,dctr,done){
return (function (state_45889){
var state_val_45890 = (state_45889[(1)]);
if((state_val_45890 === (7))){
var inst_45885 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45891_45975 = state_45889__$1;
(statearr_45891_45975[(2)] = inst_45885);

(statearr_45891_45975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (20))){
var inst_45788 = (state_45889[(7)]);
var inst_45800 = cljs.core.first.call(null,inst_45788);
var inst_45801 = cljs.core.nth.call(null,inst_45800,(0),null);
var inst_45802 = cljs.core.nth.call(null,inst_45800,(1),null);
var state_45889__$1 = (function (){var statearr_45892 = state_45889;
(statearr_45892[(8)] = inst_45801);

return statearr_45892;
})();
if(cljs.core.truth_(inst_45802)){
var statearr_45893_45976 = state_45889__$1;
(statearr_45893_45976[(1)] = (22));

} else {
var statearr_45894_45977 = state_45889__$1;
(statearr_45894_45977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (27))){
var inst_45830 = (state_45889[(9)]);
var inst_45757 = (state_45889[(10)]);
var inst_45832 = (state_45889[(11)]);
var inst_45837 = (state_45889[(12)]);
var inst_45837__$1 = cljs.core._nth.call(null,inst_45830,inst_45832);
var inst_45838 = cljs.core.async.put_BANG_.call(null,inst_45837__$1,inst_45757,done);
var state_45889__$1 = (function (){var statearr_45895 = state_45889;
(statearr_45895[(12)] = inst_45837__$1);

return statearr_45895;
})();
if(cljs.core.truth_(inst_45838)){
var statearr_45896_45978 = state_45889__$1;
(statearr_45896_45978[(1)] = (30));

} else {
var statearr_45897_45979 = state_45889__$1;
(statearr_45897_45979[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (1))){
var state_45889__$1 = state_45889;
var statearr_45898_45980 = state_45889__$1;
(statearr_45898_45980[(2)] = null);

(statearr_45898_45980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (24))){
var inst_45788 = (state_45889[(7)]);
var inst_45807 = (state_45889[(2)]);
var inst_45808 = cljs.core.next.call(null,inst_45788);
var inst_45766 = inst_45808;
var inst_45767 = null;
var inst_45768 = (0);
var inst_45769 = (0);
var state_45889__$1 = (function (){var statearr_45899 = state_45889;
(statearr_45899[(13)] = inst_45769);

(statearr_45899[(14)] = inst_45766);

(statearr_45899[(15)] = inst_45807);

(statearr_45899[(16)] = inst_45768);

(statearr_45899[(17)] = inst_45767);

return statearr_45899;
})();
var statearr_45900_45981 = state_45889__$1;
(statearr_45900_45981[(2)] = null);

(statearr_45900_45981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (39))){
var state_45889__$1 = state_45889;
var statearr_45904_45982 = state_45889__$1;
(statearr_45904_45982[(2)] = null);

(statearr_45904_45982[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (4))){
var inst_45757 = (state_45889[(10)]);
var inst_45757__$1 = (state_45889[(2)]);
var inst_45758 = (inst_45757__$1 == null);
var state_45889__$1 = (function (){var statearr_45905 = state_45889;
(statearr_45905[(10)] = inst_45757__$1);

return statearr_45905;
})();
if(cljs.core.truth_(inst_45758)){
var statearr_45906_45983 = state_45889__$1;
(statearr_45906_45983[(1)] = (5));

} else {
var statearr_45907_45984 = state_45889__$1;
(statearr_45907_45984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (15))){
var inst_45769 = (state_45889[(13)]);
var inst_45766 = (state_45889[(14)]);
var inst_45768 = (state_45889[(16)]);
var inst_45767 = (state_45889[(17)]);
var inst_45784 = (state_45889[(2)]);
var inst_45785 = (inst_45769 + (1));
var tmp45901 = inst_45766;
var tmp45902 = inst_45768;
var tmp45903 = inst_45767;
var inst_45766__$1 = tmp45901;
var inst_45767__$1 = tmp45903;
var inst_45768__$1 = tmp45902;
var inst_45769__$1 = inst_45785;
var state_45889__$1 = (function (){var statearr_45908 = state_45889;
(statearr_45908[(13)] = inst_45769__$1);

(statearr_45908[(14)] = inst_45766__$1);

(statearr_45908[(16)] = inst_45768__$1);

(statearr_45908[(17)] = inst_45767__$1);

(statearr_45908[(18)] = inst_45784);

return statearr_45908;
})();
var statearr_45909_45985 = state_45889__$1;
(statearr_45909_45985[(2)] = null);

(statearr_45909_45985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (21))){
var inst_45811 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45913_45986 = state_45889__$1;
(statearr_45913_45986[(2)] = inst_45811);

(statearr_45913_45986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (31))){
var inst_45837 = (state_45889[(12)]);
var inst_45841 = done.call(null,null);
var inst_45842 = cljs.core.async.untap_STAR_.call(null,m,inst_45837);
var state_45889__$1 = (function (){var statearr_45914 = state_45889;
(statearr_45914[(19)] = inst_45841);

return statearr_45914;
})();
var statearr_45915_45987 = state_45889__$1;
(statearr_45915_45987[(2)] = inst_45842);

(statearr_45915_45987[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (32))){
var inst_45830 = (state_45889[(9)]);
var inst_45831 = (state_45889[(20)]);
var inst_45829 = (state_45889[(21)]);
var inst_45832 = (state_45889[(11)]);
var inst_45844 = (state_45889[(2)]);
var inst_45845 = (inst_45832 + (1));
var tmp45910 = inst_45830;
var tmp45911 = inst_45831;
var tmp45912 = inst_45829;
var inst_45829__$1 = tmp45912;
var inst_45830__$1 = tmp45910;
var inst_45831__$1 = tmp45911;
var inst_45832__$1 = inst_45845;
var state_45889__$1 = (function (){var statearr_45916 = state_45889;
(statearr_45916[(9)] = inst_45830__$1);

(statearr_45916[(22)] = inst_45844);

(statearr_45916[(20)] = inst_45831__$1);

(statearr_45916[(21)] = inst_45829__$1);

(statearr_45916[(11)] = inst_45832__$1);

return statearr_45916;
})();
var statearr_45917_45988 = state_45889__$1;
(statearr_45917_45988[(2)] = null);

(statearr_45917_45988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (40))){
var inst_45857 = (state_45889[(23)]);
var inst_45861 = done.call(null,null);
var inst_45862 = cljs.core.async.untap_STAR_.call(null,m,inst_45857);
var state_45889__$1 = (function (){var statearr_45918 = state_45889;
(statearr_45918[(24)] = inst_45861);

return statearr_45918;
})();
var statearr_45919_45989 = state_45889__$1;
(statearr_45919_45989[(2)] = inst_45862);

(statearr_45919_45989[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (33))){
var inst_45848 = (state_45889[(25)]);
var inst_45850 = cljs.core.chunked_seq_QMARK_.call(null,inst_45848);
var state_45889__$1 = state_45889;
if(inst_45850){
var statearr_45920_45990 = state_45889__$1;
(statearr_45920_45990[(1)] = (36));

} else {
var statearr_45921_45991 = state_45889__$1;
(statearr_45921_45991[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (13))){
var inst_45778 = (state_45889[(26)]);
var inst_45781 = cljs.core.async.close_BANG_.call(null,inst_45778);
var state_45889__$1 = state_45889;
var statearr_45922_45992 = state_45889__$1;
(statearr_45922_45992[(2)] = inst_45781);

(statearr_45922_45992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (22))){
var inst_45801 = (state_45889[(8)]);
var inst_45804 = cljs.core.async.close_BANG_.call(null,inst_45801);
var state_45889__$1 = state_45889;
var statearr_45923_45993 = state_45889__$1;
(statearr_45923_45993[(2)] = inst_45804);

(statearr_45923_45993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (36))){
var inst_45848 = (state_45889[(25)]);
var inst_45852 = cljs.core.chunk_first.call(null,inst_45848);
var inst_45853 = cljs.core.chunk_rest.call(null,inst_45848);
var inst_45854 = cljs.core.count.call(null,inst_45852);
var inst_45829 = inst_45853;
var inst_45830 = inst_45852;
var inst_45831 = inst_45854;
var inst_45832 = (0);
var state_45889__$1 = (function (){var statearr_45924 = state_45889;
(statearr_45924[(9)] = inst_45830);

(statearr_45924[(20)] = inst_45831);

(statearr_45924[(21)] = inst_45829);

(statearr_45924[(11)] = inst_45832);

return statearr_45924;
})();
var statearr_45925_45994 = state_45889__$1;
(statearr_45925_45994[(2)] = null);

(statearr_45925_45994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (41))){
var inst_45848 = (state_45889[(25)]);
var inst_45864 = (state_45889[(2)]);
var inst_45865 = cljs.core.next.call(null,inst_45848);
var inst_45829 = inst_45865;
var inst_45830 = null;
var inst_45831 = (0);
var inst_45832 = (0);
var state_45889__$1 = (function (){var statearr_45926 = state_45889;
(statearr_45926[(9)] = inst_45830);

(statearr_45926[(20)] = inst_45831);

(statearr_45926[(27)] = inst_45864);

(statearr_45926[(21)] = inst_45829);

(statearr_45926[(11)] = inst_45832);

return statearr_45926;
})();
var statearr_45927_45995 = state_45889__$1;
(statearr_45927_45995[(2)] = null);

(statearr_45927_45995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (43))){
var state_45889__$1 = state_45889;
var statearr_45928_45996 = state_45889__$1;
(statearr_45928_45996[(2)] = null);

(statearr_45928_45996[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (29))){
var inst_45873 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45929_45997 = state_45889__$1;
(statearr_45929_45997[(2)] = inst_45873);

(statearr_45929_45997[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (44))){
var inst_45882 = (state_45889[(2)]);
var state_45889__$1 = (function (){var statearr_45930 = state_45889;
(statearr_45930[(28)] = inst_45882);

return statearr_45930;
})();
var statearr_45931_45998 = state_45889__$1;
(statearr_45931_45998[(2)] = null);

(statearr_45931_45998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (6))){
var inst_45821 = (state_45889[(29)]);
var inst_45820 = cljs.core.deref.call(null,cs);
var inst_45821__$1 = cljs.core.keys.call(null,inst_45820);
var inst_45822 = cljs.core.count.call(null,inst_45821__$1);
var inst_45823 = cljs.core.reset_BANG_.call(null,dctr,inst_45822);
var inst_45828 = cljs.core.seq.call(null,inst_45821__$1);
var inst_45829 = inst_45828;
var inst_45830 = null;
var inst_45831 = (0);
var inst_45832 = (0);
var state_45889__$1 = (function (){var statearr_45932 = state_45889;
(statearr_45932[(9)] = inst_45830);

(statearr_45932[(20)] = inst_45831);

(statearr_45932[(30)] = inst_45823);

(statearr_45932[(21)] = inst_45829);

(statearr_45932[(11)] = inst_45832);

(statearr_45932[(29)] = inst_45821__$1);

return statearr_45932;
})();
var statearr_45933_45999 = state_45889__$1;
(statearr_45933_45999[(2)] = null);

(statearr_45933_45999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (28))){
var inst_45829 = (state_45889[(21)]);
var inst_45848 = (state_45889[(25)]);
var inst_45848__$1 = cljs.core.seq.call(null,inst_45829);
var state_45889__$1 = (function (){var statearr_45934 = state_45889;
(statearr_45934[(25)] = inst_45848__$1);

return statearr_45934;
})();
if(inst_45848__$1){
var statearr_45935_46000 = state_45889__$1;
(statearr_45935_46000[(1)] = (33));

} else {
var statearr_45936_46001 = state_45889__$1;
(statearr_45936_46001[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (25))){
var inst_45831 = (state_45889[(20)]);
var inst_45832 = (state_45889[(11)]);
var inst_45834 = (inst_45832 < inst_45831);
var inst_45835 = inst_45834;
var state_45889__$1 = state_45889;
if(cljs.core.truth_(inst_45835)){
var statearr_45937_46002 = state_45889__$1;
(statearr_45937_46002[(1)] = (27));

} else {
var statearr_45938_46003 = state_45889__$1;
(statearr_45938_46003[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (34))){
var state_45889__$1 = state_45889;
var statearr_45939_46004 = state_45889__$1;
(statearr_45939_46004[(2)] = null);

(statearr_45939_46004[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (17))){
var state_45889__$1 = state_45889;
var statearr_45940_46005 = state_45889__$1;
(statearr_45940_46005[(2)] = null);

(statearr_45940_46005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (3))){
var inst_45887 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45889__$1,inst_45887);
} else {
if((state_val_45890 === (12))){
var inst_45816 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45941_46006 = state_45889__$1;
(statearr_45941_46006[(2)] = inst_45816);

(statearr_45941_46006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (2))){
var state_45889__$1 = state_45889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45889__$1,(4),ch);
} else {
if((state_val_45890 === (23))){
var state_45889__$1 = state_45889;
var statearr_45942_46007 = state_45889__$1;
(statearr_45942_46007[(2)] = null);

(statearr_45942_46007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (35))){
var inst_45871 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45943_46008 = state_45889__$1;
(statearr_45943_46008[(2)] = inst_45871);

(statearr_45943_46008[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (19))){
var inst_45788 = (state_45889[(7)]);
var inst_45792 = cljs.core.chunk_first.call(null,inst_45788);
var inst_45793 = cljs.core.chunk_rest.call(null,inst_45788);
var inst_45794 = cljs.core.count.call(null,inst_45792);
var inst_45766 = inst_45793;
var inst_45767 = inst_45792;
var inst_45768 = inst_45794;
var inst_45769 = (0);
var state_45889__$1 = (function (){var statearr_45944 = state_45889;
(statearr_45944[(13)] = inst_45769);

(statearr_45944[(14)] = inst_45766);

(statearr_45944[(16)] = inst_45768);

(statearr_45944[(17)] = inst_45767);

return statearr_45944;
})();
var statearr_45945_46009 = state_45889__$1;
(statearr_45945_46009[(2)] = null);

(statearr_45945_46009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (11))){
var inst_45766 = (state_45889[(14)]);
var inst_45788 = (state_45889[(7)]);
var inst_45788__$1 = cljs.core.seq.call(null,inst_45766);
var state_45889__$1 = (function (){var statearr_45946 = state_45889;
(statearr_45946[(7)] = inst_45788__$1);

return statearr_45946;
})();
if(inst_45788__$1){
var statearr_45947_46010 = state_45889__$1;
(statearr_45947_46010[(1)] = (16));

} else {
var statearr_45948_46011 = state_45889__$1;
(statearr_45948_46011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (9))){
var inst_45818 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45949_46012 = state_45889__$1;
(statearr_45949_46012[(2)] = inst_45818);

(statearr_45949_46012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (5))){
var inst_45764 = cljs.core.deref.call(null,cs);
var inst_45765 = cljs.core.seq.call(null,inst_45764);
var inst_45766 = inst_45765;
var inst_45767 = null;
var inst_45768 = (0);
var inst_45769 = (0);
var state_45889__$1 = (function (){var statearr_45950 = state_45889;
(statearr_45950[(13)] = inst_45769);

(statearr_45950[(14)] = inst_45766);

(statearr_45950[(16)] = inst_45768);

(statearr_45950[(17)] = inst_45767);

return statearr_45950;
})();
var statearr_45951_46013 = state_45889__$1;
(statearr_45951_46013[(2)] = null);

(statearr_45951_46013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (14))){
var state_45889__$1 = state_45889;
var statearr_45952_46014 = state_45889__$1;
(statearr_45952_46014[(2)] = null);

(statearr_45952_46014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (45))){
var inst_45879 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45953_46015 = state_45889__$1;
(statearr_45953_46015[(2)] = inst_45879);

(statearr_45953_46015[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (26))){
var inst_45821 = (state_45889[(29)]);
var inst_45875 = (state_45889[(2)]);
var inst_45876 = cljs.core.seq.call(null,inst_45821);
var state_45889__$1 = (function (){var statearr_45954 = state_45889;
(statearr_45954[(31)] = inst_45875);

return statearr_45954;
})();
if(inst_45876){
var statearr_45955_46016 = state_45889__$1;
(statearr_45955_46016[(1)] = (42));

} else {
var statearr_45956_46017 = state_45889__$1;
(statearr_45956_46017[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (16))){
var inst_45788 = (state_45889[(7)]);
var inst_45790 = cljs.core.chunked_seq_QMARK_.call(null,inst_45788);
var state_45889__$1 = state_45889;
if(inst_45790){
var statearr_45957_46018 = state_45889__$1;
(statearr_45957_46018[(1)] = (19));

} else {
var statearr_45958_46019 = state_45889__$1;
(statearr_45958_46019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (38))){
var inst_45868 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45959_46020 = state_45889__$1;
(statearr_45959_46020[(2)] = inst_45868);

(statearr_45959_46020[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (30))){
var state_45889__$1 = state_45889;
var statearr_45960_46021 = state_45889__$1;
(statearr_45960_46021[(2)] = null);

(statearr_45960_46021[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (10))){
var inst_45769 = (state_45889[(13)]);
var inst_45767 = (state_45889[(17)]);
var inst_45777 = cljs.core._nth.call(null,inst_45767,inst_45769);
var inst_45778 = cljs.core.nth.call(null,inst_45777,(0),null);
var inst_45779 = cljs.core.nth.call(null,inst_45777,(1),null);
var state_45889__$1 = (function (){var statearr_45961 = state_45889;
(statearr_45961[(26)] = inst_45778);

return statearr_45961;
})();
if(cljs.core.truth_(inst_45779)){
var statearr_45962_46022 = state_45889__$1;
(statearr_45962_46022[(1)] = (13));

} else {
var statearr_45963_46023 = state_45889__$1;
(statearr_45963_46023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (18))){
var inst_45814 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45964_46024 = state_45889__$1;
(statearr_45964_46024[(2)] = inst_45814);

(statearr_45964_46024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (42))){
var state_45889__$1 = state_45889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45889__$1,(45),dchan);
} else {
if((state_val_45890 === (37))){
var inst_45857 = (state_45889[(23)]);
var inst_45757 = (state_45889[(10)]);
var inst_45848 = (state_45889[(25)]);
var inst_45857__$1 = cljs.core.first.call(null,inst_45848);
var inst_45858 = cljs.core.async.put_BANG_.call(null,inst_45857__$1,inst_45757,done);
var state_45889__$1 = (function (){var statearr_45965 = state_45889;
(statearr_45965[(23)] = inst_45857__$1);

return statearr_45965;
})();
if(cljs.core.truth_(inst_45858)){
var statearr_45966_46025 = state_45889__$1;
(statearr_45966_46025[(1)] = (39));

} else {
var statearr_45967_46026 = state_45889__$1;
(statearr_45967_46026[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (8))){
var inst_45769 = (state_45889[(13)]);
var inst_45768 = (state_45889[(16)]);
var inst_45771 = (inst_45769 < inst_45768);
var inst_45772 = inst_45771;
var state_45889__$1 = state_45889;
if(cljs.core.truth_(inst_45772)){
var statearr_45968_46027 = state_45889__$1;
(statearr_45968_46027[(1)] = (10));

} else {
var statearr_45969_46028 = state_45889__$1;
(statearr_45969_46028[(1)] = (11));

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
});})(c__45169__auto___45974,cs,m,dchan,dctr,done))
;
return ((function (switch__45081__auto__,c__45169__auto___45974,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45082__auto__ = null;
var cljs$core$async$mult_$_state_machine__45082__auto____0 = (function (){
var statearr_45970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45970[(0)] = cljs$core$async$mult_$_state_machine__45082__auto__);

(statearr_45970[(1)] = (1));

return statearr_45970;
});
var cljs$core$async$mult_$_state_machine__45082__auto____1 = (function (state_45889){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_45889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e45971){if((e45971 instanceof Object)){
var ex__45085__auto__ = e45971;
var statearr_45972_46029 = state_45889;
(statearr_45972_46029[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46030 = state_45889;
state_45889 = G__46030;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45082__auto__ = function(state_45889){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45082__auto____1.call(this,state_45889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45082__auto____0;
cljs$core$async$mult_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45082__auto____1;
return cljs$core$async$mult_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___45974,cs,m,dchan,dctr,done))
})();
var state__45171__auto__ = (function (){var statearr_45973 = f__45170__auto__.call(null);
(statearr_45973[(6)] = c__45169__auto___45974);

return statearr_45973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___45974,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46032 = arguments.length;
switch (G__46032) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m,ch);
} else {
var m__42867__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m,ch);
} else {
var m__42867__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m);
} else {
var m__42867__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m,state_map);
} else {
var m__42867__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__42866__auto__ = (((m == null))?null:m);
var m__42867__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,m,mode);
} else {
var m__42867__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__43361__auto__ = [];
var len__43354__auto___46044 = arguments.length;
var i__43355__auto___46045 = (0);
while(true){
if((i__43355__auto___46045 < len__43354__auto___46044)){
args__43361__auto__.push((arguments[i__43355__auto___46045]));

var G__46046 = (i__43355__auto___46045 + (1));
i__43355__auto___46045 = G__46046;
continue;
} else {
}
break;
}

var argseq__43362__auto__ = ((((3) < args__43361__auto__.length))?(new cljs.core.IndexedSeq(args__43361__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__43362__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46038){
var map__46039 = p__46038;
var map__46039__$1 = ((((!((map__46039 == null)))?((((map__46039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46039):map__46039);
var opts = map__46039__$1;
var statearr_46041_46047 = state;
(statearr_46041_46047[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46039,map__46039__$1,opts){
return (function (val){
var statearr_46042_46048 = state;
(statearr_46042_46048[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46039,map__46039__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46043_46049 = state;
(statearr_46043_46049[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46034){
var G__46035 = cljs.core.first.call(null,seq46034);
var seq46034__$1 = cljs.core.next.call(null,seq46034);
var G__46036 = cljs.core.first.call(null,seq46034__$1);
var seq46034__$2 = cljs.core.next.call(null,seq46034__$1);
var G__46037 = cljs.core.first.call(null,seq46034__$2);
var seq46034__$3 = cljs.core.next.call(null,seq46034__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46035,G__46036,G__46037,seq46034__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46050 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46051){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46051 = meta46051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46052,meta46051__$1){
var self__ = this;
var _46052__$1 = this;
return (new cljs.core.async.t_cljs$core$async46050(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46051__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46052){
var self__ = this;
var _46052__$1 = this;
return self__.meta46051;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46051","meta46051",1611144731,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46050";

cljs.core.async.t_cljs$core$async46050.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async46050");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46050 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46050(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46051){
return (new cljs.core.async.t_cljs$core$async46050(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46051));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46050(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45169__auto___46214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46154){
var state_val_46155 = (state_46154[(1)]);
if((state_val_46155 === (7))){
var inst_46069 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
var statearr_46156_46215 = state_46154__$1;
(statearr_46156_46215[(2)] = inst_46069);

(statearr_46156_46215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (20))){
var inst_46081 = (state_46154[(7)]);
var state_46154__$1 = state_46154;
var statearr_46157_46216 = state_46154__$1;
(statearr_46157_46216[(2)] = inst_46081);

(statearr_46157_46216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (27))){
var state_46154__$1 = state_46154;
var statearr_46158_46217 = state_46154__$1;
(statearr_46158_46217[(2)] = null);

(statearr_46158_46217[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (1))){
var inst_46056 = (state_46154[(8)]);
var inst_46056__$1 = calc_state.call(null);
var inst_46058 = (inst_46056__$1 == null);
var inst_46059 = cljs.core.not.call(null,inst_46058);
var state_46154__$1 = (function (){var statearr_46159 = state_46154;
(statearr_46159[(8)] = inst_46056__$1);

return statearr_46159;
})();
if(inst_46059){
var statearr_46160_46218 = state_46154__$1;
(statearr_46160_46218[(1)] = (2));

} else {
var statearr_46161_46219 = state_46154__$1;
(statearr_46161_46219[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (24))){
var inst_46105 = (state_46154[(9)]);
var inst_46128 = (state_46154[(10)]);
var inst_46114 = (state_46154[(11)]);
var inst_46128__$1 = inst_46105.call(null,inst_46114);
var state_46154__$1 = (function (){var statearr_46162 = state_46154;
(statearr_46162[(10)] = inst_46128__$1);

return statearr_46162;
})();
if(cljs.core.truth_(inst_46128__$1)){
var statearr_46163_46220 = state_46154__$1;
(statearr_46163_46220[(1)] = (29));

} else {
var statearr_46164_46221 = state_46154__$1;
(statearr_46164_46221[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (4))){
var inst_46072 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46072)){
var statearr_46165_46222 = state_46154__$1;
(statearr_46165_46222[(1)] = (8));

} else {
var statearr_46166_46223 = state_46154__$1;
(statearr_46166_46223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (15))){
var inst_46099 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46099)){
var statearr_46167_46224 = state_46154__$1;
(statearr_46167_46224[(1)] = (19));

} else {
var statearr_46168_46225 = state_46154__$1;
(statearr_46168_46225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (21))){
var inst_46104 = (state_46154[(12)]);
var inst_46104__$1 = (state_46154[(2)]);
var inst_46105 = cljs.core.get.call(null,inst_46104__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46106 = cljs.core.get.call(null,inst_46104__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46107 = cljs.core.get.call(null,inst_46104__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46154__$1 = (function (){var statearr_46169 = state_46154;
(statearr_46169[(9)] = inst_46105);

(statearr_46169[(12)] = inst_46104__$1);

(statearr_46169[(13)] = inst_46106);

return statearr_46169;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46154__$1,(22),inst_46107);
} else {
if((state_val_46155 === (31))){
var inst_46136 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46136)){
var statearr_46170_46226 = state_46154__$1;
(statearr_46170_46226[(1)] = (32));

} else {
var statearr_46171_46227 = state_46154__$1;
(statearr_46171_46227[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (32))){
var inst_46113 = (state_46154[(14)]);
var state_46154__$1 = state_46154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46154__$1,(35),out,inst_46113);
} else {
if((state_val_46155 === (33))){
var inst_46104 = (state_46154[(12)]);
var inst_46081 = inst_46104;
var state_46154__$1 = (function (){var statearr_46172 = state_46154;
(statearr_46172[(7)] = inst_46081);

return statearr_46172;
})();
var statearr_46173_46228 = state_46154__$1;
(statearr_46173_46228[(2)] = null);

(statearr_46173_46228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (13))){
var inst_46081 = (state_46154[(7)]);
var inst_46088 = inst_46081.cljs$lang$protocol_mask$partition0$;
var inst_46089 = (inst_46088 & (64));
var inst_46090 = inst_46081.cljs$core$ISeq$;
var inst_46091 = (cljs.core.PROTOCOL_SENTINEL === inst_46090);
var inst_46092 = (inst_46089) || (inst_46091);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46092)){
var statearr_46174_46229 = state_46154__$1;
(statearr_46174_46229[(1)] = (16));

} else {
var statearr_46175_46230 = state_46154__$1;
(statearr_46175_46230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (22))){
var inst_46113 = (state_46154[(14)]);
var inst_46114 = (state_46154[(11)]);
var inst_46112 = (state_46154[(2)]);
var inst_46113__$1 = cljs.core.nth.call(null,inst_46112,(0),null);
var inst_46114__$1 = cljs.core.nth.call(null,inst_46112,(1),null);
var inst_46115 = (inst_46113__$1 == null);
var inst_46116 = cljs.core._EQ_.call(null,inst_46114__$1,change);
var inst_46117 = (inst_46115) || (inst_46116);
var state_46154__$1 = (function (){var statearr_46176 = state_46154;
(statearr_46176[(14)] = inst_46113__$1);

(statearr_46176[(11)] = inst_46114__$1);

return statearr_46176;
})();
if(cljs.core.truth_(inst_46117)){
var statearr_46177_46231 = state_46154__$1;
(statearr_46177_46231[(1)] = (23));

} else {
var statearr_46178_46232 = state_46154__$1;
(statearr_46178_46232[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (36))){
var inst_46104 = (state_46154[(12)]);
var inst_46081 = inst_46104;
var state_46154__$1 = (function (){var statearr_46179 = state_46154;
(statearr_46179[(7)] = inst_46081);

return statearr_46179;
})();
var statearr_46180_46233 = state_46154__$1;
(statearr_46180_46233[(2)] = null);

(statearr_46180_46233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (29))){
var inst_46128 = (state_46154[(10)]);
var state_46154__$1 = state_46154;
var statearr_46181_46234 = state_46154__$1;
(statearr_46181_46234[(2)] = inst_46128);

(statearr_46181_46234[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (6))){
var state_46154__$1 = state_46154;
var statearr_46182_46235 = state_46154__$1;
(statearr_46182_46235[(2)] = false);

(statearr_46182_46235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (28))){
var inst_46124 = (state_46154[(2)]);
var inst_46125 = calc_state.call(null);
var inst_46081 = inst_46125;
var state_46154__$1 = (function (){var statearr_46183 = state_46154;
(statearr_46183[(15)] = inst_46124);

(statearr_46183[(7)] = inst_46081);

return statearr_46183;
})();
var statearr_46184_46236 = state_46154__$1;
(statearr_46184_46236[(2)] = null);

(statearr_46184_46236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (25))){
var inst_46150 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
var statearr_46185_46237 = state_46154__$1;
(statearr_46185_46237[(2)] = inst_46150);

(statearr_46185_46237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (34))){
var inst_46148 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
var statearr_46186_46238 = state_46154__$1;
(statearr_46186_46238[(2)] = inst_46148);

(statearr_46186_46238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (17))){
var state_46154__$1 = state_46154;
var statearr_46187_46239 = state_46154__$1;
(statearr_46187_46239[(2)] = false);

(statearr_46187_46239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (3))){
var state_46154__$1 = state_46154;
var statearr_46188_46240 = state_46154__$1;
(statearr_46188_46240[(2)] = false);

(statearr_46188_46240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (12))){
var inst_46152 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46154__$1,inst_46152);
} else {
if((state_val_46155 === (2))){
var inst_46056 = (state_46154[(8)]);
var inst_46061 = inst_46056.cljs$lang$protocol_mask$partition0$;
var inst_46062 = (inst_46061 & (64));
var inst_46063 = inst_46056.cljs$core$ISeq$;
var inst_46064 = (cljs.core.PROTOCOL_SENTINEL === inst_46063);
var inst_46065 = (inst_46062) || (inst_46064);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46065)){
var statearr_46189_46241 = state_46154__$1;
(statearr_46189_46241[(1)] = (5));

} else {
var statearr_46190_46242 = state_46154__$1;
(statearr_46190_46242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (23))){
var inst_46113 = (state_46154[(14)]);
var inst_46119 = (inst_46113 == null);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46119)){
var statearr_46191_46243 = state_46154__$1;
(statearr_46191_46243[(1)] = (26));

} else {
var statearr_46192_46244 = state_46154__$1;
(statearr_46192_46244[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (35))){
var inst_46139 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46139)){
var statearr_46193_46245 = state_46154__$1;
(statearr_46193_46245[(1)] = (36));

} else {
var statearr_46194_46246 = state_46154__$1;
(statearr_46194_46246[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (19))){
var inst_46081 = (state_46154[(7)]);
var inst_46101 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46081);
var state_46154__$1 = state_46154;
var statearr_46195_46247 = state_46154__$1;
(statearr_46195_46247[(2)] = inst_46101);

(statearr_46195_46247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (11))){
var inst_46081 = (state_46154[(7)]);
var inst_46085 = (inst_46081 == null);
var inst_46086 = cljs.core.not.call(null,inst_46085);
var state_46154__$1 = state_46154;
if(inst_46086){
var statearr_46196_46248 = state_46154__$1;
(statearr_46196_46248[(1)] = (13));

} else {
var statearr_46197_46249 = state_46154__$1;
(statearr_46197_46249[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (9))){
var inst_46056 = (state_46154[(8)]);
var state_46154__$1 = state_46154;
var statearr_46198_46250 = state_46154__$1;
(statearr_46198_46250[(2)] = inst_46056);

(statearr_46198_46250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (5))){
var state_46154__$1 = state_46154;
var statearr_46199_46251 = state_46154__$1;
(statearr_46199_46251[(2)] = true);

(statearr_46199_46251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (14))){
var state_46154__$1 = state_46154;
var statearr_46200_46252 = state_46154__$1;
(statearr_46200_46252[(2)] = false);

(statearr_46200_46252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (26))){
var inst_46114 = (state_46154[(11)]);
var inst_46121 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46114);
var state_46154__$1 = state_46154;
var statearr_46201_46253 = state_46154__$1;
(statearr_46201_46253[(2)] = inst_46121);

(statearr_46201_46253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (16))){
var state_46154__$1 = state_46154;
var statearr_46202_46254 = state_46154__$1;
(statearr_46202_46254[(2)] = true);

(statearr_46202_46254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (38))){
var inst_46144 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
var statearr_46203_46255 = state_46154__$1;
(statearr_46203_46255[(2)] = inst_46144);

(statearr_46203_46255[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (30))){
var inst_46105 = (state_46154[(9)]);
var inst_46106 = (state_46154[(13)]);
var inst_46114 = (state_46154[(11)]);
var inst_46131 = cljs.core.empty_QMARK_.call(null,inst_46105);
var inst_46132 = inst_46106.call(null,inst_46114);
var inst_46133 = cljs.core.not.call(null,inst_46132);
var inst_46134 = (inst_46131) && (inst_46133);
var state_46154__$1 = state_46154;
var statearr_46204_46256 = state_46154__$1;
(statearr_46204_46256[(2)] = inst_46134);

(statearr_46204_46256[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (10))){
var inst_46056 = (state_46154[(8)]);
var inst_46077 = (state_46154[(2)]);
var inst_46078 = cljs.core.get.call(null,inst_46077,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46079 = cljs.core.get.call(null,inst_46077,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46080 = cljs.core.get.call(null,inst_46077,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46081 = inst_46056;
var state_46154__$1 = (function (){var statearr_46205 = state_46154;
(statearr_46205[(16)] = inst_46080);

(statearr_46205[(17)] = inst_46079);

(statearr_46205[(18)] = inst_46078);

(statearr_46205[(7)] = inst_46081);

return statearr_46205;
})();
var statearr_46206_46257 = state_46154__$1;
(statearr_46206_46257[(2)] = null);

(statearr_46206_46257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (18))){
var inst_46096 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
var statearr_46207_46258 = state_46154__$1;
(statearr_46207_46258[(2)] = inst_46096);

(statearr_46207_46258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (37))){
var state_46154__$1 = state_46154;
var statearr_46208_46259 = state_46154__$1;
(statearr_46208_46259[(2)] = null);

(statearr_46208_46259[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (8))){
var inst_46056 = (state_46154[(8)]);
var inst_46074 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46056);
var state_46154__$1 = state_46154;
var statearr_46209_46260 = state_46154__$1;
(statearr_46209_46260[(2)] = inst_46074);

(statearr_46209_46260[(1)] = (10));


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
});})(c__45169__auto___46214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45081__auto__,c__45169__auto___46214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45082__auto__ = null;
var cljs$core$async$mix_$_state_machine__45082__auto____0 = (function (){
var statearr_46210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46210[(0)] = cljs$core$async$mix_$_state_machine__45082__auto__);

(statearr_46210[(1)] = (1));

return statearr_46210;
});
var cljs$core$async$mix_$_state_machine__45082__auto____1 = (function (state_46154){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46211){if((e46211 instanceof Object)){
var ex__45085__auto__ = e46211;
var statearr_46212_46261 = state_46154;
(statearr_46212_46261[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46262 = state_46154;
state_46154 = G__46262;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45082__auto__ = function(state_46154){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45082__auto____1.call(this,state_46154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45082__auto____0;
cljs$core$async$mix_$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45082__auto____1;
return cljs$core$async$mix_$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45171__auto__ = (function (){var statearr_46213 = f__45170__auto__.call(null);
(statearr_46213[(6)] = c__45169__auto___46214);

return statearr_46213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__42866__auto__ = (((p == null))?null:p);
var m__42867__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__42867__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__42866__auto__ = (((p == null))?null:p);
var m__42867__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,p,v,ch);
} else {
var m__42867__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46264 = arguments.length;
switch (G__46264) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__42866__auto__ = (((p == null))?null:p);
var m__42867__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,p);
} else {
var m__42867__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__42866__auto__ = (((p == null))?null:p);
var m__42867__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42866__auto__)]);
if(!((m__42867__auto__ == null))){
return m__42867__auto__.call(null,p,v);
} else {
var m__42867__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42867__auto____$1 == null))){
return m__42867__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46268 = arguments.length;
switch (G__46268) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__42183__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__42183__auto__)){
return or__42183__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__42183__auto__,mults){
return (function (p1__46266_SHARP_){
if(cljs.core.truth_(p1__46266_SHARP_.call(null,topic))){
return p1__46266_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46266_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__42183__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46269 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46270){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46270 = meta46270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46271,meta46270__$1){
var self__ = this;
var _46271__$1 = this;
return (new cljs.core.async.t_cljs$core$async46269(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46270__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46271){
var self__ = this;
var _46271__$1 = this;
return self__.meta46270;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46270","meta46270",-1814830819,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46269";

cljs.core.async.t_cljs$core$async46269.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async46269");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46269 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46269(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46270){
return (new cljs.core.async.t_cljs$core$async46269(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46270));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46269(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45169__auto___46389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46389,mults,ensure_mult,p){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46389,mults,ensure_mult,p){
return (function (state_46343){
var state_val_46344 = (state_46343[(1)]);
if((state_val_46344 === (7))){
var inst_46339 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46345_46390 = state_46343__$1;
(statearr_46345_46390[(2)] = inst_46339);

(statearr_46345_46390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (20))){
var state_46343__$1 = state_46343;
var statearr_46346_46391 = state_46343__$1;
(statearr_46346_46391[(2)] = null);

(statearr_46346_46391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (1))){
var state_46343__$1 = state_46343;
var statearr_46347_46392 = state_46343__$1;
(statearr_46347_46392[(2)] = null);

(statearr_46347_46392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (24))){
var inst_46322 = (state_46343[(7)]);
var inst_46331 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46322);
var state_46343__$1 = state_46343;
var statearr_46348_46393 = state_46343__$1;
(statearr_46348_46393[(2)] = inst_46331);

(statearr_46348_46393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (4))){
var inst_46274 = (state_46343[(8)]);
var inst_46274__$1 = (state_46343[(2)]);
var inst_46275 = (inst_46274__$1 == null);
var state_46343__$1 = (function (){var statearr_46349 = state_46343;
(statearr_46349[(8)] = inst_46274__$1);

return statearr_46349;
})();
if(cljs.core.truth_(inst_46275)){
var statearr_46350_46394 = state_46343__$1;
(statearr_46350_46394[(1)] = (5));

} else {
var statearr_46351_46395 = state_46343__$1;
(statearr_46351_46395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (15))){
var inst_46316 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46352_46396 = state_46343__$1;
(statearr_46352_46396[(2)] = inst_46316);

(statearr_46352_46396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (21))){
var inst_46336 = (state_46343[(2)]);
var state_46343__$1 = (function (){var statearr_46353 = state_46343;
(statearr_46353[(9)] = inst_46336);

return statearr_46353;
})();
var statearr_46354_46397 = state_46343__$1;
(statearr_46354_46397[(2)] = null);

(statearr_46354_46397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (13))){
var inst_46298 = (state_46343[(10)]);
var inst_46300 = cljs.core.chunked_seq_QMARK_.call(null,inst_46298);
var state_46343__$1 = state_46343;
if(inst_46300){
var statearr_46355_46398 = state_46343__$1;
(statearr_46355_46398[(1)] = (16));

} else {
var statearr_46356_46399 = state_46343__$1;
(statearr_46356_46399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (22))){
var inst_46328 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
if(cljs.core.truth_(inst_46328)){
var statearr_46357_46400 = state_46343__$1;
(statearr_46357_46400[(1)] = (23));

} else {
var statearr_46358_46401 = state_46343__$1;
(statearr_46358_46401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (6))){
var inst_46274 = (state_46343[(8)]);
var inst_46324 = (state_46343[(11)]);
var inst_46322 = (state_46343[(7)]);
var inst_46322__$1 = topic_fn.call(null,inst_46274);
var inst_46323 = cljs.core.deref.call(null,mults);
var inst_46324__$1 = cljs.core.get.call(null,inst_46323,inst_46322__$1);
var state_46343__$1 = (function (){var statearr_46359 = state_46343;
(statearr_46359[(11)] = inst_46324__$1);

(statearr_46359[(7)] = inst_46322__$1);

return statearr_46359;
})();
if(cljs.core.truth_(inst_46324__$1)){
var statearr_46360_46402 = state_46343__$1;
(statearr_46360_46402[(1)] = (19));

} else {
var statearr_46361_46403 = state_46343__$1;
(statearr_46361_46403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (25))){
var inst_46333 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46362_46404 = state_46343__$1;
(statearr_46362_46404[(2)] = inst_46333);

(statearr_46362_46404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (17))){
var inst_46298 = (state_46343[(10)]);
var inst_46307 = cljs.core.first.call(null,inst_46298);
var inst_46308 = cljs.core.async.muxch_STAR_.call(null,inst_46307);
var inst_46309 = cljs.core.async.close_BANG_.call(null,inst_46308);
var inst_46310 = cljs.core.next.call(null,inst_46298);
var inst_46284 = inst_46310;
var inst_46285 = null;
var inst_46286 = (0);
var inst_46287 = (0);
var state_46343__$1 = (function (){var statearr_46363 = state_46343;
(statearr_46363[(12)] = inst_46284);

(statearr_46363[(13)] = inst_46285);

(statearr_46363[(14)] = inst_46309);

(statearr_46363[(15)] = inst_46287);

(statearr_46363[(16)] = inst_46286);

return statearr_46363;
})();
var statearr_46364_46405 = state_46343__$1;
(statearr_46364_46405[(2)] = null);

(statearr_46364_46405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (3))){
var inst_46341 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46343__$1,inst_46341);
} else {
if((state_val_46344 === (12))){
var inst_46318 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46365_46406 = state_46343__$1;
(statearr_46365_46406[(2)] = inst_46318);

(statearr_46365_46406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (2))){
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46343__$1,(4),ch);
} else {
if((state_val_46344 === (23))){
var state_46343__$1 = state_46343;
var statearr_46366_46407 = state_46343__$1;
(statearr_46366_46407[(2)] = null);

(statearr_46366_46407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (19))){
var inst_46274 = (state_46343[(8)]);
var inst_46324 = (state_46343[(11)]);
var inst_46326 = cljs.core.async.muxch_STAR_.call(null,inst_46324);
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46343__$1,(22),inst_46326,inst_46274);
} else {
if((state_val_46344 === (11))){
var inst_46284 = (state_46343[(12)]);
var inst_46298 = (state_46343[(10)]);
var inst_46298__$1 = cljs.core.seq.call(null,inst_46284);
var state_46343__$1 = (function (){var statearr_46367 = state_46343;
(statearr_46367[(10)] = inst_46298__$1);

return statearr_46367;
})();
if(inst_46298__$1){
var statearr_46368_46408 = state_46343__$1;
(statearr_46368_46408[(1)] = (13));

} else {
var statearr_46369_46409 = state_46343__$1;
(statearr_46369_46409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (9))){
var inst_46320 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46370_46410 = state_46343__$1;
(statearr_46370_46410[(2)] = inst_46320);

(statearr_46370_46410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (5))){
var inst_46281 = cljs.core.deref.call(null,mults);
var inst_46282 = cljs.core.vals.call(null,inst_46281);
var inst_46283 = cljs.core.seq.call(null,inst_46282);
var inst_46284 = inst_46283;
var inst_46285 = null;
var inst_46286 = (0);
var inst_46287 = (0);
var state_46343__$1 = (function (){var statearr_46371 = state_46343;
(statearr_46371[(12)] = inst_46284);

(statearr_46371[(13)] = inst_46285);

(statearr_46371[(15)] = inst_46287);

(statearr_46371[(16)] = inst_46286);

return statearr_46371;
})();
var statearr_46372_46411 = state_46343__$1;
(statearr_46372_46411[(2)] = null);

(statearr_46372_46411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (14))){
var state_46343__$1 = state_46343;
var statearr_46376_46412 = state_46343__$1;
(statearr_46376_46412[(2)] = null);

(statearr_46376_46412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (16))){
var inst_46298 = (state_46343[(10)]);
var inst_46302 = cljs.core.chunk_first.call(null,inst_46298);
var inst_46303 = cljs.core.chunk_rest.call(null,inst_46298);
var inst_46304 = cljs.core.count.call(null,inst_46302);
var inst_46284 = inst_46303;
var inst_46285 = inst_46302;
var inst_46286 = inst_46304;
var inst_46287 = (0);
var state_46343__$1 = (function (){var statearr_46377 = state_46343;
(statearr_46377[(12)] = inst_46284);

(statearr_46377[(13)] = inst_46285);

(statearr_46377[(15)] = inst_46287);

(statearr_46377[(16)] = inst_46286);

return statearr_46377;
})();
var statearr_46378_46413 = state_46343__$1;
(statearr_46378_46413[(2)] = null);

(statearr_46378_46413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (10))){
var inst_46284 = (state_46343[(12)]);
var inst_46285 = (state_46343[(13)]);
var inst_46287 = (state_46343[(15)]);
var inst_46286 = (state_46343[(16)]);
var inst_46292 = cljs.core._nth.call(null,inst_46285,inst_46287);
var inst_46293 = cljs.core.async.muxch_STAR_.call(null,inst_46292);
var inst_46294 = cljs.core.async.close_BANG_.call(null,inst_46293);
var inst_46295 = (inst_46287 + (1));
var tmp46373 = inst_46284;
var tmp46374 = inst_46285;
var tmp46375 = inst_46286;
var inst_46284__$1 = tmp46373;
var inst_46285__$1 = tmp46374;
var inst_46286__$1 = tmp46375;
var inst_46287__$1 = inst_46295;
var state_46343__$1 = (function (){var statearr_46379 = state_46343;
(statearr_46379[(12)] = inst_46284__$1);

(statearr_46379[(13)] = inst_46285__$1);

(statearr_46379[(17)] = inst_46294);

(statearr_46379[(15)] = inst_46287__$1);

(statearr_46379[(16)] = inst_46286__$1);

return statearr_46379;
})();
var statearr_46380_46414 = state_46343__$1;
(statearr_46380_46414[(2)] = null);

(statearr_46380_46414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (18))){
var inst_46313 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46381_46415 = state_46343__$1;
(statearr_46381_46415[(2)] = inst_46313);

(statearr_46381_46415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (8))){
var inst_46287 = (state_46343[(15)]);
var inst_46286 = (state_46343[(16)]);
var inst_46289 = (inst_46287 < inst_46286);
var inst_46290 = inst_46289;
var state_46343__$1 = state_46343;
if(cljs.core.truth_(inst_46290)){
var statearr_46382_46416 = state_46343__$1;
(statearr_46382_46416[(1)] = (10));

} else {
var statearr_46383_46417 = state_46343__$1;
(statearr_46383_46417[(1)] = (11));

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
});})(c__45169__auto___46389,mults,ensure_mult,p))
;
return ((function (switch__45081__auto__,c__45169__auto___46389,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_46384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46384[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_46384[(1)] = (1));

return statearr_46384;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_46343){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46385){if((e46385 instanceof Object)){
var ex__45085__auto__ = e46385;
var statearr_46386_46418 = state_46343;
(statearr_46386_46418[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46419 = state_46343;
state_46343 = G__46419;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_46343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_46343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46389,mults,ensure_mult,p))
})();
var state__45171__auto__ = (function (){var statearr_46387 = f__45170__auto__.call(null);
(statearr_46387[(6)] = c__45169__auto___46389);

return statearr_46387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46389,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46421 = arguments.length;
switch (G__46421) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46424 = arguments.length;
switch (G__46424) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46427 = arguments.length;
switch (G__46427) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__45169__auto___46494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46494,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46494,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46466){
var state_val_46467 = (state_46466[(1)]);
if((state_val_46467 === (7))){
var state_46466__$1 = state_46466;
var statearr_46468_46495 = state_46466__$1;
(statearr_46468_46495[(2)] = null);

(statearr_46468_46495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (1))){
var state_46466__$1 = state_46466;
var statearr_46469_46496 = state_46466__$1;
(statearr_46469_46496[(2)] = null);

(statearr_46469_46496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (4))){
var inst_46430 = (state_46466[(7)]);
var inst_46432 = (inst_46430 < cnt);
var state_46466__$1 = state_46466;
if(cljs.core.truth_(inst_46432)){
var statearr_46470_46497 = state_46466__$1;
(statearr_46470_46497[(1)] = (6));

} else {
var statearr_46471_46498 = state_46466__$1;
(statearr_46471_46498[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (15))){
var inst_46462 = (state_46466[(2)]);
var state_46466__$1 = state_46466;
var statearr_46472_46499 = state_46466__$1;
(statearr_46472_46499[(2)] = inst_46462);

(statearr_46472_46499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (13))){
var inst_46455 = cljs.core.async.close_BANG_.call(null,out);
var state_46466__$1 = state_46466;
var statearr_46473_46500 = state_46466__$1;
(statearr_46473_46500[(2)] = inst_46455);

(statearr_46473_46500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (6))){
var state_46466__$1 = state_46466;
var statearr_46474_46501 = state_46466__$1;
(statearr_46474_46501[(2)] = null);

(statearr_46474_46501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (3))){
var inst_46464 = (state_46466[(2)]);
var state_46466__$1 = state_46466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46466__$1,inst_46464);
} else {
if((state_val_46467 === (12))){
var inst_46452 = (state_46466[(8)]);
var inst_46452__$1 = (state_46466[(2)]);
var inst_46453 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46452__$1);
var state_46466__$1 = (function (){var statearr_46475 = state_46466;
(statearr_46475[(8)] = inst_46452__$1);

return statearr_46475;
})();
if(cljs.core.truth_(inst_46453)){
var statearr_46476_46502 = state_46466__$1;
(statearr_46476_46502[(1)] = (13));

} else {
var statearr_46477_46503 = state_46466__$1;
(statearr_46477_46503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (2))){
var inst_46429 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46430 = (0);
var state_46466__$1 = (function (){var statearr_46478 = state_46466;
(statearr_46478[(9)] = inst_46429);

(statearr_46478[(7)] = inst_46430);

return statearr_46478;
})();
var statearr_46479_46504 = state_46466__$1;
(statearr_46479_46504[(2)] = null);

(statearr_46479_46504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (11))){
var inst_46430 = (state_46466[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46466,(10),Object,null,(9));
var inst_46439 = chs__$1.call(null,inst_46430);
var inst_46440 = done.call(null,inst_46430);
var inst_46441 = cljs.core.async.take_BANG_.call(null,inst_46439,inst_46440);
var state_46466__$1 = state_46466;
var statearr_46480_46505 = state_46466__$1;
(statearr_46480_46505[(2)] = inst_46441);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (9))){
var inst_46430 = (state_46466[(7)]);
var inst_46443 = (state_46466[(2)]);
var inst_46444 = (inst_46430 + (1));
var inst_46430__$1 = inst_46444;
var state_46466__$1 = (function (){var statearr_46481 = state_46466;
(statearr_46481[(10)] = inst_46443);

(statearr_46481[(7)] = inst_46430__$1);

return statearr_46481;
})();
var statearr_46482_46506 = state_46466__$1;
(statearr_46482_46506[(2)] = null);

(statearr_46482_46506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (5))){
var inst_46450 = (state_46466[(2)]);
var state_46466__$1 = (function (){var statearr_46483 = state_46466;
(statearr_46483[(11)] = inst_46450);

return statearr_46483;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46466__$1,(12),dchan);
} else {
if((state_val_46467 === (14))){
var inst_46452 = (state_46466[(8)]);
var inst_46457 = cljs.core.apply.call(null,f,inst_46452);
var state_46466__$1 = state_46466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46466__$1,(16),out,inst_46457);
} else {
if((state_val_46467 === (16))){
var inst_46459 = (state_46466[(2)]);
var state_46466__$1 = (function (){var statearr_46484 = state_46466;
(statearr_46484[(12)] = inst_46459);

return statearr_46484;
})();
var statearr_46485_46507 = state_46466__$1;
(statearr_46485_46507[(2)] = null);

(statearr_46485_46507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (10))){
var inst_46434 = (state_46466[(2)]);
var inst_46435 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46466__$1 = (function (){var statearr_46486 = state_46466;
(statearr_46486[(13)] = inst_46434);

return statearr_46486;
})();
var statearr_46487_46508 = state_46466__$1;
(statearr_46487_46508[(2)] = inst_46435);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46467 === (8))){
var inst_46448 = (state_46466[(2)]);
var state_46466__$1 = state_46466;
var statearr_46488_46509 = state_46466__$1;
(statearr_46488_46509[(2)] = inst_46448);

(statearr_46488_46509[(1)] = (5));


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
});})(c__45169__auto___46494,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45081__auto__,c__45169__auto___46494,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_46489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46489[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_46489[(1)] = (1));

return statearr_46489;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_46466){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46490){if((e46490 instanceof Object)){
var ex__45085__auto__ = e46490;
var statearr_46491_46510 = state_46466;
(statearr_46491_46510[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46511 = state_46466;
state_46466 = G__46511;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_46466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_46466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46494,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45171__auto__ = (function (){var statearr_46492 = f__45170__auto__.call(null);
(statearr_46492[(6)] = c__45169__auto___46494);

return statearr_46492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46494,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46514 = arguments.length;
switch (G__46514) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45169__auto___46568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46568,out){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46568,out){
return (function (state_46546){
var state_val_46547 = (state_46546[(1)]);
if((state_val_46547 === (7))){
var inst_46525 = (state_46546[(7)]);
var inst_46526 = (state_46546[(8)]);
var inst_46525__$1 = (state_46546[(2)]);
var inst_46526__$1 = cljs.core.nth.call(null,inst_46525__$1,(0),null);
var inst_46527 = cljs.core.nth.call(null,inst_46525__$1,(1),null);
var inst_46528 = (inst_46526__$1 == null);
var state_46546__$1 = (function (){var statearr_46548 = state_46546;
(statearr_46548[(9)] = inst_46527);

(statearr_46548[(7)] = inst_46525__$1);

(statearr_46548[(8)] = inst_46526__$1);

return statearr_46548;
})();
if(cljs.core.truth_(inst_46528)){
var statearr_46549_46569 = state_46546__$1;
(statearr_46549_46569[(1)] = (8));

} else {
var statearr_46550_46570 = state_46546__$1;
(statearr_46550_46570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (1))){
var inst_46515 = cljs.core.vec.call(null,chs);
var inst_46516 = inst_46515;
var state_46546__$1 = (function (){var statearr_46551 = state_46546;
(statearr_46551[(10)] = inst_46516);

return statearr_46551;
})();
var statearr_46552_46571 = state_46546__$1;
(statearr_46552_46571[(2)] = null);

(statearr_46552_46571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (4))){
var inst_46516 = (state_46546[(10)]);
var state_46546__$1 = state_46546;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46546__$1,(7),inst_46516);
} else {
if((state_val_46547 === (6))){
var inst_46542 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
var statearr_46553_46572 = state_46546__$1;
(statearr_46553_46572[(2)] = inst_46542);

(statearr_46553_46572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (3))){
var inst_46544 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46546__$1,inst_46544);
} else {
if((state_val_46547 === (2))){
var inst_46516 = (state_46546[(10)]);
var inst_46518 = cljs.core.count.call(null,inst_46516);
var inst_46519 = (inst_46518 > (0));
var state_46546__$1 = state_46546;
if(cljs.core.truth_(inst_46519)){
var statearr_46555_46573 = state_46546__$1;
(statearr_46555_46573[(1)] = (4));

} else {
var statearr_46556_46574 = state_46546__$1;
(statearr_46556_46574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (11))){
var inst_46516 = (state_46546[(10)]);
var inst_46535 = (state_46546[(2)]);
var tmp46554 = inst_46516;
var inst_46516__$1 = tmp46554;
var state_46546__$1 = (function (){var statearr_46557 = state_46546;
(statearr_46557[(11)] = inst_46535);

(statearr_46557[(10)] = inst_46516__$1);

return statearr_46557;
})();
var statearr_46558_46575 = state_46546__$1;
(statearr_46558_46575[(2)] = null);

(statearr_46558_46575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (9))){
var inst_46526 = (state_46546[(8)]);
var state_46546__$1 = state_46546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46546__$1,(11),out,inst_46526);
} else {
if((state_val_46547 === (5))){
var inst_46540 = cljs.core.async.close_BANG_.call(null,out);
var state_46546__$1 = state_46546;
var statearr_46559_46576 = state_46546__$1;
(statearr_46559_46576[(2)] = inst_46540);

(statearr_46559_46576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (10))){
var inst_46538 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
var statearr_46560_46577 = state_46546__$1;
(statearr_46560_46577[(2)] = inst_46538);

(statearr_46560_46577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (8))){
var inst_46527 = (state_46546[(9)]);
var inst_46525 = (state_46546[(7)]);
var inst_46526 = (state_46546[(8)]);
var inst_46516 = (state_46546[(10)]);
var inst_46530 = (function (){var cs = inst_46516;
var vec__46521 = inst_46525;
var v = inst_46526;
var c = inst_46527;
return ((function (cs,vec__46521,v,c,inst_46527,inst_46525,inst_46526,inst_46516,state_val_46547,c__45169__auto___46568,out){
return (function (p1__46512_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46512_SHARP_);
});
;})(cs,vec__46521,v,c,inst_46527,inst_46525,inst_46526,inst_46516,state_val_46547,c__45169__auto___46568,out))
})();
var inst_46531 = cljs.core.filterv.call(null,inst_46530,inst_46516);
var inst_46516__$1 = inst_46531;
var state_46546__$1 = (function (){var statearr_46561 = state_46546;
(statearr_46561[(10)] = inst_46516__$1);

return statearr_46561;
})();
var statearr_46562_46578 = state_46546__$1;
(statearr_46562_46578[(2)] = null);

(statearr_46562_46578[(1)] = (2));


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
});})(c__45169__auto___46568,out))
;
return ((function (switch__45081__auto__,c__45169__auto___46568,out){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_46563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46563[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_46563[(1)] = (1));

return statearr_46563;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_46546){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46564){if((e46564 instanceof Object)){
var ex__45085__auto__ = e46564;
var statearr_46565_46579 = state_46546;
(statearr_46565_46579[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46580 = state_46546;
state_46546 = G__46580;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_46546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_46546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46568,out))
})();
var state__45171__auto__ = (function (){var statearr_46566 = f__45170__auto__.call(null);
(statearr_46566[(6)] = c__45169__auto___46568);

return statearr_46566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46568,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46582 = arguments.length;
switch (G__46582) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45169__auto___46627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46627,out){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46627,out){
return (function (state_46606){
var state_val_46607 = (state_46606[(1)]);
if((state_val_46607 === (7))){
var inst_46588 = (state_46606[(7)]);
var inst_46588__$1 = (state_46606[(2)]);
var inst_46589 = (inst_46588__$1 == null);
var inst_46590 = cljs.core.not.call(null,inst_46589);
var state_46606__$1 = (function (){var statearr_46608 = state_46606;
(statearr_46608[(7)] = inst_46588__$1);

return statearr_46608;
})();
if(inst_46590){
var statearr_46609_46628 = state_46606__$1;
(statearr_46609_46628[(1)] = (8));

} else {
var statearr_46610_46629 = state_46606__$1;
(statearr_46610_46629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (1))){
var inst_46583 = (0);
var state_46606__$1 = (function (){var statearr_46611 = state_46606;
(statearr_46611[(8)] = inst_46583);

return statearr_46611;
})();
var statearr_46612_46630 = state_46606__$1;
(statearr_46612_46630[(2)] = null);

(statearr_46612_46630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (4))){
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46606__$1,(7),ch);
} else {
if((state_val_46607 === (6))){
var inst_46601 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46613_46631 = state_46606__$1;
(statearr_46613_46631[(2)] = inst_46601);

(statearr_46613_46631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (3))){
var inst_46603 = (state_46606[(2)]);
var inst_46604 = cljs.core.async.close_BANG_.call(null,out);
var state_46606__$1 = (function (){var statearr_46614 = state_46606;
(statearr_46614[(9)] = inst_46603);

return statearr_46614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46606__$1,inst_46604);
} else {
if((state_val_46607 === (2))){
var inst_46583 = (state_46606[(8)]);
var inst_46585 = (inst_46583 < n);
var state_46606__$1 = state_46606;
if(cljs.core.truth_(inst_46585)){
var statearr_46615_46632 = state_46606__$1;
(statearr_46615_46632[(1)] = (4));

} else {
var statearr_46616_46633 = state_46606__$1;
(statearr_46616_46633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (11))){
var inst_46583 = (state_46606[(8)]);
var inst_46593 = (state_46606[(2)]);
var inst_46594 = (inst_46583 + (1));
var inst_46583__$1 = inst_46594;
var state_46606__$1 = (function (){var statearr_46617 = state_46606;
(statearr_46617[(10)] = inst_46593);

(statearr_46617[(8)] = inst_46583__$1);

return statearr_46617;
})();
var statearr_46618_46634 = state_46606__$1;
(statearr_46618_46634[(2)] = null);

(statearr_46618_46634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (9))){
var state_46606__$1 = state_46606;
var statearr_46619_46635 = state_46606__$1;
(statearr_46619_46635[(2)] = null);

(statearr_46619_46635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (5))){
var state_46606__$1 = state_46606;
var statearr_46620_46636 = state_46606__$1;
(statearr_46620_46636[(2)] = null);

(statearr_46620_46636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (10))){
var inst_46598 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46621_46637 = state_46606__$1;
(statearr_46621_46637[(2)] = inst_46598);

(statearr_46621_46637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (8))){
var inst_46588 = (state_46606[(7)]);
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46606__$1,(11),out,inst_46588);
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
});})(c__45169__auto___46627,out))
;
return ((function (switch__45081__auto__,c__45169__auto___46627,out){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_46622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46622[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_46622[(1)] = (1));

return statearr_46622;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_46606){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46623){if((e46623 instanceof Object)){
var ex__45085__auto__ = e46623;
var statearr_46624_46638 = state_46606;
(statearr_46624_46638[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46639 = state_46606;
state_46606 = G__46639;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_46606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_46606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46627,out))
})();
var state__45171__auto__ = (function (){var statearr_46625 = f__45170__auto__.call(null);
(statearr_46625[(6)] = c__45169__auto___46627);

return statearr_46625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46627,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46641 = (function (f,ch,meta46642){
this.f = f;
this.ch = ch;
this.meta46642 = meta46642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46643,meta46642__$1){
var self__ = this;
var _46643__$1 = this;
return (new cljs.core.async.t_cljs$core$async46641(self__.f,self__.ch,meta46642__$1));
});

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46643){
var self__ = this;
var _46643__$1 = this;
return self__.meta46642;
});

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46644 = (function (f,ch,meta46642,_,fn1,meta46645){
this.f = f;
this.ch = ch;
this.meta46642 = meta46642;
this._ = _;
this.fn1 = fn1;
this.meta46645 = meta46645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46646,meta46645__$1){
var self__ = this;
var _46646__$1 = this;
return (new cljs.core.async.t_cljs$core$async46644(self__.f,self__.ch,self__.meta46642,self__._,self__.fn1,meta46645__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46646){
var self__ = this;
var _46646__$1 = this;
return self__.meta46645;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46644.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46644.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46640_SHARP_){
return f1.call(null,(((p1__46640_SHARP_ == null))?null:self__.f.call(null,p1__46640_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46644.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46642","meta46642",-192658692,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46641","cljs.core.async/t_cljs$core$async46641",-416307450,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46645","meta46645",292263352,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46644";

cljs.core.async.t_cljs$core$async46644.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async46644");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46644 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46644(f__$1,ch__$1,meta46642__$1,___$2,fn1__$1,meta46645){
return (new cljs.core.async.t_cljs$core$async46644(f__$1,ch__$1,meta46642__$1,___$2,fn1__$1,meta46645));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46644(self__.f,self__.ch,self__.meta46642,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__42171__auto__ = ret;
if(cljs.core.truth_(and__42171__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__42171__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46642","meta46642",-192658692,null)], null);
});

cljs.core.async.t_cljs$core$async46641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46641";

cljs.core.async.t_cljs$core$async46641.cljs$lang$ctorPrWriter = (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async46641");
});

cljs.core.async.__GT_t_cljs$core$async46641 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46641(f__$1,ch__$1,meta46642){
return (new cljs.core.async.t_cljs$core$async46641(f__$1,ch__$1,meta46642));
});

}

return (new cljs.core.async.t_cljs$core$async46641(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46647 = (function (f,ch,meta46648){
this.f = f;
this.ch = ch;
this.meta46648 = meta46648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46649,meta46648__$1){
var self__ = this;
var _46649__$1 = this;
return (new cljs.core.async.t_cljs$core$async46647(self__.f,self__.ch,meta46648__$1));
});

cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46649){
var self__ = this;
var _46649__$1 = this;
return self__.meta46648;
});

cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46648","meta46648",-190888357,null)], null);
});

cljs.core.async.t_cljs$core$async46647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46647";

cljs.core.async.t_cljs$core$async46647.cljs$lang$ctorPrWriter = (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async46647");
});

cljs.core.async.__GT_t_cljs$core$async46647 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46647(f__$1,ch__$1,meta46648){
return (new cljs.core.async.t_cljs$core$async46647(f__$1,ch__$1,meta46648));
});

}

return (new cljs.core.async.t_cljs$core$async46647(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46650 = (function (p,ch,meta46651){
this.p = p;
this.ch = ch;
this.meta46651 = meta46651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46652,meta46651__$1){
var self__ = this;
var _46652__$1 = this;
return (new cljs.core.async.t_cljs$core$async46650(self__.p,self__.ch,meta46651__$1));
});

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46652){
var self__ = this;
var _46652__$1 = this;
return self__.meta46651;
});

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46651","meta46651",-1965588427,null)], null);
});

cljs.core.async.t_cljs$core$async46650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46650";

cljs.core.async.t_cljs$core$async46650.cljs$lang$ctorPrWriter = (function (this__42808__auto__,writer__42809__auto__,opt__42810__auto__){
return cljs.core._write.call(null,writer__42809__auto__,"cljs.core.async/t_cljs$core$async46650");
});

cljs.core.async.__GT_t_cljs$core$async46650 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46650(p__$1,ch__$1,meta46651){
return (new cljs.core.async.t_cljs$core$async46650(p__$1,ch__$1,meta46651));
});

}

return (new cljs.core.async.t_cljs$core$async46650(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46654 = arguments.length;
switch (G__46654) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45169__auto___46694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46694,out){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46694,out){
return (function (state_46675){
var state_val_46676 = (state_46675[(1)]);
if((state_val_46676 === (7))){
var inst_46671 = (state_46675[(2)]);
var state_46675__$1 = state_46675;
var statearr_46677_46695 = state_46675__$1;
(statearr_46677_46695[(2)] = inst_46671);

(statearr_46677_46695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (1))){
var state_46675__$1 = state_46675;
var statearr_46678_46696 = state_46675__$1;
(statearr_46678_46696[(2)] = null);

(statearr_46678_46696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (4))){
var inst_46657 = (state_46675[(7)]);
var inst_46657__$1 = (state_46675[(2)]);
var inst_46658 = (inst_46657__$1 == null);
var state_46675__$1 = (function (){var statearr_46679 = state_46675;
(statearr_46679[(7)] = inst_46657__$1);

return statearr_46679;
})();
if(cljs.core.truth_(inst_46658)){
var statearr_46680_46697 = state_46675__$1;
(statearr_46680_46697[(1)] = (5));

} else {
var statearr_46681_46698 = state_46675__$1;
(statearr_46681_46698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (6))){
var inst_46657 = (state_46675[(7)]);
var inst_46662 = p.call(null,inst_46657);
var state_46675__$1 = state_46675;
if(cljs.core.truth_(inst_46662)){
var statearr_46682_46699 = state_46675__$1;
(statearr_46682_46699[(1)] = (8));

} else {
var statearr_46683_46700 = state_46675__$1;
(statearr_46683_46700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (3))){
var inst_46673 = (state_46675[(2)]);
var state_46675__$1 = state_46675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46675__$1,inst_46673);
} else {
if((state_val_46676 === (2))){
var state_46675__$1 = state_46675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46675__$1,(4),ch);
} else {
if((state_val_46676 === (11))){
var inst_46665 = (state_46675[(2)]);
var state_46675__$1 = state_46675;
var statearr_46684_46701 = state_46675__$1;
(statearr_46684_46701[(2)] = inst_46665);

(statearr_46684_46701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (9))){
var state_46675__$1 = state_46675;
var statearr_46685_46702 = state_46675__$1;
(statearr_46685_46702[(2)] = null);

(statearr_46685_46702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (5))){
var inst_46660 = cljs.core.async.close_BANG_.call(null,out);
var state_46675__$1 = state_46675;
var statearr_46686_46703 = state_46675__$1;
(statearr_46686_46703[(2)] = inst_46660);

(statearr_46686_46703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (10))){
var inst_46668 = (state_46675[(2)]);
var state_46675__$1 = (function (){var statearr_46687 = state_46675;
(statearr_46687[(8)] = inst_46668);

return statearr_46687;
})();
var statearr_46688_46704 = state_46675__$1;
(statearr_46688_46704[(2)] = null);

(statearr_46688_46704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46676 === (8))){
var inst_46657 = (state_46675[(7)]);
var state_46675__$1 = state_46675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46675__$1,(11),out,inst_46657);
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
});})(c__45169__auto___46694,out))
;
return ((function (switch__45081__auto__,c__45169__auto___46694,out){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_46689 = [null,null,null,null,null,null,null,null,null];
(statearr_46689[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_46689[(1)] = (1));

return statearr_46689;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_46675){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46690){if((e46690 instanceof Object)){
var ex__45085__auto__ = e46690;
var statearr_46691_46705 = state_46675;
(statearr_46691_46705[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46706 = state_46675;
state_46675 = G__46706;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_46675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_46675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46694,out))
})();
var state__45171__auto__ = (function (){var statearr_46692 = f__45170__auto__.call(null);
(statearr_46692[(6)] = c__45169__auto___46694);

return statearr_46692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46694,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46708 = arguments.length;
switch (G__46708) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto__){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto__){
return (function (state_46771){
var state_val_46772 = (state_46771[(1)]);
if((state_val_46772 === (7))){
var inst_46767 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46773_46811 = state_46771__$1;
(statearr_46773_46811[(2)] = inst_46767);

(statearr_46773_46811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (20))){
var inst_46737 = (state_46771[(7)]);
var inst_46748 = (state_46771[(2)]);
var inst_46749 = cljs.core.next.call(null,inst_46737);
var inst_46723 = inst_46749;
var inst_46724 = null;
var inst_46725 = (0);
var inst_46726 = (0);
var state_46771__$1 = (function (){var statearr_46774 = state_46771;
(statearr_46774[(8)] = inst_46724);

(statearr_46774[(9)] = inst_46723);

(statearr_46774[(10)] = inst_46748);

(statearr_46774[(11)] = inst_46725);

(statearr_46774[(12)] = inst_46726);

return statearr_46774;
})();
var statearr_46775_46812 = state_46771__$1;
(statearr_46775_46812[(2)] = null);

(statearr_46775_46812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (1))){
var state_46771__$1 = state_46771;
var statearr_46776_46813 = state_46771__$1;
(statearr_46776_46813[(2)] = null);

(statearr_46776_46813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (4))){
var inst_46712 = (state_46771[(13)]);
var inst_46712__$1 = (state_46771[(2)]);
var inst_46713 = (inst_46712__$1 == null);
var state_46771__$1 = (function (){var statearr_46777 = state_46771;
(statearr_46777[(13)] = inst_46712__$1);

return statearr_46777;
})();
if(cljs.core.truth_(inst_46713)){
var statearr_46778_46814 = state_46771__$1;
(statearr_46778_46814[(1)] = (5));

} else {
var statearr_46779_46815 = state_46771__$1;
(statearr_46779_46815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (15))){
var state_46771__$1 = state_46771;
var statearr_46783_46816 = state_46771__$1;
(statearr_46783_46816[(2)] = null);

(statearr_46783_46816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (21))){
var state_46771__$1 = state_46771;
var statearr_46784_46817 = state_46771__$1;
(statearr_46784_46817[(2)] = null);

(statearr_46784_46817[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (13))){
var inst_46724 = (state_46771[(8)]);
var inst_46723 = (state_46771[(9)]);
var inst_46725 = (state_46771[(11)]);
var inst_46726 = (state_46771[(12)]);
var inst_46733 = (state_46771[(2)]);
var inst_46734 = (inst_46726 + (1));
var tmp46780 = inst_46724;
var tmp46781 = inst_46723;
var tmp46782 = inst_46725;
var inst_46723__$1 = tmp46781;
var inst_46724__$1 = tmp46780;
var inst_46725__$1 = tmp46782;
var inst_46726__$1 = inst_46734;
var state_46771__$1 = (function (){var statearr_46785 = state_46771;
(statearr_46785[(14)] = inst_46733);

(statearr_46785[(8)] = inst_46724__$1);

(statearr_46785[(9)] = inst_46723__$1);

(statearr_46785[(11)] = inst_46725__$1);

(statearr_46785[(12)] = inst_46726__$1);

return statearr_46785;
})();
var statearr_46786_46818 = state_46771__$1;
(statearr_46786_46818[(2)] = null);

(statearr_46786_46818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (22))){
var state_46771__$1 = state_46771;
var statearr_46787_46819 = state_46771__$1;
(statearr_46787_46819[(2)] = null);

(statearr_46787_46819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (6))){
var inst_46712 = (state_46771[(13)]);
var inst_46721 = f.call(null,inst_46712);
var inst_46722 = cljs.core.seq.call(null,inst_46721);
var inst_46723 = inst_46722;
var inst_46724 = null;
var inst_46725 = (0);
var inst_46726 = (0);
var state_46771__$1 = (function (){var statearr_46788 = state_46771;
(statearr_46788[(8)] = inst_46724);

(statearr_46788[(9)] = inst_46723);

(statearr_46788[(11)] = inst_46725);

(statearr_46788[(12)] = inst_46726);

return statearr_46788;
})();
var statearr_46789_46820 = state_46771__$1;
(statearr_46789_46820[(2)] = null);

(statearr_46789_46820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (17))){
var inst_46737 = (state_46771[(7)]);
var inst_46741 = cljs.core.chunk_first.call(null,inst_46737);
var inst_46742 = cljs.core.chunk_rest.call(null,inst_46737);
var inst_46743 = cljs.core.count.call(null,inst_46741);
var inst_46723 = inst_46742;
var inst_46724 = inst_46741;
var inst_46725 = inst_46743;
var inst_46726 = (0);
var state_46771__$1 = (function (){var statearr_46790 = state_46771;
(statearr_46790[(8)] = inst_46724);

(statearr_46790[(9)] = inst_46723);

(statearr_46790[(11)] = inst_46725);

(statearr_46790[(12)] = inst_46726);

return statearr_46790;
})();
var statearr_46791_46821 = state_46771__$1;
(statearr_46791_46821[(2)] = null);

(statearr_46791_46821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (3))){
var inst_46769 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46771__$1,inst_46769);
} else {
if((state_val_46772 === (12))){
var inst_46757 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46792_46822 = state_46771__$1;
(statearr_46792_46822[(2)] = inst_46757);

(statearr_46792_46822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (2))){
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46771__$1,(4),in$);
} else {
if((state_val_46772 === (23))){
var inst_46765 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46793_46823 = state_46771__$1;
(statearr_46793_46823[(2)] = inst_46765);

(statearr_46793_46823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (19))){
var inst_46752 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46794_46824 = state_46771__$1;
(statearr_46794_46824[(2)] = inst_46752);

(statearr_46794_46824[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (11))){
var inst_46737 = (state_46771[(7)]);
var inst_46723 = (state_46771[(9)]);
var inst_46737__$1 = cljs.core.seq.call(null,inst_46723);
var state_46771__$1 = (function (){var statearr_46795 = state_46771;
(statearr_46795[(7)] = inst_46737__$1);

return statearr_46795;
})();
if(inst_46737__$1){
var statearr_46796_46825 = state_46771__$1;
(statearr_46796_46825[(1)] = (14));

} else {
var statearr_46797_46826 = state_46771__$1;
(statearr_46797_46826[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (9))){
var inst_46759 = (state_46771[(2)]);
var inst_46760 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46771__$1 = (function (){var statearr_46798 = state_46771;
(statearr_46798[(15)] = inst_46759);

return statearr_46798;
})();
if(cljs.core.truth_(inst_46760)){
var statearr_46799_46827 = state_46771__$1;
(statearr_46799_46827[(1)] = (21));

} else {
var statearr_46800_46828 = state_46771__$1;
(statearr_46800_46828[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (5))){
var inst_46715 = cljs.core.async.close_BANG_.call(null,out);
var state_46771__$1 = state_46771;
var statearr_46801_46829 = state_46771__$1;
(statearr_46801_46829[(2)] = inst_46715);

(statearr_46801_46829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (14))){
var inst_46737 = (state_46771[(7)]);
var inst_46739 = cljs.core.chunked_seq_QMARK_.call(null,inst_46737);
var state_46771__$1 = state_46771;
if(inst_46739){
var statearr_46802_46830 = state_46771__$1;
(statearr_46802_46830[(1)] = (17));

} else {
var statearr_46803_46831 = state_46771__$1;
(statearr_46803_46831[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (16))){
var inst_46755 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46804_46832 = state_46771__$1;
(statearr_46804_46832[(2)] = inst_46755);

(statearr_46804_46832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (10))){
var inst_46724 = (state_46771[(8)]);
var inst_46726 = (state_46771[(12)]);
var inst_46731 = cljs.core._nth.call(null,inst_46724,inst_46726);
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46771__$1,(13),out,inst_46731);
} else {
if((state_val_46772 === (18))){
var inst_46737 = (state_46771[(7)]);
var inst_46746 = cljs.core.first.call(null,inst_46737);
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46771__$1,(20),out,inst_46746);
} else {
if((state_val_46772 === (8))){
var inst_46725 = (state_46771[(11)]);
var inst_46726 = (state_46771[(12)]);
var inst_46728 = (inst_46726 < inst_46725);
var inst_46729 = inst_46728;
var state_46771__$1 = state_46771;
if(cljs.core.truth_(inst_46729)){
var statearr_46805_46833 = state_46771__$1;
(statearr_46805_46833[(1)] = (10));

} else {
var statearr_46806_46834 = state_46771__$1;
(statearr_46806_46834[(1)] = (11));

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
});})(c__45169__auto__))
;
return ((function (switch__45081__auto__,c__45169__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45082__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45082__auto____0 = (function (){
var statearr_46807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46807[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45082__auto__);

(statearr_46807[(1)] = (1));

return statearr_46807;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45082__auto____1 = (function (state_46771){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46808){if((e46808 instanceof Object)){
var ex__45085__auto__ = e46808;
var statearr_46809_46835 = state_46771;
(statearr_46809_46835[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46836 = state_46771;
state_46771 = G__46836;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45082__auto__ = function(state_46771){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45082__auto____1.call(this,state_46771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45082__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45082__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto__))
})();
var state__45171__auto__ = (function (){var statearr_46810 = f__45170__auto__.call(null);
(statearr_46810[(6)] = c__45169__auto__);

return statearr_46810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto__))
);

return c__45169__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46838 = arguments.length;
switch (G__46838) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46841 = arguments.length;
switch (G__46841) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46844 = arguments.length;
switch (G__46844) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45169__auto___46891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46891,out){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46891,out){
return (function (state_46868){
var state_val_46869 = (state_46868[(1)]);
if((state_val_46869 === (7))){
var inst_46863 = (state_46868[(2)]);
var state_46868__$1 = state_46868;
var statearr_46870_46892 = state_46868__$1;
(statearr_46870_46892[(2)] = inst_46863);

(statearr_46870_46892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46869 === (1))){
var inst_46845 = null;
var state_46868__$1 = (function (){var statearr_46871 = state_46868;
(statearr_46871[(7)] = inst_46845);

return statearr_46871;
})();
var statearr_46872_46893 = state_46868__$1;
(statearr_46872_46893[(2)] = null);

(statearr_46872_46893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46869 === (4))){
var inst_46848 = (state_46868[(8)]);
var inst_46848__$1 = (state_46868[(2)]);
var inst_46849 = (inst_46848__$1 == null);
var inst_46850 = cljs.core.not.call(null,inst_46849);
var state_46868__$1 = (function (){var statearr_46873 = state_46868;
(statearr_46873[(8)] = inst_46848__$1);

return statearr_46873;
})();
if(inst_46850){
var statearr_46874_46894 = state_46868__$1;
(statearr_46874_46894[(1)] = (5));

} else {
var statearr_46875_46895 = state_46868__$1;
(statearr_46875_46895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46869 === (6))){
var state_46868__$1 = state_46868;
var statearr_46876_46896 = state_46868__$1;
(statearr_46876_46896[(2)] = null);

(statearr_46876_46896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46869 === (3))){
var inst_46865 = (state_46868[(2)]);
var inst_46866 = cljs.core.async.close_BANG_.call(null,out);
var state_46868__$1 = (function (){var statearr_46877 = state_46868;
(statearr_46877[(9)] = inst_46865);

return statearr_46877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46868__$1,inst_46866);
} else {
if((state_val_46869 === (2))){
var state_46868__$1 = state_46868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46868__$1,(4),ch);
} else {
if((state_val_46869 === (11))){
var inst_46848 = (state_46868[(8)]);
var inst_46857 = (state_46868[(2)]);
var inst_46845 = inst_46848;
var state_46868__$1 = (function (){var statearr_46878 = state_46868;
(statearr_46878[(10)] = inst_46857);

(statearr_46878[(7)] = inst_46845);

return statearr_46878;
})();
var statearr_46879_46897 = state_46868__$1;
(statearr_46879_46897[(2)] = null);

(statearr_46879_46897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46869 === (9))){
var inst_46848 = (state_46868[(8)]);
var state_46868__$1 = state_46868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46868__$1,(11),out,inst_46848);
} else {
if((state_val_46869 === (5))){
var inst_46848 = (state_46868[(8)]);
var inst_46845 = (state_46868[(7)]);
var inst_46852 = cljs.core._EQ_.call(null,inst_46848,inst_46845);
var state_46868__$1 = state_46868;
if(inst_46852){
var statearr_46881_46898 = state_46868__$1;
(statearr_46881_46898[(1)] = (8));

} else {
var statearr_46882_46899 = state_46868__$1;
(statearr_46882_46899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46869 === (10))){
var inst_46860 = (state_46868[(2)]);
var state_46868__$1 = state_46868;
var statearr_46883_46900 = state_46868__$1;
(statearr_46883_46900[(2)] = inst_46860);

(statearr_46883_46900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46869 === (8))){
var inst_46845 = (state_46868[(7)]);
var tmp46880 = inst_46845;
var inst_46845__$1 = tmp46880;
var state_46868__$1 = (function (){var statearr_46884 = state_46868;
(statearr_46884[(7)] = inst_46845__$1);

return statearr_46884;
})();
var statearr_46885_46901 = state_46868__$1;
(statearr_46885_46901[(2)] = null);

(statearr_46885_46901[(1)] = (2));


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
});})(c__45169__auto___46891,out))
;
return ((function (switch__45081__auto__,c__45169__auto___46891,out){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_46886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46886[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_46886[(1)] = (1));

return statearr_46886;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_46868){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46887){if((e46887 instanceof Object)){
var ex__45085__auto__ = e46887;
var statearr_46888_46902 = state_46868;
(statearr_46888_46902[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46903 = state_46868;
state_46868 = G__46903;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_46868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_46868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46891,out))
})();
var state__45171__auto__ = (function (){var statearr_46889 = f__45170__auto__.call(null);
(statearr_46889[(6)] = c__45169__auto___46891);

return statearr_46889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46891,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46905 = arguments.length;
switch (G__46905) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45169__auto___46971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___46971,out){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___46971,out){
return (function (state_46943){
var state_val_46944 = (state_46943[(1)]);
if((state_val_46944 === (7))){
var inst_46939 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
var statearr_46945_46972 = state_46943__$1;
(statearr_46945_46972[(2)] = inst_46939);

(statearr_46945_46972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (1))){
var inst_46906 = (new Array(n));
var inst_46907 = inst_46906;
var inst_46908 = (0);
var state_46943__$1 = (function (){var statearr_46946 = state_46943;
(statearr_46946[(7)] = inst_46908);

(statearr_46946[(8)] = inst_46907);

return statearr_46946;
})();
var statearr_46947_46973 = state_46943__$1;
(statearr_46947_46973[(2)] = null);

(statearr_46947_46973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (4))){
var inst_46911 = (state_46943[(9)]);
var inst_46911__$1 = (state_46943[(2)]);
var inst_46912 = (inst_46911__$1 == null);
var inst_46913 = cljs.core.not.call(null,inst_46912);
var state_46943__$1 = (function (){var statearr_46948 = state_46943;
(statearr_46948[(9)] = inst_46911__$1);

return statearr_46948;
})();
if(inst_46913){
var statearr_46949_46974 = state_46943__$1;
(statearr_46949_46974[(1)] = (5));

} else {
var statearr_46950_46975 = state_46943__$1;
(statearr_46950_46975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (15))){
var inst_46933 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
var statearr_46951_46976 = state_46943__$1;
(statearr_46951_46976[(2)] = inst_46933);

(statearr_46951_46976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (13))){
var state_46943__$1 = state_46943;
var statearr_46952_46977 = state_46943__$1;
(statearr_46952_46977[(2)] = null);

(statearr_46952_46977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (6))){
var inst_46908 = (state_46943[(7)]);
var inst_46929 = (inst_46908 > (0));
var state_46943__$1 = state_46943;
if(cljs.core.truth_(inst_46929)){
var statearr_46953_46978 = state_46943__$1;
(statearr_46953_46978[(1)] = (12));

} else {
var statearr_46954_46979 = state_46943__$1;
(statearr_46954_46979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (3))){
var inst_46941 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46943__$1,inst_46941);
} else {
if((state_val_46944 === (12))){
var inst_46907 = (state_46943[(8)]);
var inst_46931 = cljs.core.vec.call(null,inst_46907);
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46943__$1,(15),out,inst_46931);
} else {
if((state_val_46944 === (2))){
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46943__$1,(4),ch);
} else {
if((state_val_46944 === (11))){
var inst_46923 = (state_46943[(2)]);
var inst_46924 = (new Array(n));
var inst_46907 = inst_46924;
var inst_46908 = (0);
var state_46943__$1 = (function (){var statearr_46955 = state_46943;
(statearr_46955[(10)] = inst_46923);

(statearr_46955[(7)] = inst_46908);

(statearr_46955[(8)] = inst_46907);

return statearr_46955;
})();
var statearr_46956_46980 = state_46943__$1;
(statearr_46956_46980[(2)] = null);

(statearr_46956_46980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (9))){
var inst_46907 = (state_46943[(8)]);
var inst_46921 = cljs.core.vec.call(null,inst_46907);
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46943__$1,(11),out,inst_46921);
} else {
if((state_val_46944 === (5))){
var inst_46911 = (state_46943[(9)]);
var inst_46908 = (state_46943[(7)]);
var inst_46916 = (state_46943[(11)]);
var inst_46907 = (state_46943[(8)]);
var inst_46915 = (inst_46907[inst_46908] = inst_46911);
var inst_46916__$1 = (inst_46908 + (1));
var inst_46917 = (inst_46916__$1 < n);
var state_46943__$1 = (function (){var statearr_46957 = state_46943;
(statearr_46957[(12)] = inst_46915);

(statearr_46957[(11)] = inst_46916__$1);

return statearr_46957;
})();
if(cljs.core.truth_(inst_46917)){
var statearr_46958_46981 = state_46943__$1;
(statearr_46958_46981[(1)] = (8));

} else {
var statearr_46959_46982 = state_46943__$1;
(statearr_46959_46982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (14))){
var inst_46936 = (state_46943[(2)]);
var inst_46937 = cljs.core.async.close_BANG_.call(null,out);
var state_46943__$1 = (function (){var statearr_46961 = state_46943;
(statearr_46961[(13)] = inst_46936);

return statearr_46961;
})();
var statearr_46962_46983 = state_46943__$1;
(statearr_46962_46983[(2)] = inst_46937);

(statearr_46962_46983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (10))){
var inst_46927 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
var statearr_46963_46984 = state_46943__$1;
(statearr_46963_46984[(2)] = inst_46927);

(statearr_46963_46984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (8))){
var inst_46916 = (state_46943[(11)]);
var inst_46907 = (state_46943[(8)]);
var tmp46960 = inst_46907;
var inst_46907__$1 = tmp46960;
var inst_46908 = inst_46916;
var state_46943__$1 = (function (){var statearr_46964 = state_46943;
(statearr_46964[(7)] = inst_46908);

(statearr_46964[(8)] = inst_46907__$1);

return statearr_46964;
})();
var statearr_46965_46985 = state_46943__$1;
(statearr_46965_46985[(2)] = null);

(statearr_46965_46985[(1)] = (2));


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
});})(c__45169__auto___46971,out))
;
return ((function (switch__45081__auto__,c__45169__auto___46971,out){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_46966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46966[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_46966[(1)] = (1));

return statearr_46966;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_46943){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_46943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e46967){if((e46967 instanceof Object)){
var ex__45085__auto__ = e46967;
var statearr_46968_46986 = state_46943;
(statearr_46968_46986[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46987 = state_46943;
state_46943 = G__46987;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_46943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_46943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___46971,out))
})();
var state__45171__auto__ = (function (){var statearr_46969 = f__45170__auto__.call(null);
(statearr_46969[(6)] = c__45169__auto___46971);

return statearr_46969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___46971,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46989 = arguments.length;
switch (G__46989) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45169__auto___47059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45169__auto___47059,out){
return (function (){
var f__45170__auto__ = (function (){var switch__45081__auto__ = ((function (c__45169__auto___47059,out){
return (function (state_47031){
var state_val_47032 = (state_47031[(1)]);
if((state_val_47032 === (7))){
var inst_47027 = (state_47031[(2)]);
var state_47031__$1 = state_47031;
var statearr_47033_47060 = state_47031__$1;
(statearr_47033_47060[(2)] = inst_47027);

(statearr_47033_47060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (1))){
var inst_46990 = [];
var inst_46991 = inst_46990;
var inst_46992 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47031__$1 = (function (){var statearr_47034 = state_47031;
(statearr_47034[(7)] = inst_46991);

(statearr_47034[(8)] = inst_46992);

return statearr_47034;
})();
var statearr_47035_47061 = state_47031__$1;
(statearr_47035_47061[(2)] = null);

(statearr_47035_47061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (4))){
var inst_46995 = (state_47031[(9)]);
var inst_46995__$1 = (state_47031[(2)]);
var inst_46996 = (inst_46995__$1 == null);
var inst_46997 = cljs.core.not.call(null,inst_46996);
var state_47031__$1 = (function (){var statearr_47036 = state_47031;
(statearr_47036[(9)] = inst_46995__$1);

return statearr_47036;
})();
if(inst_46997){
var statearr_47037_47062 = state_47031__$1;
(statearr_47037_47062[(1)] = (5));

} else {
var statearr_47038_47063 = state_47031__$1;
(statearr_47038_47063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (15))){
var inst_47021 = (state_47031[(2)]);
var state_47031__$1 = state_47031;
var statearr_47039_47064 = state_47031__$1;
(statearr_47039_47064[(2)] = inst_47021);

(statearr_47039_47064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (13))){
var state_47031__$1 = state_47031;
var statearr_47040_47065 = state_47031__$1;
(statearr_47040_47065[(2)] = null);

(statearr_47040_47065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (6))){
var inst_46991 = (state_47031[(7)]);
var inst_47016 = inst_46991.length;
var inst_47017 = (inst_47016 > (0));
var state_47031__$1 = state_47031;
if(cljs.core.truth_(inst_47017)){
var statearr_47041_47066 = state_47031__$1;
(statearr_47041_47066[(1)] = (12));

} else {
var statearr_47042_47067 = state_47031__$1;
(statearr_47042_47067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (3))){
var inst_47029 = (state_47031[(2)]);
var state_47031__$1 = state_47031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47031__$1,inst_47029);
} else {
if((state_val_47032 === (12))){
var inst_46991 = (state_47031[(7)]);
var inst_47019 = cljs.core.vec.call(null,inst_46991);
var state_47031__$1 = state_47031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47031__$1,(15),out,inst_47019);
} else {
if((state_val_47032 === (2))){
var state_47031__$1 = state_47031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47031__$1,(4),ch);
} else {
if((state_val_47032 === (11))){
var inst_46999 = (state_47031[(10)]);
var inst_46995 = (state_47031[(9)]);
var inst_47009 = (state_47031[(2)]);
var inst_47010 = [];
var inst_47011 = inst_47010.push(inst_46995);
var inst_46991 = inst_47010;
var inst_46992 = inst_46999;
var state_47031__$1 = (function (){var statearr_47043 = state_47031;
(statearr_47043[(7)] = inst_46991);

(statearr_47043[(11)] = inst_47011);

(statearr_47043[(12)] = inst_47009);

(statearr_47043[(8)] = inst_46992);

return statearr_47043;
})();
var statearr_47044_47068 = state_47031__$1;
(statearr_47044_47068[(2)] = null);

(statearr_47044_47068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (9))){
var inst_46991 = (state_47031[(7)]);
var inst_47007 = cljs.core.vec.call(null,inst_46991);
var state_47031__$1 = state_47031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47031__$1,(11),out,inst_47007);
} else {
if((state_val_47032 === (5))){
var inst_46999 = (state_47031[(10)]);
var inst_46995 = (state_47031[(9)]);
var inst_46992 = (state_47031[(8)]);
var inst_46999__$1 = f.call(null,inst_46995);
var inst_47000 = cljs.core._EQ_.call(null,inst_46999__$1,inst_46992);
var inst_47001 = cljs.core.keyword_identical_QMARK_.call(null,inst_46992,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47002 = (inst_47000) || (inst_47001);
var state_47031__$1 = (function (){var statearr_47045 = state_47031;
(statearr_47045[(10)] = inst_46999__$1);

return statearr_47045;
})();
if(cljs.core.truth_(inst_47002)){
var statearr_47046_47069 = state_47031__$1;
(statearr_47046_47069[(1)] = (8));

} else {
var statearr_47047_47070 = state_47031__$1;
(statearr_47047_47070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (14))){
var inst_47024 = (state_47031[(2)]);
var inst_47025 = cljs.core.async.close_BANG_.call(null,out);
var state_47031__$1 = (function (){var statearr_47049 = state_47031;
(statearr_47049[(13)] = inst_47024);

return statearr_47049;
})();
var statearr_47050_47071 = state_47031__$1;
(statearr_47050_47071[(2)] = inst_47025);

(statearr_47050_47071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (10))){
var inst_47014 = (state_47031[(2)]);
var state_47031__$1 = state_47031;
var statearr_47051_47072 = state_47031__$1;
(statearr_47051_47072[(2)] = inst_47014);

(statearr_47051_47072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (8))){
var inst_46991 = (state_47031[(7)]);
var inst_46999 = (state_47031[(10)]);
var inst_46995 = (state_47031[(9)]);
var inst_47004 = inst_46991.push(inst_46995);
var tmp47048 = inst_46991;
var inst_46991__$1 = tmp47048;
var inst_46992 = inst_46999;
var state_47031__$1 = (function (){var statearr_47052 = state_47031;
(statearr_47052[(14)] = inst_47004);

(statearr_47052[(7)] = inst_46991__$1);

(statearr_47052[(8)] = inst_46992);

return statearr_47052;
})();
var statearr_47053_47073 = state_47031__$1;
(statearr_47053_47073[(2)] = null);

(statearr_47053_47073[(1)] = (2));


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
});})(c__45169__auto___47059,out))
;
return ((function (switch__45081__auto__,c__45169__auto___47059,out){
return (function() {
var cljs$core$async$state_machine__45082__auto__ = null;
var cljs$core$async$state_machine__45082__auto____0 = (function (){
var statearr_47054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47054[(0)] = cljs$core$async$state_machine__45082__auto__);

(statearr_47054[(1)] = (1));

return statearr_47054;
});
var cljs$core$async$state_machine__45082__auto____1 = (function (state_47031){
while(true){
var ret_value__45083__auto__ = (function (){try{while(true){
var result__45084__auto__ = switch__45081__auto__.call(null,state_47031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45084__auto__;
}
break;
}
}catch (e47055){if((e47055 instanceof Object)){
var ex__45085__auto__ = e47055;
var statearr_47056_47074 = state_47031;
(statearr_47056_47074[(5)] = ex__45085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47075 = state_47031;
state_47031 = G__47075;
continue;
} else {
return ret_value__45083__auto__;
}
break;
}
});
cljs$core$async$state_machine__45082__auto__ = function(state_47031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45082__auto____1.call(this,state_47031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45082__auto____0;
cljs$core$async$state_machine__45082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45082__auto____1;
return cljs$core$async$state_machine__45082__auto__;
})()
;})(switch__45081__auto__,c__45169__auto___47059,out))
})();
var state__45171__auto__ = (function (){var statearr_47057 = f__45170__auto__.call(null);
(statearr_47057[(6)] = c__45169__auto___47059);

return statearr_47057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45171__auto__);
});})(c__45169__auto___47059,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510612163421
