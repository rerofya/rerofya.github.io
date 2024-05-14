import { APP_DESC, APP_NAME } from '../constants/config'
import { footerItems, socialMediaItems } from '../constants/contents'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="w-full mt-20 pt-4 sm:pt-0 bg-primary text-light">
      <div className='p-4 sm:p-8 md:flex justify-between'>
        <div>
          <h1 className="text-3xl font-bold">{ APP_NAME }</h1>
          <p className='mt-2 w-[95%] sm:w-2/3'>{ APP_DESC }</p>
          <div className="mt-2 flex gap-4 items-center">
            {
              socialMediaItems.map((value, index: number) => (
                <a href={value.url} key={index}>
                  <img src={`/icons/${value.icon}.svg`} alt={value.name} title={value.name} className='w-5' />
                </a>
              ))
            }
          </div>
        </div>
        <div className="mt-4 sm:mt-6 md:mt-0 flex flex-wrap sm:flex-nowrap sm:gap-20 md:px-8">
          {
            footerItems.map((value, index: number) => (
              <div key={index} className='w-1/2 md:w-fit mt-4 sm:mt-0'>
                <h1 className="text-xl font-bold">{ value.title }</h1>
                <ul className='mt-2'>
                  {
                    value.items.map((val, index: number) => (
                      <li key={index} className='mb-1 text-base text-nowrap'><a href={val.url}>{ val.name }</a></li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="pb-3">
        <h1 className="text-center">Copyright &copy;2024 <a href="" className='underline'>{ APP_NAME }</a></h1>
      </div>
    </div>
  )
}