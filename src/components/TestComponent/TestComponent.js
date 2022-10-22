import { View, Button } from 'react-native'
import React from 'react'

export default function TestComponent({color , text}) {
  return (
    <View>
      <Button color={color} title={text}/>
    </View>
  )
}