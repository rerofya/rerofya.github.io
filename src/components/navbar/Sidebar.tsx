import { navItems } from '../../constants/contents'
import { WHATSAPP } from '../../constants/config'
import { Link } from 'react-scroll'

type Props = {}

export default function Sidebar({}: Props) {

//   const handleScroll = (url: string) => {
//     let target: number | undefined = $(url).offset()?.top

//     if ( target && target > 0 ) {
//         target -= 50
//     }

//     $('html, body').animate({
//         scrollTop: target
//     }, 500)
//   }

  return (
    <div className="w-full h-screen absolute top-[100%] left-0 bg-primary p-4 z-[49]">
        <ul className='bg-light rounded-xl border-[1px] border-slate-300 px-6 py-3'>
            {
                navItems.map((value, index) => (
                    <li key={index} className='w-fit my-3 sticky group overflow-hidden'>
                        <Link to={value.url} spy={true} smooth={true} offset={-40} duration={500} className='text-base font-bold opacity-80 transition ease-in-out group-hover:opacity-100 cursor-pointer'>{ value.name }</Link>
                        <div className="w-full h-0.5 bg-primary transition duration-300 ease-in-out -translate-x-[100%] group-hover:translate-x-0"></div>
                    </li>
                ))
            }
            <li className='my-3 w-full button px-4 py-3 rounded-md text-center font-bold text-light text-base'><a href={`https://wa.me/${WHATSAPP}`}>Pesan Sekarang</a></li>
        </ul>
    </div>
  )
}