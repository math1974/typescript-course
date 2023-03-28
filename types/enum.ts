import { States, Professions } from '../utils/contants';

type Person = {
    name: string;
    age: number;
    position: Professions;
    address_state?: States
}

const person: Person = {
    name: 'Matheus',
    age: 36,
    position: Professions.doctor,
    address_state: States.PE
};
