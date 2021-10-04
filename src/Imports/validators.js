import * as yup from 'yup';

import { statics } from './statics';

const {
    httpMessages: {
        short_password,
        invalid_password,
    }
} = statics;

export const patterns = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
}

export const validators = {
    password: yup.string()
        .required()
        .min(8, short_password)
        .matches(
            patterns.password,
            invalid_password
        ),
}