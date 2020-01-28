import React from "react"
import dynamic from "next/dynamic"
import photos from "../constants/official.json"
import Anchor from "../components/pages-shared/Anchor"
import StyledArchive from "../components/pages-shared/StyledArchive"

const Header = dynamic(() => import("../components/Header"))
const PhotosBody = dynamic(() => import("../components/PhotosBody"))

const Official = () => (
  <>
    <Header />
    <h1>La crème de la crème</h1>
    <Anchor
      href='https://www.dropbox.com/sh/ojodc6movs7qig8/AAB37TWmz0Xg1Ce2oxurUXxEa?dl=0'
      target='_blank'
      download
    >
      <StyledArchive />
    </Anchor>
    <PhotosBody photos={photos} />
  </>
)

export default Official
