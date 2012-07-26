var inherits = require("../util").inherits;
var astNode = require("../astNode");


var NewExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "NewExpression";
    
    this.callee = astNode.objectifyProperty(ast.callee,this);
    this["arguments"] = astNode.objectifyProperty(ast["arguments"],this);
};

NewExpression.prototype = inherits(astNode);

NewExpression.prototype.getChildProperties = function(){
    return ["callee","arguments"];
};

NewExpression.prototype.getCallee = function(){
    return this.callee;
};

NewExpression.prototype.getArguments = function(){
    return this["arguments"];
};

module.exports = NewExpression;
