import { api as apiExports } from '../api';
const {
    Interceptor: api,
    routes
} = apiExports;

export const sendBroadcast = async (payload, headers) => {
    return await api.post(
        routes.broadcast.create,
        payload,
        headers
    );
};

export const getAll = async (payload, headers) => {
    return await api.get(
        routes.broadcast.getAll,
        payload,
        headers
    );
}

export const getAllSend = async (payload, headers) => {
    return await api.get(
        routes.broadcast.getAllSend,
        payload,
        headers
    );
}