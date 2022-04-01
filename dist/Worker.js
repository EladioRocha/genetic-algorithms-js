/**
 * @todo Implement later to execute in second thread
 */
export default class GeneticWorker {
    /**
     * @description Function to run a new worker
     * @param {Function} fn - The function that will be executed in the worker
     */
    run(fn) {
        const blob = new Blob(["onmessage =" + fn.toString()], { type: "text/javascript" });
        const worker = new Worker(window.URL.createObjectURL(blob));
        return worker;
    }
}
//# sourceMappingURL=Worker.js.map