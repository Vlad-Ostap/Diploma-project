export default function Banner({ title, subtitle, background }: { title: string, subtitle?: string, background: string }) {
    return (
      <section className="banner">
        <div className="banner__content">
          <h1 className="banner__title">{title}</h1>
          <p className="banner__subtitle">{subtitle}</p>
        </div>
      </section>
    );
  }