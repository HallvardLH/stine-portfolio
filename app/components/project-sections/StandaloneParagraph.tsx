import "./StandaloneParagraph.css";

interface StandaloneParagraphProps {
    textSection: React.ReactNode,
}

export default function StandaloneParagraph(props: StandaloneParagraphProps) {

    const { textSection } = props;

    return (
        <div className="standalone-paragraph">

            {textSection}

        </div>
    )
}