import LegalPolicy from './LegalPolicy';

const Footer = () => {
  return (
    <footer className=' bg-neutral-100 dark:bg-neutral-900 absolute bottom-0 inset-x-0 h-52 sm:h-44 md:h-40 px-8 py-6 md:py-8'>
      <ul className='breakpoints-default flex justify-between items-center w-full'>
        <LegalPolicy />
        <li className='grid gap-4  text-center'>
          <span className='group select-none whitespace-nowrap text-sm bg-neutral-900 dark:bg-neutral-300 text-neutral-300 dark:text-black dark:font-semibold px-3 py-2 hover:-translate-y-1 transition-all duration-150'>
            <a
              href='https://github.com/MatteoLeonesi'
              className='group-hover:text-white dark:group-hover:text-neutral-800 w-fit'>
              Github Repository
            </a>
          </span>
          <span className='select-text whitespace-nowrap text-neutral-700 dark:text-neutral-400'>
            © 2022 Matteo Leonesi
          </span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
