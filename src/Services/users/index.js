import { api as apiExports } from '../api';

const {
    Interceptor: api,
    routes
} = apiExports;

export const login = async (payload) => {
    return await api.post(
        routes.employee.applicant_login,
        payload
    );
}

export const register = async (payload) => {
    return await api.post(
        routes.employee.applicant_register,
        payload
    );
}

export const createPassword = async (payload) => {
    return await api.put(
        routes.employee.create_password,
        payload
    );
}
