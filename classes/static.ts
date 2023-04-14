class StaticClass {
    public static brand: string = 'BMW';

    public static calcMax(...values: number[]) {
        return values.reduce((acc, value) => value > acc ? value : acc);
    }
}