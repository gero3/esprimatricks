var astNode = require("./src/astNode");
var esprima = require("esprima");


exports.objectify = function(data){
    var ast = esprima.parse(data);
    return astNode.objectify(ast);
};