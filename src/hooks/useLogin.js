import axios from "axios"
import { BaseUrl } from "../api/urls"

export const useLogin = (data) => new Promise((resolve, reject) => {
    console.log('data', data);
    axios({
        method: 'POST',
        url: `${BaseUrl}/employee/auth/login/`,
        headers: {
            'content-type': 'multipart/form-data'
        },
        data: data
    })
        .then((response) => {
            console.log('respos', response);
            resolve(response)
        })
        .catch((error) => {
            console.log('error', error);
            resolve(error?.response)
        })
})