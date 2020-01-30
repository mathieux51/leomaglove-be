import React from "react"
import styled from "styled-components"
import { media } from "../helpers"
import { isServer } from "../constants/constants"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -2rem;
`

const A = styled.a`
  display: flex;
`

// 6 to 8 pictures for 2560px
// max-height: 20vh
const Img = styled.img`
  flex: 1;
  object-fit: cover;
  width: 16vw;
  height: 16vw;
  margin: 1px;
  ${media.phone`
    width: 32vw;
    height: 32vw;
  `}
`

type Photo = {
  src: string
  w: number
  h: number
  thumbnail: string
}

type Props = {
  photos: Photo[]
  handleClick: (i: number) => void
}

function PhotoGallery(props: Props): JSX.Element {
  const containerRef = React.createRef<HTMLDivElement>()
  const hasHash = !isServer && window.location.hash
  React.useEffect(() => {
    if (hasHash) {
      // const hash = window.location.hash.substr(1)
      const hash = window.location.hash.split("#")[1].split("&")[0]
      const element = containerRef.current?.children[Number(hash)]
      if (element instanceof HTMLElement) {
        // console.log(element.offsetTop)
        // window.scrollTo(0, element.offsetTop)
        element.scrollIntoView()
      }
    }
  }, [hasHash])
  return (
    <Container ref={containerRef}>
      {props.photos.map((photo, i) => {
        const handleClick = (): void => props.handleClick(i)
        return (
          <A href={`#${i}`} onClick={handleClick} key={i}>
            <Img
              data-src={photo.thumbnail}
              alt=''
              className='lazyload'
              id={i + ""}
            />
          </A>
        )
      })}
    </Container>
  )
}

export default PhotoGallery
