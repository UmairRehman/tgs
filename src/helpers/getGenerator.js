/** Local dependencies & Libraries */
const {
    promiseTimeout
} = require('./promiseTimeout');



/** Get a generator to yeild after a specified time, blocked by an unresolved promise
 * @param {number} val - number of iterations for async generator 
* @param {number} [timeout] - Number in milliseconds to set timer for
* @returns { Promise<number>} Resolves to the milliseconds awaited for.
*/
export const getGenerator = async function* (val, timeout) {
    let i = 0;
    switch (typeof val) {
        case 'object':
            for (let k of val) {
                if (timeout) {
                    await promiseTimeout(timeout);
                }
                yield k;
            }
            break;
        default:
            while (i < val) {
                if (timeout) {
                    await promiseTimeout(timeout);
                }
                yield i++;
            }
            break;
    }
}