import type { Metadata } from 'next';
import Banner from '@/ui/Banner';
import ContactInfo from '@/ui/ContactInfo';
import Form from '@/ui/Form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | Oceanview Hotel',
  description: 'Get in touch with Oceanview Hotel. We are here to assist you with any inquiries or support.',
};

export default function ContactUs() {
  return (
    <div className="page">
      <Banner title="CONTACT US" subtitle="Home > contact-us" background="/contact-bg.jpg" />
      <section className="section contact-info-section">
        <ContactInfo
          contact={{ phone: '+1234567890', email: 'support@domain.com' }}
          location="709 Honey Creek Dr, New York, NY 10028"
          hours="10:00 AM - 8:00 PM, Monday - Sunday"
        />
      </section>
      <section className="section contact-form-section">
        <div className="contact-form-section__image">
          <Image src="/bed_2.jpg" alt="Hotel Room" fill sizes='100%' style={{ objectFit: 'cover' }} />
        </div>
        <div className="contact-form-section__content">
          <p className="contact-form-section__text">LET’S TALK</p>
          <h2 className="contact-form-section__title">WE ARE HERE <span className="blue__title">TO ASSIST</span></h2>
          <Form type="contact" />
        </div>
      </section>
    </div>
  );
}