import { ThemedText } from '@/components/themed-text';
import { Person } from '@/data/server';
import React from 'react';
import { Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface PersonModalProps {
  person: Person | null;
  visible: boolean;
  onClose: () => void;
}

export function PersonModal({ person, visible, onClose }: PersonModalProps) {
  if (!person) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <TouchableOpacity
        testID="modal-overlay"
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}>
        <TouchableOpacity
          testID="modal-content"
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}>
          <ScrollView testID="modal-scroll-view" style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <ThemedText type="title" style={styles.modalTitle}>
                {person.name} {person.surname}
              </ThemedText>
              <TouchableOpacity testID="modal-close-button" style={styles.closeButton} onPress={onClose}>
                <ThemedText style={styles.closeButtonText}>✕</ThemedText>
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <View style={styles.detailRow}>
                <ThemedText style={styles.detailLabel}>Age:</ThemedText>
                <ThemedText style={styles.detailValue}>{person.age}</ThemedText>
              </View>

              <View style={styles.detailRow}>
                <ThemedText style={styles.detailLabel}>Gender:</ThemedText>
                <ThemedText style={styles.detailValue}>{person.gender}</ThemedText>
              </View>

              <View style={styles.detailRow}>
                <ThemedText style={styles.detailLabel}>Full Name:</ThemedText>
                <ThemedText style={styles.detailValue}>{person.name} {person.surname}</ThemedText>
              </View>

              <View style={styles.detailRow}>
                <ThemedText style={styles.detailLabel}>ID:</ThemedText>
                <ThemedText style={styles.detailValue}>{person.id}</ThemedText>
              </View>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    maxHeight: '80%',
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollView: {
    maxHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#666666',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  detailLabel: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  detailValue: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
});
