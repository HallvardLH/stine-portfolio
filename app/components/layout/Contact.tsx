import "./Contact.css";

interface ContactProps {
    textClassName?: string,
}

export default function Contact({ textClassName }: ContactProps) {
    return (
        <div className="contact-container">
            <div className="contact-info-container">

                <div className="contact-info">
                    <img
                        src={"/icons/mail.svg"}
                        alt=""
                        className="contact-info-icon icon"
                    />
                    <p className={textClassName}>mail:</p>
                </div>
                <p className={textClassName}><a href="stinenknutsen@gmail.com">stinenknutsen@gmail.com</a></p>

                <div className="contact-info">
                    <img
                        src={"/icons/phone.svg"}
                        alt=""
                        className="contact-info-icon icon"
                    />
                    <p className={textClassName}>mobil:</p>
                </div>
                <p className={textClassName}><a href="tel:90089605">900 89 605</a></p>

                <div className="contact-info">
                    <img
                        src={"/icons/address.svg"}
                        alt=""
                        className="contact-info-icon icon"
                    />
                    <p className={textClassName}>sted:</p>
                </div>
                <p className={textClassName}>Bergen</p>

            </div>
        </div>
    )
}