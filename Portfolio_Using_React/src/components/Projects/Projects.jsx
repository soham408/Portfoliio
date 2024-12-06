import React from 'react';

function Projects(){
    document.body.style.color = '#ffffff';

    return (
        <>
        <div>
        <ul>
        <h1 className='text-white text-6xl font-serif text-center pt-[169px]  '>Projects</h1>

            <li className='flex space-x-[160px] item-center justify-center pt-[20px] pb-[100px]'>
                <div className=' pt-[40px] grid items-center justify-center'>
                <h1 className='text-white text-1xl font-serif'>BMI Calculator <br /> (HTML, CSS, JacaScript)</h1>
                <img className='rounded-xl transform origin-bottom-left hover:scale-75 transition duration-300 h-full' src="https://drive.google.com/thumbnail?id=1lLyjm6TpbB_Wr5p3vIKjA5omF7siz9Tt" alt="" 
                srcset="" />
                </div>

                <div className=' pt-[40px] grid items-center justify-center'>
                <h1 className='text-white text-1xl font-serif'>Introduction Page <br /> (HTML, CSS, JacaScript)</h1>
                <img className='rounded-xl transform origin-bottom-left hover:scale-75 transition duration-300 h-full' src="https://drive.google.com/thumbnail?id=1OGuDF4QqQeA_xrqh9UDc3Be_KfB_lVhg" alt="" 
                srcset="" />
                </div>

                <div className=' pt-[40px] grid items-center justify-center'>
                <h1 className='text-white text-1xl font-serif'>GitHub Login Page UI <br />(HTML, CSS, JacaScript)</h1>
                <img className='rounded-xl transform origin-bottom-left hover:scale-75 transition duration-300 h-full' src="https://drive.google.com/thumbnail?id=1ziGE_Isg-o3DFjObBOn2sBtNGajR8JT4" alt="" 
                srcset="" />
                </div>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Projects;