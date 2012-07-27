var inherits = require("../util").inherits;
var astNode = require("../astNode");
var scope = require("../scope");

var CatchClause  = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "CatchClause";
    this.scope = new scope(this);
    this.guard = ast.guard;
    this.param = astNode.objectifyProperty(ast.param,this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

CatchClause.prototype  = inherits(astNode);

CatchClause.prototype.getChildProperties = function(){
    return ["param","body"];
};

CatchClause.prototype.getParam = function(){
    return this.param;
};

CatchClause.prototype.getBody = function(){
    return this.body;
};


CatchClause.prototype.getScope =function(){
    return this.scope;
};


var _toJSON = astNode.prototype.toJSON;
CatchClause.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.guard = this.guard;
    return returnValue;
};

try { } catch (e) { }

module.exports = CatchClause;
