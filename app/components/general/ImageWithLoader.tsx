import { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ImageLightbox, { type GalleryImage } from "./ImageLightbox";
import "./ImageWithLoader.css";

// The caption under an image on the page, shown under it in fullscreen too
function toGalleryImage(img: HTMLImageElement): GalleryImage {
  return {
    src: img.getAttribute("src") ?? "",
    alt: img.alt,
    caption:
      img.closest("figure")?.querySelector("figcaption")?.textContent ??
      undefined,
  };
}

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  // CSS classnames
  classes: string;
  // Optional height for the skeleton
  skeletonHeight?: number;
  // Clicking the image opens it fullscreen
  zoomable?: boolean;
}

export default function ImageWithLoader({
  src,
  alt,
  classes,
  skeletonHeight = 300,
  zoomable = true,
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  // Every zoomable image on the page, so the fullscreen view can step through
  // them in the order they appear
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [startAt, setStartAt] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    if (img.complete) {
      // If the image is already cached and loaded
      setLoaded(true);
    } else {
      // If not, wait for it to load
      img.onload = () => setLoaded(true);
    }
  }, [src]);

  const openImage = () => {
    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>("img.image-zoomable"),
    ).map(toGalleryImage);
    const index = images.findIndex((image) => image.src === src);
    setGallery(
      index === -1 && imageRef.current
        ? [toGalleryImage(imageRef.current)]
        : images,
    );
    setStartAt(Math.max(index, 0));
    setOpen(true);
  };

  return (
    <>
      {!loaded && (
        <Skeleton
          className="image-skeleton"
          height={skeletonHeight}
          width="100%"
        />
      )}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`image ${loaded ? "image-loaded" : ""} ${zoomable ? "image-zoomable" : ""} ${classes}`}
        style={{ display: loaded ? "block" : "none" }} // Hide until loaded
        {...(zoomable && {
          role: "button",
          tabIndex: 0,
          onClick: openImage,
          onKeyDown: (event: React.KeyboardEvent) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openImage();
            }
          },
        })}
      />
      {open && (
        <ImageLightbox
          images={gallery}
          index={startAt}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
