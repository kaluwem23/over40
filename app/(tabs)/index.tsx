import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { PeopleList } from '@/components/people-list';
import { ThemedText } from '@/components/themed-text';
import { fetchPeople, Person } from '@/data/server';

export default function HomeScreen() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const fetchedPeople = await fetchPeople();
        // Filter people who are age 40 or older
        const filteredPeople = fetchedPeople.filter(person => person.age >= 40);

        // Sort by Surname, then by Name if surnames are the same
        const sortedPeople = filteredPeople.sort((a, b) => {
          // First sort by surname
          const surnameComparison = a.surname.localeCompare(b.surname);
          if (surnameComparison !== 0) {
            return surnameComparison;
          }
          // If surnames are the same, sort by name
          return a.name.localeCompare(b.name);
        });
        setPeople(sortedPeople);
      } catch (error) {
        console.error('Failed to fetch people:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPeople();
  }, []);

  return (
    <ImageBackground source={require('@/assets/bg.png')} style={styles.backgroundImage} resizeMode="cover">
      <Header
        title="People over 40 years"
        subtitle="Already have an account? Log in to continue your journey."
      />
      <View style={styles.mainContent}>
        {loading ? (
          <View style={styles.centerContainer}>
            <ThemedText>Loading people data...</ThemedText>
          </View>
        ) : (
          <View style={styles.centerContainer}>
            <PeopleList people={people} />
          </View>
        )}
      </View>
      <Footer />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    paddingTop: 240, // Add padding to account for increased header height
    paddingBottom: 60, // Add padding to account for footer height
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleText: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
