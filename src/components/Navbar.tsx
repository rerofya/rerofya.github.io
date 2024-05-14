import React from 'react'
import { APP_NAME } from '../constants/config'
import Hamburger from './navbar/Hamburger'
import $ from 'jquery'
import Items from './navbar/Items'

type Props = {}

export default function Navbar({}: Props) {
  const [isFixed, setFixed] = React.useState<boolean>(false)
  // const [active, setActive] = React.useState<string>("home")

  // function checkActive() {
  //   navItems.map((value) => {
  //     if ( ($(window).scrollTop() ?? 0) >= ($(`#${value.url}`).offset()?.top ?? 0) - 40 ) {
  //       setActive(value.url)
  //     }
  //   })
  // }

  $(function() {
    if ( ($(window).scrollTop() ?? 0) > 0 ) {
        setFixed(true)
    }
    $(window).on('scroll', function() {
        if ( ($(window).scrollTop() ?? 0) > 0 ) {
            setFixed(true)
        }
    })
    // checkActive()
    // $(window).on('scroll', function() {
    //   checkActive()
    // })
  })

  return (
    <nav className={`${isFixed ? 'fixed' : 'fixed'} w-full flex justify-between items-center bg-light px-4 py-3 sm:px-8 top-0 left-0 z-[50]`}>
      <a href='/' className="flex gap-2 items-center">
          <img src="/images/icon.webp" alt={ APP_NAME } className='w-14 sm:w-16 aspect-video object-cover object-center' />
          <h1 className="text-xl sm:text-2xl font-bold text-primary">{ APP_NAME }</h1>
      </a>
      <Items />
      <Hamburger />
    </nav>
  )
}