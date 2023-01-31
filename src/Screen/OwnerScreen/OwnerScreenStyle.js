import { Dimensions, StyleSheet } from "react-native";
import { Color, Fonts, Responsive, CommonStyles } from "../../Helper";


const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    mainContainer :{
        flex:1
    },
    welView: {
        flex: 0.60,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Color.yellow,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
      },
      welTxt:{
        fontFamily: Fonts.regular,
        color: Color.black,
        fontSize:20,
        marginRight:70
        
      },
      imgView: {
        flex: 5,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      
      signupView: {
        height:Responsive.heightPx(6),
        width:Responsive.widthPx(75),
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 30,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:50,
        marginBottom:0
    
      },
      signupArrow: {
        width: '25%',
        height: '25%',
      },
  
      signinView: {
        height:Responsive.heightPx(6),
        width:Responsive.widthPx(75),
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 30,
        marginVertical: 20,
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:50,
        marginBottom:0
      },
      signupText:{
        textAlign:'center',
        paddingLeft:100,
        fontFamily: Fonts.regular,
        color: Color.black
      },
      signinArrow: {
        width: '25%',
        height: '25%',
      },
      signinText:{
        textAlign:'center',
        paddingLeft:100,
        fontFamily: Fonts.regular,
        color: Color.black
      },
      assiView: {
        height:Responsive.heightPx(8),
        width:Responsive.widthPx(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:70,
      },
      phoneImg: {
        width: '15%',
        height: '25%',
        marginLeft:45,
      },
     assiText :{
        fontFamily: Fonts.regular,
        color: Color.black
     },
     SosBtnView:{
        position:'absolute',
        marginTop:480,
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
      width, 
      justifyContent: 'center' 
    },
    text: { 
      fontSize: width * 0.5, 
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
    }
    
})