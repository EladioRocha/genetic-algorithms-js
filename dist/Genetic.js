import random from './Random.js';
/**
 * @description Function to generate a new individual
 * @param {number} length The length of the chromosome
 * @param {Array<any>} geneSet The set of genes to use
 * @param {Function} getFitness The fitness function
 * @returns {Chromosome} Chromosome for the new individual
 */
export function generateParent(length, geneSet, getFitness) {
    const genes = [];
    while (genes.length < length) {
        // We get the size of the elements to add, the maximum size is the length of the geneSet
        // Compare the number of remaining genes vs the size of the geneSet and select the minimum
        const size = Math.min((length - genes.length), geneSet.length);
        // We get a random sample of the geneSet
        const sample = random.sample(geneSet, size);
        // We add the sample to the genes
        genes.push(...sample);
    }
    const fitness = getFitness(genes);
    // We return new Chromosome
    return new Chromosome(genes, fitness);
}
/**
 * @description Function to mutate an individual
 * @param {Array<any>} parent The parent to "crossover"
 * @param {Array<any>} geneSet The set of genes to use
 * @param {Function} getFitness The fitness function
 * @returns
 */
export function mutate(parent, geneSet, getFitness) {
    // We get a random index in the parent genes
    const index = random.index(parent.genes.length);
    // Create a copy of the parent genes
    const childGenes = [...parent.genes];
    // Get two elements from the geneSet to replace the parent genes, we get two because if we get the same element twice, we get the same result, so we get two different elements to ensure we get a different result
    const newGenes = random.sample(geneSet, 2);
    // Replace only one of the genes that is different from the parent genes at the specified index
    childGenes[index] = newGenes[0] === parent.genes[index] ? newGenes[1] : newGenes[0];
    const fitness = getFitness(childGenes);
    return new Chromosome(childGenes, fitness);
}
/**
 * @description Function to process the algorithm, it will iterate until the fitness is better than the optimal fitness of the previous individual
 * @param {number} targetLength The length of the target chromosome
 * @param {number} optimalFitness The optimal fitness
 * @param {Array<any>} geneSet The set of genes to use
 * @param {Function} getFitness The fitness function
 * @param {Function} display The display function
 * @returns {Chromosome} The best chromosome
 */
export async function getBest(targetLength, optimalFitness, geneSet, getFitness, display) {
    let maximumTries = 100000;
    // Set random seed, currently is random without defined seed
    random.seed();
    let bestParent = generateParent(targetLength, geneSet, getFitness);
    if (bestParent.fitness >= optimalFitness)
        return bestParent;
    for (let i = 0; i < maximumTries; i++) {
        const child = mutate(bestParent, geneSet, getFitness);
        display(child);
        if (bestParent.fitness >= child.fitness)
            continue;
        if (child.fitness >= optimalFitness)
            return child;
        bestParent = child;
        await delay(100);
    }
    return bestParent;
}
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export class Chromosome {
    genes;
    fitness;
    // We create a chromosome with a set of genes and a fitness attributes
    constructor(genes, fitness) {
        this.genes = genes;
        this.fitness = fitness;
    }
}
export class Benchmark {
    /**
     * @description Get statistics of the execution time of the algorithm
     * @param {Function} fn The function to benchmark
     */
    static run(fn) {
        const timings = [];
        const SAMPLES_RUN = 100;
        for (let i = 0; i < SAMPLES_RUN; i++) {
            const start = performance.now();
            fn();
            const end = performance.now();
            const seconds = (end - start) / 1000;
            timings.push(seconds);
            const mean = Benchmark.mean(timings);
            if (i % 10 === 0) {
                console.log(`${i}/${SAMPLES_RUN} - ${mean} - ${Benchmark.standardDeviation(timings)}`);
            }
        }
    }
    /**
     * @description Get the mean of the execution time of the algorithm
     * @param {Array<number>} timings The timings to calculate the mean
     * @returns {number} The mean of the timings
     */
    static mean(timings) {
        return timings.reduce((a, b) => a + b, 0) / timings.length;
    }
    /**
     * @description Get the standard deviation of the execution time of the algorithm
     * @param {Array<number>} timings The timings to calculate the standard deviation
     * @returns {number} The standard deviation of the timings
     */
    static standardDeviation(timings) {
        const mean = Benchmark.mean(timings);
        const squareDiffs = timings.map((value) => {
            const diff = value - mean;
            return diff * diff;
        });
        const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / timings.length;
        return Math.sqrt(avgSquareDiff);
    }
}
//# sourceMappingURL=Genetic.js.map