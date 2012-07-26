var inherits = require("../util").inherits;
var astNode = require("../astNode");

var IfStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "IfStatement";
    
    this.test = astNode.objectifyProperty(ast.test,this);
    this.consequent = astNode.objectifyProperty(ast.consequent,this);
    this.alternate = astNode.objectifyProperty(ast.alternate,this);
};

IfStatement.prototype  = inherits(astNode);

IfStatement.prototype.getChildProperties = function(){
    return ["test","consequent","alternate"];
};

IfStatement.prototype.getTest = function(){
    return this.test;
};

IfStatement.prototype.getConsequent = function(){
    return this.consequent;
};

IfStatement.prototype.getAlternate = function(){
    return this.alternate;
};


module.exports = IfStatement;
