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
    },
    hr:{
        get_applicant: 'employee/hr/applicant',
        get_applicant_by_id : 'employee/hr/applicant/',
        step1 : 'employee/hr/step/0/approve',
        step2 : 'employee/hr/step/1/approve',
        get_tickets_and_allerts: 'employee/ticket',
        get_ticket_by_id: 'employee/ticket/',
        update_tickets : 'employee/ticket/',


        // dropdowns 
        get_job_categories : 'employee/jobCategory',
        department : 'employee/department',
        location : '/employee/location',
        paytype : 'employee/payType',
        subDepartment : 'employee/department/subDepartment/',
    }
}