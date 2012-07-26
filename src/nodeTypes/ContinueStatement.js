var inherits = require("../util").inherits;
var astNode = require("../astNode");


var ContinueStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ContinueStatement";
    this.label = astNode.objectifyProperty(ast.label,this);
};

ContinueStatement.prototype = inherits(astNode);

ContinueStatement.prototype.getChildProperties = function(){
    return ["label"];
};

ContinueStatement.prototype.getLabel = function(){
    return this.label;
};

module.exports = ContinueStatement;
