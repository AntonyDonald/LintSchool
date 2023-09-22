import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import { MaterialIcons, Feather } from "react-native-vector-icons";
import { screenHeight } from "../config/Dimension";
import { COLORS, FONTS, SIZES } from "./styles/theme";

const Header = (props) => {

    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <>
            <View
                style={[props.transparent && {
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%',
                    top: screenHeight * 0.05
                }]}
            >
                <View style={[{
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: colors.borderColor,
                }, props.transparent && {
                    borderBottomWidth: 0,
                }, props.bgWhite && {
                    backgroundColor: colors.card,
                    borderBottomWidth: 0,
                    zIndex: 1,
                }]}>
                    {props.sideMenu &&
                        <TouchableOpacity
                            // onPress={() => { navigation.openDrawer(), console.log('pessed') }}
                            style={{
                                height: 48,
                                width: 48,
                                marginRight: 5,
                                marginLeft: -8,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Feather style={{ bottom: 2 }} color={colors.title} size={20} name="menu" />
                        </TouchableOpacity>
                    }
                    {props.leftIcon === "close" &&
                        <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="Go back"
                            accessibilityHint="Navigates to the previous screen"
                            onPress={() => navigation.goBack()}
                            style={{
                                height: 45,
                                width: 45,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                                marginRight: 10,
                            }}
                        >
                            {/* <SvgXml
                          height={30}
                          width={30}
                          stroke={colors.title}
                          xml={ICONS.close}
                      /> */}
                        </TouchableOpacity>
                    }
                    {props.leftIcon === "back" &&
                        <TouchableOpacity
                            onPress={() => { props.backNavigate ? navigation.navigate(props.backNavigate) : navigation.goBack() }}
                            style={{
                                height: 45,
                                width: 45,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                                marginRight: 10,
                            }}
                        >
                            <MaterialIcons name='arrow-back' color={props.bgImage ? COLORS.white : colors.title} size={22} />
                        </TouchableOpacity>
                    }
                    <Text style={[FONTS.h4, { color: colors.title, flex: 1 }, props.bgImage && { color: COLORS.white }, props.titleCenter && { textAlign: 'center', marginRight: 55 }]}>{props.title}</Text>
                    {props.rightIcon2 === "pages" &&
                        <TouchableOpacity
                            onPress={() => navigation.navigate('pages')}
                            style={{
                                height: 45,
                                width: 45,
                                marginRight: 10,
                                backgroundColor: props.bgImage ? 'rgba(255,255,255,.15)' : COLORS.primayLight,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                            }}
                        >
                            <Feather name='file' color={COLORS.primary} size={22} />

                        </TouchableOpacity>
                    }
                    {props.rightIcon === "notification" &&
                        <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="Notifications"
                            accessibilityHint="show notifications"
                            onPress={() => navigation.navigate('Notification')}
                            style={{
                                height: 45,
                                width: 45,
                                backgroundColor: COLORS.primayLight,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                            }}
                        >
                            <View
                                style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: COLORS.secondary,
                                    borderRadius: 5,
                                    borderWidth: 2,
                                    borderColor: '#FEEADF',
                                    position: 'absolute',
                                    top: 10,
                                    right: 12,
                                    zIndex: 1,
                                }}
                            />
                            <SvgXml
                                fill={COLORS.primary}
                                xml={ICONS.notification}
                            />
                        </TouchableOpacity>
                    }
                    {props.rightIcon === "settings" &&
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Settings')}
                            style={{
                                height: 45,
                                width: 45,
                                backgroundColor: props.bgImage ? 'rgba(255,255,255,.15)' : COLORS.primayLight,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                            }}
                        >
                            {/* <SvgXml
                          stroke={props.bgImage ? COLORS.white : COLORS.primary}
                          xml={ICONS.settings}
                      /> */}
                        </TouchableOpacity>
                    }

                    {props.rightIcon === "next" &&
                        <TouchableOpacity
                            style={{
                                height: 45,
                                width: 45,
                                backgroundColor: COLORS.primayLight,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                            }}
                        >
                            {/* <SvgXml
                          stroke={COLORS.primary}
                          xml={ICONS.arrowRight}
                      /> */}
                        </TouchableOpacity>
                    }
                </View>
            </View>

        </>
    );
};

export default Header;
