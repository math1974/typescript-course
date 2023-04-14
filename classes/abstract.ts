
type Holidays = {
    date: Date,
    reason: string;
}[];

abstract class Father {
    abstract holidays: Holidays;
    protected constructor(protected _surname: string) {}

    public addHolidays(holidays: Holidays): void {
        this.holidays.push(...holidays);
    }

    abstract printHolidays(): void;

    public get surname():string {
        return this._surname;
    }

    public set surname(value: string) {
        if (!value)  {
            throw new Error('SURNAME MUST BE PROVIDED');
        }

        this._surname = value;
    }
}

class MatheusFater extends Father {
    holidays: Holidays = [];

    constructor(
        public age: number
    ) {
        super('Matheus');
    }

    public printHolidays(): void {
        console.log('print holidays inside overhidden: ',  this._surname, this.age);

        this.holidays.forEach(holiday => {
            console.log('date: ', holiday.date, 'reason: ', holiday.reason)
        })
    }
}

const matheus = new MatheusFater(22);

matheus.addHolidays([{
    date: new Date('2002'),
    reason: 'i was born'
}]);

console.log(matheus.surname)
matheus.surname = 'meuamor';
console.log(matheus.surname)

matheus.printHolidays();