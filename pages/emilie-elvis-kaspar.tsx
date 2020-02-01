import React from "react"
import dynamic from "next/dynamic"
import photos from "../constants/emilie-elvis-kaspar.json"
import Anchor from "../components/pages-shared/Anchor"
import StyledArchive from "../components/pages-shared/StyledArchive"

const Header = dynamic(() => import("../components/Header"))
const PhotosBody = dynamic(() => import("../components/PhotosBody"))

const EmilieKaspar = () => (
  <>
    <Header />
    <h1>PHOTOS CADEAUX merci Emilie, Elvis et Kaspar</h1>
    <Anchor
      href='https://www.dropbox.com/sh/p0ccphjfi51udto/AACjBvW0fKxWB5iGwmUpDsUZa?dl=0'
      target='_blank'
      download
    >
      <StyledArchive />
    </Anchor>
    <PhotosBody photos={photos} />
  </>
)

export default EmilieKaspar
