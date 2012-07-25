var inherits = require("../util").inherits;
var scope = require("../scope");

var astNode = require("../astNode");


var BlockStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "BlockStatement";
    this.body = astNode.objectifyProperty(ast.body,this);
};

BlockStatement.prototype  = inherits(astNode);

BlockStatement.prototype.getChildProperties = function(){
    return ["body"];
};
BlockStatement.prototype.getBody = function(){
    return this.body;
};

module.exports = BlockStatement;