import { whyChooseItems } from '../constants/contents'

type Props = {}

export default function WhyChoose({}: Props) {
  return (
    <div className="w-full px-4 sm:py-14" id='about'>
        <div>
            <h1 className="text-4xl stext-5xl font-bold text-center">Mengapa Memilih Kami?</h1>
        </div>
        <div className="mt-8 sm:mt-16 grid ss:grid-cols-2 md:grid-cols-4">
          {
            whyChooseItems.map((value, index: number) => (
              <div className="mt-2 sm:mt-0 p-2 text-center" key={index} >
                <div className='w-full flex justify-center'>
                  <img src={`/images/icons/${value.icon}`} alt={value.name} className='w-16 h-16' />
                </div>
                <h1 className="mt-3 text-lg font-bold text-primary">{ value.name }</h1>
                <div className="w-full flex justify-center">
                  <p className='w-[85%]'>{ value.description } Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse qui optio minima sunt obcaecati minus totam amet id alias iure.</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}