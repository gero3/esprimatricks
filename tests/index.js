var astNode = require("../src/astNode");
var esprima = require("esprima");

var more = esprima.parse("var a = function(){ return !(event instanceof KeyboardEvent);};a()");
var objectified = astNode.objectify(more);
console.log(JSON.stringify(objectified.querySelectorAll("::body::ExpressionStatement , Identifier , Program")));