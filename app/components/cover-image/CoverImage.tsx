import "./CoverImage.css";

interface ProjectCardProps {
    src: string,
}

export default function CoverImage({ src }: ProjectCardProps) {
    return (
        <div className="cover-image-container">
            <img
                src={src}
                alt=""
                className="cover-image"
            />
            <div className="cover-image-back-container">
                <img
                    src="/icons/back.svg"
                    alt=""
                    className="cover-image-back-icon"
                />
                <p className="text-small">Tilbake til prosjektbibliotek</p>
            </div>
        </div>
    )
}

