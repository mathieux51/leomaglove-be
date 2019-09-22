import React from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import photos from '../constants/photos.json'

function PhotosBody() {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false)

  const openLightbox = React.useCallback((_, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  // depending on the performance strategy we might need an intial photos
  // array. We can then extend the array onScroll
  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={photos} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default PhotosBody
