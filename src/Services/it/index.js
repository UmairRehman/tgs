import { api as apiExports } from '../api';
const {
    Interceptor: api,
    routes
} = apiExports;
export const get_it_request = async (payload, headers) => {
    const { id } = payload;
    return await api.get(
        routes.it.get_it_request.concat(id),
        payload,
        headers
    );
};

export const list_it_request = async (payload, headers) => {
    return await api.get(
        routes.it.list_it_request,
        payload,
        headers
    );
};

export const update_it_request = async (payload, headers) => {
    const { id  , data } = payload
    payload = {...data}
    return await api.put(
        routes.it.update_it_request.concat(id),
        payload,
        headers
    );
};

