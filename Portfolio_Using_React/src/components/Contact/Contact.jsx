import React from 'react';

function Contact (){
    return (
        <>
       <div className='pl-[28px]'>
        <div className='pt-[30px] place-items-center'>

        <div className='p-7 bg-gray-250 sm:rounded-lg'>
        <h1 className='font-serif text-white text-[30px] flex items-center justify-center'><strong> 
            Get In Touch : 
            </strong><br /></h1>
        <h3 className='font-serif text-white flex items-center justify-center flex flex-col'>
            Fill The Form To Start The Conversation
            </h3>
        <div className='flex items-center justify-center space-x-2 mt-6'>
            <svg 
            className='w-[15px]'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
                <div className='text-white font-serif'> Thane Maharashtra
                     </div>    
        </div>

        <div className='flex items-center justify-center space-x-2 '>
            <svg
            className='w-[15px]'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
                <div className='text-white font-serif'> 9112260488
                     </div>    
        </div>

        <div className='flex items-center justify-center space-x-2 '>
            <svg
            className='w-[15px]'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
                <div className='text-white font-serif'> slbambade01@gmail.com
                     </div>    
        </div>
        </div>
        

        </div>
        </div>
        
        <form className="p-6 flex flex-col justify-center flex items-center mt-8 text-gray-600">
                <div className="flex flex-col w-[500px]">
                 <label for="name" className="hidden font-serif">
                                    Full Name
                        </label>
                        <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2 w-[500px]">
                                <label for="email" className="hidden font-serif">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2 w-[500px]">
                                <label for="tel" className="hidden font-serif">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 w-[500px] font-serif"
                            >
                                Submit
                            </button>
                        </form>
        </>
    )
}

export default Contact;