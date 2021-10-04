import { Interceptor } from './interceptor';
import { routes } from './routes';

const { axiosInstance } = Interceptor;

export const api = {
    Interceptor: axiosInstance,
    routes
};