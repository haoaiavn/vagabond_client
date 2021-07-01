import axios from "axios";

// import AsyncStorage from '@react-native-async-storage/async-storage';

// async function getToken(){
//   try {
//     return await AsyncStorage.getItem('@token_user');
//   } catch (error) {
//       console.log(error)
//   }
// }
token = null;
export default axios.create({
  baseURL: 'http://10.0.2.2:3000',
  responseType: "json",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`},
});
