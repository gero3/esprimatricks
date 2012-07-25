
var walker = function(ast, functionOrObject){
    var fn = functionOrObject;   
    var returnValue = ast.getDescendants();
    returnValue.unshift(ast);
    var l = returnValue.length;
    for(var i = 0; i<l;i++){
        if (fn(returnValue[i]) === false) {
            return returnValue[i];
        }
    }
};
    


exports.walker = walker;