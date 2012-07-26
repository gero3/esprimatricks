var inherits = require("../util").inherits;
var astNode = require("../astNode");


var LabeledStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "LabeledStatement";
    this.label = astNode.objectifyProperty(ast.label,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

LabeledStatement.prototype = inherits(astNode);

LabeledStatement.prototype.getChildProperties = function(){
    return ["label","body"];
};

LabeledStatement.prototype.getLabel = function(){
    return this.label;
};

LabeledStatement.prototype.getBody = function(){
    return this.body;
};


module.exports = LabeledStatement;
