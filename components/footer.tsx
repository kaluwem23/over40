import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export function Footer() {
  return (
    <View style={styles.footer}>
      <ThemedText style={styles.footerText}>
        2025 inkitt
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0E2122',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
    textAlign: 'left',
    marginLeft: 20,
  },
});
