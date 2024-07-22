import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

const Navbar = () => {
  return (
    <nav>
      <Image
      src={Logo}
      alt="logo"
      width={50}
      quality={100}
      // placeholder='blur'
      />
      <h1>helpdesk</h1>
      <Link href="/">dashboard</Link>
      <Link href="/tickets">tickets</Link>
      <Link href=""></Link>
    </nav>
  )
}

export default Navbar