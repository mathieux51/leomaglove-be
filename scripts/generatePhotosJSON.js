const fs = require('fs')
// const path = require('path')
const { promisify } = require('util')
const readdir = promisify(fs.readdir)

async function main() {
  try {
    const files = await readdir('assets/images/gallery')
    const photos = files.map(f => {
      // path.resolve(__dirname, `../assets/images/gallery/${f}`),
      return {
        src: 'https://source.unsplash.com/2ShvY8Lf6l0/1600x1200',
        srcSet: [
          'https://source.unsplash.com/2ShvY8Lf6l0/500x375 500w',
          'https://source.unsplash.com/2ShvY8Lf6l0/800x600 800w',
          'https://source.unsplash.com/2ShvY8Lf6l0/1024x768 1024w',
          'https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 1600w'
        ],
        sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
        // we need to get this info
        width: 4,
        height: 3
      }
    })
    // write the file
    console.log(photos)
  } catch (err) {
    console.error(err)
  }
}
main()
