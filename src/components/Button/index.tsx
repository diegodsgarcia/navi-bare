import React from 'react'
import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native'

type Props = {
  children: React.ReactNode,
  onPress?: (event: GestureResponderEvent) => void | undefined
  style?: object,
}

const Button = ({ children, onPress, style }: Props) => (
  <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65a300',
    padding: 10,
    width: '100%'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  }
})

export default Button