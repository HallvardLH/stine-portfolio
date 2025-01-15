import "./ParagraphWithImage.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface ParagraphWithImageProps {
    textSection: React.ReactNode,
    imageSrc: string,
    imageText: string,
    altText: string,
    // Whether the text and image will be side by side, or image under text
    direction?: "horizontal" | "vertical",
    reverse?: boolean
}

export default function ParagraphWithImage(props: ParagraphWithImageProps) {

    const { textSection, imageSrc, imageText, altText, direction = "horizontal", reverse = false } = props;

    return (
        <div className={"paragraph-with-image-container " + (direction == "vertical" ? "vertical" : "") + (reverse ? "reverse" : "")}>
            {textSection}

            <div className="paragraph-with-image-image-container">
                <ImageWithLoader
                    src={imageSrc}
                    alt={altText}
                    classes="paragraph-with-image-image"
                />
                <p className="text-small">{imageText}</p>
            </div>
        </div>
    )
}