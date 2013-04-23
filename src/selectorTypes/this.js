exports.match = function(selection){
    var regex1 = /^\#this\#/g;
    var test = regex1.exec(selection);
    return test ? test[0] : undefined;
    
};

exports.find = function(node, match){
    return node;
};