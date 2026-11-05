import { useRef, useState } from "react";
import ImageLightbox, { type GalleryImage } from "./ImageLightbox";

// The caption under an image on the page, shown under it in fullscreen too
// Fullscreen shows the original, not the lighter version the page loaded
function originalOf(url: string) {
  return url.replace(/-(800|1400|2400|3200)\.webp$/, ".webp");
}

function toGalleryImage(img: HTMLImageElement): GalleryImage {
  return {
    src: originalOf(img.currentSrc || img.getAttribute("src") || ""),
    alt: img.alt,
    caption:
      img.closest("figure")?.querySelector("figcaption")?.textContent ??
      undefined,
    // For transparent images that need their own background in fullscreen
    background: img.dataset.lightboxBackground,
  };
}

// Makes an image open fullscreen on click or Enter. Every zoomable image on the
// page is in the same gallery, in the order they appear, so the fullscreen view
// can step through them. Put `props` on the <img> and render `lightbox` next to it.
export function useZoomableImage() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [open, setOpen] = useState(false);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [startAt, setStartAt] = useState(0);

  const openImage = () => {
    const elements = Array.from(
      document.querySelectorAll<HTMLImageElement>("img.image-zoomable"),
    );
    const index = imageRef.current ? elements.indexOf(imageRef.current) : -1;
    setGallery(
      index === -1 && imageRef.current
        ? [toGalleryImage(imageRef.current)]
        : elements.map(toGalleryImage),
    );
    setStartAt(Math.max(index, 0));
    setOpen(true);
  };

  const props = {
    ref: imageRef,
    role: "button",
    tabIndex: 0,
    onClick: openImage,
    onKeyDown: (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImage();
      }
    },
  };

  const lightbox = open ? (
    <ImageLightbox
      images={gallery}
      index={startAt}
      onClose={() => setOpen(false)}
    />
  ) : null;

  return { imageRef, props, lightbox };
}
