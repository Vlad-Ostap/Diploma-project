import { inter } from '../lib/fonts';
import '../globals.css';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="main">{children}</main>
            </body>
        </html>
    );
}