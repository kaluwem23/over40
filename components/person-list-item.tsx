import { ThemedText } from '@/components/themed-text';
import { Person } from '@/data/server';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface PersonListItemProps {
  person: Person;
  index: number;
  onPress: (person: Person) => void;
}

export function PersonListItem({ person, index, onPress }: PersonListItemProps) {
  const backgroundColor = index % 2 === 0 ? '#081515' : '#0E2122';

  return (
    <TouchableOpacity
      style={[
        styles.listItem,
        { backgroundColor }
      ]}
      onPress={() => onPress(person)}
      activeOpacity={0.7}>
      <View style={styles.listItemContent}>
        <ThemedText style={styles.personName}>
          {person.name} {person.surname}
        </ThemedText>
        <ThemedText style={styles.personAge}>
          ({person.age})
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  listItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  personName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.2,
    lineHeight: 20,
    flex: 1,
  },
  personAge: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
    opacity: 0.9,
    lineHeight: 20,
  },
});
