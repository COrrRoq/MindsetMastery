const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized the next number can be returned', () => {
   fibonacci.init(8);
   expect(fibonacci.next()).toBe(13);
});


test('When "next" is used, the sequence moves to the next number', () => {
    expect(fibonacci.next()).toBe(1);

})

test('When "next" is used multiple times, the sequence moves to the correct numbers', () => {
    fibonacci.next()
    fibonacci.next()
    expect(fibonacci.next()).toBe(3);
})

test('When initialised at 0, give an error', () => {
    expect(() => {
        fibonacci.init(0);
    }).toThrow();
    });



 test('When initialised at 2, skip will move forward the specified number.', () => {
    fibonacci.init(2);
    expect(fibonacci.skip(4)).toBe(13);
 })


 test('When initialised at 1, skip will jump the specified number.', () => {
    fibonacci.init(1);
    expect(fibonacci.skip(25)).toBe(121393);
 })

 test('When initialised at a non-Fibonacci number, give an error', () => {
    expect(() => {
        fibonacci.init(9);
    }).toThrow();
     })

 
     //this one fails test, bug in code because it doesn't account for this
 test('When skipped backwards, throw error', () => {
    fibonacci.init(8);
    expect(() => {
        fibonacci.skip(-3);
     }).toThrow(); 
 })

