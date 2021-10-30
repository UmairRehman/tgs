import { statics } from './statics';
import { validators } from './validators';
import { employeeStatuses } from './employeeStatuses';
import * as Styles from './styles'; 

export const Imports = {
    ...statics,
    ...validators,
    employeeStatuses,
    ...Styles,
};