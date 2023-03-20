import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


import { styles } from './LoginHomeScreenStyle'
import { Images, Screen } from '../../Helper'

import BookService from '../../Asset/icon/book_service.svg'
import LocateDealer from '../../Asset/icon/locate_dealer.svg'
import MyShop from '../../Asset/icon/online_store.svg'
import MyVehicle from '../../Asset/icon/db_car_b.svg'
import MyServices from '../../Asset/icon/db_srvc_b.svg'
import KnowCar from '../../Asset/icon/db_kyc_b.svg'



export default class LoginHomeScreen extends Component {

  renderHeader = () => {
    return (
        <>
        <View style={styles.headerView}>
        <TouchableOpacity style={styles.menuImg}>
            <Image
            source={Images.menu}
            resizeMode={'contain'}
            style={styles.headerImgSize}
            tintColor={'black'}
            />  
        </TouchableOpacity>
        
        <Text style={styles.myrTxt}>My Renault</Text>
        <TouchableOpacity style={styles.bellImg}>
        <Image
          source={Images.bell}
          resizeMode={'contain'}
          style={styles.headerImgSize}
          tintColor={'black'}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreImg}>
        <Image
          source={Images.more}
          resizeMode={'contain'}
          style={styles.headerImgSize}
          tintColor={'black'}
        />
        </TouchableOpacity>
        
    </View>
        </>
    )
  }  

  renderTotalView = () => {
    return (
      <View style={styles.TotView}>
      <Text style={styles.totText}>Total Saved Amount</Text>
      <View style={styles.totView2}>
      <TouchableOpacity style={{marginLeft:10}}>
      <Image
      source={Images.arrowleft}
      resizeMode={'contain'}
      tintColor={'yellow'}
      style={styles.arrowImgSize}
      />
      </TouchableOpacity>
      <View style={styles.textZero}>
        <Text>$ 0</Text>
      </View>
      <TouchableOpacity style={{marginRight:10 }}>
      <Image
        source={Images.arrowright}
        resizeMode={'contain'}
        tintColor={'yellow'}
        style={styles.arrowImgSize}
        />
      </TouchableOpacity>
        
      </View>
  </View>
  
    )
  }

  renderVechicle = () => {
    return(
      <View style={styles.myVehicleView}>
            <View style={styles.vehicleView}>
                <MyVehicle width={25} height={25} />
                <Text>My vehicles</Text>  
            </View>
            <View style={styles.middleLineView}>
            </View>
            <View style={styles.serviceView}>
            <MyServices width={25} height={25} />
                <Text>My Services</Text>  
            </View>
        </View>
        
    )
  }
  renderShopView = () => {
    return (
      <View style={styles.myVehicleView}>
            <View style={styles.shopView}>
                <MyShop width={25} height={25} />
                <Text>My Shop</Text>  
            </View>
            <View style={styles.middleLineView}>
            </View>
            <View style={styles.bookView}>
            <BookService width={25} height={25} />
                <Text>Book Services</Text>  
            </View>
        </View>
        
    )
  }

  renderDealerView = () => {
    return (
      <View style={styles.myVehicleView}>
            <View style={styles.dealerView}>
                <LocateDealer width={25} height={25} />
                <Text>Locate Dealer</Text>  
            </View>
            <View style={styles.middleLineView}>
            </View>
            <View style={styles.knowCarView}>
            <KnowCar width={25} height={25} />
                <Text>Know Your Car</Text>  
            </View>
        </View>
    )
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderHeader()}
        <View style={styles.welView}>
            <Text>Welcome to my Renault</Text>
        </View>
        {this.renderTotalView()}
        {this.renderVechicle()}
        <View style={styles.lineView}></View>
        {this.renderShopView()}
        <View style={styles.lineView}></View>
        {this.renderDealerView()}       
        <View style={styles.lineView}></View>
      </View>
    )
  }
}