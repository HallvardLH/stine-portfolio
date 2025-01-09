import "./ParagraphWithImage.css";

interface ParagraphWithImageProps {
    textSection: React.ReactNode,
    imageSrc: string,
}

export default function ParagraphWithImage(props: ParagraphWithImageProps) {

    const { textSection, imageSrc } = props;

    return (
        <div className="paragraph-with-image-container">
            {textSection}

            <img
                src={imageSrc}
                alt=""
                className="paragraph-with-image-image"
            />
        </div>
    )
}