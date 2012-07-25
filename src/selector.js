var isType = /^[A-Za-z]+$/g;


function trim(str){
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');  
}

var selector = function(node,selection){
    var chunked = selector.chunk(selection);
    var parts = chunked.selectors;
    var returnValue; 
    if (parts.length >= 1 && isType.exec(parts[0].match)){
        returnValue = selectTypeRecursively(node, parts[0].match);
        parts.shift();
    } else {
        returnValue = node.getDescendants();
        returnValue.unshift(node);
    }
    
    if (parts.length && parts[parts.length-1].additional){
        var additional = parts.pop();
        returnValue = find(returnValue,parts);
        var test = additional.find(node,additional.match);
        test.forEach(function(node){
            if (returnValue.indexOf(node) === -1){
                returnValue.push(node);
            }
        });
    } else {
        returnValue = find(returnValue,parts);   
    }
    
    return returnValue;
};

selector.find = function(nodes,selection){
    
    if (!Array.isArray(nodes)){
        nodes = [nodes];
    }
    
    var chunked = selector.chunk(selection);
    return find(nodes,chunked.selectors);
};

selector.chunk = function(selection){
    var soFar = trim(selection);
    var returnValue = {selectors:[]};
    var foundpart = "";
    var foundSelectorType;
    while (soFar.length > 0){
        foundpart = "";
        foundSelectorType = undefined;
        selector.selectorTypes.forEach(function(selectorType){
            if  (selectorType.match){
                var match = selectorType.match(soFar);
                if (match !== undefined && match.length > foundpart.length){
                    foundpart = match;
                    foundSelectorType = selectorType;
                }
            }
        });
        if (foundpart === "" || 
            (!foundSelectorType.find && returnValue.length !== 0) ||
            (!foundSelectorType.find && !foundSelectorType.preprocess)
        ){
            throw "This selector can't be handled: " + soFar;  
        }
        returnValue.selectors.push({match:foundpart,find:foundSelectorType.find,additional:foundSelectorType.additional});
        soFar = soFar.substr(foundpart.length);
    }
    
    return returnValue;
};



var find = function(nodes,parts){
    var returnValue = nodes;
    parts.forEach(function(part){
        var tests = returnValue;
        returnValue = [];
        tests.forEach(function(node){
            var test = part.find(node,part.match);
            if (!test){
                test = [];
            } else if (test === true){
                test = [node];
            } else if (!Array.isArray(test)){
                test = [test];  
            }
            
            test.forEach(function(node){
                if (returnValue.indexOf(node) === -1){
                    returnValue.push(node);
                }
            });
        });
    });
    return returnValue;
};

var selectTypeRecursively = function(node,type){
    var returnValue = [];
    function checkIt(nodeTocheck){
        if (nodeTocheck.type === type){
          returnValue.push(nodeTocheck);
        }
        nodeTocheck.applyToChildren(checkIt);
    }
    checkIt(node);
    return returnValue;
};

selector.selectorTypes = [];
selector.addType = function(selectorType){
    selector.selectorTypes.push(selectorType);
};

exports.selector = selector;

selector.addType(require("./selectorTypes/astNodeType"));
selector.addType(require("./selectorTypes/Children"));
selector.addType(require("./selectorTypes/Descendants"));
selector.addType(require("./selectorTypes/propertyNode"));
selector.addType(require("./selectorTypes/parent"));

selector.addType(require("./selectorTypes/continuation"));
