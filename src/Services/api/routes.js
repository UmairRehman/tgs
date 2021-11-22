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
        getProfilePic: 'employee/employee/profile_pic',
        setProfilePic: 'employee/employee/profile_pic',
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
        get_test_event_by_id:'employee/testEvent/',
        get_rules_list:'employee/testEventRule/rules',
        create_test_event_rule:'employee/testEventRule',
        view_test_event_rule:'employee/testEventRuleResult/',
        departments_list: 'employee/department/',
        all_subdepartments: 'employee/department/sub',
    },
    hr:{
        get_applicant: 'employee/hr/applicant',
        get_applicant_by_id : 'employee/hr/applicant/',
        step1 : 'employee/hr/step/0/approve',
        step2 : 'employee/hr/step/1/approve',
        reject : 'employee/hr/step/reject',
        get_tickets_and_allerts: 'employee/ticket',
        get_ticket_by_id: 'employee/ticket/',
        update_tickets : 'employee/ticket/',
        get_employee_by_id : 'employee/hr/employee/',
        update_employee_address :'employee/hr/employee',


        // dropdowns 
        get_job_categories : 'employee/jobCategory',
        department : 'employee/department',
        location : '/employee/location',
        paytype : 'employee/payType',
        subDepartment : 'employee/department/subDepartment/',
    },
    broadcast:{
        create: 'employee/broadcastMessage/',
        getAll: 'employee/broadcastMessage/recieve',
    }
}
