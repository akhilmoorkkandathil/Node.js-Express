const { log } = require('console');
const os = require('os')

const user = os.userInfo()
console.log(user);
console.log(os.freemem(),);
console.log(os.totalmem());