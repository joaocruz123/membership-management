import Logo from '@/assets/partner-logo-no-text.png'
import Image from 'next/image'
import NavbarEnd from './navbar-end'

export default function Navibar() {
  return (
    <div className='navbar bg-base-100 px-4 pt-4 mb-4'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Sócios</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-sm'>
          <Image
            className='mx-auto h-10 w-auto'
            src={Logo}
            alt='Logo principal'
          />
          Membership Management
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href='/home'>Inicio</a>
          </li>
          <li>
            <a href='/socio'>Sócios</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <NavbarEnd />
    </div>
  )
}
