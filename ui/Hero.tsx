import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">YOUR DESTINATION FOR RESORTS BOOKINGS</h1>
        <p className="hero__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <Link href="/rooms" className="hero__button">DISCOVER NOW</Link>
      </div>
    </section>
  );
}