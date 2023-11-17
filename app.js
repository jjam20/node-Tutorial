// npm - global
// npm --versoiln

//local dependency --use the package in this particular project
// npm i <packageName>


//global dependency

//npm install --save --install the package and save it in package.json

//npm install -g <packageName> --use it in any project
//sudo install -g <packageName> (mac)



//package.json mainfest file, stores the important info about the project
//we can create the package.json manually in the root directory and create its properties
//we can use npm init step by step
//or npm init -y everything default created


const _ = require('lodash')

const items = [1,2,[3,4,[5,6],[7,8]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
