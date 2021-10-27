import { Storage } from '../Services';

export const isLoggedIn = () => {
    const storage = Storage();

    return !!storage.getItem('access_jwt');
}