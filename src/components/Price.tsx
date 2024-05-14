import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { priceListItems } from '../constants/contents'
import { WHATSAPP } from '../constants/config'

type Props = {}

export default function Price({}: Props) {
  return (
    <div className="w-full mt-16 sm:mt-0 p-4 sm:p-16" id='price'>
        <div>
            <h1 className="text-4xl font-bold text-center">Harga Paket Website</h1>
            <p className='mt-1 text-center'>Harga paket website bisa berubah tergantung dari banyaknya fitur dalam website.</p>
        </div>
        <Swiper navigation={true} modules={[Navigation]} loop={true} breakpoints={{ 620: {
            slidesPerView: 2
        }, 1060: {
            slidesPerView: 3
        } }} className="hidden-scrollbar mySwiper w-full h-full mt-6 sm:mt-10 flex overflow-x-auto sticky">
            {
                priceListItems.map((value, index: number) => (
                    <SwiperSlide className="w-full ss:w-1/2 md:w-1/3 h-full p-3 flex-shrink-0" key={index}>
                        <div className={`${value.active && 'bg-primary text-light'} w-full h-full p-8 border-[1px] rounded-xl shadow-xl flex flex-col justify-between`}>
                            <div>
                                <h1 className={`${!value.active && 'text-primary'} text-2xl font-bold`}>{ value.title }</h1>
                                <p className="text-sm font-medium">{ value.description }</p>
                                <h1 className={`${!value.active && 'text-primary'} mt-2 text-3xl font-bold`}>Rp { Intl.NumberFormat("id-ID").format(value.price) }</h1>
                            </div>
                            <div className="mt-4">
                                <h1 className="text-sm">include :</h1>
                                {
                                    value.includes.map((val, index: number) => (
                                        <div className="mt-1 flex gap-2 items-center" key={index}>
                                            <div>
                                                <img src="/images/icons/check.png" alt="Check Icon" className='w-6 h-6' />
                                            </div>
                                            <h1 className="font-semibold">{ val }</h1>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="mt-6">
                                <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP}&text=Halo min, saya mau pesan paket ${value.title}.`}><button className={`${value.active ? 'bg-light text-primary font-bold border-primary transition ease-in-out bg-opacity-90 hover:bg-opacity-100' : 'button'} w-full border-[1px] py-3 rounded-md`}>Pesan Sekarang</button></a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}