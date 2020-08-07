import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Alert, View } from 'react-native'

import messaging from '@react-native-firebase/messaging'
import { requestUserPermission } from './service/notification'

import Navi from './components/Navi'
import Button from './components/Button'

export default function App() {
  useEffect(() => {
    requestUserPermission()

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    })  

    return unsubscribe
  }, [])
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
