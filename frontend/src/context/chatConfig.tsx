import { createContext, useContext, useState } from 'react'

export interface ProviderProps {
  children: React.ReactNode
}

export interface IChatContext {
  isConnected: boolean
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState = {}

const ChatContext = createContext(initialState)

export const ChatProvider = (props: ProviderProps) => {
  const [isConnected, setIsConnected] = useState(false)

  const state: IChatContext = { isConnected, setIsConnected }

  return <ChatContext.Provider value={state} {...props} />
}

export const useChatState = () => {
  const state = useContext(ChatContext)

  return state as IChatContext
}
