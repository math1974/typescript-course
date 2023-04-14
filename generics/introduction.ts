type PersonObject = {
    name: string;
    age: number;
}

// type Person = {
//     <T>(name?: T, age?: T, ...experiences: T[]): PersonObject
// }

// downside - define the implementation always - not flexible enough - counterproductive

type Person = <T>(name?: T, age?: T, ...experiences: T[]) => PersonObject

type Person2 = {
    <AnyKindOfValue>(name?: AnyKindOfValue, age?: AnyKindOfValue, ...experiences: AnyKindOfValue[]): PersonObject
}

const addPerson = <T>(name: string, age?: number, ...experiences: T[]): Object => {
    return {
        name,
        age,
        experiences
    }
};

console.log(
    addPerson(1, 2, 3, 4, 5)
);
