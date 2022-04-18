// This environment should be placed within /src/environments

/**
 * These interfaces for mapping environments created specifically for this sample and is not requried in environments.
 * They might also update with versions.
 * */

const {
  REACT_APP_production: production,
  REACT_APP_envName: envName,
  REACT_APP_port: port,
  REACT_APP_base: base,
  REACT_APP_router: router,
  REACT_APP_socketport: socketport,
  REACT_APP_socketbase: socketbase,
  REACT_APP_socketrouter: socketrouter,
  REACT_APP_autologoutPeriod: autologoutPeriod,
} = process.env;

export const environment = {
  production,
  envName,
  apiPaths: {
    port,
    base,
    router,
  },
  socketPaths: {
    port: socketport,
    base: socketbase,
    router: socketrouter
  },
  autologoutPeriod,

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

    return `${base}/${router}`;
  },

  externalLinks: {
  },
};
