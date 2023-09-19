import { createStore } from "redux";
import { reduxHelper } from "./ReduxHelper";


const initialState = {
    headers: {},
    userData: null,
    snackBar: {
        visible: false,
        message: ''
    },
    navigation: null,
}

const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case reduxHelper.UPDATE_USER_DATA:
            return {
                ...state,
                userData: payload
            }
        case reduxHelper.UPDATE_HEADERS:
            return {
                ...state,
                headers: payload
            }
        case reduxHelper.UPDATE_SNACKBAR:
            return {
                ...state,
                snackBar: payload
            }
        case reduxHelper.UPDATE_NAVIGATION:
            return {
                ...state,
                navigation: payload
            }
        default:
            return state
    }


};

export const store = createStore(reducer)