import * as yup from 'yup';

import { statics } from './statics';

const {
    httpMessages: {
        short_password,
        invalid_password,
    }
} = statics;

export const patterns = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    phoneRegExp: /^[0-9]{10}$/ ,
    zip: /^[0-9]{5}$/
    // phoneRegExpOld: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
}

export const home_phone = yup.string()
    .matches(patterns.phoneRegExp, 'home_phone_number')
    .required('home_phone');

export const cell_phone = yup.string()
    .matches(patterns.phoneRegExp, 'cell_phone')
    .required('cell_phone');

export const zip = yup.string()
    .matches(patterns.zip, 'zip (5 digits)')
    .required('zip');

export const spouse_phone_number = yup.string()
    .matches(patterns.phoneRegExp, 'spouse_phone_number')
    .required('spouse_phone_number');

export const emergency_phone_number = yup.string()
    .matches(patterns.phoneRegExp, 'emergency_contact_phone_number')
    .required('emergency_contact_phone_number');

export const validators = {
    password: yup.string()
        .required()
        .min(8, short_password)
        .matches(
            patterns.password,
            invalid_password
        ),
    home_phone,
    registerApplicant: yup.object({
        first_name: yup.string()
            .required('first_name'),
        middle_name: yup.string()
            .required('middle_name'),
        last_name: yup.string()
            .required('last_name'),
        email: yup.string().email()
            .required('email'),
        ssn: yup.string()
            .matches(/[0-9]{9}/, 'SSN must be a nine digit number')
            .required('ssn'),
        home_phone,
        cell_phone,
        agree_to_notifications: yup.boolean()
            .default(true),

        street_address1: yup.string()
            .required('street_address1'),
        street_address2: yup.string(),
        city: yup.string()
            .required('city'),
        state: yup.string()
            .required('state'),
        zip,
        us_citizen: yup.string()
            .oneOf([
                'citizen',
                'us_citizen',
                'non-citizen',
                'permanent_residence',
                'alien_authorized_to_work',
            ])
            .required('us_citizen'),


        marital_status: yup.string()
            .oneOf([
                'single',
                'married',
                'separated',
                'divorced',
                'widowed',
            ])
            .required('marital_status'),

        spouse_name: yup.string().when('marital_status', {
            is: true,
            then: yup.string()
                .required('spouse_name')
        }),

        spouse_date_of_birth: yup.string().when('marital_status', {
            is: true,
            then: yup.string()
                .required('spouse_date_of_birth')
        }),

        spouse_address: yup.string().when('marital_status', {
            is: true,
            then: yup.string()
                .required('spouse_address')
        }),
        spouse_phone_number: yup.string().when('marital_status', {
            is: true,
            then: yup.string()
                .matches(patterns.phoneRegExp, 'spouse_phone_number')
                .required('spouse_phone_number')
        }),

        emergency_contact: yup.object({
            name: yup.string()
                .required('emergency_contact name'),
            relationship: yup.string()
                .required('emergency_contact relationship'),
            address: yup.string()
                .required('emergency_contact address'),
            city: yup.string()
                .required('emergency_contact city'),
            state: yup.string()
                .required('emergency_contact state'),
            zip: yup.string()
                .required('emergency_contact zip'),
            phone_number: emergency_phone_number
        }),

        // position: yup.object({
        //     id: yup.string()
        //         .required('job_position id'),
        //     description: yup.string()
        //         .required('job_position description'),
        //     category: yup.string()
        //         .required('job_position category'),
        //     notes_for_hr: yup.string()
        //         .required('job_position notes_for_hr'),
        // }),

    }, 'form')
}