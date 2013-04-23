var astNode = require("./src/astNode");
var esprima = require("esprima");


exports.objectify = function(data, options){
    var ast = esprima.parse(data, options);
    return astNode.objectify(ast);
};