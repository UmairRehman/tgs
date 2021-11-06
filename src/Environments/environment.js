// This environment should be placed within /src/environments

/**
 * These interfaces for mapping environments created specifically for this sample and is not requried in environments.
 * They might also update with versions.
 * */

 export const environment = {
  production: false,

  envName: 'dev',

  apiPaths: {
    // port: 3000,
    // port: 80,
    port: 4040,
    // base: 'http://localhost',
    // base: 'http://209.64.123.132
    base: 'http://34.225.30.148',
    // 3.23.118.71
    // router: '',
    router: 'api/'
  },
  
  socketPaths: {
    // port: 3000,
    port: 4040,
    // base: 'http://localhost',
    // base: 'http://209.64.123.132',
    base: 'http://34.225.30.148',
    // router: 'api/'
    router: ''
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