import { Dimensions, StatusBar } from "react-native";

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export const statusbarHeight = StatusBar.currentHeight || 0.06 * screenHeight

export const PADDING_HORIZONTAL = 0.03 * screenWidth;
