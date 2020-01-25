import React from "react"
import PhotoSwipe from "./PhotoSwipe"
// import styled from 'styled-components'
// import 'react-photoswipe/lib/photoswipe.css'
// import { PhotoSwipeGallery } from 'react-photoswipe'
// import { GalleryContext } from '../context/GalleryContext'

// const StyledPhotoSwipeGallery = styled(PhotoSwipeGallery)`
//   width: 100vw;

// & .pswp-thumbnails {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// }

// & .pswp-thumbnail {
//   flex: 1;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   cursor: pointer;
// `

// const Img = styled.img`
//   flex: 1;
//   object-fit: cover;
//   /* 6 to 8 pictures for 2560px */
//   /* max-height: 20vh; */
//   max-width: 16vw;
//   max-height: 10.667vw;
//   margin: 1px;
// `

function PhotosBody(props: Props) {
  // const { isOpen, setIsOpen } = React.useContext(GalleryContext)

  // const getThumbnailContent = (item: Photo) => {
  //   return <Img src={item.thumbnail} alt='' />
  //   // width={item.w} height={item.h}
  // }
  // const handleClose = () => setIsOpen(!isOpen)
  return (
    <PhotoSwipe photos={props.photos} />
    // <StyledPhotoSwipeGallery
    //   // onClose={handleClose}
    //   // isOpen={isOpen}
    //   items={props.photos}
    //   thumbnailContent={getThumbnailContent}
    // />
  )
}

export default PhotosBody

// import Gallery from 'react-photo-gallery'
// import Carousel, { Modal, ModalGateway } from 'react-images'
// import { isServer } from '../constants/constants'
// const [currentImage, setCurrentImage] = React.useState(0)
// const [viewerIsOpen, setViewerIsOpen] = React.useState(false)
// const openLightbox = React.useCallback((_, { index }) => {
//   setCurrentImage(index)
//   setViewerIsOpen(true)
// }, [])

// const closeLightbox = () => {
//   setCurrentImage(0)
//   setViewerIsOpen(false)
// }
/* <Gallery photos={_photos} onClick={openLightbox} />
<ModalGateway>
  {viewerIsOpen ? (
    <Modal onClose={closeLightbox}>
      <Carousel currentIndex={currentImage} views={_photos} />
    </Modal>
  ) : null}
</ModalGateway> */
