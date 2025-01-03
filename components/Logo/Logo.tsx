import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'default' | 'header';
}

const Logo = ({ size = 'md', className = '', variant = 'default' }: LogoProps) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  if (variant === 'header') {
    return (
      <Link href="/" className={`block ${className}`}>
        <div className="relative w-14 h-14">
          <Image
            src="/images/logo.png"
            alt="Satlok Ashram"
            width={56}
            height={56}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`block relative ${sizes[size]} ${className}`}>
      <div className="absolute inset-0 bg-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ring-4 ring-red-500/20 hover:ring-red-500/30">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Satlok Ashram Logo"
            fill
            sizes="(max-width: 128px) 100vw, 128px"
            className="object-contain p-1"
            priority
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
