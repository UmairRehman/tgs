/** Service for storage */
export class Storage {
    volatile = {};

    persist = true;

    constructor(options = {}) {
        Object.assign(
            this,
            options,
        );
    }

    set = (key, value) => {
        if (this.persist)
            return localStorage.setItem(key, value);

        this[key] = value;
    }

    get = (key) => {
        if (this.persist)
            return localStorage.getItem(key);

        return this[key];
    }

    remove = (key) => {
        if (this.persist)
            return localStorage.removeItem(key);

        delete this[key];
    }
}