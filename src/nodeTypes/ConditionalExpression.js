var inherits = require("../util").inherits;
var astNode = require("../astNode");

var ConditionalExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ConditionalExpression";
    
    this.test = astNode.objectifyProperty(ast.test,this);
    this.consequent = astNode.objectifyProperty(ast.consequent,this);
    this.alternate = astNode.objectifyProperty(ast.alternate,this);
};

ConditionalExpression.prototype  = inherits(astNode);

ConditionalExpression.prototype.getChildProperties = function(){
    return ["test","consequent","alternate"];
};

ConditionalExpression.prototype.getTest = function(){
    return this.test;
};

ConditionalExpression.prototype.getConsequent = function(){
    return this.consequent;
};

ConditionalExpression.prototype.getAlternate = function(){
    return this.alternate;
};


module.exports = ConditionalExpression;
