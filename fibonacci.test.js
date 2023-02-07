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
    fibonacci.next();
    expect(fibonacci.next());
    toThrow();
})

test('When seeded at 0, the sequence starts', () => {
    fibonacci.init(0);
    expect(fibonacci.next()).toBe(toThrow);
 })