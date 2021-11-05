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