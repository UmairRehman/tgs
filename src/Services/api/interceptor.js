/** THIRD PARTY DEPENDENCIES */
import axios from 'axios';

/** LOCAL DEPENDENCIES */
import { Imports } from '../../Imports';

import { environment as env } from '../../Environments/environment';


/** Extracting dependencies for use */
const axiosInstance = axios.create();

const { httpMessages } = Imports;

const omitJWTRoutes = [

];

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
        'trigger-snackbar',
        { detail },
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

/** Overwriting Post as a Repository for HTTP Interface */

axiosInstance.postMethod = axiosInstance.post;
axiosInstance.getMethod = axiosInstance.get;
axiosInstance.putMethod = axiosInstance.put;

const HTTPClientFunctionsWrapper = async (method, ...args) => {
    /** Not using a try-catch block deliberately to allow global handlers to manage
     * it.
     */
    const [uri, ...rest] = args;

    const [payload = {}, headers = {}] = rest;

    // HTTP Requests 
    const response = await axiosInstance[method](
        uri,
        payload,
        {
            headers: {
                ...headers,
                Authorization: localStorage.getItem('access_jwt')
            },
        }
    );

    const { data: axiosObjectData } = response;

    // const { data: endpointData } = axiosObjectData;
    // console.log(axiosObjectData);
    localStorage.setItem(
        `response-${uri}`,
        JSON.stringify(axiosObjectData)
    );

    return axiosObjectData;
}

const newPostMethod = HTTPClientFunctionsWrapper.bind(null, 'postMethod');
const newGetMethod = HTTPClientFunctionsWrapper.bind(null, 'getMethod');
const newPutMethod = HTTPClientFunctionsWrapper.bind(null, 'putMethod');

Object.assign(
    axiosInstance,
    {
        post: newPostMethod,
        get: newGetMethod,
        put: newPutMethod
    },
)

axiosInstance.post = newPostMethod;
axiosInstance.get = newGetMethod;
axiosInstance.put = newPutMethod;
/** */

export const Interceptor = { axiosInstance };