/**
 * A helper to capitalize a string
 * @param {string} text 
 * @returns {string} Capitalized String
 */
export const capitalize = (text = '') => {
    let [firstChar, ...rest] = text.split('');

    firstChar = firstChar || '';
    
    const restOfTheString = rest.join('');
    
    return firstChar
        .toUpperCase()
        .concat(restOfTheString);
}