import API from "./api";

import AsyncStorage from '@react-native-async-storage/async-storage';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function isLogined(){
    try {
        const jwt = await AsyncStorage.getItem('@token_user');
        await sleep(3000);
        console.log(jwt);
        if (jwt == null) {
            console.log(jwt);
            return false;
        }
        else {
            return true;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function logOut(){
    try {
        await AsyncStorage.removeItem('@token_user');
        await sleep(5000)
        return true;
    } catch (error) {
        return false;
    }
}