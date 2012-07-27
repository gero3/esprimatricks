var astNode = require("../src/astNode");
var isTheSameAst = require("../src/util").isTheSameAst;
var esprima = require("esprima");
var data = require("./testdata");


var more = esprima.parse("try { } catch (e) { }");
var objectified = astNode.objectify(more);
//var exceptions = ["range","loc","tokens","raw"];

test(data);
console.log(JSON.stringify(more));
console.log(JSON.stringify(objectified.toJSON()));
console.log(isTheSameAst(more,objectified.toJSON()));


function test(data){
    var parsed;
    for (var i in data){
        if(i === "Invalid syntax" || i === "Tolerant parse"){
            continue;
        }
        for (var j in data[i]){
            try {
                parsed = esprima.parse(j);
            } catch(e){
                console.log(j + " failed to parse.");    
                continue;    
            }
            var result = astNode.objectify(parsed).toJSON();
            if (!isTheSameAst(/*data[i][j]*/parsed,result)){
                console.log(j + " failed.");    
            }
        }
    }
    
}
