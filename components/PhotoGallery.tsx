import React from "react"
import styled from "styled-components"
import { media } from "../helpers"
// import { GalleryContext } from '../context/GalleryContext'

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

function PhotoGallery(props: Props) {
  return (
    <Container>
      {props.photos.map((photo, i) => {
        const handleClick = () => props.handleClick(i)
        return (
          <A href='#' onClick={handleClick} key={i}>
            <Img src={photo.thumbnail} alt='' />
          </A>
        )
      })}
    </Container>
  )
}

export default PhotoGallery
