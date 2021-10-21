// This environment should be placed within /src/environments

/**
 * These interfaces for mapping environments created specifically for this sample and is not requried in environments.
 * They might also update with versions.
 * */

 export const environment = {
  production: false,

  envName: 'dev',

  apiPaths: {
    port: 3000,
    base: 'http://192.168.18.50',
    router: ''
  },

  socketPaths: {
    port: 3000,
    base: 'http://localhost',
    router: 'api/'
  },

  get apiPath() {
    /** Remember Getters and setters are design smells, it's better to not use them
     * in flows with large call stacks and where maintenance and forward compatibility
     * and changes are highly expected.
     */
    const {
      apiPaths: { base, router, port },
    } = this;

    return `${base}:${port}/${router}`;
  },

  get socketPath() {
    /** Remember Getters and setters are design smells, it's better to not use them
     * in flows with large call stacks and where maintenance and forward compatibility
     * and changes are highly expected.
     */
    const {
      socketPath: { base, router, port },
    } = this;

    return `${base}:${port}/${router}`;
  },

  externalLinks: {
  },
};