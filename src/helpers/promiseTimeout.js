/**
* Get a promise that resolves after an argument number of milliseconds
* @param {number} t no of milliseconds
* @returns {Promise<number>} Resolves to the milliseconds awaited for.
*/
export const promiseTimeout = (t) => new Promise((resolve, reject) => setTimeout(() => {
    resolve(t);
}, t));