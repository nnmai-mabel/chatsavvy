import { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import Message from './Message'

const Messages = () => {
  const {messages, loading} = useGetMessages()
  const lastMessageRef = useRef()

  // Scroll to the end of messsages
  useEffect(() => {

	// Make messages scroll to the end
	setTimeout(() => {
		lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
	}, 100)
  }, [messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
		{/* If it is not loading and there are messages */}
		{!loading &&
		messages.length > 0 &&
		messages.map((message) => (
			<div key={message._id}
			ref={lastMessageRef}>
				<Message message = {message} />
			</div>
			
		))}
		{/* If it is loading, map this skeleton and show 3 times of skeletons*/}
        {loading && [...Array(3)].map((_, index) => 
		<MessageSkeleton key={index} />)}

		{/* If it is not loading and there is no messages */}
		{!loading && messages.length === 0 && (
			<p className='text-center text-gray-300'>Send a message to start the conversation</p>
		)}
    </div>
  )
}

export default Messages