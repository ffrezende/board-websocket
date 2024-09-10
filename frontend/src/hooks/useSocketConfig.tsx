import { useEffect } from 'react'
import { socket } from '../service/socket'
import { useChatState } from '../context/chatConfig'

const useSocketConfig = () => {
  const { setIsConnected } = useChatState()

  const createRoom = () => {}

  function connect(chatRoom: string) {
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
    }
  }, [])

  return { connect, disconnect }
}

export default useSocketConfig
