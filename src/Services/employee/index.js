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
}

