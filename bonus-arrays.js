Array.prototype.myMap = function(callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  };
  return arr;
};

Array.prototype.myReduce = function(callback, inital) {
  if (this.length < 1) { throw new Error("Empty array not supported"); }
  var acc = inital || this[0];
  var i = inital === undefined ? 1 : 0; 
  for (; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  };
  return acc;
};

Array.prototype.myFilter = function(callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
     arr.push(this[i]);
    }
  };
  return arr;
};
