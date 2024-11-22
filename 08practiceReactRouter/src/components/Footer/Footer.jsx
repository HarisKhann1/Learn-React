import React from 'react'

import { NavLink } from 'react-router-dom'

function Footer(props) {

    return (
        <header className='bg-black'>
            <div className='text-white flex flex-row items-center justify-between max-w-screen-lg mx-auto min-h-20'>
                {/* logo */}
                <div className='text-3xl font-bold text-orange-500'>
                    <h1 className='cursor-pointer'>Your Logo</h1>
                </div>
                {/* navigation */}
                <div>
                    <ul className='flex flex-row items-center gap-8 text-xl text-gray-200'>
                        <li className='hover:text-orange-500 cursor-pointer'>
                            <NavLink to='/' className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-200'}`}>
                                Home
                            </NavLink>
                        </li>
                        {/* <li className='hover:text-orange-500 cursor-pointer'>
                            <NavLink to='/about' className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-200'}`}>
                                About
                            </NavLink>
                        </li> */}
                        {/* <li className='hover:text-orange-500 cursor-pointer'>
                            <NavLink to='/contact' className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-200'}`}>
                                Contact
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Footer