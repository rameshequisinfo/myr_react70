import { StyleSheet } from "react-native";
import { Color, Fonts, Responsive } from "../../Helper";

export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginHorizontal: 50
    },
    welView: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    myrView: {
      flex: 0.75,
      alignItems: 'center',
      justifyContent: 'center'
    },
    myText: {
      fontSize: 25,
      color: 'yellow',
      fontWeight: 'bold'
    },
    renText: {
      fontSize: 25,
      color: 'black',
      fontWeight: 'bold',
      fontFamily: Fonts.regular
    },
    imgView: {
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    ownerView: {
      //backgroundColor:'yellow',
      //flex: 0.75,
      height:Responsive.heightPx(8),
      width:Responsive.widthPx(75),
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 30,
      marginVertical: 20,
      alignItems: 'center',
      //justifyContent: 'center',
      paddingHorizontal:10
    },
    guestView: {
      //flex: 0.75,
      height:Responsive.heightPx(8),
      width:Responsive.widthPx(75),
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 30,
      marginBottom: 10,
      alignItems: 'center',
      //justifyContent: 'center'
      paddingHorizontal:10
    },
    assiView: {
      flex: 0.75,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    phoneImg: {
      width: '25%',
      height: '25%',
      marginRight: -20
    },
    ownImg: {
      width: '25%',
      height: '25%',
      marginLeft:25
    },
    guestImg: {
      width: '25%',
      height: '25%'
    },
    ownText:{
      marginLeft: 50,
      fontFamily: Fonts.regular,
      color: Color.black
    },
    gueText:{
      marginHorizontal: 70,
      fontFamily: Fonts.regular,
      color: Color.black
    },
    welTxt :{
      fontFamily: Fonts.regular,
      color: Color.black
    },
    assistTxt :{
      fontFamily: Fonts.regular,
      color: Color.black
    }
  })
  