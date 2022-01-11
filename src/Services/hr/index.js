import { api as apiExports } from '../api';

const {
    Interceptor: api,
    routes
} = apiExports;

export const getAllApplicants = async (payload, headers) => {
    const { params } = payload;
    return await api.get(
        routes.hr.get_applicant.concat(params),
        payload,
        headers
    );
}

export const getAllApplicantsByID = async (payload, headers) => {
    const { id } = payload;
    
    return await api.get(
        routes.hr.get_applicant_by_id
            .concat(id),
        payload,
        headers
    );
}

export const step1 = async (payload, headers) => {
    return await api.post(
        routes.hr.step1,
        payload,
        headers
    );
}


export const step2 = async (payload, headers) => {
    return await api.post(
        routes.hr.step2,
        payload,
        headers
    );
}

export const reject = async (payload , headers) => {
    return await api.post(
        routes.hr.reject,
        payload,
        headers
    );
}

export const get_tickets = async (payload, headers) => {
    return await api.get(
        routes.hr.get_tickets_and_allerts,
        payload,
        headers
    );
}

export const listTicketByCategory = async (payload, headers) => {
    const { roleId,params } = payload;
    console.log(routes.hr.list_tickets_and_alerts_by_category.concat(roleId,params));
    return await api.get(
        routes.hr.list_tickets_and_alerts_by_category.concat(roleId,params),
        payload,
        headers
    );
}




export const get_tickets_by_id = async (payload, headers) => {
    const { id } = payload;
    
    return await api.get(
        routes.hr.get_ticket_by_id
            .concat(id),
        payload,
        headers
    );
}

export const update_tickets = async (payload, headers) => {
    const { id } = payload;
    console.log(id);
    return await api.put(
        routes.hr.update_tickets
        .concat(id),
        payload,
        headers
    );
}




// dropdowns
export const get_job_categories = async (payload, headers) => {
    return await api.get(
        routes.hr.get_job_categories,
        payload,
        headers
    );
}

export const location = async (payload, headers) => {
    return await api.get(
        routes.hr.location,
        payload,
        headers
    );
}


export const pay_type = async (payload, headers) => {
    return await api.get(
        routes.hr.paytype,
        payload,
        headers
    );
}


export const department = async (payload, headers) => {
    return await api.get(
        routes.hr.department,
        payload,
        headers
    );
}

export const subDepartment = async (payload, headers) => {
    const { id } = payload;
    return await api.get(
        routes.hr.subDepartment
        .concat(id),
        payload,
        headers
    );
}

export const getEmployee = async (payload, headers) => {
    const { id } = payload;
    return await api.get(
        routes.hr.get_employee_by_id
        .concat(id),
        payload,
        headers
    );
}



export const updateEmployeeAddress = async (payload, headers) => {
    return await api.put(
        routes.hr.update_employee_address,
        payload,
        headers
    );
}

export const additionalFiles = async (payload, headers) => {
    const { id , formData } = payload;
    return await api.put(
        routes.hr.additional_files_uplaod.concat(id),
        formData,
        headers
    );
}




export const getCertificate = async (payload, headers) => {
    const { id  } = payload;
    return await api.get(
        routes.hr.get_certificate.concat(id),
        payload,
        headers
    );
}



export const updatePosition = async (payload, headers) => {
    const { id  } = payload;
    return await api.put(
        routes.hr.update_position,
        payload,
        headers
    );
}



export const updatePay = async (payload, headers) => {
    const { id  } = payload;
    return await api.put(
        routes.hr.update_pay,
        payload,
        headers
    );
}




export const terminateEmployee = async (payload , headers) => {
    return await api.post(
        routes.hr.terminate,
        payload,
        headers
    );
}

// @returns {void}
//  * @param {string} payload.id - Employee Id
// 