import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function ContactLinks() {
  const links = [ //An array handling my links
    {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={40}/>
      </> 
    ),
    href: 'https://www.linkedin.com/in/william-thompa',
    style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={40}/>
        </>
      ),
      href: 'https://github.com/WilliamThompa',
    },
    {
      id: 3,
      child: (
        <>
          Email Me <HiOutlineMail size={40}/>
        </>
      ),
      href: 'mailto:williamthompa@gmail.com',
      style: 'rounded-br-md'
    }
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
          {links.map(({id, child, href, style}) => ( //This is where the array is fed into specific points
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-yellow-400 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ' + style}>
              <a href={href} className='flex justify-between items-center w-full text-slate-900 text-lg font-bold' target='_blank' rel='noreferrer'>{child} </a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ContactLinks