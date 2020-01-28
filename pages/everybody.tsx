import React from "react"
import dynamic from "next/dynamic"
import photos from "../constants/everybody.json"
import Anchor from "../components/pages-shared/Anchor"
import StyledArchive from "../components/pages-shared/StyledArchive"

const Header = dynamic(() => import("../components/Header"))
const PhotosBody = dynamic(() => import("../components/PhotosBody"))

const Photos = () => (
  <>
    <Header />
    <h1>PHOTOS FLASH by everybody</h1>
    <Anchor
      href='https://www.dropbox.com/sh/s6bdz1l7lq5nc8k/AADpyrSgOSDdrw8_Uggox5lba?dl=0'
      target='_blank'
      download
    >
      <StyledArchive />
    </Anchor>
    <PhotosBody photos={photos} />
  </>
)

export default Photos
