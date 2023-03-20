import { Dimensions, StyleSheet } from "react-native";
import { Color, Fonts, Responsive, CommonStyles } from "../../Helper";

export const styles = StyleSheet.create({
    mainContainer :{
        flex:1
    },
    settingView:{
        height:'8%',
        backgroundColor:Color.yellow,
        borderTopEndRadius:20, 
        borderTopLeftRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    SosText: {
        fontSize:18,
        textAlign: 'center',
        marginVertical:10,
        paddingHorizontal:5,
        color: Color.black,
      },
      mobView:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        //borderRightWidth:1,
        //borderLeftWidth:1,
        borderColor:Color.black,
        width:'90%',
        marginHorizontal:'5%',
        marginBottom:10,
           
    },
    input:{
        width:'85%'
    },
    sosView:{
        borderBottomWidth:1,
        borderBottomColor:Color.gray
    },
    sosText1 :{
        marginStart:10,
        marginVertical:10
    },
    saveBtn:{
        width:'80%',marginTop:40, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        borderWidth:1, 
        borderColor:Color.black,
        paddingVertical:10, 
        marginHorizontal:38
    }

})