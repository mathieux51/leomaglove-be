import { css } from "styled-components"
import sizes from "./style/sizes"

export const media: Media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (
      literals: TemplateStringsArray,
      ...placeholders: any[]
    ) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(literals, ...placeholders)}
      }
    `
    return acc
  },
  {} as Record<
    keyof typeof sizes,
    (l: TemplateStringsArray, ...p: any[]) => string
  >
)
