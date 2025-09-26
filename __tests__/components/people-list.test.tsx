import { PeopleList } from '@/components/people-list';
import { Person } from '@/data/server';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

// Mock the PersonModal component
jest.mock('@/components/person-modal', () => ({
  PersonModal: ({ person, visible, onClose }: any) =>
    visible ? (
      <div testID="person-modal">
        <div testID="modal-title">{person?.name} {person?.surname}</div>
        <div testID="modal-age">Age: {person?.age}</div>
        <button testID="modal-close" onPress={onClose}>Close</button>
      </div>
    ) : null
}));

const mockPeople: Person[] = [
  {
    id: '1',
    age: 45,
    name: 'Jane',
    surname: 'Smith',
    gender: 'female'
  },
  {
    id: '2',
    age: 52,
    name: 'Alice',
    surname: 'Johnson',
    gender: 'female'
  },
  {
    id: '3',
    age: 61,
    name: 'Baz',
    surname: 'Luhrmann',
    gender: 'male'
  }
];

describe('PeopleList', () => {
  it('should render empty state when no people', () => {
    const { getByText } = render(<PeopleList people={[]} />);

    expect(getByText('No people found (40+ years old)')).toBeTruthy();
  });

  it('should render people list with correct count', () => {
    const { getByText } = render(<PeopleList people={mockPeople} />);

    expect(getByText('Jane Smith')).toBeTruthy();
    expect(getByText('Alice Johnson')).toBeTruthy();
    expect(getByText('Baz Luhrmann')).toBeTruthy();
    expect(getByText('3 Results')).toBeTruthy();
  });

  it('should open modal when person is tapped', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <PeopleList people={mockPeople} />
    );

    // Modal should not be visible initially
    expect(queryByTestId('person-modal')).toBeNull();

    // Tap on a person
    fireEvent.press(getByText('Jane Smith'));

    // Modal should appear
    await waitFor(() => {
      expect(getByTestId('person-modal')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
      expect(getByText('Age: 45')).toBeTruthy();
    });
  });

  it('should close modal when close button is pressed', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <PeopleList people={mockPeople} />
    );

    // Open modal
    fireEvent.press(getByText('Jane Smith'));

    await waitFor(() => {
      expect(getByTestId('person-modal')).toBeTruthy();
    });

    // Close modal
    fireEvent.press(getByTestId('modal-close'));

    await waitFor(() => {
      expect(queryByTestId('person-modal')).toBeNull();
    });
  });

  it('should display different person details when different person is tapped', async () => {
    const { getByText, getByTestId } = render(
      <PeopleList people={mockPeople} />
    );

    // Tap first person
    fireEvent.press(getByText('Jane Smith'));

    await waitFor(() => {
      expect(getByTestId('person-modal')).toBeTruthy();
      expect(getByText('Age: 45')).toBeTruthy();
    });

    // Close modal
    fireEvent.press(getByTestId('modal-close'));

    // Tap second person
    fireEvent.press(getByText('Alice Johnson'));

    await waitFor(() => {
      expect(getByTestId('person-modal')).toBeTruthy();
      expect(getByText('Age: 52')).toBeTruthy();
    });
  });
});
