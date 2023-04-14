// It is a blueprint for creating objects.

// Constuctor - is always fired when the class is instantiated - receive parameters

type ProfileData = {
    name: string;
    email: string;
    age?: number
};

class Profile {
    data: ProfileData;

    constructor(person: ProfileData) {
        console.log(person, 'person');

        this.data = person;
    }

    alert(message: string): boolean {
        console.log('message', message + ' - ' + this.data.name);

        return true
    }
}

const profile = new Profile({
    name: 'matheus',
    email: 'matheus@gmail.com',
    age: 22
});

console.log(profile, 'profile')