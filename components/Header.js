import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from '../components/Socials';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* Titre personnalisé */}
          <Link href={'/'}>
            <h1 className="text-3xl">
              <span className="font-bold text-white">Patrick</span>{' '}
              <span className="font-normal text-gray-300">Dumoulin</span>
              <span className="text-red-500">.</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
