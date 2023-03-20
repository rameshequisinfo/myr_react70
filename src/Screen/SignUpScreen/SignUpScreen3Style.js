import { Dimensions, StyleSheet } from "react-native";
import { Color, Fonts, Responsive, CommonStyles } from "../../Helper";

export const styles = StyleSheet.create({
    mainContainer :{
        flex:1
    },
    signUpView: {
        height:Responsive.heightPx(25),
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor:Color.gray,
        paddingLeft:20,
        paddingTop:100
      },
      signUpText: {
        fontSize: 25,
        color: Color.black,
        fontWeight: 'bold'
      },
      regText: {
        fontSize: 15,
        color: 'black',
        fontFamily: Fonts.regular,
      },
      stepViewOne:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
      },
      vinText:{
        width:'30%',
        fontSize: 13,
        color: 'black',
        fontFamily: Fonts.regular,
        textAlign:'center'
      },
      mobText:{
        width:'30%',
        fontSize: 13,
        color: 'black',
        fontFamily: Fonts.regular,
        textAlign:'center'
      },
      pwdText:{
        width:'30%',
        fontSize: 13,
        color: 'black',
        fontFamily: Fonts.regular,
        textAlign:'center'
      },
      CircleShape1: {
        alignItems:'center',
        justifyContent:'center',
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: Color.gray,
        //marginHorizontal:180,
       // marginTop: 30
      },
      CircleShape2: {
        alignItems:'center',
        justifyContent:'center',
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: Color.gray,
        borderColor:Color.gray,
        borderWidth:1,
        //marginHorizontal:180,
       // marginTop: 30
      },
      CircleShape3: {
        alignItems:'center',
        justifyContent:'center',
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        borderColor:Color.yellow,
        borderWidth:1,
        backgroundColor: Color.yellow,
        //marginHorizontal:180,
       // marginTop: 30
      },
      stepViewTwo:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10       
      },
      mobView:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        //borderRightWidth:1,
        //borderLeftWidth:1,
        borderColor:Color.black,
        width:'83%',
        marginHorizontal:'10%',
        marginTop:20
    },
    input:{
        width:'85%'
    },
    termView:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:35,
      marginTop:20
    },
    radioView:{
      flexDirection:'row', 
      alignItems:'center',
      justifyContent:'center',
      marginTop:20
    },
    lineView:{
      borderBottomColor:'black',
      borderBottomWidth:1,
      width:80
    },
    acceptText:{
      fontSize: 16,
      color: 'black',
      fontFamily: Fonts.regular,
      
    },
    termsText:{
      fontSize: 14,
      color: Color.yellow,
      fontFamily: Fonts.regular,
      textDecorationLine:'underline'
    },
    circleView:{
      height:Responsive.heightPx(10)   
   },
   CircleShape: {
    alignItems:'center',
    justifyContent:'center',
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    backgroundColor: Color.yellow,
    marginHorizontal:180,
    marginTop: 15
  },
  arrowImg:{
    height:'30%',
    width:'30%',
    position:'absolute',
    marginTop:24,
    marginLeft:142
  },
  signView:{
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center'
  },
  alreadyText:{
    fontSize: 13,
    color: Color.black,
    fontFamily: Fonts.regular,
    textDecorationLine:'underline'
  },
  signText:{
    textDecorationLine:'underline',
    //fontSize: 15,
    marginRight:10,
    color:Color.yellow,
    fontFamily: Fonts.regular,
  },
  lineView1:{
    borderRightWidth:1,
    height:15,
    borderColor:Color.black,
    marginRight:10
  },
  trbText:{
    color:Color.blue,
    textDecorationLine:'underline',
    fontFamily: Fonts.regular,
  },
  findView:{
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
  },
  findViewLine:{
    width:90,
    borderColor:Color.black,
    marginRight:10, 
    marginLeft:10,
    borderBottomWidth:1
  },
  fVinText:{
    fontSize:18,
    color:Color.black,
    fontFamily: Fonts.regular,
  },
  vinChasisView:{
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    width:'85%'
  },
  vinChasisText:{
    fontSize:12,
    textAlign:'center',
    color:Color.black,
    fontFamily: Fonts.regular,
    marginLeft:40
  },
  oneView:{
    position:'absolute',
    marginLeft:82, 
    marginTop:225,
    alignItems:'center'
  },
  twoView:{
    position:'absolute',
    marginLeft:192,
    marginTop:225,
    alignItems:'center'
  },
  threeView:{
    position:'absolute',
    marginLeft:302, 
    marginTop:225,
    alignItems:'center'
  },
  resendView:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginVertical:5,
    marginLeft: 40
  },
  resendTxt:{
    fontSize:12,
    textAlign:'center',
    color:Color.black,
    fontFamily: Fonts.regular,  
  },
  trbView:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  strengthView:{
    width:'80%', 
    borderBottomWidth:4,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:40,
    borderRadius:20
  }
      
})