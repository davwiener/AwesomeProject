import React, {PureComponent} from 'react';
import styles from './style';
import {Image, Text, View} from "react-native";
import BuyButton from './buybutton'
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/EvilIcons';

class ItemPage extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <Image source={require('./../../share-alternative.png')} />,
            headerTitleStyle: {alignSelf: 'center',fontSize:16},
            title: navigation.state.params.name
        }
    };

    render() {
        const { price,name,picture,distance,size,brand,status,likes,ownerpic,ownername} = this.props.navigation.state.params;

        var size2= ` ·${size} מידה `;
        return (
            <View style={styles.container}>
                <Image source={{
                    uri: picture
                }} style={styles.image} />
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>  {brand} · {status} · {distance}  ק"מ {size2}  </Text>
                <Text style={styles.pricetext}>  ₪ {price}</Text>
                <View style={styles.buttonConteniar}>
                    <BuyButton />
                </View>
                <View style={styles.seller}>
                    <Text style={styles.getInTouchtext}> צרו קשר </Text>
                    <View style={styles.sellerlikes}>
                        <View style={styles.sellerlikesBorder}>
                            <Text style={styles.sellerlikestext}>{likes}</Text>
                            <Icon name="heart" size={26} style={{marginLeft:8}} />
                        </View>
                    </View>
                    <View style={styles.ownerProfile}>
                        <Text style={styles.sellertext}>{ownername}</Text>
                        <Image source={{
                        uri: ownerpic
                    }}style={styles.sellerpic}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default ItemPage;