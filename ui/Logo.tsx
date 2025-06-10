import Link from "next/link"
import Image from "next/image"

export default function Logo() {
    return (
        <div className="logo__container">
            <Link href="/" className="logo__img">
                <Image src="/logo-svg.svg" alt="logo image" height={45} width={45} />
                <div className="logo__description">
                    <h2 className="logo__name">Royal Heaven</h2>
                    <p className="logo__slogan">Where comfort meets greatness</p>
                </div>
            </Link>
        </div>
    )
}