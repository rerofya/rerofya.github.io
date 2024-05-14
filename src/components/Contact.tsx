import Right from './contact/Right'
import Left from './contact/Left'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='w-full grid sm:grid-cols-2' id='contact'>
        <Left />
        <Right />
    </div>
  )
}