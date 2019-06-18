module.exports = {
    "extends": ["airbnb-base"],
    "plugins": [
        "import",
        "promise"
    ],
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
        "Npm": true
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-underscore-dangle": [2, {
          "allow": ["_id", "_outputSeqNo", "_queueOrderNo", "_skipOutput", "_retryCount", "_crashesCount", "_pageFailed", "_pageCrashed"],
          "allowAfterThis": true
        }],
        "no-param-reassign": 0,
        "consistent-return": 0,
        "array-callback-return": 0,
        "no-plusplus": 0,
        "max-len": ["error", 150],
        "func-names": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "import/prefer-default-export": 0,
        "import/no-unresolved": 0,
        "class-methods-use-this": 0,
        "strict": 0,
        "object-curly-newline": 0,
        "no-await-in-loop": 0,
        "arrow-body-style": 0,
        "import/no-named-as-default": 0
    }
};
