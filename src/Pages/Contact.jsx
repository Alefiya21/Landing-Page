import React from 'react'

const Contact = () => {
  return (
   

   <div className='bg-slate-800 min-h-screen flex flex-col items-center  text-base font-medium font-sans gap-5 text-white py-5'>
        <div className=" flex  rounded-md shadow-md max-w-md ">
            <div className="font-bold mb-2">Email:</div>
            <div className="text-white">journalismunveiled@gmail.com</div>
        </div>
        <div className=" flex  rounded-md shadow-md max-w-md">
            <div className="font-bold mb-2">Contact No.:</div>
            <div className="text-white">+91 7855456565</div>
        </div>
        <div className="flex  rounded-md shadow-md max-w-md">
            <div className="font-bold mb-2">Location:</div>
            <div className="text-white">Indore, MP</div>
        </div>
    </div>


  )
}

export default Contact;
