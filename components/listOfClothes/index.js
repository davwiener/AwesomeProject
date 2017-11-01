import React, {PureComponent} from 'react';
import {Alert, View, Text, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import Cloth from "../../cloth";
import Storage from './../../utils/storage';

export default class ListOfClothes extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            listOfClothes: [],
            loading: false,
            likes: []
        };
    }

    async componentWillMount() {
        this.setState({loading: true});
        axios.post('https://shafa-test.herokuapp.com/myItems')
            .then(
                (response) => {

                    const {data} = response;

                    this.setState({loading: false, listOfClothes: data});
                }
            );
        const likes = await Storage.get('likes');

        if (likes) {
            this.setState({ likes });
        }
    }

    isClothSelected(id) {
        return this.state.likes.indexOf(id) !== -1;
    }

    render() {

        const {loading} = this.state;

        const list = this.state.listOfClothes.map(
            (cloth, index) => <Cloth key={index}
                                     name={cloth.name}
                                     price={cloth.price}
                                     id={cloth._id}
                                     brand={cloth.brand}
                                     distance={cloth.distance}
                                     status={cloth.status}
                                     size={cloth.size}
                                     ownername={cloth.owner.name}
                                     ownerpic={cloth.owner.profile_pic}
                                     picture={cloth.images[0]}
                                     likes={cloth.likes}
                                     liked={this.isClothSelected(cloth._id)}
            />
        );


        return (
            <ScrollView >
                <View style={styles.content}>
                    {loading ? <Text>Loading...</Text> : list}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
    content: {
            flexDirection: 'row',
            flexWrap: 'wrap',

        },

});