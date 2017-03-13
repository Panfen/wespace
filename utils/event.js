/**
 * Event 类
 * 提供三个基础方法：on（订阅）、 emit（发布）、 off（注销）。
 */

class Event{

  //on 把订阅者所想要订阅的事件及相应的回调函数记录在 Event 对象的 _cbs 属性中
  on(event,fn){
    if(typeof fn != 'function'){
      console.error('fn must be a fucntion!');
      return;
    }
    this._cbs = this._cbs || {};
    (this._cbs[event] = this._cbs[event] || {}).push(fn);
  };

  //emit 接受一个事件名称参数，在 Event 对象的 _cbs 属性中取出对应的数组，并逐个执行里面的回调函数
  emit(event){
    this._cbs = this._cbs || {};
    var callbacks = this._cbs[event],args;

    if(callbacks){
      callbacks = callbacks.slice(0);
      args = [].slice.call(arguments,1);
      for(var i = 0, len = callbacks.length; i < len; i++){
        callbacks[i].apply(null,args);
      } 
    }
  };

  //off 接受事件名称和当初注册的回调函数作参数，在 Event 对象的 _cbs 属性中删除对应的回调函数。
  off(event,fn){
    this._cbs = this._cbs || {};

    if(!arguments.length){
      this._cbs = {};
      return;
    }

    var callbacks = this._cbs[event];
    if(!callbacks) return;

    //remove all handlers
    if(arguments.length == 1){
      delete this._cbs[event];
      return;
    }

    //remove specific handlers
    var cb;
    for (var i = 0, len = callbacks.length; i < len; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);  //数组删除 splice(i,n)  i:位置，n:个数
        break;
      }
    }
    return;
  }
}