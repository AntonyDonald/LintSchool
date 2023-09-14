import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeBottomNav from "./HomeBottomNav";

const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false,
                swipeEdgeWidth: -10
            }}
        // drawerContent={(props) => <LmsDrawerContent {...props} />}
        >
            <Drawer.Screen
                name={'HomeDashboard'}
                component={HomeBottomNav}
            />
        </Drawer.Navigator>
    )
}