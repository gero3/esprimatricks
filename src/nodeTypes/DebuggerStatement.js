var inherits = require("../util").inherits;
var astNode = require("../astNode");


var DebuggerStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "DebuggerStatement";
};

DebuggerStatement.prototype = inherits(astNode);

DebuggerStatement.prototype.getChildProperties = function(){
    return [];
};

module.exports = DebuggerStatement;
