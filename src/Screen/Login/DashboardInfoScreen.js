import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './DashboardInfoScreenStyle'
import { Images } from '../../Helper'
import SosBtn from '../../Asset/icon/sos_btn.svg'
import Users from '../../Asset/icon/users.svg'

export default class DashboardInfoScreen extends Component {
  
   renderHeader = () => {
     return (
        <View style={styles.headerView}>
            <View style={styles.menuView}></View>
            <Image source={Images.downarrow} resizeMode={'contain'} tintColor={'white'} style={styles.downarrowImg} />
            <Image source={Images.menu} resizeMode={'contain'} tintColor={'black'} style={styles.menuImg} />
            <View style={styles.tapView}><Text style={styles.tapTxt}>Tap to view</Text><Text style={styles.notificationTxt}>Notification</Text></View>
            <View style={styles.notificationView}></View>
            <Image source={Images.leftarrow} resizeMode={'contain'} tintColor={'white'} style={styles.leftarrowImg} />
            <Image source={Images.bell} resizeMode={'contain'} tintColor={'black'} style={styles.bellImg} />
            <View style={styles.menuView}></View>
            <Image source={Images.more} resizeMode={'contain'} tintColor={'black'} style={styles.moreImg} />
            <Image source={Images.downarrow} resizeMode={'contain'} tintColor={'white'} style={styles.moredownarrowImg} />
        </View>
     )
   }

   renderBurgerTextView = () => {
     return(
        <View style={styles.menuMoreView}>
            <View style={styles.burgerView}>
                <Text style={styles.burgerMenuTxt}>Tap the Burger Menu</Text>
                <Text style={styles.burgerMenuTxt}>to view <Text style={styles.sideMenuTxt}>Side menu</Text></Text>    
            </View>
            <View style={styles.moreView}>
                <Text style={styles.burgerMenuTxt}>Tap to view</Text>
                <Text style={styles.sideMenuTxt}>More menu</Text>        
            </View>
        </View>
     )
   }

   renderGotView = () =>{
     return(
        <View style={styles.gotView}>
            <Text>Ok, Got it</Text>
        </View>
     )
   }
   renderBottomTextView = () => {
    return (
        <View style={styles.bottomTextView}>
            <View style={styles.dashView}>
                <Text style={styles.burgerMenuTxt}>Tap to </Text>
                <Text style={styles.sideMenuTxt}>Launch the Dashboard</Text>    
            </View>
            <View style={styles.dashView}>
                <Text style={styles.burgerMenuTxt}>Tap to </Text>
                <Text style={styles.sideMenuTxt}>Call the Renault Assistance</Text>    
            </View>
            <View style={styles.dashView}>
                <Text style={styles.burgerMenuTxt}>Tap to </Text>
                <Text style={styles.sideMenuTxt}>Refer & Earn</Text>    
            </View>
            <View style={styles.dashView}>
                <Text style={styles.burgerMenuTxt}>Tap</Text>
                <Text style={styles.sideMenuTxt}>SOS</Text>    
            </View>
        </View>

    )
   }

   renderBottomImgView =()=> {
        return (
            <View
         style={styles.bottomImgView}>
            <Image source={Images.home} resizeMode={'contain'} tintColor={'gray'} style={styles.homeImg} />
            <View style={styles.homeView}></View>
            <Image source={Images.phonecall} resizeMode={'contain'} tintColor={'gray'} style={styles.callImg} />
            <View style={styles.callView}></View>
            <Users width={25} height={25}  style={styles.earnImg}/>
            <View style={styles.earnView}></View>
            <SosBtn width={25} height={25}  style={styles.sosImg}/>
            <View style={styles.sosView}></View>
       </View>
        )
   }
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderHeader()}
        {this.renderBurgerTextView()}
        {this.renderGotView()}
        {this.renderBottomTextView()}
        <Image source={Images.uparrow} resizeMode={'contain'} tintColor={'white'} style={styles.upHomeImg} />
        <Image source={Images.uparrow} resizeMode={'contain'} tintColor={'white'} style={styles.upCallImg} />
        <Image source={Images.uparrow} resizeMode={'contain'} tintColor={'white'} style={styles.upEarnImg} />
        <Image source={Images.uparrow} resizeMode={'contain'} tintColor={'white'} style={styles.upSosImg} />
        {this.renderBottomImgView()}
      </View>
    )
  }
}