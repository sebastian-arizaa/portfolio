import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  return (
    <div className='w-1/2 min-w-[375px] max-w-[800px] py-4 mx-auto '>
      <ul className='flex gap-4 justify-center mb-4'>
        <li>
          <a href="https://github.com/sebastian-arizaa" target="_blank"><FaGithub className='w-6 h-6'/></a>
        </li>
        <li>
          <a href="mailto:sebadia1333@gmail.com"><SiGmail className='w-6 h-6'/></a>
        </li>
        <li>
          <a href="https://x.com/Sebas_00018"><FaXTwitter className='w-6 h-6'/></a>
        </li>
      </ul>
      <p className='text-center'>Sebastian Ariza Diaz © 2025</p>
    </div>
  )
}
