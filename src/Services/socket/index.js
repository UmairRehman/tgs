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
            const {
                namespace,
            } = this.socketConfiguration;

            if (!this.client)
                throw new Error('socket not connected');


            this.client.on('connect', (data) => {
                console.log('connected');
            });

            this.client.on('disconnect', (data) => {
                console.log('disconnected');
            });

            this.client.on(
                namespace,
                this.messageHandler || console.log
            );

            this.client.on('test', console.log);

        } catch (exc) {
            console.log(exc);
        }
    }
}

export class BroadcastClient extends SocketClient {

    constructor(configuration) {
        super(configuration);
    }

    messageHandler = (socketResponse) => {
        console.log(socketResponse);

        const {
            EmployeeId,
            SubDepartmentId,
            message,
            subject,
            from,
        } = socketResponse;

        const broadcastObject = {
            message,
            subject,
            sender: from,
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

export class EventsClient extends SocketClient {
    constructor(configuration = {}) {
        super(configuration);
    }

    messageHandler = (socketResponse) => {

        const eventObject = {};

        this.launchBroadcast(socketResponse);
    }

    launchBroadcast = (data) => {
        const eventReceivedEvent = new CustomEvent(
            'event-received',
            {
                detail: {
                    ...data
                }
            }
        );

        window.dispatchEvent(eventReceivedEvent)
    }

    static eventstListener = (fn) => {
        window.addEventListener('event-received', fn);
        return true;
    }
}