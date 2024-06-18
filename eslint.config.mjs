import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    { files: ['**/*.js'] },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                electron: true,
                app: true,
                LiteLoader: true,
            },
        },
    },
    pluginJs.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
    eslintConfigPrettier,
]
