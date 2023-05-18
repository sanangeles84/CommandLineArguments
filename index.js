/*
F1 here in the editor
Open Shell
node index.js --USER username_ABCD1234 --API_KEY  "API_KEY_ABCD1234"
*/

var argumentsGetter = require("./argumentsGetter")
var args = argumentsGetter.getArgs();
console.log(args)

console.log(args.USER)
console.log(args.API_KEY)