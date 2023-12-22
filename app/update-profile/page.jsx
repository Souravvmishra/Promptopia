// 'use client'
// import React, { useState } from 'react'

// const UpdateProfile = () => {
//   const [bio, setBio] = useState("");

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(bio)

//   }
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className='mt-10 w-screen max-w-2xl flex flex-col gap-7 glassmorphism'
//       >
//         <label >
//           <span className='font-satoshi font-semibold text-base text-gray-700'>
//             What Is Your Bio ?
//           </span>

//           <textarea
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             placeholder='Write your bio here'
//             className='form_textarea '
//           />
//         </label>
//         <button
//           type='submit'
//           className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
//         >
//           Submit
//         </button>
//       </form >
//     </div >
//   )
// }

// export default UpdateProfile
