import Left from './hero/Left'
import Right from './hero/Right'

type Props = {}

export default function Hero({}: Props) {
  
  return (
    <div className='w-full h-screen grid sm:grid-cols-2 items-center' id='home'>
      <Left />
      <Right />
    </div>
  )
}