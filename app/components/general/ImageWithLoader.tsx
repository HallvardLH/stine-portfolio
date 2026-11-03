import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useZoomableImage } from "./useZoomableImage";
import "./ImageWithLoader.css";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  // CSS classnames
  classes: string;
  // Optional height for the skeleton
  skeletonHeight?: number;
  // Clicking the image opens it fullscreen
  zoomable?: boolean;
  // A version of the image for small screens, used up to 899px wide
  mobileSrc?: string;
}

export default function ImageWithLoader({
  src,
  alt,
  classes,
  skeletonHeight = 300,
  zoomable = true,
  mobileSrc,
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const { imageRef, props: zoomProps, lightbox } = useZoomableImage();

  useEffect(() => {
    // If the image is already cached and loaded before React took over
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [imageRef, src, mobileSrc]);

  return (
    <>
      {!loaded && (
        <Skeleton
          className="image-skeleton"
          height={skeletonHeight}
          width="100%"
        />
      )}
      <picture style={{ display: loaded ? "contents" : "none" }}>
        {mobileSrc && <source media="(max-width: 899px)" srcSet={mobileSrc} />}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`image ${loaded ? "image-loaded" : ""} ${zoomable ? "image-zoomable" : ""} ${classes}`}
          style={{ display: loaded ? "block" : "none" }} // Hide until loaded
          {...(zoomable ? zoomProps : { ref: imageRef })}
        />
      </picture>
      {zoomable && lightbox}
    </>
  );
}
