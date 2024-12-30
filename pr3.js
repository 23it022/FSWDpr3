const os = require('os');
const fs = require('fs');
const path = require('path');

const platform = os.platform();
const totalmem = os.totalmem();
const freememo = os.freemem();
const cpudet = os.cpus();

console.log("OS Type : ", platform);
console.log("Total Memory : ", totalmem);
console.log("Free Memory : ", freememo);
console.log("CPU Details : ", cpudet);

const systemInfo = `
System Information:
---------------------
OS Type: ${platform}
Total Memory: ${totalmem / (1024 * 1024 * 1024)} GB
Free Memory: ${freememo / (1024 * 1024 * 1024)} GB
CPU Details: ${cpudet.map(cpu => cpu.model).join(", ")}
`;

const logFilePath = path.join(__dirname, 'logs', 'system-info.txt');

if (!fs.existsSync(path.dirname(logFilePath))) {
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
}

fs.writeFile(logFilePath, systemInfo, (err) => {
    if (err) {
        console.error("Error writing to log file:", err);
    } else {
        console.log("System information saved to:", logFilePath);
    }
});