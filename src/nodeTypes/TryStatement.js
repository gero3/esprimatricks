var inherits = require("../util").inherits;
var astNode = require("../astNode");

var TryStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "TryStatement";
    
    this.block = astNode.objectifyProperty(ast.block,this);
    this.handlers = astNode.objectifyProperty(ast.handlers,this);
    this.finalizer = astNode.objectifyProperty(ast.finalizer,this);
};

TryStatement.prototype  = inherits(astNode);

TryStatement.prototype.getChildProperties = function(){
    return ["block","handlers","finalizer"];
};

TryStatement.prototype.getBlock = function(){
    return this.block;
};

TryStatement.prototype.getHandlers = function(){
    return this.handlers;
};

TryStatement.prototype.getFinalizer = function(){
    return this.finalizer;
};


module.exports = TryStatement;
