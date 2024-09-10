import { useChatState } from '../context/chatConfig'
import useSocketConfig from '../hooks/useSocketConfig'

export function ConnectionState({ isConnected }: any) {
  return (
    <div className='flex '>
      <div className='relative'>
        <img
          src='https://images.unsplash.com/photo-1624669240815-815a23372f37?'
          alt='baby with headphones'
          className='w-12 h-12 rounded-full object-cover'
        />
        <span
          className={`absolute h-3 w-3 rounded-full  ${
            isConnected ? 'bg-green-500' : 'bg-red-500'
          } border-2 top-0 right-0`}
        />
      </div>
    </div>
  )
}

export function ConnectionManager({ chatRoom }: any) {
  const { disconnect, connect } = useSocketConfig()
  const { setIsConnected, isConnected } = useChatState()

  const handleConnect = () => {
    if (isConnected) {
      disconnect()
      setIsConnected(false)
    } else {
      connect(chatRoom)
      setIsConnected(true)
    }
  }
  return (
    <div className='flex w-full bg-slate-500 min-h-20 items-center'>
      <ConnectionState isConnected={isConnected} />
      <button
        className='ml-3 w-[100px] h-8 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={handleConnect}
      >{`${isConnected ? 'Disconnect' : 'Connect'}`}</button>
    </div>
  )
}
