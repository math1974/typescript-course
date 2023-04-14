interface Int {
	email: string;
	age: number;
	name: string;
	phone?: string;
	greet(): void;
}

const personInt: Int = {
	name: 'matheus',
	email: 'mat@a.com',
	age: 22,
    phone: '123123',
    greet: function() {
        console.log(this.phone, 'phone');
    }
};

personInt.greet();