import { useEffect, useState } from 'react'
import { socket } from '../service/socket'

const useSocketMessage = () => {
  const [broadCastMessage, setBroadCastMessage] = useState<any>([])

  function onWatchMessage(value: any) {
    setBroadCastMessage((previous: any) => [...previous, value])
  }

  const socketSendMessage = (message: string) => {
    socket.emit('chat-message', message)
  }

  useEffect(() => {
    socket.on('message', onWatchMessage)

    return () => {
      socket.off('message', onWatchMessage)
    }
  }, [])

  return { broadCastMessage, socketSendMessage }
}

export default useSocketMessage
