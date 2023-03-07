'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//test
export function Header() {
  const [burger, setBurger] = useState(false)

  return (
    <nav className={'navbar is-fixed-top is-dark'} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Image src="/JZ2023-Hero.svg" height={48} width={48} alt="logo" />
        </a>

        <a
          role="button"
          onClick={() => setBurger(!burger)}
          className={burger ? 'navbar-burger is-active' : 'navbar-burger'}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={burger ? 'navbar-menu is-active' : 'navbar-menu'} style={{
        backgroundColor: "hsl(0, 0%, 21%)"
      }}>
        <div className="navbar-start">

          <Link
            className={`navbar-item`}
            style={{ color: '#FED12D', fontWeight: 'bold' }}
            href="/partners"
          >
            Partners
          </Link>

          <Link
            className={`navbar-item`}
            style={{ color: '#FED12D', fontWeight: 'bold' }}
            href="/speakers"
          >
            Speakers
          </Link>
          <Link
            className={`navbar-item`}
            style={{ color: '#FED12D', fontWeight: 'bold' }}
            href="/tickets"
          >
            Tickets
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <strong>
                <Link className="button is-dark-blue" href="/speakers">
                  Submit your talk!
                </Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
