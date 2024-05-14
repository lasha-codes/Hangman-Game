/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Header from './components/Header'
import { countries } from './countries'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomWord } from './countrySlice'

const App = () => {
  const dispatch = useDispatch()
  const randomIndex = Math.floor(Math.random() * countries.length)
  const [selectedWordLength, setSelectedWordLength] = useState<string[]>([])
  const [rerender, setRerender] = useState<boolean>(false)
  const { selectedCountry }: { selectedCountry: string[] } = useSelector(
    (state: any) => state.countries
  )

  console.log(selectedWordLength)

  useEffect(() => {
    dispatch(getRandomWord(countries[randomIndex]))
    setSelectedWordLength(Array(selectedCountry.length).fill(''))
    setRerender(true)
  }, [rerender])

  return (
    <main className='p-12 relative'>
      <div className='bg-div' />
      <div className='z-[100] w-full h-full'>
        <Header />
      </div>
      <div className='w-full mt-24 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center w-[70%] flex-wrap gap-5'>
          {selectedWordLength.map((letter: string, idx: number) => {
            return (
              <div
                key={idx}
                className={`h-[80px] w-[70px] bg-blue-500 opacity-60 rounded-[15px]`}
              >
                {letter}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
