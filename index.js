module.exports = {
  "root": true,
	"extends": [
		"airbnb"
	],
	"parser": "babel-eslint",
	"settings": {
		"import/resolver": "webpack"
	},
	"rules": {
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"no-unused-expressions": ["error", {
			"allowShortCircuit": true
		}],
		"no-unused-vars": ["error", {
			"args": "none",
      "caughtErrors": "none",
      "ignoreRestSiblings": true,
		}],
		"no-bitwise": ["error", {
			"int32Hint": true
		}],
		"no-throw-literal": "off",
		"no-underscore-dangle": "off",
		"import/no-dynamic-require": "off",
		"import/extensions": ["error", "always", "js", {
			"ignorePackages": true
		}],
		"react/jsx-filename-extension": ["error", {
			"extensions": [".js", ".jsx"]
		}],
		"react/no-multi-comp": "off",
		"react/forbid-prop-types": "off",
		"react/prop-types": "off",
		"react/no-array-index-key": "warn",
		"react/no-did-mount-set-state": "off",
		"jsx-a11y/label-has-for": "off",
		"global-require": "off",
		"class-methods-use-this": "off",
		"max-len": ["warn", 120]
	}
}
