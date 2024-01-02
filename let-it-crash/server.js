const UNKNONW_ERROR = 1;
const knownErrors = [
  {
    exitCode: UNKNONW_ERROR,
    event: "uncaughtException",
  },
  {
    exitCode: UNKNONW_ERROR,
    event: "unhandledRejection",
  },
];

const log = (msg) => console.log(`pid: [${process.pid}] - ${msg}`);

process.on("exit", (code) => {
  // server.close()
  // db.stop()

  log(`Server closed with success`);
  log(`DB closed with success`);

  process.exit(code);
});

knownErrors.forEach(({ exitCode, event }) => {
  process.on(event, (error) => {
    log(`Process exiting due to ${event}`, error.message);

    if (exitCode === UNKNONW_ERROR) {
      // process.abort();
      process.exit(exitCode);
      return;
    }

    process.exit(exitCode);
  });
});

log("Process started");

let counter = 0;
const connectToDB = () => {
  const random = Math.random();

  if (random < 0.5) return Promise.reject("Could not connect to DB");

  log("DB connected with success");

  if (++counter > 3) process.exit(0);
};

setInterval(() => connectToDB(), 500);
