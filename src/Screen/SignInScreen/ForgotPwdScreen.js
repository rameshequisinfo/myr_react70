import { Text, View, TouchableOpacity, Modal, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import { styles } from './ForgotPwdScreenStyle'

import { Images } from '../../Helper'
import SosBtn from '../../Asset/icon/sos_btn.svg'
import LogMobG from '../../Asset/icon/log_mob_g.svg'
import LogPwd from '../../Asset/icon/log_pswd_g.svg'
import LogEye from '../../Asset/icon/log_eye_g.svg'
import LogEyeL from '../../Asset/icon/log_eye_s_y.svg'
import { Screen } from '../../Helper'
import { TextInput } from 'react-native-gesture-handler'

export default class ForgotPwdScreen extends Component {
    state = {
        modalVisible: false,
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
                  <Pressable style={[styles.button, styles.buttonClose]} 
                  onPress={() => this.props.navigation.navigate(Screen.SosSettingScreen)}
                  >
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
            <View style={styles.CircleShape} />
            <Image
              source={Images.arrowright}
              resizeMode={'contain'}
              style={styles.arrowImg}
              tintColor={'black'}
            />
            <Text style={styles.trobleTxt}>Trouble Signin</Text>
          </View>
        )
      }
    
      renderSignIn = () => {
        return (
          <>
            <View style={styles.signInView}>
              <Text style={styles.signInTxt}>FORGOT PASSWORD?</Text>
            </View>
            <View style={styles.mobView}>
              <LogMobG width={25} height={25} />
              <TextInput placeholder="Mobile Number" />
            </View>
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