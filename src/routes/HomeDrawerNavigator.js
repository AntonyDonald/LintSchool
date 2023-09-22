import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeBottomNav from "./HomeBottomNav";
import HomeDrawerMenu from "./HomeDrawerMenu";
import { SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator() {
    const {colors} = useTheme()
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.card,
            }}
        >
            <Drawer.Navigator
                drawerContent={() => <HomeDrawerMenu />}
                screenOptions={{
                    headerShown: false,
                    swipeEdgeWidth: -10
                }}
            >
                <Drawer.Screen
                    name="HomeBottomNav"
                    component={HomeBottomNav}
                />
            </Drawer.Navigator>
        </SafeAreaView>
    )
}