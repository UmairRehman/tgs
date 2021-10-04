const { statics } = require('./statics');
const { validators } = require('./validators');

export const Imports = {
    ...statics,
    ...validators,
}