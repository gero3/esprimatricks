var inherits = require("../util").inherits;
var astNode = require("../astNode");


var CallExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "CallExpression";
    this.callee = astNode.objectifyProperty(ast.callee,this);
    this["arguments"] = astNode.objectifyProperty(ast["arguments"],this);
};

CallExpression.prototype  = inherits(astNode);

CallExpression.prototype.getChildProperties = function(){
    return ["callee","arguments"];
};

CallExpression.prototype.getCallee = function(){
    return this.callee;
};

CallExpression.prototype.getArguments = function(){
    return this["arguments"];
};

module.exports = CallExpression;
