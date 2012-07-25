exports.match = function(selection){
    var regex1 = /^\s+/g;
    var test = regex1.exec(selection);
    return test ? test[0] : undefined;
    
};

exports.find = function(node, match){
    return node.getDescendants();
};