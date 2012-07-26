var inherits = require("../util").inherits;
var astNode = require("../astNode");


var SwitchCase = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "SwitchCase";
    
    this.test = astNode.objectifyProperty(ast.test,this);
    this.consequent = astNode.objectifyProperty(ast.consequent,this);
};

SwitchCase.prototype = inherits(astNode);

SwitchCase.prototype.getChildProperties = function(){
    return ["test","consequent"];
};

SwitchCase.prototype.getTest = function(){
    return this.test;
};

SwitchCase.prototype.getConsequent = function(){
    return this.consequent;
};

module.exports = SwitchCase;
