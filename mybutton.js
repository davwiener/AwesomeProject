import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity ,Dimensions} from 'react-native';

const Button= ()=>{
    const{buttonStyle,textStyle}=styles;

    return (
        <TouchableOpacity style ={buttonStyle}>
            <Text style={textStyle}>לקנייה
            </Text>
        </TouchableOpacity>
    );
};
const styles={
    textStyle:{
        alignSelf:'center',
        color:'black',
        fontSize: 16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        flex: 1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        marginLeft:20,
        marginRight:20
    }
};
export default Button;

