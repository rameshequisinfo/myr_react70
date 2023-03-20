import { Dimensions, StyleSheet } from "react-native";
import { Color, Fonts, Responsive, CommonStyles } from "../../Helper";

export const styles = StyleSheet.create({
    mainContainer :{
        flex:1
    },
      myrView: {
        height:Responsive.heightPx(25),
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Color.gray,
        
      },
      myText: {
        fontSize: 25,
        color: Color.yellow,
        fontWeight: 'bold'
      },
      renText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: Fonts.regular,
        marginLeft:10
      },
      SosBtnView:{
        position:'absolute',
        marginTop:150,
        marginLeft:350
     },
     modalView: {
      margin: 10,
      backgroundColor: 'white',
      padding: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 1,
      marginHorizontal:10,
      width:Responsive.widthPx(25)
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      //backgroundColor: '#2196F3',
    },
    textStyle: {
      color: Color.black,
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: Color.black,
    },
    SosText: {
      textAlign: 'center',
      marginVertical:10,
      paddingHorizontal:5,
      color: Color.black,
    }, 
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalBtn:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    imgWarning:{
      height:50, 
      width:50
    },
    child: { 
      width : Dimensions.get('window'), 
      justifyContent: 'center' 
    },
    text: { 
      fontSize: Dimensions.get('window') * 0.5, 
      textAlign: 'center' 
    },
    sosView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    sosLine:{
      borderBottomWidth: 1, 
      width: 125
    },
    signInView:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10,    
    },
    signInTxt:{
        color: Color.black,
        fontWeight:'bold',
        fontFamily: Fonts.regular
    },
    mobView:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        //borderRightWidth:1,
        //borderLeftWidth:1,
        borderColor:Color.black,
        width:'80%',
        marginHorizontal:'10%'
    },
    input:{
        width:'85%'
    },
    
    CircleShape: {
        alignItems:'center',
        justifyContent:'center',
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        backgroundColor: Color.yellow,
        marginHorizontal:180,
        marginTop: 30
      },
      circleView:{
         height:Responsive.heightPx(50)   
      },
      arrowImg:{
        height:'5%',
        width:'5%',
        position:'absolute',
        marginTop:42,
        marginLeft:190
      },
      trobleTxt:{
        color: Color.blue,
        fontFamily: Fonts.regular,
        fontSize:12,
        textDecorationLine: 'underline',
        textDecorationColor: Color.blue,
        textDecorationStyle: "solid",
        textAlign:'center',
        marginTop:20,
        marginBottom:40
      },
      
})
