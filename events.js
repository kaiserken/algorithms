


function Event() {
  var queue = [];
  this.subscribe = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "function") queue.push(arguments[i]);
    }
  };
  this.unsubscribe = function () {
    for (var i = 0; i < arguments.length; i++) {
      var index = queue.lastIndexOf(arguments[i]);
      if (index >= 0) queue.splice(index, 1);
    }
  };
  this.emit = function () {
    var emit = queue.slice();
    while (emit.length) emit.shift().apply(this, arguments);
  };
}
