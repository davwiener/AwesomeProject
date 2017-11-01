import React, { PureComponent } from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';


class Bottombar extends PureComponent {
    render() {
        const {textStyle,viewStyle,image1Style,image2Style}=styles;

        return(
            <View style={viewStyle}>
                <TouchableOpacity><Icon2 name="user-female" size={30} /></TouchableOpacity>
                <TouchableOpacity><Icon name="comment-o" size={30} /></TouchableOpacity>
                <TouchableOpacity>{<Icon name="plus" size={30} />}</TouchableOpacity>
                <TouchableOpacity><Icon name="heart-o" size={30} /></TouchableOpacity>
                <TouchableOpacity>{<Icon2 name="grid" size={30} />}</TouchableOpacity>

            </View>

        );
    }
}



export default Bottombar;