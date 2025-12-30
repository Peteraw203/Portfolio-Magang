import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <h3 className="text-2xl font-bold text-midnight_text dark:text-white">
        Peter Abednego Wijaya
      </h3>
    </Link>
  );
};

export default Logo;
