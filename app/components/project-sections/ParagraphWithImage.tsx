import "./ParagraphWithImage.css";

interface ParagraphWithImageProps {
    textSection: React.ReactNode,
    imageSrc: string,
    imageText: string,
}

export default function ParagraphWithImage(props: ParagraphWithImageProps) {

    const { textSection, imageSrc, imageText } = props;

    return (
        <div className="paragraph-with-image-container">
            {textSection}

            <div className="paragraph-with-image-image-container">
                <img
                    src={imageSrc}
                    alt=""
                    className="paragraph-with-image-image"
                />
                <p className="text-small">{imageText}</p>
            </div>
        </div>
    )
}