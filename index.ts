// enum have two types - string or number (default)

enum LibraryTypes {
    national = 'national',
    academic = 'academic',
    public = 'public'
}

type LibraryTypesOptions = 'national' | 'academic' | 'public';

type Book = {
    title: string;
    pages: number;
    isbn: string
};

type Member = {
    name: string;
    phone: string;
    [key: string]: string
}

type Library = {
    name: string;
    address: string;
    numberOfBooks: number;
    type: LibraryTypesOptions | LibraryTypes;
    books: Array<Book>;
    genres: Array<string>
    members: Array<Member>
}

const library: Library = {
    name: 'Library',
    address: 'address',
    numberOfBooks: 22,
    type: 'academic',
    books: [{
        title: 'title',
        pages: 22,
        isbn: 'isbn'
    }],
    members: [{
        name: 'name',
        phone: 'phone',
        ola: 'meuamor'
    }],
    genres: ['fiction']
}