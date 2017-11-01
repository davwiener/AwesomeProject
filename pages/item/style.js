import { StyleSheet,Dimensions } from 'react-native';
const dim = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        top:6,
        bottom:14,
        flex:1,
        backgroundColor:'white'
    },
    image:{
        width:dim.width-40,
        height: dim.height*0.45,
        marginLeft: 20

    },
    text:{
        textAlign: 'center',
        backgroundColor: 'white'
    },
    pricetext:{
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize:30
    },
    seller:{
        backgroundColor:'white',
        borderColor:'gray',
        borderWidth:1,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:60,
        width:dim.width-40,
        marginLeft:20

    },
    sellerpic:{
        width:30,
        height:30,
        marginTop:4,
        borderWidth: 1,
        borderRadius: 75,


    },
    sellertext:{
        fontSize:15,
        paddingTop:8,
        marginLeft:-10

    },
    sellerlikestext:{
        fontSize:15,

        marginLeft:20
    },
    getInTouchtext:{
        fontSize:16,
        paddingTop:16,
        paddingLeft:16
    },
    sellerlikes:{

        flexDirection: 'row',
        width:dim.width/3,
        paddingTop:10,



    },
    sellerlikesBorder:{
        marginTop:-2,
        alignItems:'center',
        marginLeft:dim.width/100,
        flexDirection: 'row',
        borderColor:'gray',
        borderWidth:1,
        borderTopColor:'transparent',
        borderBottomColor:'transparent',
        height:40,
        width:dim.width/3-20
    },
    ownerProfile:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:10
    },
    buttonConteniar:{
        paddingTop:15,
        paddingBottom:15
    }

});