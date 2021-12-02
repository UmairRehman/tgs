import { api } from './api';

import * as users from './users';

import * as hr from './hr';

import * as employee from './employee';

import * as broadcast from './broadcast';

import * as IT from './it';

import { Storage } from './storage';

import * as SocketClients from './socket';


const services = {
    api,
    users,
    hr,
    employee,
    broadcast,
    IT,
    Storage,
    ...SocketClients,
};


export default services;