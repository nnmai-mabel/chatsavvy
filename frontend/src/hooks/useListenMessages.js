import { useEffect } from 'react'
import {useSocketContext} from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages, setMessages} = useConversation()

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        // New message shake
        newMessage.shouldShake = true
        const sound = new Audio(notificationSound)
        sound.play()

        // Add all previous messages, new message at the end
        setMessages([...messages, newMessage])
    })

    // If don't add this, a lot of events will be listened on socket, whenever send a new message,
    // will here notification sound multiple times
    return () => socket.off("newMessage")
  }, [socket, setMessages, messages])
}

export default useListenMessages