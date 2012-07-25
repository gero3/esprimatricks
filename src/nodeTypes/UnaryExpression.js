var inherits = require("../util").inherits;
var astNode = require("../astNode");

var UnaryExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "UnaryExpression";
    this.operator = ast.operator;
    this.argument = astNode.objectifyProperty(ast.argument,this);
};

UnaryExpression.prototype = inherits(astNode);

UnaryExpression.prototype.getChildProperties = function(){
    return ["argument"];
};

UnaryExpression.prototype.getArgument = function(){
    return this.argument;
};


var _toJSON = astNode.prototype.toJSON;
UnaryExpression.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.operator = this.operator;
    return returnValue;
};


module.exports = UnaryExpression;
