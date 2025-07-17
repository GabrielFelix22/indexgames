import { CircleUser, Gamepad2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../../public/logo.svg';

export function Header() {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center h-28 sm:justify-between">
        <nav className="flex items-center justify-center gap-4">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo"
              quality={100}
              priority={true}
              className="w-full"
            />
          </Link>

          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>
        <div className="hidden sm:flex items-center justify-center">
          <Link href="/profile">
            <CircleUser size={32} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
}
