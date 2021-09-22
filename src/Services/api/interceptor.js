import axios from 'axios';

import { environment as env } from '../../Environments/environment';

const requestHandler = (request) => {
    const { url: apiToConsume } = request;

    const url = env.apiPath.concat(apiToConsume);

    Object.assign(
        request,
        { url }
    )

    return request;
}

const responseHandler = (response) => {
    console.log(response);
    return response;
}

const errorHandler = async (error) => {
    throw new Error(error);
}

axios.interceptors.request
    .use(
        requestHandler,
        errorHandler
    )

axios.interceptors.response
    .use(
        responseHandler,
        errorHandler
    );

export const Interceptor = axios;