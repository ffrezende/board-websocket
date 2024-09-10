import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const [roomName, setRoomName] = useState('')
  const navigate = useNavigate()

  const handleCreateRoom = () => {
    navigate(`/room/${roomName}`)
  }

  const handleJoinRoom = () => {
    navigate(`/room/${roomName}`)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Create or Join a Room</h1>
      <div className='w-full max-w-md'>
        <div className='mb-4'>
          <label
            htmlFor='roomName'
            className='block text-gray-700 font-bold mb-2'
          >
            Room Name:
          </label>
          <input
            type='text'
            id='roomName'
            className='w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500'
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </div>
        <div className='flex space-x-4'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleCreateRoom}
          >
            Create Room
          </button>
          <button
            className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'
            onClick={handleJoinRoom}
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
