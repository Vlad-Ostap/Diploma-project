import Provider from './provider';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import { inter } from '../lib/fonts';
import '../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}