
import { useTheme } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import Home from '../screen/Dashboard/Home';
import Profile from '../screen/Dashboard/Profile';
import Chat from '../screen/Dashboard/Chat';
import Likes from '../screen/Dashboard/Likes';
import FastImage from 'react-native-fast-image';
import { COLORS, ICONS, IMAGES, SIZES } from '../components/styles/theme';

const Tab = createBottomTabNavigator();


const CustomTabBarButton = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1.2, alignItems: 'center' }}>
            <TouchableOpacity
                accessible={true}
                accessibilityLabel="Post"
                accessibilityHint="create the post"
                onPress={() => navigation.navigate('openCamera')}
                style={{
                    height: 55,
                    width: 55,
                    top: -22,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary5,
                }}
            >
                <SvgXml
                    height={20}
                    width={20}
                    xml={ICONS.plus}
                />
            </TouchableOpacity>
        </View>
    )
}

const HomeBottomNav = () => {

    const theme = useTheme();
    const { colors } = theme;


    return (
        <>

            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 55,
                        position: 'absolute',
                        bottom: 0,
                        borderTopWidth: 0,
                        backgroundColor: theme.dark ? 'rgba(75,91,157,1)' : '#fff',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,

                        elevation: 8,
                    },
                    // tabBarBackground: () => (
                    //   <View
                    //     ref={menuBarRef}
                    //     style={{
                    //       borderTopLeftRadius:SIZES.radius_md,
                    //       borderTopRightRadius:SIZES.radius_md,
                    //       overflow:'hidden',
                    //       position:'absolute',
                    //       height:55,
                    //       width:'100%',
                    //       bottom:0,
                    //       backgroundColor: theme.dark ? menuBar ? 'transparent' : 'rgba(75,91,157,.8)' : menuBar ? 'transparent' : '#fff',
                    //       left:0,
                    //     }}
                    //   >
                    //        <>
                    //       {menuBarRef?.current === null ? null : (
                    //         <>
                    //           {menuBar && (
                    //               <BlurView
                    //                 style={{
                    //                     position:'absolute',
                    //                     height:55,
                    //                     width:'100%',
                    //                     bottom:0,
                    //                     left:0,
                    //                     backgroundColor:theme.dark ? 'rgba(75,91,157,.8)' : 'rgba(255,255,255,.85)',
                    //                 }}
                    //                 blurType="dark"
                    //                 blurAmount={6}
                    //                 overlayColor={'transparent'}
                    //                 reducedTransparencyFallbackColor="white"
                    //               />
                    //           )}
                    //         </>
                    //       )}
                    //       </>
                    //   </View>
                    // ),
                    //lazy:false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIconStyle: {
                            top: Platform.OS === 'ios' ? 12 : 0,
                        },
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <FastImage
                                    source={IMAGES.home}
                                    style={{
                                        height: 22,
                                        width: 22,
                                        tintColor: COLORS.title,
                                        opacity: focused ? 1 : .4,
                                    }}
                                />
                            </View>
                        ),
                        tabBarLabel: () => (<></>)
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Chat}
                    options={{
                        tabBarIconStyle: {
                            top: Platform.OS === 'ios' ? 12 : 0,
                        },
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <FastImage
                                    source={IMAGES.chat}
                                    style={{
                                        height: 22,
                                        width: 22,
                                        tintColor: COLORS.title,
                                        opacity: focused ? 1 : .4,
                                    }}
                                />
                            </View>
                        ),
                        tabBarLabel: () => (<></>)
                    }}
                />
                <Tab.Screen
                    name="Post"
                    component={Home}
                    options={{
                        tabBarButton: props => <CustomTabBarButton {...props} />
                    }}
                />
                <Tab.Screen
                    name="Likes"
                    component={Likes}
                    options={{
                        tabBarIconStyle: {
                            top: Platform.OS === 'ios' ? 12 : 0,
                        },
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <FastImage
                                    source={IMAGES.like}
                                    style={{
                                        height: 22,
                                        width: 22,
                                        tintColor: COLORS.title,
                                        opacity: focused ? 1 : .4,
                                    }}
                                />
                            </View>
                        ),
                        tabBarLabel: () => (<></>)
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIconStyle: {
                            top: Platform.OS === 'ios' ? 12 : 0,
                        },
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <FastImage
                                    source={IMAGES.profile}
                                    style={{
                                        height: 22,
                                        width: 22,
                                        tintColor: COLORS.title,
                                        opacity: focused ? 1 : .4,
                                    }}
                                />
                            </View>
                        ),
                        tabBarLabel: () => (<></>)
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default HomeBottomNav

const styles = StyleSheet.create({})