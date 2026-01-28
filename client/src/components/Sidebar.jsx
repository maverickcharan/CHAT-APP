import React from 'react'
import assets from "../assets/assets"
import { useNavigate } from 'react-router-dom'


const Sidebar = ({ selectUser, setSelectUser }) => {
    const navigate = useNavigate();
    return (
        <div className={`bg-[#8185b2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white
    ${selectUser ? "max-md:hidden" : ''}`}>
            <div className='pb-5'>
                <div className='flex justify-between items-center'>

                    <img src={assets.logo} alt="logo" className='max-w-40' />

                    {/*memu icon*/}
                    <div className='relative py-2 group'>
                        <img src={assets.menu_icon} alt="maverick" className='max-h-5 cursor-pointer' />

                        {/*drop menu icon*/}

                        <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md 
                  bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block'>
                            <p onClick={() => navigate("/Profile")}
                                className='cursor-pointer text-sm'>Edit Profile</p>
                            <hr className='my-2 border-t border-gray-500' />
                            <p className='text-sm cursor-pointer'>Logout</p>
                        </div>
                    </div>

                </div>
                <div  className='bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5'>
                   <img src={assets.search_icon} alt="maverick" className='w-3'/> 
                   <input type="text" className='bg-transparent border-none outline-none text-white text-sm
                    placeholder-[#c8c8c8]  flex-1 ' placeholder='search user...'/> 
                </div> 
            </div>

            
        </div>
    )
}

export default Sidebar