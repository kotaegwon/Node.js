const os=require('os');
const path=require('path');
const cpus = os.cpus();

console.log(os.tmpdir());
console.log(os.type());

console.log(process.execPath);
console.log(process.cpuUsage());
console.log(process.cwd());

// for(var i = 0; i < cpus.length; i++) {
// 	console.log("CPU[" + (i+1) + "]");
// 	console.log("model: " + cpus[i].model);
// 	console.log("speed: " + cpus[i].speed);
// }

