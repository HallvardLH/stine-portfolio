import "./CoverImage.css";
import { Link } from "@remix-run/react";
import Button from "../general/Button";

interface ProjectCardProps {
  src: string;
  colorScheme?: string | null;
}

export default function CoverImage({ src, colorScheme }: ProjectCardProps) {
  return (
    <div
      className={"cover-image-container " + (colorScheme ? colorScheme : "")}
    >
      <Link
        className={
          "cover-image-back-container " + (colorScheme ? colorScheme : "")
        }
        to="/portefølje"
      >
        <Button label="Tilbake" arrowDirection="left" />
      </Link>
      <img src={src} alt="" className="cover-image" />
    </div>
  );
}
