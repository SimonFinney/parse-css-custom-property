<h1 align="center">parse-css-custom-property</h1>

<span align="center">

[![Licensed under the ISC License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Travis CI](https://travis-ci.org/SimonFinney/parse-css-custom-property.svg?branch=master)](https://travis-ci.org/SimonFinney/parse-css-custom-property)

</span>

Parse CSS custom property strings.

## Installation

```bash
npm i -S parse-css-custom-property
```

## Usage

```js
import ParseCSSCustomProperty, {
  getDeclaration,
  getFallback,
} from 'parse-css-custom-property';

const cssCustomProperty = 'var(--foo, bar)';

// { declaration: '--foo', fallback: 'bar' }
ParseCSSCustomProperty(cssCustomProperty);

// '--foo'
getDeclaration(cssCustomProperty);

// 'bar'
getFallback(cssCustomProperty);
```
