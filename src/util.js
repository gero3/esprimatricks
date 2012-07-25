

var inherits = function(obj){
    var fn = function(){};
    fn.prototype = obj.prototype;
    return new fn();
};


exports.inherits = inherits;