var inherits = require("../util").inherits;
var astNode = require("../astNode");
var scope = require("../scope");

var FunctionDeclaration = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "FunctionDeclaration";
    this.scope = new scope(this);
    
    this.id = astNode.objectifyProperty(ast.id,this);
    this.params = astNode.objectifyProperty(ast.params,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

FunctionDeclaration.prototype  = inherits(astNode);

FunctionDeclaration.prototype.getChildProperties = function(){
    return ["id","params","body"];
};

FunctionDeclaration.prototype.getId = function(){
    return this.id;
};

FunctionDeclaration.prototype.getParams = function(){
    return this.params;
};

FunctionDeclaration.prototype.getBody = function(){
    return this.body;
};


FunctionDeclaration.prototype.getScope =function(){
    return this.scope;
};


module.exports = FunctionDeclaration;
