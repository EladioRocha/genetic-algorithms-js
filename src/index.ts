// import GuessPassword from "./GuessPassword.js";
// GuessPassword.run("Hello World");

const fnWorker = function(e: any) {
  for(let i = 0; i < Infinity; i++) {
    // we keep a chunking logic
    // to avoid spamming the main thread with too many messages
    if(i % 1000 === 0) {
      postMessage(i);
    }
  }
};


let i = 0;
setInterval(() => {
  console.log("El loop ha funcionado " + i + " veces");
}, 1000);
const blob = new Blob(["onmessage ="+fnWorker.toString()], { type: "text/javascript" });
const worker = new Worker(window.URL.createObjectURL(blob));
worker.onmessage = function(e) {
  i = e.data;
};
worker.postMessage("start"); 