import { useState } from "react"
import {FiSend} from "react-icons/fi"
import useSendMessage from "../../hooks/useSendMessage"

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const {loading, sendMessage} = useSendMessage()
    const handleSubmit = async (e) => {
        e.preventDefault()

        // If there is empty message, don't run this function
        if(!message) return

        // Send message to database
        await sendMessage(message)

        // Reset message to empty
        setMessage("")
    }
  return (
    <div>
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input 
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-300 text-black'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className="loading loading-spinner"></div> : <FiSend />}
                </button>
            </div>
        </form>
    </div>
  )
}

export default MessageInput