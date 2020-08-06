import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Navi from './components/Navi'
import Button from './components/Button'

export default function App() {
  return (
    <View style={styles.container}>
      <Navi />
      <StatusBar style="auto" />
      <Button>Heey!</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})
