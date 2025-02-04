import "./Gallery.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface ImageData {
    src: string;
    imageText?: string;
    altText: string;
}

interface GalleryProps {
    images: ImageData[];
    combinedImageText?: string;
}

export default function Gallery({ images, combinedImageText }: GalleryProps) {
    return (
        <div className="gallery-container">
            {images.map((image, index) => (
                <div key={index} className="gallery-image-container">
                    <ImageWithLoader
                        src={image.src}
                        alt={image.altText}
                        classes="gallery-image"
                    />
                    {image.imageText && !combinedImageText && (
                        <p className="text-small gallery-text">{image.imageText}</p>
                    )}
                </div>
            ))}
            {combinedImageText && (
                <p className="text-small combined-image-text">{combinedImageText}</p>
            )}
        </div>
    );
}
