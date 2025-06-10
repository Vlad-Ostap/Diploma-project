import Image from "next/image";

export default function InfoPage() {
    return (
        <div className="page">
            <div className="info">
                <div className="info-image">
                    <Image
                        className="info-image__img"
                        src="/success.svg"
                        alt="Booking Successful"
                        height={100}
                        width={100}
                    />
                </div>
                <div className="info-status">
                    <h1 className="info-status__title">Booking is successful!</h1>
                    <p className="info-status__text">
                        Thank you for choosing our hotel.
                    </p>
                    <a href="/" className="btn btn--primary">
                        Back to the main page
                    </a>
                </div>
            </div>
        </div>
    );
}
