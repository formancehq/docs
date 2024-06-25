import type { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    color: "hsl(180, 14%, 93%)",
    backgroundColor: "hsl(187, 97%, 12%)",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "hsl(242, 29%, 59%)",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "hsl(184, 11%, 53%)",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#36acaa",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db",
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "hsl(206, 48%, 59%)",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "hsl(123, 27%, 68%)",
      },
    },
  ],
}
export default theme;