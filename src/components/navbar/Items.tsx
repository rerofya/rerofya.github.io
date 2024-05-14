import { navItems } from '../../constants/contents'
import { WHATSAPP } from '../../constants/config'
import { Link } from 'react-scroll'

type Props = {
  // active: string,
  // setActive: React.Dispatch<React.SetStateAction<string>>
}

export default function Items({}: Props) {

  return (
    <ul className="hidden sm:flex sm:gap-7 md:gap-8 items-center">
        {
            navItems.map((value, index) => (
                <li key={index} className='overflow-hidden sticky group'>
                    <Link to={value.url} spy={true} smooth={true} offset={-40} duration={500} className={`opacity-80 transition ease-in-out group-hover:opacity-100 font-bold cursor-pointer`}>{ value.name }</Link>
                    <div className={`absolute bottom-0 w-full h-0.5 bg-primary -translate-x-[100%] transition duration-300 ease-in-out group-hover:translate-x-0`}></div>
                </li>
            ))
        }
        <a href={`https://wa.me/${WHATSAPP}`} className='px-4 py-3 text-sm rounded-full bg-primary font-bold text-light bg-opacity-80 transition ease-in-out hover:bg-opacity-100'><button>Pesan Sekarang</button></a>
    </ul>
  )
}