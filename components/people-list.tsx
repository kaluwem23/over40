import { ThemedText } from '@/components/themed-text';
import { Person } from '@/data/server';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PersonListItem } from './person-list-item';
import { PersonModal } from './person-modal';

interface PeopleListProps {
  people: Person[];
}

export function PeopleList({ people }: PeopleListProps) {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePersonPress = (person: Person) => {
    setSelectedPerson(person);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPerson(null);
  };

  if (people.length === 0) {
    return <ThemedText>No people found (40+ years old)</ThemedText>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        testID="people-scroll-view"
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        alwaysBounceVertical={false}>
        {people.map((item, index) => (
          <PersonListItem
            key={item.id}
            person={item}
            index={index}
            onPress={handlePersonPress}
          />
        ))}
      </ScrollView>
      <View testID="results-container" style={styles.resultsContainer}>
        <ThemedText style={styles.resultsText}>
          {people.length} Results
        </ThemedText>
      </View>
      <PersonModal
        person={selectedPerson}
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
    maxWidth: 320,
    maxHeight: 300, // Increased to show exactly 5 items (5 * 60px per item)
    borderRadius: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  resultsContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
