class Random {
    // Source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/19301306#19301306 
    mw = 123456789;
    mz = 987654321;
    mask = 0xffffffff;
    constructor() {
        this.mw = 123456789;
        this.mz = 987654321;
        this.mask = 0xffffffff;
    }
    /**
     * @description Function to set the seed of the random number generator
     * @param {number} i The seed to use
     */
    seed(i = new Date().getTime()) {
        this.mw = (123456789 + i) & this.mask;
        this.mz = (987654321 - i) & this.mask;
    }
    /**
     * @description Function to generate a random number between 0 and 1
     * @returns {number} A random number between 0 and 1
     */
    random() {
        this.mz = (36969 * (this.mz & 65535) + (this.mz >> 16)) & this.mask;
        this.mw = (18000 * (this.mw & 65535) + (this.mw >> 16)) & this.mask;
        let result = ((this.mz << 16) + (this.mw & 65535)) >>> 0;
        result /= 4294967296;
        return result;
    }
    /**
     * @description Function to generate a random element from an array of elements
     * @param {Array<any>} elements The elements to shuffle in an array
     * @param {number} size The size of the array
     * @returns {Array<any>} The shuffled array
     */
    sample(elements, size) {
        const shuffled = elements.sort(() => this.random() - 0.5);
        return shuffled.slice(0, size);
    }
    /**
     * @description Function to get a random index from an array passing the size of the array
     * @param {number} length The size of the array
     * @returns {number} The random index
     */
    index(length) {
        return Math.floor(this.random() * length);
    }
}
export default new Random();
//# sourceMappingURL=Random.js.map