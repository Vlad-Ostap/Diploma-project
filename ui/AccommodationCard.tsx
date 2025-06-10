export default function AccommodationCard({ title }: { title: string }) {
    return (
      <div className="accommodation-card">
        <div className="accommodation-card__icon"> {/* Icon placeholder */}</div>
        <h3 className="accommodation-card__title">{title}</h3>
        <p className="accommodation-card__text">Lorem ipsum dolor sit amet...</p>
      </div>
    );
  }