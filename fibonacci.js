class Fibonacci {
    constructor() {
        //Initialises fib seeds
        this.previous = 0;
        this.current = 1;
    }

    // Return the next Fibonacci number in the current sequence
    next() {
        //calculate next fib number
        const next = this.previous + this.current;

        //move on the sequence
        this.previous = this.current;
        this.current = next;

        //return the calculated fib number
        return next;
    }

     // Initialize sequence with number to start from
    init(seed) {
        //reset seeds back to the start
        this.previous = 0;
        this.current = 1;
        
        //loop to find the seed
        while (this.current < seed) {
            this.next();
        }

        //check if real fib number
        if (this.current != seed) {
            throw new Error('Not a real fib number!');
        }
    }

    skip(forward) {
        let next;
        for (let i = 0; i < forward; i++) {
          this.next();
        }
    
        return this.current;
        // Return the Fibonacci number further on in the sequence
    }
}

module.exports = Fibonacci;