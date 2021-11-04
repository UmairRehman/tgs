import { api } from './api';

import * as users from './users';

import * as hr from './hr';

import * as employee from './employee';

import { Storage } from './storage';

import { SocketClient } from './socket';


const services = {
    api,
    users,
    hr,
    employee,
    Storage,
    SocketClient,
};


export default services;