export interface ArchiveItem {
  id: string;
  /** Shown in the margin, as written */
  year: string;
  title: string;
  description: string;
  tags?: string[];
  link?: { to: string; label: string };
}

/** Small projects that do not need to stand out, newest first */
export const archive: ArchiveItem[] = [];
