const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const sizeOf = require('image-size')

const readdir = promisify(fs.readdir)

async function main() {
  try {
    if (process.argv.length < 4) {
      throw new Error('Usage node generate.js path nameOfFile')
    }

    const dir = process.argv[2]
    const nameOfFile = process.argv[3]

    // create missing thumbnail directory

    // create thumbnails images
    // mogrify -path thumbnail -resize 20% -quality 80% *.jpg

    // generate .json
    const files = await readdir(dir)

    const photos = files
      .map(f => {
        const filePath = path.resolve(__dirname, `../${dir}/${f}`)
        if (/\.DS_Store/.test(f) || fs.lstatSync(filePath).isDirectory()) {
          return null
        }
        // remove /public
        const encoded = encodeURI(dir)
        const formatEncoded = encoded.substring(7)

        const { width, height } = sizeOf(filePath)
        const src = path.resolve(__dirname, `/${formatEncoded}/${f}`)
        const thumbnail = path.resolve(
          __dirname,
          `/${formatEncoded}/thumbnail/${f}`
        )

        return {
          src,
          thumbnail,
          w: parseInt(width, 10),
          h: parseInt(height, 10)
        }
      })
      .filter(Boolean)
    // write the file
    // console.log(photos)
    fs.writeFileSync(
      path.resolve(__dirname, `../constants/${nameOfFile}.json`),
      JSON.stringify(photos)
    )
  } catch (err) {
    console.error(err)
  }
}
main()
