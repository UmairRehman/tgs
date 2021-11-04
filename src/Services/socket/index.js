/** Third party dependencies & Libraries */
import { io } from 'socket.io-client';


/** Local dependencies & Libraries */
import { Storage } from '../storage';


/** Local imports & Statics */
import { environment } from '../../Environments/environment';


export class SocketClient {
    storage;
    client;
    socketConfiguration;

    constructor(configuration = {}) {
        this.socketConfiguration = {
            ...environment.socketPaths,
            ...configuration,
        };

        this.storage = new Storage();
    }

    connect = () => {
        const {
            base,
            port,
            namespace = 'broadcast',
        } = this.socketConfiguration;

        const token = encodeURIComponent(
            this.storage.get('access_jwt')
        );

        this.client = io(
            `${base}:${port}/${namespace}`,
            {
                query: {
                    token
                }
            }
        )

        this.setEventListeners();
    }

    setEventListeners = () => {
        try {
            if (!this.client)
                throw new Error('socket not connected');


            this.client.on('connect', (data) => {
                console.log('connected');
            });

            this.client.on('disconnect', (data) => {
                console.log('disconnected');
            });

            this.client.on('test-event', (args) => {
                console.log(args);
            })
        } catch (exc) {
            console.log(exc);
        }

    }
}