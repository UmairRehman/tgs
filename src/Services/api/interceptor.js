/** THIRD PARTY DEPENDENCIES */
import axios from 'axios';

/** LOCAL DEPENDENCIES */
import { Imports } from '../../Imports';

import { environment as env } from '../../Environments/environment';


/** Extracting dependencies for use */
const axiosInstance = axios.create();

const { httpMessages } = Imports;


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
    let {
        response: {
            data: { message },
            data: detail
        }
    } = error;

    const messageToShow = httpMessages[message];

    detail = { ...detail, messageToShow };

    const httpEvent = new CustomEvent(
        'http-error-event',
        { detail }
    );

    window.dispatchEvent(httpEvent);

    throw error;
}

axiosInstance.interceptors.request
    .use(
        requestHandler,
        errorHandler
    )

axiosInstance.interceptors.response
    .use(
        responseHandler,
        errorHandler
    );

export const Interceptor = axiosInstance;