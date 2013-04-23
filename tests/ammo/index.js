var fs = require("fs");
var esprima = require("esprima");
var astNode = require("../../src/astNode");


fs.readFile("tests/ammo/ammo.js","UTF8",function(err,data){
    
    err && console.log(err);
    var numbersHashmap ={};

    var objectified = astNode.objectify(esprima.parse(data));
    var allnumbers = objectified.querySelectorAll("Literal::isNumber::");
    
    for (var i=0;i<allnumbers.length;i++){
        if (numbersHashmap[allnumbers[i].value]){
            numbersHashmap[allnumbers[i].value] +=1
        } else {
            numbersHashmap[allnumbers[i].value] = 1
        }
    }
    
    
    
    for (i in numbersHashmap){
        if (numbersHashmap[i] > 2){
            //console.log(i + ": " + numbersHashmap[i]);
        }
        
    }
    
    
    var allfunctionCalls = objectified.querySelectorAll("CallExpression::callee::Identifier");
    var allfunction = objectified.querySelectorAll("FunctionExpression");

    var calleeHashmap ={};
    
    for (var i=0;i<allfunctionCalls.length;i++){
        if (calleeHashmap[allfunctionCalls[i].name]){
            calleeHashmap[allfunctionCalls[i].name] +=1
        } else {
            calleeHashmap[allfunctionCalls[i].name] = 1
        }
    }
    
    
    var identifiers = getHashmapFromIdentifiers(objectified);
    
    var count = 0;
    for (i in calleeHashmap){
        if (calleeHashmap[i] == 1){
            console.log(i + ": " + calleeHashmap[i]);
            count ++;
        }
        
    }
    console.log(count)
    count = 0;
    var countwithoutparams =0;
    var countwithId =0;
    var countwithcallee1 = 0;
    var allfunction = objectified.querySelectorAll("FunctionDeclaration");
    for (var i=0;i<allfunction.length;i++){
        if (!allfunction[i].has("CallExpression")|| true){
            count++;
            if (allfunction[i].params.length === 0){
                countwithoutparams ++;
            };
            if (allfunction[i].has("#this#::id::Identifier")){
                //console.log(allfunction[i].querySelectorAll("#this#")[0].id.name);
                countwithId++;
            };
            if (identifiers[allfunction[i].id.name] <= 2){
                countwithcallee1++;
                console.log(allfunction[i].id.name);
                console.log(allfunction[i].params.length);
            };
            
            

        }
    }
    console.log(allfunction.length);
    console.log(count);
    console.log(countwithoutparams);
    console.log(countwithId);
    console.log(countwithcallee1);
    
});



function getHashmapFromIdentifiers(rootNode){
    var allidentiefiers = rootNode.querySelectorAll("Identifier");
    
    var identiefiersHashmap ={};
    
    for (var i=0;i<allidentiefiers.length;i++){
        if (identiefiersHashmap[allidentiefiers[i].name]){
            identiefiersHashmap[allidentiefiers[i].name] +=1
        } else {
            identiefiersHashmap[allidentiefiers[i].name] = 1
        }
    }
    
    return identiefiersHashmap;
    
}