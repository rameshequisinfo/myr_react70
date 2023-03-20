import { View, Text, Image } from 'react-native'
import React, { PureComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OwnerScreen, HomeScreen, SignInScreen,SignUpScreen, TermScreen, PolicyScreen, ForgotPwdScreen, SosSettingScreen, GuestScreen, SignUpScreen2, SignUpScreen3, LoginHomeScreen, DashboardInfoScreen } from '../Screen'
import { Screen } from '../Helper'
import { Images } from '../Helper'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
        height:150
      },
      //  drawerType:'slide'
    }}>
      <Drawer.Screen name={Screen.HomeScreen} component={HomeScreen} options={{ drawerIcon: ({ tintColor }) => (
      <Image
        source={Images.arrowright}
        style={{width:10, height:10}}
        tintColor= 'red'
      />
    ), 
  title: 'Product' }} />
      <Drawer.Screen name={Screen.OwnerScreen} component={OwnerScreen} />
      <Stack.Screen name={Screen.SignInScreen} component={SignInScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator()
export default class Route extends PureComponent {
  render() {
    //return <OwnerScreen /> 
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
          <Stack.Screen name={Screen.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={Screen.OwnerScreen} component={OwnerScreen} />
          <Stack.Screen name={Screen.SignInScreen} component={SignInScreen} />
          <Stack.Screen name={Screen.SignUpScreen} component={SignUpScreen} />
          <Stack.Screen name={Screen.TermScreen} component={TermScreen} />
          <Stack.Screen name={Screen.PolicyScreen} component={PolicyScreen} />
          <Stack.Screen name={Screen.ForgotPwdScreen} component={ForgotPwdScreen} />
          <Stack.Screen name={Screen.SosSettingScreen} component={SosSettingScreen} />
          <Stack.Screen name={Screen.GuestScreen} component={GuestScreen} />
          <Stack.Screen name={Screen.SignUpScreen2} component={SignUpScreen2} />
          <Stack.Screen name={Screen.SignUpScreen3} component={SignUpScreen3} />
          <Stack.Screen name={Screen.LoginHomeScreen} component={LoginHomeScreen} />
          <Stack.Screen name={Screen.DashboardInfoScreen} component={DashboardInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
