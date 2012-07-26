var inherits = require("../util").inherits;
var astNode = require("../astNode");


var LogicalExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "LogicalExpression";
    this.operator = ast.operator;
    this.left = astNode.objectifyProperty(ast.left,this);
    this.right = astNode.objectifyProperty(ast.right,this);
};

LogicalExpression.prototype = inherits(astNode);

LogicalExpression.prototype.getChildProperties = function(){
    return ["left","right"];
};

LogicalExpression.prototype.getLeft = function(){
    return this.left;
};

LogicalExpression.prototype.getRight = function(){
    return this.right;
};

var _toJSON = astNode.prototype.toJSON;
LogicalExpression.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.operator = this.operator;
    return returnValue;
};


module.exports = LogicalExpression;
