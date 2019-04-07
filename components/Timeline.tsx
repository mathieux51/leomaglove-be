import React from "react"
import styled from "styled-components"

const Container = styled.div.attrs({
  className: "flex jc-sa relative"
})``

interface Props {
  className?: string
}

const TimelineItem = ({ className }: Props) => (
  <svg width="100%" viewBox="0 0 221 121" className={className}>
    <circle cx="60.5" cy="60.5" r="60" fill="white" stroke="black" />
    <line x1="121" y1="59.5" x2="221" y2="59.5" stroke="black" />
  </svg>
)

const StyledTimelineItem = styled(TimelineItem)`
  width: 100px;
`

const Text = styled.span.attrs({ className: "absolute" })`
  bottom: 0;
  left: 50%;
  transform: translate3d(0, 0, 0);
`

const Timeline = () => (
  <Container>
    <Text>Timeline</Text>
    <StyledTimelineItem />
    <StyledTimelineItem />
    <StyledTimelineItem />
    <StyledTimelineItem />
  </Container>
)

export default Timeline
