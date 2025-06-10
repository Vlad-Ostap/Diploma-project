import Hero from '@/ui/Hero';
import SearchForm from '@/ui/SearchForm';
import AccommodationCard from '@/ui/AccommodationCard';
import AboutSection from '@/ui/AboutSection';
import StatCard from '@/ui/StatCard';
import RoomCard from '@/ui/RoomCard';
import TestimonialCard from '@/ui/TestimonialCard';
import BlogPostCard from '@/ui/BlogPostCard';
import { accommodationCardData, statCardData, testimonialCardData, blogPostCardData } from './data/data';
import { roomsData } from '../lib/rooms';

export default async function Home() {
  const rooms = await roomsData();

  return (
    <div className="page">
      <Hero />
      <SearchForm shiftUp />
      <section className="section">
        <h2 className="section__title">YOUR <span className='blue__title'>ACCOMMODATION</span> OPTIONS</h2>
        <div className="accommodation">
          {accommodationCardData.map(({ title }) => (
            <AccommodationCard
              key={title}
              title={title}
            />
          ))}
        </div>
      </section>
      <AboutSection />
      <section className="stats-section">
        <div className="stat-cards">
          {statCardData.map(({ value, label }) => (
            <StatCard
              key={label}
              value={value}
              label={label}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <p className="about-section__description">OUR ROOMS</p>
        <h2 className="section__title">AVAILABLE <span className='blue__title'>ROOMS</span></h2>
        <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="rooms">
          {rooms.map(room => (
            <RoomCard
              key={room.room_id}
              room_id={room.room_id}
              title={room.title?.toString() ?? 'Unnamed'}
              description={room.description}
              price={`$${room.price_per_night}/night`}
              image={room.image ?? ''}
              conveniences={room.room_conveniences.map(rc => rc.conveniences.name)}
            />
          ))}
        </div>
      </section>
      <section className="section testimon">
        <h2 className="section__title">WHAT OUR CUSTOMERS SAY <span className='blue__title'>ABOUT US</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="testimonials">
          {testimonialCardData.map(({ name, text }) => (
            <TestimonialCard
              key={name}
              name={name}
              text={text}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">NEWS & BLOG POSTS <span className='blue__title'>UPDATES</span></h2>
        <div className="blog">
          {blogPostCardData.map(({ image, title, comments }) => (
            <BlogPostCard
              key={title}
              image={image}
              title={title}
              comments={comments}
            />
          ))}
        </div>
      </section>
    </div>
  );
}