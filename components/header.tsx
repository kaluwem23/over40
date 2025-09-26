import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  // Split the title to highlight "40 years"
  const titleParts = title.split('40 years');
  const hasHighlight = title.includes('40 years');

  return (
    <View style={styles.header}>
      <ThemedText type="title" style={styles.headerTitle}>
        {hasHighlight ? (
          <>
            {titleParts[0]}
            <ThemedText type="title" style={[styles.headerTitle, styles.highlightedText]}>
              40 years
            </ThemedText>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </ThemedText>
      {subtitle && (
        <ThemedText style={styles.headerSubtitle}>
          {subtitle}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0E2122', // Dark background color
    height: 240, // Increased height for better text spacing
    paddingTop: 40,
    paddingBottom: 20, // Reduced bottom padding
    paddingHorizontal: 20,
    alignItems: 'flex-start', // Left align like in the image
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure it's above other content
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    color: '#FFFFFF', // White text
    fontWeight: 'bold',
    fontSize: 32, // Large bold text
    marginBottom: 12, // Increased spacing between title and subtitle
  },
  headerSubtitle: {
    color: '#FFFFFF', // White text for subtitle
    fontSize: 16,
    opacity: 0.9,
    lineHeight: 22, // Better line height for readability
  },
  highlightedText: {
    color: '#6BDB81', // Green color for "40 years"
  },
});
