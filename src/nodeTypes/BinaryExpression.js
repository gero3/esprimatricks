var inherits = require("../util").inherits;
var astNode = require("../astNode");


var BinaryExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "BinaryExpression";
    this.operator = ast.operator;
    this.left = astNode.objectifyProperty(ast.left,this);
    this.right = astNode.objectifyProperty(ast.right,this);
};

BinaryExpression.prototype = inherits(astNode);

BinaryExpression.prototype.getChildProperties = function(){
    return ["left","right"];
};

BinaryExpression.prototype.getLeft = function(){
    return this.left;
};

BinaryExpression.prototype.getRight = function(){
    return this.right;
};

var _toJSON = astNode.prototype.toJSON;
BinaryExpression.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.operator = this.operator;
    return returnValue;
};


module.exports = BinaryExpression;
