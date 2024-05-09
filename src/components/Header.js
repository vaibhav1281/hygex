import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-20 justify-between flex items-center px-8'>
        <div>
            <img src='./logo.svg'
                alt='logo'
                className='w-[191px] h-[39px]'
            />
        </div>
        <div className='w-[525px] justify-end flex gap-10 text-[#3A3740] text-lg'>
            <button>Home</button>
            <button>Flashcard</button>
            <button>Contact</button>
            <button>FAQ</button>
            <button className='bg-[#1346b0] text-white px-5 py-2 rounded-[32px]'>Login</button>
        </div>
    </header>
  )
}

export default Header