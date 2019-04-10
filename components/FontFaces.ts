import { css } from "styled-components"
import fontFaceList from "./fontFacesList"

const generateFontFace = (ff, fw, fs, woff2) => css`
  @font-face {
    font-family: ${ff};
    src: url(${woff2}) format("woff2");
    font-weight: ${fw};
    font-style: ${fs};
  }
`

const fontFaces = fontFaceList.map(f =>
  generateFontFace(f[0], f[1], f[2], f[3])
)

const _css = css`
  ${fontFaces}
`

export default _css
