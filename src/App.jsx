import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "./components/ui/button"
import {Card} from "./components/ui/card"
import Header from './components/ui/Header'
import { Search } from 'lucide-react'
import ProductCart from './components/ProductCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
       <Header />
       <div>
          <h1 className='font-[400] text-[33px] leading-[38px]'>What are you going to eat today ?</h1>
          <div className='relative my-3'>
             <input type='text' placeholder='Search Here ...' className='h-10 rounded-[20px] text-base w-full bg-[#F5F5F8] px-4 py-2 focus:outline-none ' />
             <Search className='absolute right-[10px] text-[#BB86CF] top-[10px]'  />
          </div>
          <div className='my-5'>
             <div className='flex gap-3 text-[13px] font-[400]'>
                <Button className=' py-2 px-3 rounded-[20px] bg-[#F5F5F8]'>All</Button>
                <Button className=' py-2 px-3 rounded-[20px] bg-[#F5F5F8] '>Burger</Button>
                <Button className='py-2 px-3 rounded-[20px] bg-[#F5F5F8]'>HotDog</Button>
                <Button className=' py-2 px-3 rounded-[20px]  bg-[#F5F5F8]'>Salade</Button>
             </div>
          </div>
          <div>
             <div className='grid grid-cols-1 gap-5 '>
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
             </div>
          </div>
       </div>
    </div>
  )
}

export default App
