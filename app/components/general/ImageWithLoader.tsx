import { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ImageWithLoader.css";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

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

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M15 4 7 12l8 8" : "M9 4l8 8-8 8"} />
    </svg>
  );
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
  // Shows the original pixels 1:1 (scrollable) instead of fitted to the screen
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [actualSize, setActualSize] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  // Every zoomable image on the page, so the fullscreen view can step through
  // them in the order they appear
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [position, setPosition] = useState(0);

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

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    dialog.showModal();
    // Stop the page behind from scrolling while the image is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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
    setPosition(Math.max(index, 0));
    setActualSize(false);
    setOpen(true);
  };

  const step = (direction: number) => {
    setPosition(
      (value) => (value + direction + gallery.length) % gallery.length,
    );
    setActualSize(false);
    dialogRef.current?.scrollTo(0, 0);
  };

  const shown = gallery[position] ?? { src, alt };

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
        <dialog
          ref={dialogRef}
          className={`image-lightbox ${gallery.length > 1 ? "image-lightbox-gallery" : ""}`}
          aria-label={shown.alt || "Bilde i fullskjerm"}
          onClose={() => setOpen(false)}
          onKeyDown={(event) => {
            if (gallery.length < 2) return;
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
          }}
          // The dialog fills the screen, so a click on it (not the image) is a click outside
          onClick={(event) => {
            if (event.target === event.currentTarget)
              dialogRef.current?.close();
          }}
        >
          {/* The same original file as on the page, never a smaller copy */}
          <figure
            className={`image-lightbox-figure ${actualSize ? "actual-size" : ""}`}
          >
            <img
              key={shown.src}
              src={shown.src}
              alt={shown.alt}
              className={`image-lightbox-image ${actualSize ? "actual-size" : ""}`}
              style={
                actualSize
                  ? { width: `${naturalWidth / window.devicePixelRatio}px` }
                  : undefined
              }
              decoding="async"
              onLoad={(event) =>
                setNaturalWidth(event.currentTarget.naturalWidth)
              }
              onClick={() => setActualSize((value) => !value)}
            />
            {shown.caption && (
              <figcaption className="image-lightbox-caption">
                {shown.caption}
              </figcaption>
            )}
          </figure>
          {gallery.length > 1 && (
            <>
              <button
                className="image-lightbox-step image-lightbox-prev"
                aria-label="Forrige bilde"
                onClick={() => step(-1)}
              >
                <Chevron direction="left" />
              </button>
              <button
                className="image-lightbox-step image-lightbox-next"
                aria-label="Neste bilde"
                onClick={() => step(1)}
              >
                <Chevron direction="right" />
              </button>
              <span className="image-lightbox-count" aria-live="polite">
                {position + 1}/{gallery.length}
              </span>
            </>
          )}
          <button
            className="image-lightbox-close"
            onClick={() => dialogRef.current?.close()}
            autoFocus
          >
            Lukk
            <span aria-hidden="true">✕</span>
          </button>
        </dialog>
      )}
    </>
  );
}
