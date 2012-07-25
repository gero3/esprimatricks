var inherits = require("../util").inherits;
var astNode = require("../astNode");


var VariableDeclarator = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "VariableDeclarator";
    this.id = astNode.objectifyProperty(ast.id,this);
    this.init = astNode.objectifyProperty(ast.init,this);
};

VariableDeclarator.prototype  = inherits(astNode);

VariableDeclarator.prototype.getChildProperties = function(){
    return ["id","init"];
};

VariableDeclarator.prototype.getId = function(){
    return this.id;
};

VariableDeclarator.prototype.getInit = function(){
    return this.init;
};

module.exports = VariableDeclarator;
