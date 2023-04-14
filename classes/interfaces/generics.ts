interface CarInterface<Brand, Color, Type> {
    brand: Brand;
    color: Color;
    type: Type
}

const myBmw: CarInterface<string, string, string> = {
    brand: 'BMW',
    color: 'red',
    type: 'SUV'
};

enum BrandsAvailable {
    BMW = 'BMW',
    MERCEDES = 'MERCEDES',
    TOYOTA = 'TOYOTA',
    HONDA = 'HONDA'
}

enum CarsAvailable {
    SUV = 'SUV',
    SEDAN = 'SEDAN',
    HATCH = 'HATCH'
}

const yaris: CarInterface<BrandsAvailable, string, CarsAvailable> = {
    brand: BrandsAvailable.TOYOTA,
    color: 'red',
    type: CarsAvailable.SEDAN
};