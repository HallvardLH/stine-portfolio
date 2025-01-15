import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-info-container">

                <div className="contact-info">
                    <img
                        src={"/icons/mail.svg"}
                        alt=""
                        className="contact-info-icon icon"
                    />
                    <p>mail:</p>
                </div>
                <p><a href="mailto:stknu3373@uib.no">stknu3373@uib.no</a></p>

                <div className="contact-info">
                    <img
                        src={"/icons/phone.svg"}
                        alt=""
                        className="contact-info-icon icon"
                    />
                    <p>mobil:</p>
                </div>
                <p><a href="tel:90089605">900 89 605</a></p>

                <div className="contact-info">
                    <img
                        src={"/icons/address.svg"}
                        alt=""
                        className="contact-info-icon icon"
                    />
                    <p>sted:</p>
                </div>
                <p>Bergen</p>

            </div>
        </div>
    )
}