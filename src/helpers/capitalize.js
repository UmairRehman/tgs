/**
 * A helper to capitalize a string
 * @param {string} text 
 * @returns {string} Capitalized String
 */
export const capitalize = (text) => {
    const [firstChar, ...rest] = text.split('');
    
    const restOfTheString = rest.join('');
    
    return firstChar
        .toUpperCase()
        .concat(restOfTheString);
}