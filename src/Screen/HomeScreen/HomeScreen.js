import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './HomeScreenStyle'
import { Images } from '../../Helper'
import  HomeCar  from '../../Asset/icon/car.svg'
import { Screen } from '../../Helper'
export default class HomeScreen extends Component {
    render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.welView}>
          <Text style={styles.welTxt}>Welcome to</Text>
        </View>
        <View style={styles.myrView}>
          <Text style={styles.myText}>
            My <Text style={styles.renText}>Renault</Text>
          </Text>
        </View>
        <View style={styles.imgView}>
          <Image
            source={Images.logo}
            resizeMode={'contain'}
            tintColor={'black'}
          />
        </View>
        <TouchableOpacity style={styles.ownerView} onPress={()=> this.props.navigation.navigate(Screen.OwnerScreen)}>
          <HomeCar  width={25} height={25}/>
          <Text style={styles.ownText}>RENAUT OWNER</Text>
          <Image
            source={Images.arrowright}
            resizeMode={'contain'}
            style={styles.ownImg}
            tintColor={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestView}>
          <HomeCar  width={25} height={25}/>
          <Text style={styles.gueText}>GUEST</Text>
          <Image
            source={Images.arrowright}
            resizeMode={'contain'}
            style={styles.guestImg}
            tintColor={'black'}
          />
        </TouchableOpacity>
        <View style={styles.assiView}>
          <Image
            source={Images.phonecall}
            resizeMode={'contain'}
            style={styles.phoneImg}
            tintColor={'black'}
          />
          <Text style={styles.assistTxt}>Renualt Assistance</Text>
        </View>
      </View>
    )
  }
}

