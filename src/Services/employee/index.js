import { api as apiExports } from '../api';
const {
    Interceptor: api,
    routes
} = apiExports;
export const get_employee_certificates = async (payload, headers) => {
    const { id } = payload;
    return await api.get(
        routes.employee.get_employee_all_certificates.concat(id),
        payload,
        headers
    );
};

export const get_employee_listing = async (payload, headers) => {
    return await api.get(
        routes.employee.get_employee_list,
        payload,
        headers
    );
};

export const get_department_listing = async (payload, headers) => {
    return await api.get(
        routes.employee.get_department_list,
        payload,
        headers
    );
};

export const get_ticket_type_listing = async (payload, headers) => {
    return await api.get(
        routes.employee.get_ticket_type_list,
        payload,
        headers
    );
};

export const get_ticket_category_by_type = async (payload, headers) => {
    const { id } = payload;

    return await api.get(
        routes.employee.get_ticket_category_by_type.concat(id),
        payload,
        headers
    );
};


export const create_ticket = async (payload, headers) => {
    return await api.post(
        routes.employee.create_ticket,
        payload,
        headers
    );
};


export const department_contact_list = async (payload, headers) => {
    const { id } = payload;

    return await api.get(
        routes.employee.department_contact_list.concat(id),
        payload,
        headers
    );
};

export const get_job_category_listing = async (payload, headers) => {
    return await api.get(
        routes.employee.job_category_list,
        payload,
        headers
    );
};

export const get_site_listing = async (payload, headers) => {
    return await api.get(
        routes.employee.site_list,
        payload,
        headers
    );
};

export const get_test_event_listing = async (payload, headers) => {
    return await api.get(
        routes.employee.get_test_event_list,
        payload,
        headers
    );
};

export const create_test_event = async (payload, headers) => {
    return await api.post(
        routes.employee.create_test_event,
        payload,
        headers
    );
};