import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Text style={styles.settingValue}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Text style={styles.settingValue}>Off</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Language</Text>
          <Text style={styles.settingValue}>English</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Version</Text>
          <Text style={styles.settingValue}>1.0.0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Terms of Service</Text>
          <Text style={styles.settingValue}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Privacy Policy</Text>
          <Text style={styles.settingValue}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#1a1a1a',
  },
  settingValue: {
    fontSize: 16,
    color: '#666',
  },
})