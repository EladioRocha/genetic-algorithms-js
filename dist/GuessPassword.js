import { Benchmark, getBest } from './Genetic.js';
/**
 * @description Function to get the fitness of a chromosome
 * @param {Array<string>} genes The genes to use
 * @param {string} target The target to compare with the genes
 * @returns {number} The fitness of the chromosome between 0 and the target length
 */
function getFitness(genes, target) {
    /**
     * The process to get the fitness is the following:
     * - The characters will be compared one by one in the same position in the target and the genes
     * - If the characters are the same, the fitness will be incremented by 1
     */
    let fitness = 0;
    for (let i = 0; i < genes.length; i++) {
        if (genes[i] === target[i])
            fitness++;
    }
    return fitness;
}
/**
 * @description Function to show the result of the algorithm in the console
 * @param {Chromosome} individual The genes to use
 * @param {number} startTime The start time of the algorithm
 * @todo Instead of showing the result in the console, we could show it in the browser
 */
function display(individual, startTime) {
    const timeDiff = performance.now() - startTime;
    const guessPassword = document.getElementById('guess-password');
    guessPassword.innerHTML = `${individual.genes.join('')} - ${individual.fitness} - ${timeDiff}`;
}
export default class GuessPassword {
    static geneSet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!.,".split("");
    currentResult = "";
    testHelloWorld() {
        const target = "Hello World";
        GuessPassword.run(target);
    }
    /**
     * @description Function to run the algorithm
     * @param {string} target The target to compare with the genes
     */
    static async run(target = "") {
        const startTIme = performance.now();
        const fnGetFitness = (genes) => getFitness(genes, target);
        const fnDisplay = (individual) => display(individual, startTIme);
        const optimalFitness = target.length;
        const best = await getBest(target.length, optimalFitness, GuessPassword.geneSet, fnGetFitness, fnDisplay);
        display(best, startTIme);
    }
    /**
     * @description Function to run with the benchmark of the algorithm
     */
    runBenchmark() {
        Benchmark.run(this.testHelloWorld);
    }
}
//# sourceMappingURL=GuessPassword.js.map