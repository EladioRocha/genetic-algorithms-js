import { generateParent } from './Genetic.js';
import Random from './Random.js';

const rndm = Random.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log(rndm)
console.log(generateParent(10, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], () => 0));