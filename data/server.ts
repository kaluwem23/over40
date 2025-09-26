const DELAY = 2_000; // ms

export type Person = {
  id: string;
  age: number;
  name: string;
  surname: string;
  gender: string;
};

// Mock data instead of importing JSON to avoid module resolution issues
const mockPeople: Person[] = [
  {
    "id": "1",
    "age": 61,
    "name": "Baz",
    "surname": "Luhrmann",
    "gender": "male"
  },
  {
    "id": "2",
    "age": 45,
    "name": "Jane",
    "surname": "Smith",
    "gender": "female"
  },
  {
    "id": "3",
    "age": 38,
    "name": "John",
    "surname": "Doe",
    "gender": "male"
  },
  {
    "id": "4",
    "age": 52,
    "name": "Alice",
    "surname": "Johnson",
    "gender": "female"
  },
  {
    "id": "5",
    "age": 29,
    "name": "Bob",
    "surname": "Wilson",
    "gender": "male"
  },
  {
    "id": "6",
    "age": 43,
    "name": "Charlie",
    "surname": "Brown",
    "gender": "male"
  },
  {
    "id": "7",
    "age": 56,
    "name": "Diana",
    "surname": "Prince",
    "gender": "female"
  },
  {
    "id": "8",
    "age": 41,
    "name": "Edward",
    "surname": "Smith",
    "gender": "male"
  },
  {
    "id": "9",
    "age": 48,
    "name": "Fiona",
    "surname": "Johnson",
    "gender": "female"
  },
  {
    "id": "10",
    "age": 35,
    "name": "George",
    "surname": "Williams",
    "gender": "male"
  }
];

/** Fetch people from an imaginary database, with an operational delay */
export const fetchPeople = (): Promise<Person[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPeople), DELAY);
  });
}
