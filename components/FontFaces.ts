import { css } from "styled-components"
import fontFaceList from "./fontFacesList"



const generateFontFace = (ff: string, fw: string, fs: string, woff2: string) => css`
  @font-face {
    font-family: ${ff};
    src: url(${woff2}) format("woff2");
    font-weight: ${fw};
    font-style: ${fs};
  }
`

const fontFaces = fontFaceList.map(([ff, fw, fs, woff2]) =>
  generateFontFace(ff, fw, fs, woff2)
)

const _css = css`
  ${fontFaces}
`

export default _css
