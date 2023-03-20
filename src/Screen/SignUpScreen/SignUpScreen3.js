import { Text, View, TextInput, Image, Modal, TouchableOpacity, Pressable } from 'react-native'
import React, { Component } from 'react'
import { styles } from './SignUpScreen3Style'
import Reg from '../../Asset/icon/registration.svg'
import { Images, Screen } from '../../Helper'
import LogPwd from '../../Asset/icon/log_pswd_g.svg'
import LogEye from '../../Asset/icon/log_eye_g.svg'
import LogEyeL from '../../Asset/icon/log_eye_s_y.svg'

export default class SignUpScreen3 extends Component {
  state = {
    showPwd: true,
    confirmPwd: true
  }

  showPassword = () => {
    if (this.state.showPwd == true) {
      this.setState({ showPwd: false })
    } else {
      this.setState({ showPwd: true })
    }
  }

  showConfirmPassword = () => {
    if (this.state.confirmPwd == true) {
      this.setState({ confirmPwd: false })
    } else {
      this.setState({ confirmPwd: true })
    }
  }

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
        <View style={styles.oneView}>
          <Text>1</Text>
        </View>
        <View style={styles.twoView}>
          <Text>2</Text>
        </View>
        <View style={styles.threeView}>
          <Text>3</Text>
        </View>
        <View style={styles.mobView}>
          <LogPwd width={25} height={25} />
          <TextInput
            placeholder="Create your password"
            style={styles.input}
            secureTextEntry={this.state.showPwd}
          />
          <TouchableOpacity onPress={this.showPassword}>
            {this.state.showPwd ? (
              <LogEye width={25} height={25} />
            ) : (
              <LogEyeL width={25} height={25} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.mobView}>
          <LogPwd width={25} height={25} />
          <TextInput
            placeholder="Confirm your password"
            style={styles.input}
            secureTextEntry={this.state.confirmPwd}
          />
          <TouchableOpacity onPress={this.showConfirmPassword}>
            {this.state.confirmPwd ? (
              <LogEye width={25} height={25} />
            ) : (
              <LogEyeL width={25} height={25} />
            )}
          </TouchableOpacity>
        </View>
 
      </>
    )
  }

  renderFindVin = () => {
    return (
      <>
        <View style={styles.findView}>
          <View style={styles.findViewLine} />
          <Text style={styles.fVinText}>Password</Text>
          <View style={styles.findViewLine} />
        </View>
        <View style={styles.vinChasisView}>
          <Text style={styles.vinChasisText}>Your password must be 6-10 characters long and should be alpha numeric</Text>
        </View>
      </>
    )
  }

  renderSignUpBtn = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.circleView}
          onPress={() => this.props.navigation.navigate(Screen.SignUpScreen2)}
        >
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
          <Text style={styles.resendTxt}>Password strength</Text>
        </View>
        <View style={styles.strengthView}></View>
        {this.renderSignUpBtn()}
        {this.renderFindVin()}
      </View>
    )
  }
}
