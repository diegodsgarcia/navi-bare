import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Navi = () => (
  <Image style={styles.image} source={require('../../assets/navi.png')} />
)

const styles = StyleSheet.create({
  image: {
    width: 200,
    resizeMode: 'contain'
  }
})

export default Navi