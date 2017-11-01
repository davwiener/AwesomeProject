import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ListOfClothes from './components/listOfClothes/index';
import MainNavigator from './pages/stack';
import Bottombar from './components/bottombar/index';
import { Font } from 'expo';

export default class App extends React.Component {

    //
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    componentWillMount() {
        this.loadAsync();
    }

    async loadAsync() {
        await Font.loadAsync({
            'FontAwesome': require('./fonts/FontAwesome.ttf'),
            'EvilIcons': require('./fonts/EvilIcons.ttf')
        });

        this.setState({ loaded: true });
    }

    render() {
        const { loaded } = this.state;

        if (!loaded) return null;

        return (
            <View style={styles.container}>
                <MainNavigator />
                <View>
                    <Bottombar/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});