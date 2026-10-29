interface ArchiveBoxProps {
  /** The flaps are up and the projects stand up out of the box */
  open: boolean;
}

// A cardboard box, drawn flat. The two halves of the lid fold back and
// forward, and a few project cards rise out of it.
export default function ArchiveBox({ open }: ArchiveBoxProps) {
  return (
    <svg
      className={`archive-box ${open ? "is-open" : ""}`}
      viewBox="0 0 320 270"
      aria-hidden="true"
    >
      {/* The inside, seen from above */}
      <polygon points="64,96 256,96 276,132 44,132" fill="#5a4023" />

      {/* The back half of the lid, folded up behind the box */}
      <polygon
        className="archive-flap archive-flap-back"
        points="64,96 256,96 266,114 54,114"
        fill="#d6b078"
      />

      {/* What is in the box */}
      <g className="archive-cards">
        <rect
          x="84"
          y="118"
          width="62"
          height="84"
          fill="#6dff6a"
          transform="rotate(-4 115 160)"
        />
        <rect
          x="140"
          y="118"
          width="62"
          height="84"
          fill="#fefffa"
          transform="rotate(2 171 160)"
        />
        <rect
          x="196"
          y="118"
          width="46"
          height="84"
          fill="#e7eadb"
          transform="rotate(5 219 160)"
        />
      </g>

      {/* The front of the box, with a label */}
      <rect x="44" y="132" width="232" height="118" fill="#c4975a" />
      <rect x="112" y="166" width="96" height="46" fill="#fefffa" />
      <text
        x="160"
        y="196"
        textAnchor="middle"
        fill="#181b09"
        fontSize="20"
        fontWeight="700"
        style={{ fontFamily: "inherit", letterSpacing: "0.08em" }}
      >
        ARKIV
      </text>

      {/* The front half of the lid, folded down over the front */}
      <polygon
        className="archive-flap archive-flap-front"
        points="54,114 266,114 276,132 44,132"
        fill="#dcb985"
      />
    </svg>
  );
}
