import { api } from './api';
import * as users from './users';
import { Storage } from './storage';

const storage = new Storage

const services = {
    api,
    users,
    storage,
};

export default services;