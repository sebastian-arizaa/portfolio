import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  return (
    <div className='w-1/2 min-w-[375px] max-w-[800px] py-4 mx-auto bg-primary dark:bg-dark-primary'>
      <ul className='flex gap-4 justify-center'>
        {socialLinks.map((socialLink, index) => (
          <li key={index} className='w-8 h-8 p-1 rounded-xs hover:bg-primary-hover dark:hover:dark:hover:bg-primary/20'>
           <a href={socialLink.href} target="_blank" ><socialLink.Icon className='w-full h-full dark:text-dark-primary-text'/></a>
         </li>
        ))}
      </ul>
    </div>
  )
}

const socialLinks = [
  {
    href: 'https://github.com/sebastian-arizaa',
    Icon: FaGithub
  },
  {
    href: 'mailto:sebadia1333@gmail.com',
    Icon: SiGmail
  },
  {
    href: 'https://www.linkedin.com/in/sebasti%C3%A1n-ariza-diaz-2299a1266/',
    Icon: FaLinkedinIn
  } 
]