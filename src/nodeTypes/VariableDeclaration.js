var inherits = require("../util").inherits;
var astNode = require("../astNode");


var VariableDeclaration = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "VariableDeclaration";
    this.kind = ast.kind;
    this.declarations = astNode.objectifyProperty(ast.declarations,this);
};

VariableDeclaration.prototype  = inherits(astNode);

VariableDeclaration.prototype.getChildProperties = function(){
    return ["declarations"];
};
VariableDeclaration.prototype.getDeclarations = function(){
    return this.declarations;
};

var _toJSON = astNode.prototype.toJSON;
VariableDeclaration.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.kind = this.kind;
    return returnValue;
};

module.exports = VariableDeclaration;
