import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ImageWithLoaderProps {
    src: string;
    alt: string;
    // CSS classnames
    classes: string;
    // Optional height for the skeleton
    skeletonHeight?: number;
}

export default function ImageWithLoader({ src, alt, classes, skeletonHeight = 300 }: ImageWithLoaderProps) {
    const [loaded, setLoaded] = useState(false);

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

    return (
        <>
            {!loaded && <Skeleton className="image-skeleton" height={skeletonHeight} width="100%" />}
            <img
                src={src}
                alt={alt}
                className={`image ${loaded ? "image-loaded" : ""} ${classes}`}
                style={{ display: loaded ? "block" : "none" }} // Hide until loaded
            />
        </>
    );
}
