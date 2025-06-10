import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__image">
        <Image src='/hall_2.jpg' alt="Hotel Room" fill sizes="100%" style={{objectFit: 'cover'}}></Image>
      </div>
      <div className="about-section__content">
        <p className="about-section__description">ABOUT US</p>
        <h2 className="about-section__title">YOUR DESTINATION FOR <span className="blue__title">HOTELS</span> BOOKINGS</h2>
        <p className="about-section__text">
          Not only offers an extensive range of accommodations but also prioritizes convenience and customer satisfaction. 
        </p>
        <Link href="/about-us" className="about-section__button">READ MORE</Link>
      </div>
    </section>
  );
}