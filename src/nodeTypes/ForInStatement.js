var inherits = require("../util").inherits;
var astNode = require("../astNode");


var ForInStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ForInStatement";
    this.each = ast.each;
    this.left = astNode.objectifyProperty(ast.left,this);
    this.right = astNode.objectifyProperty(ast.right,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

ForInStatement.prototype = inherits(astNode);

ForInStatement.prototype.getChildProperties = function(){
    return ["left","right","body"];
};

ForInStatement.prototype.getLeft = function(){
    return this.left;
};

ForInStatement.prototype.getRight = function(){
    return this.right;
};

ForInStatement.prototype.getBody = function(){
    return this.body;
};



var _toJSON = astNode.prototype.toJSON;
ForInStatement.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.each = this.each;
    return returnValue;
};

module.exports = ForInStatement;
