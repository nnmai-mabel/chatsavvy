import useConversation from "../../zustand/useConversation"

const Conversation = ({conversation, lastIndex, emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation()

    const isSelected = selectedConversation?._id === conversation._id
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-700" : ""}`}
        onClick={() => setSelectedConversation(conversation)}>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic}
                         alt='user avatar'/>
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIndex && <div className='divider my-0 py-0 h-1' />}

        </>

    )
}

export default Conversation


// Start code
// const Conversation = () => {
//     return (
//         <>
//             <div className='flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer'>
//                 <div className="avatar online">
//                     <div className="w-12 rounded-full">
//                         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user avatar'/>
//                     </div>
//                 </div>

//                 <div className='flex flex-col flex-1'>
//                     <div className='flex gap-3 justify-between'>
//                         <p className='font-bold text-gray-200'>John Doe</p>
//                         <span className='text-xl'>Icon</span>
//                     </div>
//                 </div>
//             </div>

//             <div className='divider my-0 py-0 h-1' />

//         </>

//     )
// }

// export default Conversation