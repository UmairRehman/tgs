/** THIRD PARTY DEPENDENCIES */
import axios from 'axios';

/** LOCAL DEPENDENCIES */
import { Imports } from '../../Imports';

import { environment as env } from '../../environments/environment';


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
    return response;
}

const errorHandler = async (error) => {
    if (!error.response)
        return console.log(error);

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
axiosInstance.optionsMethod = axiosInstance.options;

const HTTPClientFunctionsWrapper = async (method, ...args) => {
    try {
        /** Not using a try-catch block deliberately to allow global handlers to manage
     * it.
     */
        const [uri, ...rest] = args;

        let [payload = {}, headers = {}] = rest;

        const Authorization = localStorage.getItem('access_jwt');

        headers = {
            ...headers,
            Authorization
        };

        const requestArguments = [
            uri,
            payload,
            {
                headers,
            }
        ]

        /** REMOVING PAYLOAD IF REQUEST METHOD IS GET */
        if ((method.includes('get')))
            requestArguments.splice(1, 1);

        // HTTP Requests 
        const response = await axiosInstance[method](...requestArguments) || {};

        const { data: axiosObjectData } = response;

        // const { data: endpointData } = axiosObjectData;
        // console.log(axiosObjectData);

        return axiosObjectData;
    } catch (exc) {
        console.log(exc);

        throw exc;
    }
}

const newPostMethod = HTTPClientFunctionsWrapper.bind(null, 'postMethod');
const newGetMethod = HTTPClientFunctionsWrapper.bind(null, 'getMethod');
const newPutMethod = HTTPClientFunctionsWrapper.bind(null, 'putMethod');
const newOptionsMethod = HTTPClientFunctionsWrapper.bind(null, 'optionsMethod');

Object.assign(
    axiosInstance,
    {
        post: newPostMethod,
        get: newGetMethod,
        put: newPutMethod,
        options: newOptionsMethod,
    },
)

axiosInstance.post = newPostMethod;
axiosInstance.get = newGetMethod;
axiosInstance.put = newPutMethod;
axiosInstance.options = newOptionsMethod;
/** */

export const Interceptor = { axiosInstance };