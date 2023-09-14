import { DefaultTheme, configureFonts } from 'react-native-paper'
import { ERROR, INFO, PRIMARY, SECONDARY } from './MainColor'

const fontConfig = {
    displaySmall: {
        ...DefaultTheme.fonts.displaySmall,
        fontFamily: 'Regular',
    },
    displayMedium: {
        ...DefaultTheme.fonts.displayMedium,
        fontFamily: 'Medium',
    },
    displayLarge: {
        ...DefaultTheme.fonts.displayLarge,
        fontFamily: 'Bold'
    },
    headlineSmall: {
        ...DefaultTheme.fonts.headlineSmall,
        fontFamily: 'Bold',
    },
    headlineMedium: {
        ...DefaultTheme.fonts.headlineMedium,
        fontFamily: 'Bold',
    },
    headlineLarge: {
        ...DefaultTheme.fonts.headlineLarge,
        fontFamily: 'Bold',
    },
    titleSmall: {
        ...DefaultTheme.fonts.titleSmall,
        fontFamily: 'Regular',
    },
    titleMedium: {
        ...DefaultTheme.fonts.titleMedium,
        fontFamily: 'Bold',
    },
    titleLarge: {
        ...DefaultTheme.fonts.titleLarge,
        fontFamily: 'Bold',
    },
    labelSmall: {
        ...DefaultTheme.fonts.labelSmall,
        fontFamily: 'Regular',
    },
    labelMedium: {
        ...DefaultTheme.fonts.labelMedium,
        fontFamily: 'Medium',
    },
    labelLarge: {
        ...DefaultTheme.fonts.labelLarge,
        fontFamily: 'Bold',
    },
    bodySmall: {
        ...DefaultTheme.fonts.bodySmall,
        fontFamily: 'Regular',
    },
    bodyMedium: {
        ...DefaultTheme.fonts.bodyMedium,
        fontFamily: 'Medium',
    },
    bodyLarge: {
        ...DefaultTheme.fonts.bodyLarge,
        fontFamily: 'Bold',
    },
    default: {
        ...DefaultTheme.fonts.default,
        fontFamily: 'Medium',
    }
}

export const theme = {
    ...DefaultTheme,
    roundness: 1.5,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY.main,
        secondary: SECONDARY.main,
        tertiary: INFO.main,
        error: ERROR.main,
        secondaryContainer: PRIMARY.lighter,
        background: '#fff',
        primaryContainer: PRIMARY.light,
        inversePrimary: PRIMARY.main,
        surface: 'red'
    },
    fonts: configureFonts({ config: fontConfig })
}