import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>H</Text>
        </View>
        <Text style={styles.name}>Hamoud</Text>
        <Text style={styles.email}>hamoud.doe@example.com</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Member Since</Text>
          <Text style={styles.value}>January 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>Active</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 110,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
})