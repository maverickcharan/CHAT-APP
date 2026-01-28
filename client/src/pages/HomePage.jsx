import React, { useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import Sidebar from '../components/Sidebar'

const HomePage = () => {     
    const [selectUser, setSelectUser] = useState(false)
    return (
        <div className='h-screen w-full border sm:px-[15%] sm:py-[5%]'>
            <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden
             h-[100%]  grid grid-cols-1 relative  ${selectUser ? "md:grid-cols-[1fr-1.5fr-1fr] xl:grid-cols-[1fr-1.5fr-1fr]" : "md:grid-cols-2"}`}>
                 <Sidebar />
                <ChatContainer />
                <RightSidebar />

            </div>
        </div>
    )
}

export default HomePage