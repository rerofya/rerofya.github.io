import { HeroContents } from '../../constants/contents'
import { WHATSAPP } from '../../constants/config'
import Rating from './Rating'

type Props = {}

export default function Left({}: Props) {

  return (
    <div className='p-4 sm:p-8'>
        <div>
          <h1 className="text-5xl sm:text-6xl text-primary font-bold" dangerouslySetInnerHTML={{ 
            __html: HeroContents.title
          }}></h1>
        </div>
        <div className='my-2 w-[90%] sm:w-2/3' data-aos="fade-up">
          <p className='text-lg sm:text-xl font-medium'>{ HeroContents.description }</p>
        </div>
        <div className="my-3 flex gap-2 items-center">
          <a href={`https://wa.me/${WHATSAPP}`}><button className='button px-4 py-2.5 rounded-md font-bold border-[1px] border-primary text-light'>Pesan Sekarang</button></a>
          <a href="#"><button className='px-4 py-2.5 rounded-md font-bold text-primary border-[1px] border-primary transition ease-in-out hover:bg-slate-200'>Lihat Demo</button></a>
        </div>
        <Rating />
    </div>
  )
}