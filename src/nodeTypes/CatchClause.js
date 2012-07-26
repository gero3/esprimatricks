var inherits = require("../util").inherits;
var astNode = require("../astNode");
var scope = require("../scope");

var CatchClause  = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "CatchClause";
    this.scope = new scope(this);
    
    this.params = astNode.objectifyProperty(ast.params,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

CatchClause.prototype  = inherits(astNode);

CatchClause.prototype.getChildProperties = function(){
    return ["params","body"];
};

CatchClause.prototype.getParams = function(){
    return this.params;
};

CatchClause.prototype.getBody = function(){
    return this.body;
};


CatchClause.prototype.getScope =function(){
    return this.scope;
};


module.exports = CatchClause;
