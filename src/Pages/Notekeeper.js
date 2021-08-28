import React from 'react'
import Navbar from '../Components/Navbar'
import Notes from '../Components/Notes'
import CustomizedSnackbars from '../Components/CustomizedSnackbars'
import postButton from '../Components/PostButton'
import Parent from '../Components/Parent'

function Notekeeper() {
    return (
        <div>
           <Navbar/>
        
           {/* <Notes/>
           <postButton/>
            <CustomizedSnackbars/> */}
            <Parent/>

        </div>
    )
}

export default Notekeeper



