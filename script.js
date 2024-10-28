function sumFibs(num) {
    let a = 1; // First Fibonacci number
    let b = 1; // Second Fibonacci number
    let sum = 0;

    // Continue until we exceed the given number
    while (a <= num) {
        if (a % 2 !== 0) { // Check if the Fibonacci number is odd
            sum += a; // Add it to the sum
        }
        // Generate the next Fibonacci number
        const next = a + b;
        a = b; // Move to the next number
        b = next; // Update b to the next Fibonacci number
    }

    return sum; // Return the total sum of odd Fibonacci numbers
}

// Example usage:
const number = 10;
const result = sumFibs(number);
console.log(result); 
