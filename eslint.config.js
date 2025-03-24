import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
    eslint.configs.recommended,
    prettier,
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.eslint.json',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
            "no-undef": "off",
            "no-extra-boolean-cast": "off",
			'@typescript-eslint/naming-convention': 'off',
		},
	},
];
