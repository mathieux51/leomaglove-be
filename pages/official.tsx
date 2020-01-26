import React from "react"
import dynamic from "next/dynamic"
import photos from "../constants/official.json"

const Header = dynamic(() => import("../components/Header"))
const PhotosBody = dynamic(() => import("../components/PhotosBody"))

const Photos = () => (
  <>
    <Header />
    <PhotosBody photos={photos} />
  </>
)

export default Photos
