import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './SosSettingScreenStyle'
import LogMobG from '../../Asset/icon/log_mob_g.svg'
import UserSvg from '../../Asset/icon/user.svg'

export default class SosSettingScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.settingView}>
            <Text style={styles.SosText}> SOS Settings</Text>
        </View>
        <View style={styles.sosView}>
            <Text style={styles.sosText1}>SOS 1:</Text>
            <View style={styles.mobView}>
              <UserSvg width={25} height={25} />
              <TextInput placeholder="Name" />
            </View>
            <View style={styles.mobView}>
              <LogMobG width={25} height={25} />
              <TextInput placeholder="Mobile Number" />
            </View>
        </View>
        <View style={styles.sosView}>
            <Text style={styles.sosText1}>SOS 2:</Text>
            <View style={styles.mobView}>
              <UserSvg width={25} height={25} />
              <TextInput placeholder="Name" />
            </View>
            <View style={styles.mobView}>
              <LogMobG width={25} height={25} />
              <TextInput placeholder="Mobile Number" />
            </View>
        </View>
        <View style={styles.sosView}>
            <Text style={styles.sosText1}>SOS 3:</Text>
            <View style={styles.mobView}>
              <UserSvg width={25} height={25} />
              <TextInput placeholder="Name" />
            </View>
            <View style={styles.mobView}>
              <LogMobG width={25} height={25} />
              <TextInput placeholder="Mobile Number" />
            </View>
            
        </View>
        <TouchableOpacity style={styles.saveBtn} onPress={()=> console.log}>
              <Text>Save</Text>  
        </TouchableOpacity>
      </View>
    )
  }
}