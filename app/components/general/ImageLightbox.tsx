import { useEffect, useRef, useState } from "react";
import "./ImageLightbox.css";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
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

interface ImageLightboxProps {
  images: GalleryImage[];
  /** The image it opens on */
  index?: number;
  onClose: () => void;
  /** Label for the dialog when the image has no alt text */
  label?: string;
}

// Images fullscreen, one at a time, with arrows, a counter and the caption.
// Used on the article pages and on Tidslinje, so they behave the same.
export default function ImageLightbox({
  images,
  index = 0,
  onClose,
  label = "Bilde i fullskjerm",
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [position, setPosition] = useState(index);
  // Shows the original pixels 1:1 (scrollable) instead of fitted to the screen
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [actualSize, setActualSize] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    // Stop the page behind from scrolling while the image is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const step = (direction: number) => {
    setPosition((value) => (value + direction + images.length) % images.length);
    setActualSize(false);
    dialogRef.current?.scrollTo(0, 0);
  };

  const shown = images[position];

  return (
    // The dialog is the backdrop too, so a click on it itself closes it. The
    // keyboard way out is Esc, which the browser handles.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      className={`image-lightbox ${images.length > 1 ? "image-lightbox-gallery" : ""}`}
      aria-label={shown.alt || label}
      onClose={onClose}
      onKeyDown={(event) => {
        if (images.length < 2) return;
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
      // The dialog fills the screen, so a click on it (not the image) is a click outside
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      {/* The same original file as on the page, never a smaller copy */}
      <figure
        className={`image-lightbox-figure ${actualSize ? "actual-size" : ""}`}
      >
        {/* The image only toggles 1:1 with a click; the keyboard has the arrows and Esc */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
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
          onLoad={(event) => setNaturalWidth(event.currentTarget.naturalWidth)}
          onClick={() => setActualSize((value) => !value)}
        />
        {shown.caption && (
          <figcaption className="image-lightbox-caption">
            {shown.caption}
          </figcaption>
        )}
      </figure>
      {images.length > 1 && (
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
            {position + 1}/{images.length}
          </span>
        </>
      )}
      <button
        className="image-lightbox-close"
        onClick={() => dialogRef.current?.close()}
        // Focus on Close, so Esc and Enter leave the same way on every page
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      >
        Lukk
        <span aria-hidden="true">✕</span>
      </button>
    </dialog>
  );
}
