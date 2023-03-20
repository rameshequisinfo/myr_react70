import { Text, View, TouchableOpacity, Modal, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import { styles } from './SignInScreenStyle'
import { Images } from '../../Helper'
import SosBtn from '../../Asset/icon/sos_btn.svg'
import LogMobG from '../../Asset/icon/log_mob_g.svg'
import LogPwd from '../../Asset/icon/log_pswd_g.svg'
import LogEye from '../../Asset/icon/log_eye_g.svg'
import LogEyeL from '../../Asset/icon/log_eye_s_y.svg'
import { Screen } from '../../Helper'
import { TextInput } from 'react-native-gesture-handler'

export default class SignInScreen extends Component {
  state = {
    modalVisible: false,
    showPwd: true
  }

  showPassword = () => {
    if (this.state.showPwd == true) {
      this.setState({ showPwd: false })
    } else {
      this.setState({ showPwd: true })
    }
  }

  renderModal = () => {
    const { modalVisible } = this.state
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          this.setState({ modalVisible: !modalVisible })
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.sosView}>
              <View style={styles.sosLine}></View>
              <Text style={styles.SosText}>SOS</Text>
              <View style={styles.sosLine}></View>
            </View>
            <Image source={Images.warning} resizeMode={'contain'} style={styles.imgWarning} />
            <Text style={styles.modalText}>
              An alert will be sent to your saved SOS contact along with you current GEO location.
            </Text>
            <View style={(style = styles.modalBtn)}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({ modalVisible: !modalVisible })}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => this.props.navigation.navigate(Screen.SosSettingScreen)}>
                <Text style={styles.textStyle}>SOS setting</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  renderBottom = () => {
    return (
      <View style={styles.circleView}>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate(Screen.LoginHomeScreen)}>
          <View style={styles.CircleShape} />
        </TouchableOpacity>
        <Image
            source={Images.arrowright}
            resizeMode={'contain'}
            style={styles.arrowImg}
            tintColor={'black'}
          />
        <Text style={styles.trobleTxt}>Trouble Signin</Text>
        <TouchableOpacity
          style={styles.signUpView}
          onPress={() => this.props.navigation.navigate(Screen.SignUpScreen)}
        >
          <Text style={styles.accountText}>Don't have account yet?</Text>
          <Text style={styles.signUpText}> SIGNUP</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderSignIn = () => {
    return (
      <>
        <View style={styles.signInView}>
          <Text style={styles.signInTxt}>SIGN IN</Text>
        </View>
        <View style={styles.mobView}>
          <LogMobG width={25} height={25} />
          <TextInput placeholder="Mobile Number" />
        </View>
        <View style={styles.mobView}>
          <LogPwd width={25} height={25} />
          <TextInput
            placeholder="Password"
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
        <TouchableOpacity style={styles.forPwdView} onPress={() => this.props.navigation.navigate(Screen.ForgotPwdScreen)}>
          <Text style={styles.forPwdText}>Forgot Password</Text>
        </TouchableOpacity>
      </>
    )
  }

  renderHeader = () => {
    return (
      <View style={styles.myrView}>
        <Text style={styles.myText}>MY</Text>
        <Text style={styles.renText}>Renault</Text>
      </View>
    )
  }
  renderSOSbtn = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.SosBtnView}
          onPress={() => this.setState({ modalVisible: true })}
        >
          <SosBtn width={30} height={30} />
        </TouchableOpacity>
      </>
    )
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderHeader()}
        {this.renderSOSbtn()}
        {this.renderModal()}
        {this.renderSignIn()}
        {this.renderBottom()}
      </View>
    )
  }
}
