module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    "plugins": [
        ["module-resolver", {
            "alias": {
                "@assets": "./public/assets",
                "@components": "./src/components",
                "@interfaces": "./interfaces.ts",
                "@nav": "./src/nav",
                "@redux": "./src/redux",
                "@screens": "./src/screens",
                "@text": "./public/text",
                "@themes": "./src/themes",
                "@utils": "./src/utils",
            }
        }]
    ],
}
