import React, {PureComponent} from 'react';
import styles from './style';
import ListOfClothes from "../../components/listOfClothes";
import {Image, StatusBar, TouchableOpacity, View} from "react-native";
import {StackNavigator} from "react-navigation";
import HomePage from "../home/index";
import ItemPage from "../item/index";

class MainNavigator extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Stack />
            </View>
        );
    }
}

const Stack = StackNavigator({
    Home: {
        screen: HomePage,
    },
    Item: {
        screen: ItemPage
    }

}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});

export default MainNavigator;