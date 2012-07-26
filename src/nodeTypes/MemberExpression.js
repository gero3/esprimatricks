var inherits = require("../util").inherits;
var astNode = require("../astNode");


var MemberExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "MemberExpression";
    
    this.object = astNode.objectifyProperty(ast.object,this);
    this.property = astNode.objectifyProperty(ast.property,this);
};

MemberExpression.prototype = inherits(astNode);

MemberExpression.prototype.getChildProperties = function(){
    return ["object","property"];
};

MemberExpression.prototype.getObject = function(){
    return this.object;
};

MemberExpression.prototype.getProperty = function(){
    return this.property;
};

module.exports = MemberExpression;
