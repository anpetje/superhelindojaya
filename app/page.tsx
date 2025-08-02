import Image from 'next/image';
import Header from '@/component/header';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Image src='/logo.png' alt='SuperHelindo Jaya' width={180} height={38} priority />
      </main>
      <footer>
        {/* copyright superhelindojaya */}
        <p>© {new Date().getFullYear()} SuperHelindo Jaya. All rights reserved.</p>
      </footer>
    </div>
  );
}
