export interface SearchResult {
    id: number;
    firstname: string;
    lastname: string;
    maidenName: string;
    age: number;
    email: string;
    phone: number;
    username: string;
    image: string;
    company: Company;
    address: Address;
}

export interface Company {
    name: string;
    title: string;
    department: string;
}
export interface Address {
    city: string;
    state: string;
    country: string;
}