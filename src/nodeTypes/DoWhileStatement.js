var inherits = require("../util").inherits;
var astNode = require("../astNode");


var DoWhileStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "DoWhileStatement";
    this.body = astNode.objectifyProperty(ast.body,this);
    this.test = astNode.objectifyProperty(ast.test,this);
};

DoWhileStatement.prototype  = inherits(astNode);

DoWhileStatement.prototype.getChildProperties = function(){
    return ["test","body"];
};
DoWhileStatement.prototype.getBody = function(){
    return this.body;
};

module.exports = DoWhileStatement;