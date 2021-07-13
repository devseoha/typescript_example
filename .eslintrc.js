module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "createDefaultProgram": true
    },
    "plugins": ["prettier"],
    "extends": [
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "ignorePatterns": ["node_modules/"],
    "rules": {
        "prettier/prettier": "error"
    }
}