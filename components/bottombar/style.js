import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewStyle:{
        backgroundColor:'#F8F8F8',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height:60,
        // paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.6,
        elevation:2,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    textStyle:{
        fontSize:30,
        textAlign: 'center',
        height:50,
        marginLeft:60
    }
});
