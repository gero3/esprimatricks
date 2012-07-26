var inherits = require("../util").inherits;
var astNode = require("../astNode");

var ForStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ForStatement";
    
    this.init = astNode.objectifyProperty(ast.init,this);
    this.test = astNode.objectifyProperty(ast.test,this);
    this.update = astNode.objectifyProperty(ast.update,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

ForStatement.prototype  = inherits(astNode);

ForStatement.prototype.getChildProperties = function(){
    return ["init","test","update","body"];
};

ForStatement.prototype.getInit = function(){
    return this.init;
};

ForStatement.prototype.getTest = function(){
    return this.test;
};

ForStatement.prototype.getUpdate = function(){
    return this.update;
};

ForStatement.prototype.getBody = function(){
    return this.body;
};


module.exports = ForStatement;
