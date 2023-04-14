const mapFunction = <T, U>(items: T[], implementation: (item: T) => U): T[] => {
    const result: any[] = [];

    if (!items.length)  {
        return result;
    }

    items.forEach(item => {
        result.push(implementation(item));
    });

    return result;
};

console.log(
    mapFunction([1, 2, 3, 4], item => {
        return item >= 1;
    })
);
