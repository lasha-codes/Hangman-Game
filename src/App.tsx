/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { selectIdx } from './countrySlice'

const App = () => {
  const dispatch = useDispatch()
  const [guessWord, setGuessWord] = useState<string[]>([])

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

  useEffect(() => {
    setGuessWord(Array(selectedCountry.length).fill(''))
  }, [selectedCountry])

  const selectLetter = (letter: string) => {
    const guessInstance = [...guessWord]
    if (guessInstance[selectedIdx] === letter.toLowerCase()) {
      guessInstance[selectedIdx] = ''
    } else {
      guessInstance[selectedIdx] = letter.toLowerCase()
    }
    if (selectedIdx === guessWord.length - 1) {
      dispatch(selectIdx(selectedIdx - 1))
    } else {
      dispatch(selectIdx(selectedIdx + 1))
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
