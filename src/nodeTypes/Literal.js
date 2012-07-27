var inherits = require("../util").inherits;
var astNode = require("../astNode");


var Literal = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "Literal";
    this.value = ast.value;
};

Literal.prototype = inherits(astNode);

Literal.prototype.getChildProperties = function(){
    return [];
};

Literal.prototype.isString = function(){
    return typeof(this.value) === "string";
};

Literal.prototype.isNumber = function(){
    return typeof(this.value) === "number";
};

Literal.prototype.isNull = function(){
    return typeof(this.value) === "undefined";
};

Literal.prototype.isBoolean = function(){
    return typeof(this.value) === "boolean";
};


var _toJSON = astNode.prototype.toJSON;
Literal.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.value = this.value;
    return returnValue;
};


module.exports = Literal;
