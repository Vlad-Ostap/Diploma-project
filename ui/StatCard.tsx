export default function StatCard({ value, label }: { value: string, label: string }) {
    return (
      <div className="stat-card">
        <span className="stat-card__value">{value}</span>
        <span className="stat-card__label">{label}</span>
      </div>
    );
  }