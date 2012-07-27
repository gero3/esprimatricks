var inherits = require("../util").inherits;
var astNode = require("../astNode");

var UpdateExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "UpdateExpression";
    this.operator = ast.operator;
    this.prefix = ast.prefix
    this.argument = astNode.objectifyProperty(ast.argument,this);
};

UpdateExpression.prototype = inherits(astNode);

UpdateExpression.prototype.getChildProperties = function(){
    return ["argument"];
};

UpdateExpression.prototype.getArgument = function(){
    return this.argument;
};


var _toJSON = astNode.prototype.toJSON;
UpdateExpression.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.operator = this.operator;
    returnValue.prefix = this.prefix;
    return returnValue;
};



module.exports = UpdateExpression;
