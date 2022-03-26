import Random from './Random.js';
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
        const sample = Random.sample(geneSet, size);
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
    // We get a random index in the parent chromosome
    const index = Random.index(parent.genes.length);
    // Create a copy of the parent chromosome
    const childGenes = [...parent.genes];
    // Get two elements from the geneSet to replace the parent chromosome, we get two because if we get the same element twice, we get the same result, so we get two different elements to ensure we get a different result
    const newGenes = Random.sample(geneSet, 2);
    // Replace only one of the genes that is different from the parent chromosome at the specified index
    childGenes[index] = newGenes[0] === parent.genes[index] ? newGenes[1] : newGenes[0];
    const fitness = getFitness(childGenes);
    return new Chromosome(parent.genes, fitness);
}
/**
 * @description Function to process the algorithm, it will iterate over the population and mutate the individuals
 * @param {number} targetLength The length of the target chromosome
 * @param {number} optimalFitness The optimal fitness
 * @param {Array<any>} geneSet The set of genes to use
 * @param {Function} getFitness The fitness function
 * @param {Function} display The display function
 * @todo Implement the rest of the algorithm
 */
export function getBest(targetLength, optimalFitness, geneSet, getFitness, display) {
    // Set random seed
    const random = new Random();
    random.seed();
}
class Chromosome {
    genes;
    fitness;
    // We create a chromosome with a set of genes and a fitness attributes
    constructor(genes, fitness) {
        this.genes = genes;
        this.fitness = fitness;
    }
}
//# sourceMappingURL=Genetic.js.map