/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Header from './components/Header'
import { countries } from './countries'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomWord, selectIdx } from './countrySlice'

const App = () => {
  const dispatch = useDispatch()
  const randomIndex = Math.floor(Math.random() * countries.length)
  const [guessWord, setGuessWord] = useState<string[]>([])
  const [rerender, setRerender] = useState<boolean>(false)

  const {
    selectedCountry,
    selectedIdx,
  }: { selectedCountry: string[]; selectedIdx: number } = useSelector(
    (state: any) => state.countries
  )

  const keyboardLetters = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ]

  console.log(guessWord, selectedIdx)

  useEffect(() => {
    dispatch(getRandomWord(countries[randomIndex]))
    setGuessWord(Array(selectedCountry.length).fill(''))
    setRerender(true)
  }, [rerender])

  const selectLetter = (letter: string) => {
    console.log(letter)
  }

  return (
    <main className='p-12 relative'>
      <div className='bg-div' />
      <div className='z-[100] w-full h-full'>
        <Header />
      </div>
      <div className='w-full mt-24 flex flex-col gap-24 items-center justify-center'>
        <div className='flex items-center justify-center w-[70%] flex-wrap gap-5'>
          {guessWord.map((letter: string, idx: number) => {
            return (
              <div
                onClick={() => dispatch(selectIdx(idx))}
                key={idx}
                className={`h-[80px] ${
                  selectedIdx === idx && 'bg-blue-800 opacity-70'
                } w-[70px] bg-blue-500 opacity-60 transition-all duration-300 ease cursor-pointer rounded-[15px]`}
              >
                {letter}
              </div>
            )
          })}
        </div>
        <div className='w-full lg:w-1/2 flex items-center justify-center flex-wrap gap-5'>
          {keyboardLetters.map((key: string, idx: number) => {
            return (
              <div
                onClick={() => selectLetter(key.toLowerCase())}
                key={idx}
                className={`py-3 px-7 text-blue-800 text-xl cursor-pointer bg-white rounded-xl bg`}
              >
                {key}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
