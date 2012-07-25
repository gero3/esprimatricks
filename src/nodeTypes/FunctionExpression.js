var inherits = require("../util").inherits;
var astNode = require("../astNode");
var scope = require("../scope");

var FunctionExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "FunctionExpression";
    this.scope = new scope(this);
    
    this.id = astNode.objectifyProperty(ast.id,this);
    this.params = astNode.objectifyProperty(ast.params,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

FunctionExpression.prototype  = inherits(astNode);

FunctionExpression.prototype.getChildProperties = function(){
    return ["id","params","body"];
};

FunctionExpression.prototype.getId = function(){
    return this.id;
};

FunctionExpression.prototype.getParams = function(){
    return this.params;
};

FunctionExpression.prototype.getBody = function(){
    return this.body;
};


FunctionExpression.prototype.getScope =function(){
    return this.scope;
};


module.exports = FunctionExpression;
