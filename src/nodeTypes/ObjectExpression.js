var inherits = require("../util").inherits;
var astNode = require("../astNode");


var ObjectExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ObjectExpression";
    this.properties = astNode.objectifyProperty(ast.properties,this);
};

ObjectExpression.prototype = inherits(astNode);

ObjectExpression.prototype.getChildProperties = function(){
    return ["properties"];
};

ObjectExpression.prototype.getProperties = function(){
    return this.properties;
};



module.exports = ObjectExpression;
