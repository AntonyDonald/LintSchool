import { PermissionsAndroid } from "react-native";

export const LocationPermission = () => new Promise(async (resolve, reject) => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('grandes');
            resolve(true)
        }
        if (granted === PermissionsAndroid.RESULTS?.DENIED) {
            resolve('denied')
        }
        else {
            resolve(false)
        }
    } catch (err) {
        resolve(false)
        console.log('location permission Error', err);
    }
})


