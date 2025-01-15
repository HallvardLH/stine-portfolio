import "./TwoImages.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface TwoImagesProps {
    imageSrc1: string,
    imageText1?: string,
    altText1: string,
    imageSrc2: string,
    imageText2?: string,
    altText2: string,
    combinedImageText?: string,
}

export default function TwoImages(props: TwoImagesProps) {

    const { imageSrc1, imageText1, altText1, imageSrc2, imageText2, altText2, combinedImageText } = props;

    return (
        <div className="two-images-container">
            <div className="two-images-image-container">
                <ImageWithLoader
                    src={imageSrc1}
                    alt={altText1}
                    classes="two-images-image"
                />
                {!combinedImageText && (
                    <p className="text-small">{imageText1}</p>
                )}
            </div>
            <div className="two-images-image-container">
                <ImageWithLoader
                    src={imageSrc2}
                    alt={altText2}
                    classes="two-images-image"
                />
                {!combinedImageText && (
                    <p className="text-small">{imageText2}</p>
                )}
            </div>
            {combinedImageText && (
                <p className="text-small combined-image-text">{combinedImageText}</p>
            )}
        </div>
    )
}