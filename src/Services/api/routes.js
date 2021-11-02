export const routes = {
    applicant: {
        applicant_register: 'employee/applicant',
        applicant_login: 'employee/applicant/login',
        create_password : 'employee/applicant/password',
        step1: 'employee/applicant/step/1',
        step2: 'employee/applicant/step/2',
        step3: 'employee/applicant/step/3',
        step3Forms: 'employee/applicant/form/',
        submitStep4: 'employee/applicant/step/4'
    },
    employee: {
        employee_login: 'employee/employee/login',
        get_employee_all_certificates : 'employee/certificate/employee/',
        get_employee_list : 'employee/hr/employee',
        get_department_list: 'employee/department',
        get_ticket_type_list: 'employee/ticket/type',
        get_ticket_category_by_type: 'employee/ticket/category/',
        create_ticket: 'employee/ticket',
        department_contact_list: 'employee/departmentContact/',
        job_category_list: 'employee/jobCategory',
        site_list: 'employee/location',
        create_test_event: 'employee/testEvent/1',
        get_test_event_list: 'employee/testEvent',
    },
    hr:{
        get_applicant: 'employee/hr/applicant',
        get_applicant_by_id : 'employee/hr/applicant/',
        step1 : 'employee/hr/step/0/approve'
    }
}
