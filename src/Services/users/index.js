import { api as apiExports } from '../api';

const {
    Interceptor: api,
    routes
} = apiExports;

export const login = async (payload, headers) => {
    return await api.post(
        routes.employee.applicant_login,
        payload,
        headers
    );
}

export const register = async (payload, headers) => {
    return await api.post(
        routes.employee.applicant_register,
        payload,
        headers
    );
}

export const createPassword = async (payload, headers) => {
    return await api.put(
        routes.employee.create_password,
        payload,
        headers
    );
}
