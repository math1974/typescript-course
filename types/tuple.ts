// LIMITED LENGTH

type personTuple = [firstName: string, lastName: string, age: number];

// success
const person = ['matheus', 'ribeiro', 22];

// error
const personTwo = ['matheus', 'ribeiro'];

// --------------------------------------------------------------------------------

// UNLIMITED LENGTH

type profile = [firstname: string, about: string, age: number, ...experiences: string[]];

const profileInfo = ['matheus', 'about my profile', 22, 'nodejs', 'angularjs'];