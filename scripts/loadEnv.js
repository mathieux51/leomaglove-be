const dotenv = require("dotenv")

const result = dotenv.config()

if (result.error) {
  throw result.error
}

Object.entries(result.parsed).forEach(([key, val]) => {
  if (val.length === 0) throw new Error(`Missing ${key}`)
})

console.log(result)
