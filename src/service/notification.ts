import messaging from '@react-native-firebase/messaging'
import axios from 'axios'

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  return enabled
}

export async function getToken() {
  const token = await messaging().getToken()
  return token
}

export async function sendNotification(body: {token: string, title: string, body: string}) {
  const url = 'http://192.168.0.180:9000/send'
  const { data } = await axios.post(url, body)
  return data
}