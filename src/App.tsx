import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Alert } from 'react-native'

import messaging from '@react-native-firebase/messaging'
import { requestUserPermission, getToken } from './service/notification'

import Navi from './components/Navi'
import Text from './components/Text'
import Button from './components/Button'

export default function App() {
  const [token, setToken] = useState<string>('Listen...')
  const [openModal, setOpenModal] = useState(false)

  const onReceiveMessage = () => {
    return messaging().onMessage(remoteMessage => {
      Alert.alert('Chegou uma nova mensagem!', JSON.stringify(remoteMessage));
    })
  }

  const onReceiveInBackground = () => {
    return messaging().onNotificationOpenedApp(remoteMessage => {
      Alert.alert('Chegou uma nova mensagem enquanto o App tava fechado!', JSON.stringify(remoteMessage));
    })
  }

  useEffect(() => {
    requestUserPermission()
    getToken().then(setToken)
    const unsubscribeReceive = onReceiveMessage()
    const unsubscribeReceiveBackground = onReceiveInBackground()
    
    return () => {
      unsubscribeReceive()
      unsubscribeReceiveBackground()
    }
  }, [])

  return (
    <View style={styles.container}>
      <Navi />
      <StatusBar style="auto" />
      <Button onPress={() => setOpenModal(true)}>
        Heey!
      </Button>
      <Text>{token}</Text>
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
