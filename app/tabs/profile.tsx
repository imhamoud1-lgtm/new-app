import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Profile from "../../components/Profile";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.homeLink}>
        <Text style={styles.homeLinkText}>← Back to Home</Text>
      </Link>
      <Profile />
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
