/** Third party dependencies & Libraries */
import { io } from 'socket.io-client';


/** Local dependencies & Libraries */
import { Storage } from '../storage';


/** Local imports & Statics */
import { environment } from '../../Environments/environment';

import { Imports } from '../../Imports';


const {
    role
} = Imports;


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

        if (!token)
            return false;

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

            this.client.on('broadcast', this.broadcastHandler);

        } catch (exc) {
            console.log(exc);
        }
    }

    broadcastHandler = (socketResponse) => {
        const {
            EmployeeId,
            SubDepartmentId,
            message,
            subject,
            from,
        } = socketResponse;

        const { label: sender } = role[SubDepartmentId];

        const broadcastObject = {
            message,
            subject,
            sender,
            from
        }

        this.launchBroadcast(broadcastObject);
    }

    launchBroadcast = (data) => {
        const broadCastReceivedEvent = new CustomEvent(
            'broadcast-received',
            {
                detail: {
                    ...data
                }
            }
        );

        window.dispatchEvent(broadCastReceivedEvent)
    }

    static broadcastListener = (fn) => {
        window.addEventListener('broadcast-received', fn);
        return true;
    }
}