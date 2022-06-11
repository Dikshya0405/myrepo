///os module is used to know information about your operating system

const os = require("os");

console.log(os.arch()); //Returns the operating system CPU architecture for which the Node.js binary was compiled
console.log(os.hostname()); //Returns the host name of the operating system as a string.
console.log(os.platform()); //Returns a string identifying the operating system platform for which the Node.js binary was compiled
console.log(os.tmpdir()); //Returns the operating system's default directory for temporary files as a string.
console.log(os.type());//Returns the operating system name

const freeMemory = os.freemem();
//console.log(freeMemory); //yetti garda bytes ma auxa
console.log(`${freeMemory / 1024 / 1024 / 1024}`); //GB ma auxa yesari

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

