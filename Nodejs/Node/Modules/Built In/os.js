// os--> operational system
import os from "node: os";
const os=require("os");

console.log(os);

//arch -->
console.log(os.arch());

//cpus -->
console.log(os.cpus().length);

//tatalmemory
console.log(os.totalmem() / (1024*1024*1024).toFixed(2));

//