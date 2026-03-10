module.exports = {
  "parser": '@babel/eslint-parser',
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "sourceType": "module",
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    }
  },
  "plugins": [ "react" ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/prop-types": ["off"],
    "indent": ["error", 2],
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "no-console": ["warn", { "allow": ["info", "error"] }]
  }
};