import { useState } from 'react'

import useSocketMessage from './hooks/useSocketMessage'
import CardMessage from './components/CardMessage'
import InputMessage from './components/InputMessage'
import { ConnectionManager } from './components/ConnectionManager'

export function Events({ events }: any) {
  return (
    <ul>
      {events.map((event: any, index: any) => (
        <div key={index}>
          <CardMessage message={event} />
        </div>
      ))}
    </ul>
  )
}

const App = () => {
  const [message, setMessage] = useState('')
  const { broadCastMessage, socketSendMessage } = useSocketMessage()

  const handleSendMessage = () => {
    socketSendMessage(message)
    setMessage('')
  }

  return (
    <>
      <div className='w-full '>
        <ConnectionManager />
        <Events events={broadCastMessage} />
        <InputMessage
          value={message}
          onChange={(e: string) => setMessage(e)}
          submit={handleSendMessage}
        />
      </div>
    </>
  )
}

export default App
