import { Text, View, TextInput, Image, Modal,TouchableOpacity, Pressable  } from 'react-native'
import React, { Component } from 'react'
import { styles } from './SignUpScreen2Style'
import { Color } from '../../Helper'
import { Images, Screen } from '../../Helper'
import Reg from '../../Asset/icon/registration.svg'
export default class SignUpScreen2 extends Component {

    renderHeader = () => {
        return (
          <View style={styles.signUpView}>
            <Text style={styles.signUpText}>SIGN UP</Text>
            <Text style={styles.regText}>Registration takes only 3 steps</Text>
          </View>
        )
      }
      renderVinPwd = () => {
        return (
          <>
            <View style={styles.stepViewOne}>
              <Text style={styles.vinText}>Enter VIN/Registration No.</Text>
              <Text style={styles.mobText}>Validate Mobile</Text>
              <Text style={styles.pwdText}>Create Password</Text>
            </View>
            <View style={styles.stepViewTwo}>
              <View style={styles.CircleShape1} />
              <View style={styles.lineView} />
              <View style={styles.CircleShape2} />
              <View style={styles.lineView} />
              <View style={styles.CircleShape3} />
            </View>
            <View style={styles.oneView}><Text>1</Text></View>
            <View style={styles.twoView}><Text>2</Text></View>
            <View style={styles.threeView}><Text>3</Text></View>
            <View style={styles.mobView}>
              <Reg width={25} height={25} />
              <TextInput placeholder="Mobile OTP" />
            </View>
          </>
        )
      }
  
      renderFindVin = () => {
        return (
          <>
            <View style={styles.findView}>
            <View style={styles.findViewLine} />
            <Text style={styles.fVinText}>One Time Password (OTP)</Text>
            <View style={styles.findViewLine} />
          </View>
          <View style={styles.vinChasisView}>
            <Text style={styles.vinChasisText}>
              OTP is a 6 digit code (Ex:123456)
            </Text>
          </View>
          </>
        )
    }

    renderSignUpBtn = () => {
        return(
          <>
            <TouchableOpacity style={styles.circleView} onPress={() => this.props.navigation.navigate(Screen.SignUpScreen3)}>
              <View style={styles.CircleShape} />
              <Image
                source={Images.arrowright}
                resizeMode={'contain'}
                style={styles.arrowImg}
                tintColor={'black'}
              />
            </TouchableOpacity>
            <View style={styles.trbView}>
                <Text style={styles.trbText}>Trouble Signing Up?</Text>
            </View>
          </>
        )
      }
  render() {
    return (
        <View style={styles.mainContainer}>
            {this.renderHeader()}
            {this.renderVinPwd()}
            <View style={styles.resendView}>
                <Text style={styles.resendTxt}>RESEND OTP</Text>
            </View>
            {this.renderSignUpBtn()}
            {this.renderFindVin()}
      </View>
    )
  }
}