import React from "react"
import dynamic from "next/dynamic"

const Body = dynamic(() => import("../components/Body"))
const Header = dynamic(() => import("../components/Header"))

const Index = () => (
  <>
    <Header />
    <Body />
  </>
)

export default Index
