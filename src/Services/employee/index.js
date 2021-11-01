import { api as apiExports } from '../api';
const {
    Interceptor: api,
    routes
} = apiExports;
export const get_employee_certificates = async (payload, headers) => {
    return await api.get(
        routes.employee.get_employee_certificates,
        payload,
        headers
    );
}
