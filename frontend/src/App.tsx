import socketConfig from './service/socket'

const App = () => {
  const handleConnectToChat = async () => {
    socketConfig()
  }
  return (
    <>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleConnectToChat}>Connect to the chat</button>
    </>
  )
}

export default App
