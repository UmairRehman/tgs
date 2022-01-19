export const statics = {
    httpMessages: {
        server_error: 'An error occured, kindly contact support',
        invalid_credentials: 'The provided credentials are incorrect',
        short_password: 'Password is too short', 
        //- should be 8 chars minimum.
        invalid_password: 'Password must have atleast 1 uppercase, 1 lowercase letter , 1 number and 1 special character.',
        incomplete_invalid_form: 'Please fill in the form properly',
        employee_exists: 'Employee with the provided credentials Already exists',
        applicant_rejected: 'Application has been rejected',
        invalid_email: 'Invalid Email address',
        INTERNAL_SERVER_ERROR: 'An error occured, kindly contact support',
        form_submitted: 'Form Already Submitted',
        user_not_found_in_db: "User does not exist",
        already_employee: "User is already registered as employee",
        submit_all_form: 'Kindly submit all forms to continue',
        pdf_format_required: 'PDF format Required',
        db_error_incorrect_payload: 'Incorect Payload',
        not_found: 'Not found',
        user_not_found: 'User Not Found',
    }
}