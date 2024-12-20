/* eslint-disable-next-line no-underscore-dangle, init-declarations */
declare const _default: (
  | { readonly rules: Readonly<import("eslint").Linter.RulesRecord> }
  | {
      name: "binden/eslint-config";
      rules: {
        "array-callback-return": [
          "error",
          { allowImplicit: true; checkForEach: true },
        ];
        "no-await-in-loop": "off";
        "no-constant-binary-expression": "warn";
        "no-constructor-return": "error";
        "no-duplicate-imports": "error";
        "no-promise-executor-return": "error";
        "no-self-compare": "error";
        "no-template-curly-in-string": "error";
        "no-unmodified-loop-condition": "warn";
        "no-unreachable-loop": "error";
        "no-unused-private-class-members": "error";
        "no-use-before-define": "error";
        "require-atomic-updates": "error";
        "accessor-pairs": "off";
        "arrow-body-style": "error";
        "block-scoped-var": "error";
        camelcase: "off";
        "capitalized-comments": "off";
        "class-methods-use-this": "warn";
        complexity: "off";
        "consistent-return": "error";
        "consistent-this": "off";
        curly: "error";
        "default-case": "error";
        "default-case-last": "error";
        "default-param-last": "error";
        "dot-notation": "error";
        eqeqeq: "error";
        "func-name-matching": "error";
        "func-names": ["error", "as-needed"];
        "func-style": [
          "error",
          "declaration",
          {
            allowArrowFunctions: true;
          },
        ];
        "grouped-accessor-pairs": "error";
        "guard-for-in": "off";
        "id-denylist": "off";
        "id-length": "off";
        "id-match": "off";
        "init-declarations": "warn";
        "max-classes-per-file": "off";
        "max-depth": "off";
        "max-lines": "off";
        "max-lines-per-function": "off";
        "max-nested-callbacks": "off";
        "max-params": "off";
        "max-statements": "off";
        "new-cap": "warn";
        "no-alert": "warn";
        "no-array-constructor": "error";
        "no-bitwise": "off";
        "no-caller": "error";
        "no-confusing-arrow": "error";
        "no-console": "error";
        "no-continue": "error";
        "no-div-regex": "error";
        "no-else-return": "error";
        "no-empty-function": "error";
        "no-eq-null": "error";
        "no-eval": "error";
        "no-extend-native": "error";
        "no-extra-bind": "error";
        "no-extra-label": "error";
        "no-floating-decimal": "error";
        "no-implicit-coercion": "error";
        "no-implicit-globals": "off";
        "no-implied-eval": "error";
        "no-inline-comments": "error";
        "no-invalid-this": "error";
        "no-iterator": "error";
        "no-label-var": "error";
        "no-labels": "error";
        "no-lone-blocks": "error";
        "no-lonely-if": "error";
        "no-loop-func": "error";
        "no-mixed-operators": "off";
        "no-multi-assign": "error";
        "no-multi-str": "error";
        "no-negated-condition": "warn";
        "no-nested-ternary": "off";
        "no-new": "error";
        "no-new-func": "error";
        "no-new-object": "error";
        "no-new-wrappers": "error";
        "no-octal-escape": "error";
        "no-param-reassign": "error";
        "no-plusplus": "error";
        "no-proto": "error";
        "no-restricted-exports": "off";
        "no-restricted-globals": "off";
        "no-restricted-imports": "off";
        "no-restricted-properties": "off";
        "no-restricted-syntax": "off";
        "no-return-assign": "error";
        "no-return-await": "error";
        "no-script-url": "error";
        "no-sequences": "error";
        "no-shadow": "error";
        "no-ternary": "off";
        "no-throw-literal": "error";
        "no-undef-init": "error";
        "no-undefined": "error";
        "no-underscore-dangle": [
          "error",
          {
            enforceInMethodNames: true;
            enforceInClassFields: true;
          },
        ];
        "no-unneeded-ternary": "error";
        "no-unused-expressions": "error";
        "no-useless-call": "error";
        "no-useless-computed-key": "error";
        "no-useless-concat": "error";
        "no-useless-constructor": "error";
        "no-useless-rename": "error";
        "no-var": "error";
        "no-void": "error";
        "no-warning-comments": "error";
        "object-shorthand": "error";
        "one-var": ["error", "never"];
        "one-var-declaration-per-line": ["error", "always"];
        "operator-assignment": "error";
        "prefer-arrow-callback": "error";
        "prefer-const": "error";
        "prefer-destructuring": "error";
        "prefer-exponentiation-operator": "error";
        "prefer-named-capture-group": "error";
        "prefer-numeric-literals": "error";
        "prefer-object-has-own": "error";
        "prefer-object-spread": "error";
        "prefer-promise-reject-errors": "error";
        "prefer-regex-literals": "off";
        "prefer-rest-params": "error";
        "prefer-spread": "error";
        "prefer-template": "error";
        "quote-props": ["error", "as-needed"];
        radix: "error";
        "require-await": "error";
        "require-unicode-regexp": "error";
        "sort-imports": "off";
        "sort-keys": "off";
        "sort-vars": "error";
        "spaced-comment": ["error", "always"];
        strict: ["error", "never"];
        "symbol-description": "error";
        "vars-on-top": "error";
        yoda: ["error", "never"];
        "array-bracket-newline": "off";
        "array-bracket-spacing": "off";
        "array-element-newline": "off";
        "arrow-parens": "off";
        "arrow-spacing": "off";
        "block-spacing": "off";
        "brace-style": "off";
        "comma-dangle": "off";
        "comma-spacing": "off";
        "comma-style": "off";
        "computed-property-spacing": "off";
        "dot-location": "off";
        "eol-last": "error";
        "func-call-spacing": "off";
        "function-call-argument-newline": "off";
        "function-paren-newline": "off";
        "generator-star-spacing": "off";
        "implicit-arrow-linebreak": "off";
        indent: "off";
        "jsx-quotes": "off";
        "key-spacing": "off";
        "keyword-spacing": "off";
        "line-comment-position": [
          "warn",
          {
            position: "above";
          },
        ];
        "linebreak-style": ["error", "unix"];
        "lines-around-comment": "off";
        "lines-between-class-members": "off";
        "max-len": "off";
        "max-statements-per-line": "off";
        "multiline-ternary": "off";
        "new-parens": "off";
        "newline-per-chained-call": "off";
        "no-extra-parens": "off";
        "no-multi-spaces": "off";
        "no-multiple-empty-lines": "off";
        "no-tabs": "off";
        "no-trailing-spaces": "off";
        "no-whitespace-before-property": "off";
        "nonblock-statement-body-position": "off";
        "object-curly-newline": "off";
        "object-curly-spacing": "off";
        "operator-linebreak": "off";
        "padded-blocks": "off";
        "padding-line-between-statements": "off";
        quotes: "off";
        "rest-spread-spacing": "off";
        semi: "off";
        "semi-spacing": "off";
        "semi-style": "off";
        "space-before-blocks": "off";
        "space-before-function-paren": "off";
        "space-in-parens": "off";
        "space-infix-ops": "off";
        "space-unary-ops": "off";
        "switch-colon-spacing": "off";
        "template-curly-spacing": "off";
        "template-tag-spacing": "off";
        "unicode-bom": "off";
      };
    }
  | import("@typescript-eslint/utils/dist/ts-eslint").FlatConfig.Config
  | {
      rules: {
        "@typescript-eslint/array-type": (string | { default: string })[];
        "@typescript-eslint/ban-tslint-comment": string;
        "@typescript-eslint/class-literal-property-style": string[];
        "@typescript-eslint/consistent-generic-constructors": string[];
        "@typescript-eslint/consistent-indexed-object-style": string[];
        "@typescript-eslint/consistent-type-definitions": string[];
        "@typescript-eslint/consistent-type-exports": (
          | string
          | { fixMixedExportsWithInlineTypeSpecifier: boolean }
        )[];
        "@typescript-eslint/consistent-type-imports": string;
        "@typescript-eslint/explicit-function-return-type": string;
        "@typescript-eslint/explicit-member-accessibility": string;
        "@typescript-eslint/explicit-module-boundary-types": string;
        "@typescript-eslint/member-delimiter-style": string;
        "@typescript-eslint/member-ordering": string;
        "@typescript-eslint/method-signature-style": string[];
        "@typescript-eslint/naming-convention": string;
        "@typescript-eslint/no-base-to-string": string;
        "@typescript-eslint/no-confusing-void-expression": string;
        "@typescript-eslint/no-duplicate-enum-values": string;
        "@typescript-eslint/no-dynamic-delete": string;
        "@typescript-eslint/no-empty-object-type": [
          string,
          { allowInterfaces: "never" | "with-single-extends" | "always" },
        ];
        "@typescript-eslint/no-extraneous-class": string;
        "@typescript-eslint/no-invalid-void-type": string;
        "@typescript-eslint/no-meaningless-void-operator": string;
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": string;
        "@typescript-eslint/no-redundant-type-constituents": string;
        "@typescript-eslint/no-require-imports": string;
        "@typescript-eslint/no-type-alias": string;
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": string;
        "@typescript-eslint/no-unnecessary-condition": string;
        "@typescript-eslint/no-unnecessary-qualifier": string;
        "@typescript-eslint/no-unnecessary-type-arguments": string;
        "@typescript-eslint/no-useless-empty-export": string;
        "@typescript-eslint/parameter-properties": string;
        "@typescript-eslint/prefer-enum-initializers": string;
        "@typescript-eslint/prefer-for-of": string;
        "@typescript-eslint/prefer-function-type": string;
        "@typescript-eslint/prefer-includes": string;
        "@typescript-eslint/prefer-literal-enum-member": string;
        "@typescript-eslint/prefer-nullish-coalescing": string;
        "@typescript-eslint/prefer-optional-chain": string;
        "@typescript-eslint/prefer-readonly": string;
        "@typescript-eslint/prefer-readonly-parameter-types": string;
        "@typescript-eslint/prefer-regexp-exec": string;
        "@typescript-eslint/prefer-ts-expect-error": string;
        "@typescript-eslint/promise-function-async": string;
        "@typescript-eslint/require-array-sort-compare": string;
        "@typescript-eslint/strict-boolean-expressions": string;
        "@typescript-eslint/switch-exhaustiveness-check": string;
        "@typescript-eslint/type-annotation-spacing": string;
        "@typescript-eslint/typedef": string;
        "@typescript-eslint/unified-signatures": [
          string,
          { ignoreDifferentlyNamedParameters: boolean },
        ];
        "@typescript-eslint/brace-style": string;
        "@typescript-eslint/comma-dangle": string;
        "@typescript-eslint/comma-spacing": string;
        "default-param-last": string;
        "@typescript-eslint/default-param-last": string;
        "dot-notation": string;
        "@typescript-eslint/dot-notation": string;
        "@typescript-eslint/func-call-spacing": string;
        "@typescript-eslint/indent": string;
        "@typescript-eslint/keyword-spacing": string;
        "@typescript-eslint/lines-between-class-members": string;
        "no-dupe-class-members": string;
        "@typescript-eslint/no-dupe-class-members": string;
        "@typescript-eslint/no-extra-parens": string;
        "no-invalid-this": string;
        "@typescript-eslint/no-invalid-this": string;
        "no-loop-func": string;
        "@typescript-eslint/no-loop-func": string;
        "no-redeclare": string;
        "@typescript-eslint/no-redeclare": string;
        "@typescript-eslint/no-restricted-imports": string;
        "no-shadow": string;
        "@typescript-eslint/no-shadow": string;
        "no-throw-literal": string;
        "@typescript-eslint/no-throw-literal": string;
        "no-unused-expressions": string;
        "@typescript-eslint/no-unused-expressions": string;
        "no-use-before-define": string;
        "@typescript-eslint/no-use-before-define": string;
        "no-useless-constructor": string;
        "@typescript-eslint/no-useless-constructor": string;
        "@typescript-eslint/object-curly-spacing": string;
        "@typescript-eslint/padding-line-between-statements": string;
        "@typescript-eslint/quotes": string;
        "no-return-await": string;
        "@typescript-eslint/return-await": string;
        "@typescript-eslint/semi": string;
        "space-before-blocks": string;
        "@typescript-eslint/space-before-blocks": string;
        "space-before-function-paren": string;
        "@typescript-eslint/space-before-function-paren": string;
        "space-infix-ops": string;
        "@typescript-eslint/space-infix-ops": string;
      };
    }
)[];
export default _default;
