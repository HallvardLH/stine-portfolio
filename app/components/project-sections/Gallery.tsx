import "./Gallery.css";
import ImageWithLoader from "../general/ImageWithLoader";

interface ImageData {
  src: string;
  imageText?: string;
  altText: string;
  fullwidth?: boolean;
  // Crops the image to this CSS aspect ratio (used when `cropped` is set)
  aspectRatio?: string;
}

interface GalleryProps {
  images: ImageData[];
  combinedImageText?: string;
  // Crop each image to its aspectRatio instead of showing it uncropped
  cropped?: boolean;
}

export default function Gallery({
  images,
  combinedImageText,
  cropped,
}: GalleryProps) {
  return (
    <div className={`gallery-container ${cropped ? "gallery-cropped" : ""}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`gallery-image-container ${image.fullwidth ? "full-width-image" : ""}`}
          style={
            image.aspectRatio
              ? ({ "--aspect-ratio": image.aspectRatio } as React.CSSProperties)
              : undefined
          }
        >
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
