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

        this.volatile[key] = value;
    }

    get = (key) => {
        if (this.persist)
            return localStorage.getItem(key);

        return this.volatile[key];
    }

    remove = (key) => {
        if (this.persist)
            return localStorage.removeItem(key);

        delete this.volatile[key];
    }

    clear = () => {
        if (this.persist)
            return localStorage.clear();

        this.volatile = {};
    }
}