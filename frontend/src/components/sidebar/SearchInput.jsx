import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
        <form className='flex items-center gap-2'>
            <input type='text' placeholder='Search name' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-700 text-white'>
                <IoSearch className='w-6 h-6 outline-none'/>
            </button>
        </form>
    </div>
  )
}

export default SearchInput

// Start code
// import { IoSearch } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <div>
//         <form className='flex items-center gap-2'>
//             <input type='text' placeholder='Search name' className='input input-bordered rounded-full' />
//             <button type='submit' className='btn btn-circle bg-sky-700 text-white'>
//                 <IoSearch className='w-6 h-6 outline-none'/>
//             </button>
//         </form>
//     </div>
//   )
// }

// export default SearchInput