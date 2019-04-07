import { withRouter, SingletonRouter } from "next/router"
import styled from "styled-components"
import Main from "./Main"
import HomeLink from "./HomeLink"
import Information from "./Information"
import { france, belgium } from "../constants"

const Top = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c relative"
})`
  min-height: 50vh;
  max-height: 31rem;
  border: 1px solid black;
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-c relative"
})`
  flex: 0 6rem;
`

const Big = styled.span.attrs({
  className: "f31 ttu"
})``

const ButtonContainer = styled.div.attrs({
  className: "w100 flex ai-c jc-sa"
})``

interface Props {
  router: SingletonRouter
}

const Body = ({ router }: Props) => {
  const isOpen = router.query ? !!router.query.q : false
  return (
    <Main id="main">
      <Information isOpen={isOpen} />
      {!isOpen && (
        <Top>
          <Big>Vidéo in loop</Big>
        </Top>
      )}
      <>
        <Middle>
          {/* <Text>Plus d'info</Text> */}
          <ButtonContainer>
            <HomeLink q={france} text="Les invités en France" />
            <HomeLink q={belgium} text="Les invités en Belgique" />
          </ButtonContainer>
        </Middle>
      </>
    </Main>
  )
}

export default withRouter(Body)
