import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const homeImage = require('../assets/images/imaagg.jpeg')

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Home</Text>
        <Text style={styles.subtitle}>Your dashboard</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <Image
            source={homeImage}
            style={styles.image}
            contentFit="contain"
          />
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <Text style={styles.cardText}>Get started with your app</Text>
        </View>
      </View>
    </View>
  )
}

export default Home

// ... rest of styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
  },
})