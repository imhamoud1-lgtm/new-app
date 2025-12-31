import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import SettingsComponent from "../../components/Settings";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.homeLink}>
        <Text style={styles.homeLinkText}>← Back to Home</Text>
      </Link>
      <SettingsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeLink: {
    padding: 16,
    backgroundColor: '#007AFF',
  },
  homeLinkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});