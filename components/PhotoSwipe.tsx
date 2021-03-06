import React from "react"
import styled from "styled-components"
import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default"
import PhotoSwipe from "photoswipe"

type Photo = {
  src: string
  w: number
  h: number
  thumbnail: string
}

type Props = {
  photos: Photo[]
  index: number
  onClose: () => void
}

const Button = styled.button`
  color: white;
`

const _PhotoSwipe: React.FC<Props> = props => {
  const options = {
    index: props.index,
    history: false
  }
  let pswpRef = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    if (pswpRef.current) {
      // code to run on component mount
      const pswp = new PhotoSwipe(
        pswpRef.current,
        PhotoswipeUIDefault,
        props.photos,
        options
      )
      pswp.init()
      pswp.listen("close", props.onClose)
      // pswp.listen("updateScrollOffset", offset => {
      //   if (pswpRef.current) {
      //     const r = pswpRef.current.getBoundingClientRect()
      //     offset.x += r.left
      //     offset.y += r.top
      //   }
      // })
    }
  }, [])
  // Initializes and opens PhotoSwipe

  return (
    <div
      className='pswp'
      tabIndex={-1}
      role='dialog'
      aria-hidden='true'
      ref={pswpRef}
    >
      <div className='pswp__bg'></div>
      <div className='pswp__scroll-wrap'>
        <div className='pswp__container'>
          <div className='pswp__item'></div>
          <div className='pswp__item'></div>
          <div className='pswp__item'></div>
        </div>
        <div className='pswp__ui pswp__ui--hidden'>
          <div className='pswp__top-bar'>
            <div className='pswp__counter'></div>
            <Button
              className='pswp__button pswp__button--close'
              title='Fermer (Esc)'
            ></Button>

            {/* <Button
              className='pswp__button pswp__button--share'
              title='Share'
            ></Button> */}

            <Button
              className='pswp__button pswp__button--fs'
              title='Toggle fullscreen'
            ></Button>

            <Button
              className='pswp__button pswp__button--zoom'
              title='Zoom in/out'
            ></Button>
            <div className='pswp__preloader'>
              <div className='pswp__preloader__icn'>
                <div className='pswp__preloader__cut'>
                  <div className='pswp__preloader__donut'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='pswp__share-modal pswp__share-modal--hidden pswp__single-tap'>
            <div className='pswp__share-tooltip'></div>
          </div>

          <Button
            className='pswp__button pswp__button--arrow--left'
            title='Précédent'
          ></Button>

          <Button
            className='pswp__button pswp__button--arrow--right'
            title='Suivant'
          ></Button>

          <div className='pswp__caption'>
            <div className='pswp__caption__center'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default _PhotoSwipe
