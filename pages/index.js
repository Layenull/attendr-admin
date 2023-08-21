import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Homecard from '@/components/Homecard'
import Slidercard from '@/components/Slidercard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className=' bg-white min-h-screen'>
        <Header />

        <div className='flex justify-center space-x-12 pl-32 pt-5 '>
          <Slidercard />
          {/* <Homecard /> */}

        </div>
      </main>
    </>

  )
}
