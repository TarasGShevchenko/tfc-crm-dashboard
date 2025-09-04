module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
    },
};
