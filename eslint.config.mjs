// eslint.config.mjs
import pluginJs from '@eslint/js'

export default [
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    ignores: [
      '**/build/*',
      '**/node_modules/*',
      '**/.next/*',
      // other ignored patterns
    ],
  },
  {
    extends: ['plugin:prettier/recommended', 'next/core-web-vitals'],
  },
  // Prettier needs to be last
  prettierEslint,
]
