/**
 * @file Parses a CSS custom property string.
 * @author Simon Finney
 */

/**
 * Gets the value between two points in a string.
 *
 * @param {string} string The string to parse.
 * @param {string} start The starting point to parse.
 * @param {string} end The end point to parse.
 *
 * @returns {string} The value between the start and end points.
 */
const getValueBetween = (string, start, end) =>
  string.substring(string.indexOf(start) + 1, string.indexOf(end));

/**
 * Parses a CSS custom property string and returns the declaration.
 *
 * @param {string} cssCustomPropertyString The CSS custom property string to parse.
 *
 * @returns {string} The parsed CSS custom property declaration.
 */
const getDeclaration = (cssCustomPropertyString) =>
  getValueBetween(cssCustomPropertyString, '(', ',');

/**
 * Parses a CSS custom property string and returns the fallback.
 *
 * @param {string} cssCustomPropertyString The CSS custom property string to parse.
 * @returns {string} The parsed CSS custom property fallback.
 */
const getFallback = (cssCustomPropertyString) =>
  getValueBetween(cssCustomPropertyString, ' ', ')');

/**
 * Parses a CSS custom property string and returns an object containing the declaration and fallback.
 *
 * @param {string} cssCustomPropertyString The CSS custom property string to parse.
 * @returns {object} An object containing the parsed CSS custom property declaration and fallback.
 */
export default (cssCustomPropertyString) => ({
  declaration: getDeclaration(cssCustomPropertyString),
  fallback: getFallback(cssCustomPropertyString),
});

export { getDeclaration, getFallback };
