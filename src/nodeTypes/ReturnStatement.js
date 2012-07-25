var inherits = require("../util").inherits;
var astNode = require("../astNode");

var ReturnStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ReturnStatement";
    this.argument = astNode.objectifyProperty(ast.argument,this);
};

ReturnStatement.prototype = inherits(astNode);

ReturnStatement.prototype.getChildProperties = function(){
    return ["argument"];
};

ReturnStatement.prototype.getArgument = function(){
    return this.argument;
};

module.exports = ReturnStatement;
