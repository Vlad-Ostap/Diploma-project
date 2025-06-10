import type { Metadata } from 'next';
import Banner from '@/ui/Banner';
import BlogPostCard from '@/ui/BlogPostCard';

export const metadata: Metadata = {
  title: 'Blog | Oceanview Hotel',
  description: 'Read our latest blog posts and travel tips from Oceanview Hotel experts.',
};

export default function Blog() {
  return (
    <div className="page">
      <Banner title="BLOG POSTS" subtitle="Home > Blog" background="/bed_4.jpg" />
      <section className="section">
        <div className="blog">
          <BlogPostCard
            title="Consectetuer Tempor Facilisi"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient..."
            date="December 13, 2024"
            comments="No Comments"
            image="/person_1.jpg"
            slug="consectetuer-tempor-facilisi"
          />
          <BlogPostCard
            title="Porta Rhoncus Sit Rutrum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient..."
            date="December 13, 2024"
            comments="No Comments"
            image="/person_2.jpg"
            slug="porta-rhoncus-sit-rutrum"
          />
          <BlogPostCard
            title="Per Ultrices Augue Primis"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient..."
            date="December 13, 2024"
            comments="No Comments"
            image="/person_3.jpg"
            slug="per-ultrices-augue-primis"
          />
        </div>
      </section>
    </div>
  );
}