// type arrayOfNumbers = Array<number>;
type arrayOfNumbers = number[];

// type arrayOfStringOrNumbers = (number|string)[];
type arrayOfStringOrNumbers = Array<number | string>;

const arrayExample: arrayOfNumbers = [1, 2, 3];

const newArrayWithStringOrNumbers: arrayOfStringOrNumbers = [1, 2, 3, '1'];
