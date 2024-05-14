import Header from './components/Header'
import { countries } from './countries'

const App = () => {
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
