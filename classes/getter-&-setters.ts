// validations could be put in constructor, but is not great for all cases
// accessors and mutators - getters and setters

class PersonGetSet {
    private _validateAge(value: number):number | never {
        if (!value || value > 200) {
            throw new Error('Invalid Age');
        }

        return value;
    }

    constructor(private _name: string, private _age: number) {}

    public set age(value: number) {
        this._age = this._validateAge(value);
    }

    public get age(): number {
        return this._age;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }
}

const personGetSet: PersonGetSet = new PersonGetSet('mat', 22);

personGetSet.age = 200;
console.log(personGetSet.age, 'get age')
