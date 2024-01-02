import { spawn } from "node:child_process";

const prepareLog = (pid) => (msg) => console.log(`pid: [${pid}] - ${msg}`);
const INSTANCES = 3;
const SUCCESS_EXIT_CODE = 0;

function spinUpInstance() {
  const cp = spawn("node", ["server.js"]); // precisa estar no mesmo diretório
  const log = prepareLog(cp.pid);
  log("starting kubernets...");
  cp.stdout.on("data", (msg) => console.log(msg.toString().trim()));

  cp.on("exit", (code) => {
    log(`exited with code ${code}`);
    if (code === SUCCESS_EXIT_CODE) {
      return;
    }

    spinUpInstance();
  });
}

for (let i = 0; i < INSTANCES; i++) {
  spinUpInstance();
}
