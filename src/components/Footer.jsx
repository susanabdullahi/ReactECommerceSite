import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
  return (
    <div>
        <div className='footer w-full h-[200px] bg-orange-300 flex justify-center items-center flex-col pt-[10px]  '>
            <div  className='text-white mx-[20px] text-[70px] cursor-pointer'>
            <YouTubeIcon />
            <XIcon/>
            <InstagramIcon/>
            </div>
            <p>  <p>copyright &copy; apple.com</p></p>
        </div>
    </div>
  )
}

export default Footer