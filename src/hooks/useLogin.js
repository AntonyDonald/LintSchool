import axios from "axios"
import { BaseUrl } from "../api/urls"

export const useLogin = (data) => new Promise((resolve, reject) => {
    axios({
        method: 'POST',
        url: `${BaseUrl}/login/`,
        headers: { 'content-type': 'multipart/form-data' },
        data: data
    })
        // .then((res) => res.json())
        .then((response) => {
            console.log('respos');
            resolve(response)
        })
        .catch((error) => {
            console.log('Login Error', error);
        })
})