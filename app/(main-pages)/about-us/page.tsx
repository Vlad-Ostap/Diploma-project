import type { Metadata } from 'next';
import Banner from '@/ui/Banner';
import AboutSection from '@/ui/AboutSection';
import StatCard from '@/ui/StatCard';
import TestimonialCard from '@/ui/TestimonialCard';

export const metadata: Metadata = {
  title: 'About Us | Hotel',
  description: 'Learn more about our team, experience, and customer feedback.',
};

export default function AboutUs() {
  return (
    <div className="page">
      <Banner title="ABOUT US" subtitle="Home > about-us" background="/about-bg.jpg" />
      <AboutSection />
      <section className="stats-section">
        <div className="stat-cards">
          <StatCard value="9+" label="Years Experience" />
          <StatCard value="300+" label="Happy Clients" />
          <StatCard value="99.9%" label="Positive Rating" />
          <StatCard value="18+" label="Employees" />
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">WHAT OUR CUSTOMERS SAY ABOUT US</h2>
        <div className="testimonials">
          <TestimonialCard name="Marina" title="Guest" text="Lorem ipsum dolor sit amet..." />
          <TestimonialCard name="Sara" title="Guest" text="Consectetur adipiscing elit..." />
          <TestimonialCard name="Martin" title="Founder" text="Ut elit tellus, luctus nec..." />
        </div>
      </section>
    </div>
  );
}