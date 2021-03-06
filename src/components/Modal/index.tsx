import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Modal, StyleSheet } from 'react-native'
import Button from '../Button'

type Props = {
  visible: boolean
  token: string,
  onRequestClose?: () => void | null
  onRequestSend: (request: { token: string, title: string, body: string}) => void | undefined
}

export default ({ visible, token, onRequestClose, onRequestSend }: Props) => {
  const [form, setForm] = useState({
    token,
    title: 'Heeey!',
    body: 'Listen!',
  })

  useEffect(() => {
    setForm({ ...form, token })
  }, [token])
  
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onRequestClose}
      >
      <View style={styles.container}>
        <Text style={styles.text}>Send here a notification</Text>
        <TextInput
          onChangeText={(text) => setForm({ ...form, token: text })} 
          style={styles.input} 
          placeholder="Expo Code"
          value={form.token}
        />
        <TextInput
          onChangeText={(text) => setForm({ ...form, title: text })} 
          style={styles.input} 
          placeholder="Titulo"
          value={form.title}
        />
        <TextInput
          onChangeText={(text) => setForm({ ...form,  body: text })} 
          style={styles.input} 
          placeholder="Corpo"
          value={form.body}
        />
        <Button style={styles.button} onPress={() => onRequestSend(form) }>Send</Button>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
  button: {
    marginTop: 20
  }
})