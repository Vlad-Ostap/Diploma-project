import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Logo></Logo>
          <h3 className="footer__description">Behind the word mountains, far from the countries Vokalia and Consonantia, there</h3>
          <div className="footer__social">
            <Link href="#">
              <Image src="/facebook.svg" alt="facebook logo" width={32} height={32} />
            </Link>
            <Link href="#">
              <Image src="/twitter.svg" alt="twitter logo" width={32} height={32} />
            </Link>
            <Link href="#">
              <Image src="/linkedin.svg" alt="linkedin logo" width={32} height={32} />
            </Link>
            <Link href="#">
              <Image src="/instagram.svg" alt="instagram logo" width={32} height={32} />
            </Link>
          </div>
        </div>
        <div className="footer__links">
          <h3 className="footer__links-title">USEFUL LINKS</h3>
          <div className="footer__links-list">
            <ul className="left">
              <li><Link href="/" className="footer__link">Home</Link></li>
              <li><Link href="/about-us" className="footer__link">About</Link></li>
              <li><Link href="/rooms" className="footer__link">Rooms</Link></li>
            </ul>
            <ul className="right">
              <li><Link href="/reservation" className="footer__link">Reservation</Link></li>
              <li><Link href="/blog" className="footer__link">Blog</Link></li>
              <li><Link href="/contact-us" className="footer__link">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__subscribe">
          <h3 className="footer__subscribe-title">SUBSCRIBE NOW</h3>
          <form className="footer__subscribe-form">
            <input type="email" className="footer__subscribe-input" placeholder="Your email" />
            <button type="submit" className="footer__subscribe-button">
              <Image src="/mail.svg" alt="mail-logo" width={25} height={25} />
            </button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">© 2024 Peaceful Stays. All rights reserved.</p>
      </div>
    </footer>
  );
}