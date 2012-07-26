var inherits = require("../util").inherits;
var astNode = require("../astNode");


var SwitchStatement = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "SwitchStatement";
    
    this.descriminant = astNode.objectifyProperty(ast.descriminant,this);
    this.cases = astNode.objectifyProperty(ast.cases,this);
};

SwitchStatement.prototype = inherits(astNode);

SwitchStatement.prototype.getChildProperties = function(){
    return ["descriminant","cases"];
};

SwitchStatement.prototype.getDescriminant = function(){
    return this.descriminant;
};

SwitchStatement.prototype.getCases = function(){
    return this.cases;
};

module.exports = SwitchStatement;
