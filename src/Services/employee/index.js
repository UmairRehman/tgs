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
