import { AsyncStorage } from 'react-native';

export default class Storage {

    static async get(key) {
        const value = await AsyncStorage.getItem(key);

        return JSON.parse(value);
    }

    static async set(key, value) {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return value;
    }

}