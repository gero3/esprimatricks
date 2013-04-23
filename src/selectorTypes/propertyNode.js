exports.match = function(selection){
    var regex1 = /^\:\:[A-Za-z]+\:\:/g;
    var test = regex1.exec(selection);
    return test ? test[0] : undefined;
    
};

exports.find = function(node, match){
    var property = match.replace(/\:/g,"");
    if ( typeof (node[property]) === "function" ){
        return node[property]();
    }
//    console.log(property);
    return node[property];
};