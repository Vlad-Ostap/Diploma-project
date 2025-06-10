import Image from "next/image";

export default function BlogPostCard(
  {
    title, description, date, comments, image, slug
  }: {
    title: string, description?: string, date?: string, comments?: string, image: string, slug?: string
  }) {
  return (
    <div className="blog-post-card">
      <div className="blog-post-card__image">
        <Image src={image!} alt={title} fill sizes="100%" style={{ objectFit: 'cover', }} />
      </div>
      <div className="blog-post-card__content">
        <h3 className="blog-post-card__title">{title}</h3>
        <p className="blog-post-card__description">{description}</p>
        <p className="blog-post-card__meta">{date} | {comments}</p>
        <a href={`/blog/${slug}`} className="blog-post-card__button">READ MORE</a>
      </div>
    </div>
  );
}