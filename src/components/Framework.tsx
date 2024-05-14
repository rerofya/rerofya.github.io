import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { frameworkItems } from '../constants/contents'

type Props = {}

export default function Framework({}: Props) {
  return (
    <div className='w-full px-4 sm:py-16 flex flex-wrap sm:flex-nowrap items-center' id='frameworks'>
        <div className='w-full sm:w-fit sm:p-8 mt-10 sm:mt-0 text-center'>
            <h1 className="text-8xl font-bold text-primary">3+</h1>
            <div className="text-4xl font-bold text-primary">Framework</div>
            <h1 className="text-lg font-semibold">yang bisa kamu pilih.</h1>
        </div>
        <Swiper navigation={true} loop={true} modules={[Navigation]} breakpoints={{ 620: {
            slidesPerView: 2
        },
        1060: {
            loop: false
        }, 1200: {
            slidesPerView: 3,
        } }}>
            {
                frameworkItems.map((value, index: number) => (
                    <SwiperSlide className="w-full p-4 group" key={index}>
                        <div className="w-full h-full p-4 py-8 grid justify-center bg-light rounded-lg shadow-xl transition duration-300 ease-in-out group-hover:-translate-y-1">
                            <a href={value.url} className='w-full flex justify-center'>
                                <div className="w-28 h-28">
                                    <img src={`/images/icons/${value.icon}.svg`} alt={value.name} className='w-full h-full' />
                                </div>
                            </a>
                            <div className="w-full flex justify-center mt-1 mb-0.5">
                                <div className="w-fit sticky">
                                    <a href={value.url} className={`${value.color} text-3xl font-bold`}>{ value.name }</a>
                                    <div className={`bG-${value.color} w-full h-0.5 bg-primary absolute scale-0 transition ease-in-out group-hover:scale-100`}></div>
                                </div>
                            </div>
                            {/* <div className="w-full flex justify-center">
                                <p className='w-[95%] text-center leading-5'>{ value.text }</p>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}