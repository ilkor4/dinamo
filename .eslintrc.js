module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
    },
    "globals": {
        '__IS_DEV__': true,
    }
}
