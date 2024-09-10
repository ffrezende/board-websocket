import { useEffect, useState } from 'react'
import { socket } from '../service/socket'

const useSocketConfig = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const chatRoom = 'chatroom'

  function connect() {
    socket.connect()
    socket.emit('join-room', chatRoom)
    setIsConnected(true)
  }

  function disconnect() {
    socket.disconnect()
    setIsConnected(false)
  }

  useEffect(() => {
    socket.on('disconnect', disconnect)

    return () => {
      socket.off('disconnect', disconnect)
      //socket.off('message', onWatchMessage)
    }
  }, [])

  return { connect, disconnect, isConnected, setIsConnected }
}

export default useSocketConfig
