var inherits = require("../util").inherits;
var astNode = require("../astNode");


var Property = function(ast,parent){
    astNode.call(this,ast,parent);
    this.type = "Property";
    
    this.key = astNode.objectifyProperty(ast.key,this);
    this.value = astNode.objectifyProperty(ast.value,this);
};

Property.prototype = inherits(astNode);

Property.prototype.getChildProperties = function(){
    return ["key","value"];
};

Property.prototype.getKey = function(){
    return this.key;
};

Property.prototype.getValue = function(){
    return this.value;
};

module.exports = Property;
