var inherits = require("../util").inherits;
var astNode = require("../astNode");


var SwitchStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "SwitchStatement";
    
    this.discriminant = astNode.objectifyProperty(ast.discriminant,this);
    this.cases = astNode.objectifyProperty(ast.cases,this);
};

SwitchStatement.prototype = inherits(astNode);

SwitchStatement.prototype.getChildProperties = function(){
    return ["discriminant","cases"];
};

SwitchStatement.prototype.getDiscriminant = function(){
    return this.discriminant;
};

SwitchStatement.prototype.getCases = function(){
    return this.cases;
};

module.exports = SwitchStatement;
