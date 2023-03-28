// any type - is the default type of commonjs - which is anything

let anyValue: any = 'any'; // infer it is a string, but when overhiding, it will change its infer

anyValue = 2; // infer is now a number