import { Text, View,Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { Component } from 'react'
import { styles } from './GuestScreenStyle'
import { Images } from '../../Helper'
import SosBtn from '../../Asset/icon/sos_btn.svg'
import { Screen } from '../../Helper'

import { SwiperFlatList } from 'react-native-swiper-flatlist'


export default class GuestScreen extends Component {

    dataImg = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
        'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'
      ]
    
      renderImgSlider = () => {
        return (
          <View style={styles.imgView}>
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={2}
              showPagination
              data={this.dataImg}
              renderItem={({ item }) => (
                <View style={[styles.child]}>
                  <Image source={{ uri: item }} style={{ height: '100%' }} />
                </View>
              )}
            />
          </View>
        )
      }
    
      state = {
        modalVisible: false
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
    
      renderHeader = () => {
        return (
          <View style={styles.welView}>
            <Image
              source={Images.arrowleft}
              resizeMode={'contain'}
              style={styles.phoneImg}
              tintColor={'black'}
            />
            <Text style={styles.welTxt}>Welcome to MY Renault</Text>
          </View>
        )
      }
    
      renderSignup = () => {
        return (
          <View>
              <TouchableOpacity style={styles.signupView}  onPress={() => this.props.navigation.navigate(Screen.SignUpScreen)}>
              <Text style={styles.signupText}>SIGN UP / SIGN IN </Text>
              <Image
                source={Images.arrowright}
                resizeMode={'contain'}
                style={styles.signupArrow}
                tintColor={'black'}
              />
            </TouchableOpacity>
          </View>
        )
      }
    
      renderAssitView = () => {
          return (
            <View style={styles.assiView}>
              <Image
                source={Images.phonecall}
                resizeMode={'contain'}
                style={styles.phoneImg}
                tintColor={'black'}
              />
              <Text style={styles.assiText}>Renualt Assistance</Text>
            </View>
          )
      }
 
      
  render() {
    return (
        <View style={styles.mainContainer}>
        {this.renderHeader()}
        {this.renderImgSlider()}
        <TouchableOpacity
          style={styles.SosBtnView}
          onPress={() => this.setState({ modalVisible: true })}
        >
          <SosBtn width={30} height={30} />
        </TouchableOpacity>
        {this.renderModal()}
        {this.renderSignup()}        
        <View style={styles.skipView}><Text style={styles.skipText}>skip</Text></View>
        {this.renderAssitView()}
      </View>
    )
  }
}