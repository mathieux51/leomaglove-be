import React, { Fragment } from "react"
import Head from "next/head"
import Plyr from "react-plyr"

export default ({ type, videoId, className }) => (
  <Fragment>
    <Head>
      <link rel="stylesheet" href="https://cdn.plyr.io/3.4.8/plyr.css" />
    </Head>
    <Plyr type={type} videoId={videoId} className={className} />
  </Fragment>
)
