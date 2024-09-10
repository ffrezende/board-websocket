import { useEffect, useState } from 'react'
import { socket } from './service/socket'

export function ConnectionState({ isConnected }: any) {
  return <p>State: {'' + isConnected}</p>
}

export function Events({ events }: any) {
  return (
    <ul>
      {events.map((event: any, index: any) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  )
}

export function ConnectionManager() {
  function connect() {
    socket.connect()
  }

  function disconnect() {
    socket.disconnect()
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  )
}

const App = () => {
  const [message, setMessage] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents, setFooEvents] = useState<any>([])

  const chatRoom = 'chatroom'

  const handleSendMessage = () => {
    socket.emit('chat-message', message)
    setMessage('')
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
      socket.emit('join-room', chatRoom)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onWatchMessage(value: any) {
      setFooEvents((previous: any) => [...previous, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('message', onWatchMessage)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('message', onWatchMessage)
    }
  }, [])

  return (
    <>
      <div>
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <ConnectionManager />
        <p className='read-the-docs'>send message</p>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSendMessage}>send message</button>
      </div>
    </>
  )
}

export default App
