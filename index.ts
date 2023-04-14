interface CarObject {
	brand: string;
	color: string;
	type: string;
}

interface CarObject {
	meuamor: boolean;
}

interface AutoID {
	licenseId: string;
	licenseDate: Date;
}

class CarClass implements CarObject, AutoID {
	constructor(
		public brand: string,
		public color: string,
		public type: string,
		public licenseId: string,
		public licenseDate: Date,
		public meuamor: boolean = false,
	) {}
}

const myCar: CarClass = new CarClass('brand', 'color', 'type', 'licenseId', new Date());

console.log(myCar, 'myCar');
