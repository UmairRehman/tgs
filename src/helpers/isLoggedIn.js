import Services from '../Services';

export const isLoggedIn = () => {
    const storage = Services.Storage();

    return !!storage.getItem('access_jwt');
}