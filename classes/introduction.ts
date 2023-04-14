// It is a blueprint for creating objects.

// Constuctor - is always fired when the class is instantiated - receive parameters

class Profile {
    alert(message: string): boolean {
        console.log('message', message);

        return true
    }
}

const profile = new Profile();

console.log(profile, 'profile')