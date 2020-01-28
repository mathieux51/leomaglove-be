import React from "react"
import dynamic from "next/dynamic"
import photos from "../constants/france.json"
import Anchor from "../components/pages-shared/Anchor"
import StyledArchive from "../components/pages-shared/StyledArchive"

const Header = dynamic(() => import("../components/Header"))
const PhotosBody = dynamic(() => import("../components/PhotosBody"))

const France = () => (
  <>
    <Header />
    <h1>Le Sud: la totale</h1>
    <Anchor
      href='https://www.dropbox.com/sh/2w0w8wmet1z5jbr/AABcKz_7dP4LD31mcK8hGepna?dl=0'
      target='_blank'
      download
    >
      <StyledArchive />
    </Anchor>
    <PhotosBody photos={photos} />
  </>
)

export default France
