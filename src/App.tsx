/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Header from './components/Header'
import { countries } from './countries'
import { useDispatch } from 'react-redux'
import { getRandomWord } from './countrySlice'

const App = () => {
  const dispatch = useDispatch()
  const randomIndex = Math.floor(Math.random() * countries.length)

  useEffect(() => {
    dispatch(getRandomWord(countries[randomIndex]))
  }, [])

  return (
    <main className='p-12 relative'>
      <div className='bg-div' />
      <div className='z-[100] w-full h-full'>
        <Header />
      </div>
    </main>
  )
}

export default App
