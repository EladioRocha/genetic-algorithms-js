/**
 * @todo Implement later to execute in second thread, currently is not implemented
 */

export default class GeneticWorker {
  /**
   * @description Function to run a new worker
   * @param {Function} fn - The function that will be executed in the worker
   */
  run(fn: Function) {
    const blob = new Blob(["onmessage ="+fn.toString()], { type: "text/javascript" });
    const worker = new Worker(window.URL.createObjectURL(blob));
    return worker;
  }
}