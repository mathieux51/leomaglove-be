import React from "react"
import PhotoSwipe from "./PhotoSwipe"
import PhotoGallery from "./PhotoGallery"
import { GalleryContext } from "../context/GalleryContext"

type Photo = {
  src: string
  w: number
  h: number
  thumbnail: string
}

type Props = {
  photos: Photo[]
}

function PhotosBody(props: Props) {
  const { isOpen, index, setIsOpen, setIndex } = React.useContext(
    GalleryContext
  )

  const handleClick = (index: number) => {
    setIndex(index)
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return isOpen ? (
    <PhotoSwipe photos={props.photos} index={index} onClose={handleClose} />
  ) : (
    <PhotoGallery photos={props.photos} handleClick={handleClick} />
  )
}

export default PhotosBody
