var selector = require("./selector").selector; 
var scope = require("./scope").scope;

var counter = 0;

var astNode = function(ast,parent){

    this.nodeId = counter++;
    this.type = ast.type;
    this.parent = parent;
    this.loc = ast.loc;
    this.range = ast.range;
    
};
// mustoverride;
astNode.prototype.getChildProperties = function(){
    return [];
};

astNode.prototype.querySelectorAll = function(fn){
    if (typeof(fn) === "string"){
        return selector(this,fn);
    } else {
        var returnValue = [];
        if (fn(this)){
            returnValue.push(this);
        }
        var children = this.getChildren();
        for(var i=0;i<children.length;i++){
            returnValue = returnValue.concat(children[i].querySelectorAll(fn));
        }
        return returnValue;
        
    }
};

astNode.prototype.has = function(selection){
    if (selector(this,selection).length > 0) {
        return true;
    } else {
        return false;
    }
};

astNode.prototype.getChildren = function(){
    var returnValue = [];
    var props = this.getChildProperties();
    for(var i=0;i<props.length;i++){
        if (Array.isArray(this[props[i]])){
            [].push.apply(returnValue,this[props[i]]);
        } else {
            if (this[props[i]] !== null){
                returnValue.push(this[props[i]]);
            }
        }
    
    }
    return returnValue;
};

astNode.prototype.applyToChildren = function(fn){
    var children = this.getChildren();
    for(var i=0;i<children.length;i++){
        fn(children[i]);
    }
};

astNode.prototype.getDescendants = function(fn){
    var returnValue = [];
    function addChild(node){
        returnValue.push(node);
        node.applyToChildren(addChild);
    }
    this.applyToChildren(addChild);
    return returnValue;
};

astNode.prototype.getParent = function(){
    return this.parent;
};

astNode.prototype.getScope = function(){
    if (this.parent){
        return this.parent.getScope();  
    } else {
        return new scope(this);
    }
};

astNode.prototype.toJSON = function(){
	var returnValue = {};
    returnValue.type = this.type;
	var props = this.getChildProperties();
    for(var i=0;i<props.length;i++){
		if (Array.isArray(this[props[i]])){
			var arrProps = this[props[i]];
			returnValue[props[i]] = [];
			for(var j=0;j<arrProps.length;j++){
                if (arrProps[j] !== null){
                    returnValue[props[i]].push(arrProps[j].toJSON());
                } else {
                    returnValue[props[i]].push(null);
                }
			}
		} else {
			if (this[props[i]] !== null){
				returnValue[props[i]] = this[props[i]].toJSON();
			} else {
				returnValue[props[i]] = null;
			}
		}
	}
    return returnValue;
};

function objectifyProperty(prop,parent){
    var returnValue; 
    if (Array.isArray(prop)){
        returnValue = [];
        for (var i = 0;i<prop.length;i++){
            if (prop[i] != null){
                returnValue.push(astNode.objectify(prop[i],parent));
            } else {
                returnValue.push(null);
            };
        }
    } else {
        if (prop != null){
            returnValue = astNode.objectify(prop,parent);
        } else {
            returnValue = null;
        }
    }
    return returnValue;
}

astNode.objectifyProperty = objectifyProperty;


module.exports = astNode;

astNode.nodeTypes = require("./nodeTypes");
astNode.objectify = function(ast,parent){
    var nodeType = astNode.nodeTypes[ast.type];
    if (!nodeType){
		throw ast.type + " doesn't exist in esprimatricks";
    }
    return new nodeType(ast,parent);    
};

astNode.getNodeTypeChildProperties = function(){
    var list = {};
    
    for(var i in astNode.nodeTypes){
        if (astNode.nodeTypes.hasOwnProperty(i)){
            list[i] = astNode.nodeTypes[i].prototype.getChildProperties();
        }
    }
    
    return list;
    
};



