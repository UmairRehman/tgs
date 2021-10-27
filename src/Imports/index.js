const { statics } = require('./statics');
const { validators } = require('./validators');
const { employeeStatuses } = require('./employeeStatuses');

export const Imports = {
    ...statics,
    ...validators,
    employeeStatuses,
}