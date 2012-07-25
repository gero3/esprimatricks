var inherits = require("../util").inherits;
var astNode = require("../astNode");


var Identifier = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "Identifier";
    this.name = ast.name;
};

Identifier.prototype = inherits(astNode);

Identifier.prototype.getChildProperties = function(){
    return [];
};

var _toJSON = astNode.prototype.toJSON;
Identifier.prototype.toJSON = function(){
    var returnValue = _toJSON.call(this);
    returnValue.name = this.name;
    return returnValue;
};

module.exports = Identifier;
