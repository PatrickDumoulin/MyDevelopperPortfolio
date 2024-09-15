//links
import Link from 'next/link';

//icons
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiDribbbleLine, 
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex space-x-4">
      <Link href={'https://github.com/PatrickDumoulin'}>
        
          <RiGithubLine />
        
      </Link>
      <Link href={'https://linkedin.com/in/patrick-dumoulin-37274a2aa'}>
        
          <RiLinkedinLine />
        
      </Link>
      
    </div>
  );
};

export default Socials;
