import React from "react"

const Emoji = ({ text, symbol, ...rest }) => (
  <span role="img" aria-label={text} {...rest}>
    {symbol}
  </span>
)

export default Emoji
