import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={'label gap-2 cursor-pointer'}>
                    <span className='label-text text-gray-300'>Male</span>
                    <input type='checkbox' className='checkbox border-slate-200' />
                </label>

            </div>
            <div className='form-control'>
                <label className={'label gap-2 cursor-pointer'}>
                    <span className='label-text text-gray-300'>Female</span>
                    <input type='checkbox' className='checkbox border-slate-200' />
                </label>

            </div>
        </div>
    )
}

export default GenderCheckbox


// Start code
// import React from 'react'

// const GenderCheckbox = () => {
//     return (
//         <div className='flex'>
//             <div className='form-control'>
//                 <label className={'label gap-2 cursor-pointer'}>
//                     <span className='label-text text-gray-300'>Male</span>
//                     <input type='checkbox' className='checkbox border-slate-200' />
//                 </label>

//             </div>
//             <div className='form-control'>
//                 <label className={'label gap-2 cursor-pointer'}>
//                     <span className='label-text text-gray-300'>Female</span>
//                     <input type='checkbox' className='checkbox border-slate-200' />
//                 </label>

//             </div>
//         </div>
//     )
// }

// export default GenderCheckbox