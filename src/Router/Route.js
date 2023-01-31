import { View, Text } from 'react-native'
import React, { PureComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OwnerScreen, HomeScreen } from '../Screen'
import { Screen } from '../Helper'

const Stack = createNativeStackNavigator()
export default class Route extends PureComponent {
  render() {
    //return <OwnerScreen /> 
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screen.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={Screen.OwnerScreen} component={OwnerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
