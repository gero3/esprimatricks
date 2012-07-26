var inherits = require("../util").inherits;
var astNode = require("../astNode");


var WithStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "WithStatement";
    
    this.object = astNode.objectifyProperty(ast.object,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

WithStatement.prototype = inherits(astNode);

WithStatement.prototype.getChildProperties = function(){
    return ["object","body"];
};

WithStatement.prototype.getObject = function(){
    return this.object;
};

WithStatement.prototype.getBody = function(){
    return this.body;
};

module.exports = WithStatement;
