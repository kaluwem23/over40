import { fetchPeople, Person } from '@/data/server';

describe('Data Server', () => {
  describe('fetchPeople', () => {
    it('should return an array of people', async () => {
      const people = await fetchPeople();

      expect(Array.isArray(people)).toBe(true);
      expect(people.length).toBeGreaterThan(0);
    });

    it('should return people with correct structure', async () => {
      const people = await fetchPeople();
      const person = people[0];

      expect(person).toHaveProperty('id');
      expect(person).toHaveProperty('age');
      expect(person).toHaveProperty('name');
      expect(person).toHaveProperty('surname');
      expect(person).toHaveProperty('gender');

      expect(typeof person.id).toBe('string');
      expect(typeof person.age).toBe('number');
      expect(typeof person.name).toBe('string');
      expect(typeof person.surname).toBe('string');
      expect(typeof person.gender).toBe('string');
    });

    it('should include people 40+ years old', async () => {
      const people = await fetchPeople();
      const people40Plus = people.filter(person => person.age >= 40);

      expect(people40Plus.length).toBeGreaterThan(0);
      expect(people40Plus.every(person => person.age >= 40)).toBe(true);
    });

    it('should include people under 40 years old', async () => {
      const people = await fetchPeople();
      const peopleUnder40 = people.filter(person => person.age < 40);

      expect(peopleUnder40.length).toBeGreaterThan(0);
      expect(peopleUnder40.every(person => person.age < 40)).toBe(true);
    });

    it('should have unique IDs', async () => {
      const people = await fetchPeople();
      const ids = people.map(person => person.id);
      const uniqueIds = new Set(ids);

      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('Person type', () => {
    it('should have correct type definition', () => {
      const mockPerson: Person = {
        id: '1',
        age: 25,
        name: 'John',
        surname: 'Doe',
        gender: 'male'
      };

      expect(mockPerson.id).toBe('1');
      expect(mockPerson.age).toBe(25);
      expect(mockPerson.name).toBe('John');
      expect(mockPerson.surname).toBe('Doe');
      expect(mockPerson.gender).toBe('male');
    });
  });
});
