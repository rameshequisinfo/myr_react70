import { Text, View, TextInput, Image, Modal,TouchableOpacity, Pressable } from 'react-native'
import React, { Component, useState } from 'react'
import { styles } from './SignUpScreenStyle'
import Reg from '../../Asset/icon/registration.svg'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button'
import CheckBox from '@react-native-community/checkbox'
import { Color } from '../../Helper'
import { Images, Screen } from '../../Helper'

var radio_props = [
  { label: 'VIN Number', value: 0 },
  { label: 'Registration Number', value: 1 }
]

export default class SignUpScreen extends Component {

  state = {
    modalVisible: false,
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
        <View style={styles.oneView}><Text>1</Text></View>
        <View style={styles.twoView}><Text>2</Text></View>
        <View style={styles.threeView}><Text>3</Text></View>
        <View style={styles.radioView}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            labelStyle={{ fontSize: 12, color: Color.yellow }}
            //buttonColor={Color.yellow}
            buttonSize={10}
            labelHorizontal={true}
            formHorizontal={true}
            onPress={(value) => {
              this.setState({ value: value })
            }}
          />
        </View>
        <View style={styles.mobView}>
          <Reg width={25} height={25} />
          <TextInput placeholder="Enter VIN / Chassis No" />
        </View>
      </>
    )
  }
  renderTerm = () => {
    return(
      <>
        <View style={styles.termView}>
          <CheckBox disabled={false} onValueChange={() => console.log(1)} />
          <Text style={styles.acceptText}>I Accept</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(Screen.TermScreen)}>
            <Text style={styles.termsText}> Terms of use </Text>
          </TouchableOpacity>
          
          <Text> & </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(Screen.PolicyScreen)}>
            <Text style={styles.termsText}> Privacy Policy </Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity style={styles.circleView} onPress={() => this.props.navigation.navigate(Screen.SignUpScreen2)}>
          <View style={styles.CircleShape} />
          <Image
            source={Images.arrowright}
            resizeMode={'contain'}
            style={styles.arrowImg}
            tintColor={'black'}
          />
        </TouchableOpacity>
      </>
    )
  }
  renderAlready = () => {
    return(
      <>
        <View style={styles.signView}>
          <TouchableOpacity style={styles.signView} onPress={() => this.props.navigation.navigate(Screen.SignInScreen)}>
          <Text style={styles.alreadyText}>Already Registered Please</Text>
          <Text style={styles.signText}> SIGN IN</Text>
          </TouchableOpacity>
          
          <View style={styles.lineView1} />
          <TouchableOpacity
          style={styles.SosBtnView}
          onPress={() => console.log}
        >
          <Text style={styles.trbText}>Trouble Signin Up?</Text>
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
          <Text style={styles.fVinText}>Where Can I Find the VIN ? </Text>
          <View style={styles.findViewLine} />
        </View>
        <View style={styles.vinChasisView}>
          <Text style={styles.vinChasisText}>
            The VIN/Chassis no. will be found on registration certification having & has 17
            Characters
          </Text>
        </View>
        </>
      )
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


  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderModal()}
        {this.renderHeader()}
        {this.renderVinPwd()}
        {this.renderTerm()}
        {this.renderAlready()}
        {this.renderFindVin()}        
      </View>
    )
  }
}
