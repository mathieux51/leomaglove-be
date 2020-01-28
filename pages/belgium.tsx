import React from "react"
import dynamic from "next/dynamic"
import photos from "../constants/belgium.json"
import Anchor from "../components/pages-shared/Anchor"
import StyledArchive from "../components/pages-shared/StyledArchive"

const Header = dynamic(() => import("../components/Header"))
const PhotosBody = dynamic(() => import("../components/PhotosBody"))

const Belgium = () => (
  <>
    <Header />
    <h1>Belgique: la totale</h1>
    <Anchor
      href='https://www.dropbox.com/sh/l4z394nuedkwd6a/AABhiQZCvtfhn-wnOLujPaeoa?dl=0'
      target='_blank'
      download
    >
      <StyledArchive />
    </Anchor>
    <PhotosBody photos={photos} />
  </>
)

export default Belgium
