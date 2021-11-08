import { statics } from './statics';
import * as validators from './validators';
import { employeeStatuses } from './employeeStatuses';
import { role } from './role';
import * as Styles from './styles'; 

export const Imports = {
    ...statics,
    ...validators,
    employeeStatuses,
    role,
    ...Styles,
};