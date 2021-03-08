import { useMemo, useRef } from "react";
import useWebSocket, { ReadyState } from 'react-use-websocket';

const useBeatSaberHttpStatus = () => {
    //Public API that will echo messages sent to it back to the client
    const socketUrl = 'ws://localhost:6557/socket';
    const messageHistory = useRef([]);

    const { lastMessage, readyState } = useWebSocket(
        socketUrl,
        {
            retryOnError: true,
            reconnectInterval: 1500,
        });

    messageHistory.current = useMemo(() =>
        messageHistory.current.concat(lastMessage),
        [lastMessage]
    );

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'UnconnectionStatusinstantiated',
    }[readyState];

    const lastStatus = lastMessage ? JSON.parse(lastMessage.data) : null;

    return { lastStatus, connectionStatus };
}

export { useBeatSaberHttpStatus };