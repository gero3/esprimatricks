var inherits = require("../util").inherits;
var astNode = require("../astNode");


var ExpressionStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ExpressionStatement";
    this.expression = astNode.objectifyProperty(ast.expression,this);
};

ExpressionStatement.prototype = inherits(astNode);

ExpressionStatement.prototype.getChildProperties = function(){
    return ["expression"];
};

ExpressionStatement.prototype.getExpression = function(){
    return this.expression;
};



module.exports = ExpressionStatement;
