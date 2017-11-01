import React, {PureComponent} from 'react';
import styles from './style';
import ListOfClothes from "../../components/listOfClothes";
import {Image, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {StackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
class HomePage extends PureComponent {

    static navigationOptions = {
        headerRight: (
            <TouchableOpacity>
                <Icon2 name="sliders" size={40} />
            </TouchableOpacity>
        ),
        headerTitleStyle: {alignSelf: 'center'},
        title: 'שמלות',
        headerLeft: (
            <TouchableOpacity>
                <Icon name="chevron-left" size={40} />
            </TouchableOpacity>
        )

    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.container}>
                    <ListOfClothes/>
                </View>
            </View>
        );
    }
}

const Tabs = StackNavigator({
    Home: {
        screen: HomePage,
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});

export default HomePage;