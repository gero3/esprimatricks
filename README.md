# Esprimatricks

This project aims to improve work with a javascript ast. It uses the Mozilla parser api, which is supported by the esprima parser. While it doesn't parse javascript code, it improves that ast by objectifying it. 
Objectifying the ast makes the following things possible now:

 * Get the parent
 * Get the scope
 * Get an array of all children objects
 * Get an array of all descendants objects
 * Allow the execution of a selector based selection
 * Allow transversal based on walking
 * returning it back to the Mozilla parser api (a toJSON method is provided)


## Future Aspirations

 * Make it enviroment undependant by using a build script(minimum support should be ES5)
 * TODO

## Tests

For the moment I test all things 1 after the other after I create them by executing tests/index.js in node.js.

## Docs

There aren't any :(.

## Status Project 

The project is more a proof of concept for now then a useable project.
What is needed shortly??
    
 * All nodeTypes should be added. 
 * the '.has(...)' selectorType should be added.
 * '.isboolean','.isString',... selectorTypes should be added.
 * The scope Object should do something usefull