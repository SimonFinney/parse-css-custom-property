/**
 * @file Tests for parsing a CSS custom property string.
 * @author Simon Finney
 */

import ParseCSSCustomProperty, { getDeclaration, getFallback } from '.';

const declaration = '--declaration';
const fallback = 'fallback';

const cssCustomProperty = `var(${declaration}, ${fallback})`;

test('returns an object containing the declaration and fallback', () => {
  expect(ParseCSSCustomProperty(cssCustomProperty)).toStrictEqual({
    declaration,
    fallback,
  });
});

test('returns the declaration', () => {
  expect(getDeclaration(cssCustomProperty)).toBe(declaration);
});

test('returns the fallback', () => {
  expect(getFallback(cssCustomProperty)).toBe(fallback);
});
