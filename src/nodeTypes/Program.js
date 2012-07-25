var inherits = require("../util").inherits;
var scope = require("../scope");
var astNode = require("../astNode");


var Program = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "Program";
    this.scope = new scope(this);
    this.body = astNode.objectifyProperty(ast.body,this);
};

Program.prototype  = inherits(astNode);

Program.prototype.getChildProperties = function(){
    return ["body"];
};
Program.prototype.getBody = function(){
    return this.body;
};

Program.prototype.getScope =function(){
    return this.scope;
};

module.exports = Program;