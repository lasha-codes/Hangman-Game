import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between'>
      <div className='flex items-center gap-8'>
        <div className='p-3 group rounded-full bg-gradient-to-t from-gradPurple to-gradPink cursor-pointer'>
          <GiHamburgerMenu className='text-2xl text-white group-hover:scale-110 group-active:scale-90 transition-all' />
        </div>
        <h2 className='text-[40px] text-white'>Countries</h2>
      </div>
      <div className='flex items-center gap-4'>
        <div className='bg-white h-[15px] w-[130px] px-1 flex items-center justify-start rounded-full'>
          <div className='bg-blue-800 rounded-full w-[50%] h-[7px]' />
        </div>
        <div className='heart-icon-bg p-3 rounded-full'>
          <FaHeart className='text-xl heart-icon text-white' />
        </div>
      </div>
    </header>
  )
}

export default Header
