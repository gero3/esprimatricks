var inherits = require("../util").inherits;
var astNode = require("../astNode");


var AssignmentExpression = function(ast,parent){
    astNode.call(this,ast,parent);
   	this.type = "AssignmentExpression";
    this.operator = ast.operator;
    this.left = astNode.objectifyProperty(ast.left,this);
    this.right = astNode.objectifyProperty(ast.right,this);
};

AssignmentExpression.prototype = inherits(astNode);

AssignmentExpression.prototype.getChildProperties = function(){
    return ["left","right"];
};

AssignmentExpression.prototype.getLeft = function(){
    return this.left;
};

AssignmentExpression.prototype.getRight = function(){
    return this.right;
};

var _toJSON = astNode.prototype.toJSON;
AssignmentExpression.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.operator = this.operator;
    return returnValue;
};


module.exports = AssignmentExpression;
