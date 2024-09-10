import { useState } from 'react'

import { ConnectionManager } from '../components/ConnectionManager'
import InputMessage from '../components/InputMessage'
import useSocketMessage from '../hooks/useSocketMessage'
import CardMessage from '../components/CardMessage'
import { useParams } from 'react-router-dom'

export function Events({ events }: any) {
  return (
    <div className='max-h-[80vh] overflow-auto'>
      <div className='m-4'>
        {events.map((event: any, index: any) => (
          <div key={index}>
            <CardMessage message={event} />
          </div>
        ))}
      </div>
    </div>
  )
}

const RoomPage = () => {
  const [message, setMessage] = useState('')
  const { broadCastMessage, socketSendMessage } = useSocketMessage()

  let { id } = useParams()

  const handleSendMessage = () => {
    socketSendMessage(message)
    setMessage('')
  }

  return (
    <>
      <ConnectionManager chatRoom={id} />
      <div className='container'>
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

export default RoomPage
