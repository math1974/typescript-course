interface User11 {
    name: string;
    phone: string;
}

interface Address {
    street: string;
    number: string;
    neighborhood?: string
}

interface UserWithAddress extends User11 {
    address: Address
};

const newperson:UserWithAddress = {
    name: 'matheus',
    phone: '12312321',
    address: {
        street: 'rua',
        number: 'apt 29213912'
    }
}