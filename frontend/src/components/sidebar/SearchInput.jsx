import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from "react-hot-toast";


const SearchInput = () => {
	const [search, setSearch] = useState("")
	const {setSelectedConversation} = useConversation()
	const {conversations} = useGetConversations()
	const handleSubmit = (e) => {
		e.preventDefault()
		if(!search) return
		if(search.length < 3){
			return toast.error('Search input must be at least 3 characters in length')
		}

		// If search successful, find conversation
		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
		
		// Find conversation
		if(conversation){
			setSelectedConversation(conversation)
			setSearch('')
		} else {
			toast.error(`No user found with name ${search}`)
		}
	}

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input 
			type='text' 
			placeholder='Search name' 
			className='input input-bordered rounded-full' 
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			/>
            <button type='submit' className='btn btn-circle bg-sky-700 text-white'>
                <IoSearch className='w-6 h-6 outline-none'/>
            </button>
        </form>
    </div>
  )
}

export default SearchInput
