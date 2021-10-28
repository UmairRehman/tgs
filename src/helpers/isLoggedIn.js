import Services from '../Services';

export const isLoggedIn = () => {
    const storage = Services.storage;

    return !!storage.get('access_jwt');
}