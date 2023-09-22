import Snackbar from "react-native-snackbar"

export const snackBar = (text, bgColor,) => {
    Snackbar.show({
        text: text,
        backgroundColor: bgColor,
        duration: Snackbar?.LENGTH_SHORT
    })
}