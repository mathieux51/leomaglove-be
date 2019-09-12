import * as React from "react"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("../components/Header"))
const PhotosBody = dynamic(() => import("../components/PhotosBody"))

const Photos = () => (
  <>
    <Header />
    <PhotosBody />
  </>
)

export default Photos
