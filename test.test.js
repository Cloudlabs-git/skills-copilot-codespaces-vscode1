// Import the module or class that contains the add function
const { add } = require('./your-module');

// Test the add function
describe('add', () => {
  it('should return the sum of two numbers', () => {
    // Test case 1
    expect(add(2, 3)).toBe(5);

    // Test case 2
    expect(add(-1, 1)).toBe(0);

    // Test case 3
    expect(add(0, 0)).toBe(0);
  });
});