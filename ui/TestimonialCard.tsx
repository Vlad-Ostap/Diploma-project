import Image from "next/image";

export default function TestimonialCard({ name, title, text }: { name?: string, title?: string, text?: string }) {
  return (
    <div className="testimonial-card">
      <Image className="testimonial-card__quote" src="/quote.svg" alt="testimonial icon" height={60} width={60} />
      <p className="testimonial-card__text">{text}</p>
      <h3 className="testimonial-card__name">{name}</h3>
      <span className="testimonial-card__title">{title}</span>
    </div>
  );
}