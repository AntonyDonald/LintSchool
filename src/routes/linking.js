const config = {
    screens: {
        Profile: {
            path: 'profile'
        },
        Login: {
            path: 'login'
        }
    }
};

const linking = {
    prefixes: ['lintschl://app', ''],
    config
};

export default linking;