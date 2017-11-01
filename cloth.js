
import React, { PureComponent } from 'react';
import MyButton from "./mybutton";
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, AppRegistry, ScrollView, Image, Text ,View,TouchableOpacity,Alert,NavigatorIOS} from 'react-native';
import {withNavigation} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import Heart from "./components/heart/index";
const dim = Dimensions.get('window');
import Storage from './utils/storage';

const styles = StyleSheet.create({
    item: {
        width: (dim.width / 2) - 15,
        height: 250,
        marginLeft: 10,
        marginTop: 6,
        flex: 1,
    },
    image: {
        width: dim.width/ 2 ,
        height: 220
    },
    logo:{
        marginLeft:(dim.width / 3),
        opacity:0.8

    },
    ownerpicStyle:{
        width:50,
        height:50,
        top:168,
        marginLeft:(dim.width / 6),
        opacity:0.7,
        borderWidth: 1,
        borderRadius: 75
    }
});

class Cloth extends PureComponent {


    navigateToItemPage() {
        const {price,name,picture,distance,size,brand,status,ownerpic,ownername,likes } = this.props;
        this.props.navigation.navigate('Item',{price,name,picture,distance,size,brand,status,ownerpic,ownername,likes});
    }
    changeHeart(){
        Alert.alert("heartchange")
    }

    likeThisItem(liked) {
        const { id } = this.props;

        return Storage.get('likes').then(
            (likes) => {
                likes = likes || [];

                if (liked) {
                    likes.push(id);
                } else {
                    likes.splice(likes.indexOf(id), 1);
                }
                return Storage.set('likes', likes);
            }
        );

    }

    render() {
        const { price,name,picture,distance,size,ownerpic } = this.props;

        return (

            <View >
                <TouchableOpacity onPress={this.navigateToItemPage.bind(this)}>
                    <View style={styles.item}>
                        <View style={styles.image}>
                            <Image source={{uri: picture}} style={styles.image} >
                                <View style={styles.logo}>
                                    <Heart selected={this.props.liked} onSelect={this.likeThisItem.bind(this)} />
                                </View>
                                <View >
                                    <Image source={{uri: ownerpic}} style={styles.ownerpicStyle} />
                                </View>
                            </Image>
                        </View>

                    </View>

                </TouchableOpacity>
                <Text style={{textAlign: 'center'}}> {name}  </Text>
                <Text style={{textAlign: 'center'}}> {distance}  ק"מ · מידה {size} </Text>
                <Text style= {{textAlign: 'center'}} > ₪ {price}   </Text>
                <MyButton/>

            </View>


        );
    }

}

Cloth.propTypes = {
    liked: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    size:PropTypes.string,
    distance:PropTypes.number,
    picture: PropTypes.string,
    brand:PropTypes.string,
    status:PropTypes.string,
    ownerpic:PropTypes.string,
    ownername:PropTypes.string,
    likes:PropTypes.number
};

export default withNavigation(Cloth);