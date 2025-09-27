import "./StandaloneImage.css"

import ImageWithLoader from "../general/ImageWithLoader"

interface StandaloneImageProps {
    imageSrc: string;
    imageText?: string;
    altText: string;
}
export function StandaloneImage({ imageSrc, imageText, altText }: StandaloneImageProps) {
    return (
        <div>
            <ImageWithLoader
                src={imageSrc}
                alt={altText}
                classes="standalone-image"
            />
            <p className="text-small">{imageText}</p>
        </div>
    )
}