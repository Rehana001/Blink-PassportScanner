import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scanner from './src/screens/Scanner'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Text>App</Text> */}
      <Scanner/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})