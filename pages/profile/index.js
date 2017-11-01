import React, {PureComponent} from 'react';
import styles from './style';
import ListOfClothes from "../../components/listOfClothes";
import Toolbar from "../../components/toolbar";
import {Image, StatusBar, Text, TouchableOpacity, View} from "react-native";

class ProfilePage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to profile page</Text>
            </View>
        );
    }
}

export default ProfilePage;