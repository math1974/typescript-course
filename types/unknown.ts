// It is the same thing as the any type, nevertheless there are a few differences
// When passing unknown, the ts doenst know what to allow the parameters to do - if you can multiply, concatenate, loop over it, etc

// If will throw an error visually and before compiling if you try to sum those values below
// Nevertheless, if you validate if both are valid numbers, then it will allow you to do it

// It throws an error, due to the fact it doesn't know if the operation is gonna be valid (depends on the variables type passed)
const sum = (a:unknown, b:unknown) => {
    return a + b;
}

// It doenst throw error, due to the fact it validates the type of the parameters before doing anything else
const sumWithValidation = (a:unknown, b:unknown) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    return 0;
}

console.log(sum(1, 2));