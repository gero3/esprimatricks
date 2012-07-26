var inherits = require("../util").inherits;
var astNode = require("../astNode");


var WhileStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "WhileStatement";
    
    this.test = astNode.objectifyProperty(ast.test,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

WhileStatement.prototype = inherits(astNode);

WhileStatement.prototype.getChildProperties = function(){
    return ["test","body"];
};

WhileStatement.prototype.getTest = function(){
    return this.test;
};

WhileStatement.prototype.getBody = function(){
    return this.body;
};

module.exports = WhileStatement;
