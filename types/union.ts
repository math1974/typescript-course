type Airplane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: {
        name: string;
        address: string;
        phone?: string;
    }
}

type Car = {
    model: string;
    brand: string;
}

const airplane: Airplane = {
    model: 'string',
    flightNumber: 'string',
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: 'string',
        address: 'string',
    }
}

const car: Car | Airplane = {
    model: 'string',
    brand: 'bmw'
}

// Allow us to use a hybrid typing, can pass all parameters of one, and none of the other
// Must pass all parameters of at least one type and pass other parameters optionally

console.log(airplane);
