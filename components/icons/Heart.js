import React from "react"
import styled from "styled-components"

const Path = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #e2001a;
`

const Heart = ({ className }) => (
  <svg width="100%" viewBox="0 0 57 50" className={className}>
    <Path d="M27.0123 13.8472C29.2633 11.2551 31.3779 8.5266 33.7653 6.07094C36.9031 2.79673 40.6548 0 45.2933 0C47.9536 0 51.0232 0.682128 53.1378 2.79673C55.2524 4.91132 56.6166 7.4352 56.6848 10.8458C56.7531 16.7121 54.5702 21.4188 50.8185 25.5798C46.3847 30.2865 41.678 34.8568 37.1078 39.427C35.266 41.2688 33.4925 43.1105 31.5825 44.8158C29.3997 46.6576 27.0805 48.3629 24.6248 49.8636C24.0109 50.2728 22.0327 49.7271 21.8281 49.1814C20.2592 45.0887 16.7121 42.4966 14.1883 39.1542C10.4366 34.3793 7.16234 29.2633 4.22919 23.9427C2.59208 21.0778 0.886762 18.0082 0.204634 14.8022C-0.341069 12.2783 0.409272 9.41337 0.750336 6.68486C0.886762 6.27558 1.56889 5.66166 2.11459 5.45703C5.11596 4.29741 8.11732 2.86494 11.528 3.61528C11.869 3.68349 12.2101 3.75171 12.5512 3.75171C18.0082 3.13779 21.2824 6.54843 24.2838 10.2319C25.307 11.3915 26.1255 12.6876 27.0123 13.8472Z" />
  </svg>
)

export default Heart
