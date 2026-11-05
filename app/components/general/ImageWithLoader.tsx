import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { imageManifest } from "~/data/imageManifest";
import { useZoomableImage } from "./useZoomableImage";
import "./ImageWithLoader.css";

// The widest light version. The original is only used fullscreen.
const MAX_WIDTH = 3200;
// The widest an image gets on a page, and the margin around it on phones
const DEFAULT_SIZES = "(max-width: 899px) calc(100vw - 3rem), 1120px";

// "/rema/home.webp" -> "/rema/home-800.webp 800w, /rema/home-1400.webp 1400w, ..."
function srcSetFor(src: string) {
  const entry = imageManifest[src];
  if (!entry) return undefined;
  const sources = entry.variants.map(
    (width) => `${src.replace(/\.webp$/, `-${width}.webp`)} ${width}w`,
  );
  if (entry.width <= MAX_WIDTH) sources.push(`${src} ${entry.width}w`);
  return sources.length > 1 ? sources.join(", ") : undefined;
}

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  // CSS classnames
  classes: string;
  // Optional height for the skeleton
  skeletonHeight?: number;
  // Makes the skeleton as tall as the image will be, so nothing jumps when it loads
  skeletonRatio?: boolean;
  // Clicking the image opens it fullscreen
  zoomable?: boolean;
  // A version of the image for small screens, used up to 899px wide
  mobileSrc?: string;
  // How wide the image is on the page, for choosing the right file size
  sizes?: string;
}

export default function ImageWithLoader({
  src,
  alt,
  classes,
  skeletonHeight = 300,
  skeletonRatio = false,
  zoomable = true,
  mobileSrc,
  sizes = DEFAULT_SIZES,
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const { imageRef, props: zoomProps, lightbox } = useZoomableImage();
  const entry = imageManifest[src];
  // Images with lighter versions wait until they are near the screen, and are
  // kept in the layout (but invisible) while they load. Others are loaded at once.
  const lazy = Boolean(entry);

  useEffect(() => {
    // If the image is already cached and loaded before React took over
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [imageRef, src, mobileSrc]);

  // The browser decides when a lazy image starts loading, and some never do.
  // This starts it once the image is near the screen, whatever the browser does.
  useEffect(() => {
    const image = imageRef.current;
    if (!lazy || !image) return;
    if (!("IntersectionObserver" in window)) {
      image.loading = "eager";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          image.loading = "eager";
          observer.disconnect();
        }
      },
      { rootMargin: "1000px 0px" },
    );
    observer.observe(image);
    return () => observer.disconnect();
  }, [imageRef, lazy, src]);

  return (
    <>
      {!loaded &&
        (skeletonRatio && entry ? (
          <div
            className="image-skeleton-box"
            style={{
              aspectRatio: `var(--ratio, ${entry.width} / ${entry.height})`,
            }}
          >
            <Skeleton className="image-skeleton" height="100%" width="100%" />
          </div>
        ) : (
          <Skeleton
            className="image-skeleton"
            height={skeletonHeight}
            width="100%"
          />
        ))}
      <picture style={{ display: loaded || lazy ? "contents" : "none" }}>
        {mobileSrc && (
          <source
            media="(max-width: 899px)"
            srcSet={srcSetFor(mobileSrc) ?? mobileSrc}
            sizes={sizes}
          />
        )}
        <img
          src={src}
          srcSet={srcSetFor(src)}
          sizes={srcSetFor(src) ? sizes : undefined}
          alt={alt}
          loading={lazy ? "lazy" : undefined}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`image ${loaded ? "image-loaded" : ""} ${zoomable ? "image-zoomable" : ""} ${classes}`}
          style={
            loaded
              ? { display: "block" }
              : lazy
                ? {
                    position: "absolute",
                    width: 1,
                    height: 1,
                    opacity: 0,
                    pointerEvents: "none",
                  }
                : { display: "none" }
          }
          {...(zoomable ? zoomProps : { ref: imageRef })}
        />
      </picture>
      {zoomable && lightbox}
    </>
  );
}
