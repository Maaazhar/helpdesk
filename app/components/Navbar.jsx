import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <h1>helpdesk</h1>
    <ul className="menu">
      <li><Link href="/">dashboard</Link></li>
      <li><Link href="/tickets">tickets</Link></li>
      <li><Link href=""></Link></li>
    </ul>
  </nav>
  )
}

export default Navbar