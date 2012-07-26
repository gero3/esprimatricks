var inherits = require("../util").inherits;
var astNode = require("../astNode");


var SequenceExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "SequenceExpression";
    this.expressions = astNode.objectifyProperty(ast.expressions,this);
};

SequenceExpression.prototype = inherits(astNode);

SequenceExpression.prototype.getChildProperties = function(){
    return ["expressions"];
};

SequenceExpression.prototype.getExpressions = function(){
    return this.expressions;
};



module.exports = SequenceExpression;
