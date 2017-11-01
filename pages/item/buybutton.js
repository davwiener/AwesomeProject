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
        paddingTop:6
    },
    buttonStyle:{
        backgroundColor:'purple',
        borderWidth:1,
        borderColor:'black',
        marginLeft:20,
        marginRight:20,
        height:40
    }
};
export default Button;

