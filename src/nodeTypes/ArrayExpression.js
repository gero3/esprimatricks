var inherits = require("../util").inherits;
var scope = require("../scope");

var astNode = require("../astNode");


var ArrayExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ArrayExpression";
    this.elements = astNode.objectifyProperty(ast.elements,this);
};

ArrayExpression.prototype  = inherits(astNode);

ArrayExpression.prototype.getChildProperties = function(){
    return ["elements"];
};
ArrayExpression.prototype.getElements = function(){
    return this.elements;
};

module.exports = ArrayExpression;