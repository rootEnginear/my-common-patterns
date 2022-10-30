const TAGS = ["html", "css", "js/ts"] as const;
export type TagsType = typeof TAGS[number];

type TagDataType = {
  name: string;
  backgroundColor: string;
  textColor: string;
};

export const TAG_DATA: Record<TagsType, TagDataType> = {
  html: {
    name: "HTML",
    backgroundColor: "#E34F26",
    textColor: "#000",
  },
  css: {
    name: "CSS",
    backgroundColor: "#1572B6",
    textColor: "#fff",
  },
  "js/ts": {
    name: "JS/TS",
    backgroundColor: "#F7DF1E",
    textColor: "#000",
  },
};
