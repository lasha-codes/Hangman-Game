/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIdx } from './countrySlice'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa6'

const App = () => {
  const dispatch = useDispatch()
  const [guessWord, setGuessWord] = useState<string[]>([])
  const [secondsLeft, setSecondsLeft] = useState(100)

  const {
    selectedCountry,
    selectedIdx,
  }: { selectedCountry: string[]; selectedIdx: number } = useSelector(
    (state: any) => state.countries
  )

  console.log(selectedCountry)

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

  console.log(secondsLeft)

  useEffect(() => {
    setGuessWord(Array(selectedCountry.length).fill(''))

    const timer = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft((prevSeconds) => prevSeconds - 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [selectedCountry])

  const selectLetter = (letter: string) => {
    const guessInstance = [...guessWord]
    if (guessInstance[selectedIdx] === letter.toLowerCase()) {
      guessInstance[selectedIdx] = ''
    } else {
      guessInstance[selectedIdx] = letter.toLowerCase()
    }

    setGuessWord(guessInstance)
  }

  const isSelected = (index: number) => {
    if (guessWord[index]) {
      return true
    } else {
      return false
    }
  }

  const checkGuessedLetter = (guessedIndex: number) => {
    if (
      selectedCountry[guessedIndex]?.toLowerCase() ===
      guessWord[guessedIndex].toLowerCase()
    ) {
      return 'bg-green-500'
    }
    if (selectedCountry.includes(guessWord[guessedIndex].toLowerCase())) {
      return 'bg-yellow-500'
    } else if (guessWord[guessedIndex]) {
      return 'bg-red-500'
    }
  }

  return (
    <main className='p-12 relative'>
      <div className='bg-div' />
      <div className='z-[100] w-full h-full'>
        <header className='w-full flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <div className='p-3 group rounded-full bg-gradient-to-t from-gradPurple to-gradPink cursor-pointer'>
              <GiHamburgerMenu className='text-2xl text-white group-hover:scale-110 group-active:scale-90 transition-all' />
            </div>
            <h2 className='text-[40px] text-white'>Countries</h2>
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-white h-[20px] w-[350px] border px-1 flex items-center justify-start rounded-full'>
              <div
                className={`rounded-full bg-gradient-to-l from-gradPink to-gradPurple transition-all duration-300 ease h-[8px]`}
                style={{
                  width: `${secondsLeft}%`,
                }}
              />
            </div>
            <div className='heart-icon-bg p-3 rounded-full'>
              <FaHeart className='text-xl heart-icon text-white' />
            </div>
          </div>
        </header>
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
                } w-[70px] bg-blue-500 ${checkGuessedLetter(
                  idx
                )} flex text-3xl text-white justify-center items-center opacity-60 transition-all duration-300 ease cursor-pointer rounded-[15px] ${
                  isSelected(idx) && 'opacity-100'
                }`}
              >
                {letter.toUpperCase()}
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
