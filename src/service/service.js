import useWebSocket,{ ReadyState } from "react-use-websocket";

export function socket(webSocketURL){
    const {sendJsonMessage, lastJsonMessage,readyState } = useWebSocket(webSocketURL)
     const state = readyStatus(readyState)
    return [sendJsonMessage,lastJsonMessage,state]
}

function readyStatus(status){ 
   return {[ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated'}[status]

}
