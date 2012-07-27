

var inherits = function(obj){
    var fn = function(){};
    fn.prototype = obj.prototype;
    return new fn();
};

var isTheSameAst = function(src,dest,exceptions){
    exceptions = exceptions || [];
    for (var i in src){
        if (!src.hasOwnProperty(i)){
            continue;
        }
        
        if( exceptions.indexOf(i) !== -1){
            continue;
        }
        
        
        if (typeof src[i] === "string" || src[i] === null){
            if(src[i] !== dest[i]){
                return false;
            } else {
                continue;
            }
        }
        
        if (dest[i] === undefined){
            return false;
        }
        
        
        if (!isTheSameAst(src[i],dest[i],exceptions)){
            return false;
        }
    
        
    }
    return true;
};


exports.inherits = inherits;
exports.isTheSameAst = isTheSameAst;