var inherits = require("../util").inherits;
var astNode = require("../astNode");


var ThisExpression = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "ThisExpression";
};

ThisExpression.prototype = inherits(astNode);

ThisExpression.prototype.getChildProperties = function(){
    return [];
};

module.exports = ThisExpression;
