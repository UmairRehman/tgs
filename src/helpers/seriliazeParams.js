/**
 * A helper function to convert
 * JSON into Query Params
 * @param {object} json 
 * @returns {string} queryparams
 */
 export const seriliazeParams = (obj = {}) => {
    var queryString = Object.keys(obj).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    }).join('&');
    return queryString
}