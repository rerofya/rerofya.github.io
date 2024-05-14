import { StarIcon as StarIconsolid } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/outline'

type Props = {}

const star = [1,2,3,4]

export default function Rating({}: Props) {
  return (
    <div className="flex gap-2 items-center">
        {
        star.map((value: number) => (
            <button key={value}><StarIconsolid className='w-6 h-6 text-yellow-400' /></button>
        ))
        }
        <button><StarIcon className='w-6 h-6 text-yellow-400' /></button>
        <h1 className='font-semibold'>( 9+ ulasan )</h1>
    </div>
  )
}