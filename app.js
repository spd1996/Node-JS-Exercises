// Factorial function using recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Recursive function to calculate the nth term of the Taylor series for e^x
function taylorSeriesExponential(x, n) {
    if (n === 0) {
        return 1; // Base case: the 0th term is 1
    }
    return (Math.pow(x, n) / factorial(n)) + taylorSeriesExponential(x, n - 1);
}

// Function to calculate e^x using the Taylor series up to a given number of terms
function calculateExponential(x, terms) {
    return taylorSeriesExponential(x, terms - 1);
}

// Example usage
let x = 3; // Value of x
let terms = 30; // Number of terms in the Taylor series
console.log(`e^${x} approximated with ${terms} terms is:`, calculateExponential(x, terms));
