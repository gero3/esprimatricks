var inherits = require("../util").inherits;
var astNode = require("../astNode");


var BreakStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "BreakStatement";
    this.label = astNode.objectifyProperty(ast.label,this);
};

BreakStatement.prototype = inherits(astNode);

BreakStatement.prototype.getChildProperties = function(){
    return ["label"];
};

BreakStatement.prototype.getLabel = function(){
    return this.label;
};

module.exports = BreakStatement;
