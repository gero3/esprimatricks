exports.match = function(selection){
    var regex1 = /^[A-Za-z]+/g;
    var test = regex1.exec(selection);
    return test ? test[0] : undefined;
    
};

exports.find = function(node, match){
    if (node.type === match){
        return node; 
    }
    return undefined;
};