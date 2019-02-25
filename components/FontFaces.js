import { css } from "styled-components"
import FontFaceList from "./FontFacesList"

const generateFontFace = (ff, fw, fs, woff2, woff) => css`
  @font-face {
    font-family: ${ff};
    src: url(${woff2}) format("woff2"), url(${woff}) format("woff");
    font-weight: ${fw};
    font-style: ${fs};
  }
`

const fontFaces = FontFaceList.map(f =>
  generateFontFace(f[0], f[1], f[2], f[3])
)

export default css`
  ${fontFaces}
`
