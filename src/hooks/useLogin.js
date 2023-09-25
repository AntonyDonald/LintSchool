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
        // .then((res) => res.json())
        .then((response) => {
            console.log('respos', response);
            resolve(response?.data)
        })
        .catch((error) => {
            resolve(error?.response?.data)
        })
})