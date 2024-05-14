import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Sidebar from './Sidebar'

type Props = {
  // active: string,
  // setActive: React.Dispatch<React.SetStateAction<string>>
}

export default function Hamburger({}: Props) {
  const [isShow, setShow] = React.useState<boolean>(false)

  return (
    <div className="sm:hidden">
        <button className="w-9 h-9" onClick={() => {setShow(state => !state)}}>
        {
            isShow ? (
                <XMarkIcon />
            ) : (
                <Bars3Icon />
            )
        }
        </button>
        {
          isShow && (
            <Sidebar />
          )
        }
    </div>
  )
}