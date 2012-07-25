var scope = function(node){
    this.node = node;
};

scope.prototype.getParentScope = function(){
    if (!this.node.parent){
        return undefined;   
    }
    return this.node.parent.getScope();
};

scope.prototype.isGlobalScope = function(){
    return this.getParentScope() === undefined;
};

module.exports = scope;