import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

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
      <p className='text-center dark:text-dark-primary-text'>Sebastian Ariza Diaz © 2025</p>
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
    href: 'https://x.com/Sebas_00018',
    Icon: FaXTwitter
  } 
]