import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between'>
      <div className='p-3 group rounded-full bg-gradient-to-t from-gradPurple to-gradPink cursor-pointer'>
        <GiHamburgerMenu className='text-2xl text-white group-hover:scale-110 group-active:scale-90 transition-all' />
      </div>
    </header>
  )
}

export default Header
