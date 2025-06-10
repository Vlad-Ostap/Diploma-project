export default function ContactInfo({ 
    contact, 
    location, 
    hours 
}: { 
    contact: { phone: string, email: string }, 
    location: string, 
    hours: string 
}) {
    return (
        <div className="contact-info">
            <div className="contact-info__item">
                <div className="contact-info__icon">📞</div>
                <div className="contact-info__details">
                    <h3 className="contact-info__title">CONTACT US</h3>
                    <p className="contact-info__text">Phone: {contact.phone}</p>
                    <p className="contact-info__text">Email: {contact.email}</p>
                </div>
            </div>
            <div className="contact-info__item">
                <div className="contact-info__icon">📍</div>
                <div className="contact-info__details">
                    <h3 className="contact-info__title">LOCATION</h3>
                    <p className="contact-info__text">{location}</p>
                </div>
            </div>
            <div className="contact-info__item">
                <div className="contact-info__icon">⏰</div>
                <div className="contact-info__details">
                    <h3 className="contact-info__title">WORKING HOURS</h3>
                    <p className="contact-info__text">{hours}</p>
                </div>
            </div>
        </div>
    );
}