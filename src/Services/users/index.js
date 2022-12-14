import { api as apiExports } from '../api';

const {
    Interceptor: api,
    routes
} = apiExports;

export const login = async (payload, headers) => {
    return await api.post(
        routes.applicant.applicant_login,
        payload,
        headers
    );
}

export const register = async (payload, headers) => {
    return await api.post(
        routes.applicant.applicant_register,
        payload,
        headers
    );
}

export const createPassword = async (payload, headers) => {
    return await api.put(
        routes.applicant.create_password,
        payload,
        headers
    );
}

export const loginEmployee = async (payload, headers) => {
    return await api.post(
        routes.employee.employee_login,
        payload,
        headers,
    )
}

export const postStep1 = async (payload, headers) => {
    return await api.post(
        routes.applicant.step1,
        payload,
        headers,
    )
}

export const retreiveDisplayPicture = async (payload, headers) => {
    return await api.get(
        routes.employee.getProfilePic,
        payload,
        headers,
    )
}

export const setDisplayPicture = async (payload, headers) => {
    return await api.post(
        routes.employee.getProfilePic,
        payload,
        headers,
    )
}

export const postStep2 = async (payload, headers) => {
    return await api.post(
        routes.applicant.step2,
        payload,
        headers,
    )
}

export const postStep3 = async (payload, headers) => {
    return await api.post(
        routes.applicant.step3,
        payload,
        headers,
    )
}

export const submitForm = async (payload, headers) => {
    const { form } = payload;

    return await api.post(
        routes.applicant.step3Forms
            .concat(form),
        payload,
        headers,
    )
}

export const submitStep4 = async (payload, headers) => {
    return await api.post(
        routes.applicant.submitStep4,
        payload,
        headers,
    )
}

export const subdepartmentList = async (payload, headers) => {
    return await api.get(
        routes.employee.departments_list,
        payload,
        headers,
    )
}

export const allSubDepartmentsList = async (payload, headers) => {
    return await api.get(
        routes.employee.all_subdepartments,
        payload,
        headers,
    )
}

export const retreiveSpecificForm = async (payload, headers) => {
    const { employeeId } = payload;

    return await api.get(
        routes.applicant.retreiveForm
            .concat(employeeId),
        payload,
        headers,
    )
}