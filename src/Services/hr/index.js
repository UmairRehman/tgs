import { api as apiExports } from '../api';

const {
    Interceptor: api,
    routes
} = apiExports;

export const getAllApplicants = async (payload, headers) => {
    return await api.get(
        routes.hr.get_applicant,
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
