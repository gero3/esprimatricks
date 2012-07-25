exports.match = function(selection){
    var regex1 = /^\s*\,\s*.*/g;
    var test = regex1.exec(selection);
    return test ? test[0] : undefined;
    
};

exports.find = function(node, match){
    var property = /^\s*\,\s*(.*)/g.exec(match)[1];
//    console.log(property);
    return node.querySelectorAll(property);
};


exports.additional = true;