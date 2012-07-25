var inherits = require("../util").inherits;
var astNode = require("../astNode");


var EmptyStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "EmptyStatement";
};

EmptyStatement.prototype = inherits(astNode);

EmptyStatement.prototype.getChildProperties = function(){
    return [];
};

module.exports = EmptyStatement;
