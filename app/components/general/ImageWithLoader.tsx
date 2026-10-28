import { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
    setActualSize(false);
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
          className="image-lightbox"
          aria-label={alt || "Bilde i fullskjerm"}
          onClose={() => setOpen(false)}
          // The dialog fills the screen, so a click on it (not the image) is a click outside
          onClick={(event) => {
            if (event.target === event.currentTarget)
              dialogRef.current?.close();
          }}
        >
          {/* The same original file as on the page, never a smaller copy */}
          <img
            src={src}
            alt={alt}
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
