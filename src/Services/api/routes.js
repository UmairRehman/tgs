export const routes = {
    applicant: {
        applicant_register: 'employee/applicant',
        applicant_login: 'employee/applicant/login',
        create_password : 'employee/applicant/password',
        step1: 'employee/applicant/step/1',
        step2: 'employee/applicant/step/2',
        step3: 'employee/applicant/step/3',
        step3Forms: 'employee/applicant/form/'
    },
    employee: {
        employee_login: 'employee/employee/login',
    },
    hr:{
        get_applicant: 'employee/hr/applicant',
        get_applicant_by_id : 'employee/hr/applicant/',
        step1 : 'employee/hr/step/0/approve'
    }
}