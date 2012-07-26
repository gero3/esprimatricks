var inherits = require("../util").inherits;
var astNode = require("../astNode");

var ThrowStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ThrowStatement";
    this.argument = astNode.objectifyProperty(ast.argument,this);
};

ThrowStatement.prototype = inherits(astNode);

ThrowStatement.prototype.getChildProperties = function(){
    return ["argument"];
};

ThrowStatement.prototype.getArgument = function(){
    return this.argument;
};

module.exports = ThrowStatement;
