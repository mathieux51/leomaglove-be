import { createGlobalStyle } from "styled-components"
import FontFaces from "./FontFaces"
import { normalize } from "polished"

export default createGlobalStyle`
  ${FontFaces}
  ${normalize()}

    /* Reset */
  button {
    border: 0;
    padding: 0;
    background: transparent;
  }

  ul {
    list-style: none;
  }

  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
  }
  /* fonts */
  body {
    color: ${({ theme }) => theme.g38};
		font-family: sans-serif;
    background: ${({ theme }) => theme.bg}
  }
	.fonts-loaded body {
		font-family: proxima-nova, sans-serif;
	}

  .fonts-loaded .ff-futura-pt {
    font-family: futura-pt, sans-serif;
  }

   /* flex */
  .flex {
    display: flex;
  }
  .fxd-c {
    flex-direction: column;
  }
  .jc-c {
    justify-content: center;
  } 
  .jc-e {
    justify-content: flex-end;
  } 
  .ai-c {
    align-items: center;
  }

  .flex-1 {
    flex: 1;
  }
  .w100 {
    width: 100%;
  }
  .h100 {
    height: 100%;
  }
  /* font-size */
  .f12 {
    font-size: 12px;
  }
  .f14 {
    font-size: 14px;
  }
  .f16 {
    font-size: 16px;
  }
  .f31 {
    font-size: 31px;
  }

  .fw300 {
    font-weight: 300;
  }
  .fw400 {
    font-weight: 400;
  }

  /* Text */
  .ttu {
    text-transform: uppercase;
  }
  .tdn {
    text-decoration: none;
  }
  .ta-c {
    text-align: center;
  }
  /* margin/padding */
  .m0 {
    margin: 0;
  }
  .p0 {
    padding: 0;
  }
  /* display */
  .d {
    display: block;
  }
  /* debug */
  .o {
    outline: 5px solid gold;
  }
  /* position */
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .t0 {
    top: 0;
  }
  .l0 {
    left: 0;
  }
  .r0 {
    right: 0;
  }
  .b0 {
    bottom: 0;
  }
  /* img */
  .cover {
    object-fit: cover;
  }
  .z-1 {
    z-index: -1;
  }
  .z0 {
    z-index: 0;
  }
  .z1 {
    z-index: 1;
  }
  .pointer {
    cursor: pointer;
  }
`
