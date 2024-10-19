import { MapPin } from 'lucide-react'
   
export function Header(){
  return (
    <header className='flex items-center justify-between p-6 border shadow-md text-[15px]'>
        <nav className='flex items-center gap-4'>
          <img src="./starbucks-icon.svg" alt="" />
          <ul className='flex gap-4 uppercase'>
            <li className='cursor-pointer font-bold'>Меню</li>
            <li className='cursor-pointer font-bold'>Доставка</li>
            <li className='cursor-pointer font-bold'>Программа лояльности</li>
            <li className='cursor-pointer font-bold'>О STARBUCKS в регионе MIDDLE EAST</li>
            <li className='cursor-pointer font-bold'>Официальное заявление STARBUCKS</li>
          </ul>
        </nav>
        <button className='flex items-center gap-3'>
          <MapPin />
          <span className='font-bold'>Кофейни рядом</span>
        </button>
      </header>
  )
}
