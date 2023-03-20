import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Color, Fonts, Responsive, CommonStyles } from "../../Helper";

export const styles = StyleSheet.create({
    mainContainer :{
        flex:1
    },
    headerView:{
        height:40,
        backgroundColor:Color.yellow, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    headerImgSize:{
        height:20,
        width:20
    },
    myrTxt:{
        fontFamily: Fonts.regular,
        color: Color.black,
        fontSize:20,
        
      },
      menuImg :{
        marginLeft:20
      },
      bellImg:{
        marginLeft:130
      },
      moreImg:{
        marginRight:20
      },
      welView:{
        height:150, 
        backgroundColor:Color.gray
      },
      TotView:{
        height:60, 
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'space-between'
      },
      totText :{
        fontSize:20,
        fontFamily: Fonts.regular,
        color: Color.yellow,
        marginVertical:5
      },
      totView2:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginBottom:20
      },
      arrowImgSize :{
        height:15,
        width:15
      },
      textZero:{
        width:350, 
        alignItems:'center',
        fontFamily: Fonts.regular,
        fontSize:20
      },
      myVehicleView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:20
      },
      lineView:{
        borderBottomWidth:1,
        width:'90%', 
        marginLeft:20,
        marginRight:20
      },
      middleLineView:{
        height:50, 
        borderRightWidth:1
      },
      knowCarView:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:40
      },
      dealerView:{
        alignItems:'center', 
        justifyContent:'center',
        marginLeft:45
      },
      bookView:{
        alignItems:'center', 
        justifyContent:'center',
        marginRight:40
      },
      shopView:{
        alignItems:'center', 
        justifyContent:'center',
        marginLeft:70
      },
      serviceView:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:50
      },
      vehicleView:{
        alignItems:'center', 
        justifyContent:'center',
        marginLeft:50
      }
      
      
      

      
})