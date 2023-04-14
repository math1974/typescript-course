function foo(s: string): string // overload #1 of foo

function foo(s: string, n: number): number // overload #2 of foo

function foo(s: string, n?: number): string | number {
    return s;
}

console.log(foo('1'), 'foo');

type addOverload = {
    (s: string): string | number;
    (s: string, n: number): string | number;
};

const overload: addOverload = (s: string, n?: number): string | number => {
    if (n) {
        return n
    }

    return s;
}

console.log(overload('2'), 'overload');