var inherits = require("../util").inherits;
var astNode = require("../astNode");

var UpdateExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "UpdateExpression";
    this.argument = astNode.objectifyProperty(ast.argument,this);
};

UpdateExpression.prototype = inherits(astNode);

UpdateExpression.prototype.getChildProperties = function(){
    return ["argument"];
};

UpdateExpression.prototype.getArgument = function(){
    return this.argument;
};

module.exports = UpdateExpression;
