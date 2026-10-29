import { useEffect, useRef } from "react";
import type { TimelinePhoto } from "~/data/timeline";

interface TimelineLightboxProps {
  title: string;
  photos: TimelinePhoto[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d={
          direction === "left"
            ? "M10 5l-7 7 7 7M3 12h18"
            : "M14 5l7 7-7 7M21 12H3"
        }
      />
    </svg>
  );
}

// The photos of one experience in a dialog, one at a time. The browser holds
// focus inside the dialog and returns it to the thumbnail when it closes.
export default function TimelineLightbox({
  title,
  photos,
  index,
  onIndex,
  onClose,
}: TimelineLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photo = photos[index];
  const last = photos.length - 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    // Stop the page behind from scrolling while the photos are open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    // The dialog is the backdrop too, so a click on it itself closes it. The
    // keyboard way out is Esc, which the browser handles.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      className="timeline-lightbox"
      aria-label={`Bilder fra ${title}`}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" && index < last) onIndex(index + 1);
        if (event.key === "ArrowLeft" && index > 0) onIndex(index - 1);
      }}
      // The dialog fills the screen, so a click on it itself is a click outside
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="timeline-lightbox-top">
        <div>
          <p className="timeline-lightbox-title">{title}</p>
          <p className="timeline-lightbox-count" aria-live="polite">
            Bilde {index + 1} av {photos.length}
          </p>
        </div>
        <button
          className="timeline-lightbox-round"
          aria-label="Lukk"
          onClick={() => dialogRef.current?.close()}
        >
          <img
            src="/icons/close.svg"
            alt=""
            className="timeline-lightbox-icon"
          />
        </button>
      </div>

      <div className="timeline-lightbox-stage">
        <button
          className="timeline-lightbox-round"
          aria-label="Forrige bilde"
          disabled={index === 0}
          onClick={() => onIndex(index - 1)}
        >
          <Arrow direction="left" />
        </button>
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="timeline-lightbox-image"
          decoding="async"
        />
        <button
          className="timeline-lightbox-round"
          aria-label="Neste bilde"
          disabled={index === last}
          onClick={() => onIndex(index + 1)}
        >
          <Arrow direction="right" />
        </button>
      </div>

      <div className="timeline-lightbox-bottom">
        <p className="timeline-lightbox-caption">{photo.caption}</p>
        {photos.length > 1 && (
          <ul className="timeline-lightbox-thumbs">
            {photos.map((item, i) => (
              <li key={item.src}>
                <button
                  aria-label={`Vis bilde ${i + 1}`}
                  aria-current={i === index}
                  className={i === index ? "is-active" : ""}
                  onClick={() => onIndex(i)}
                >
                  <img src={item.src} alt="" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </dialog>
  );
}
