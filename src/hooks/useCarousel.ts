import { useState } from "react"

const useCarousel = (carousel: React.RefObject<HTMLDivElement>, draggable: React.RefObject<HTMLDivElement>) => {
    const [mouseIsDown, setMouseDown] = useState(false)
    const [transform, setTransform] = useState(0)
    const [mX, setmX] = useState(0)

    const mouseDown = (ev: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
        if (carousel.current) {
            if ((ev as React.TouchEvent<HTMLDivElement>).touches && (ev as React.TouchEvent<HTMLDivElement>).touches.length === 1) {
              setmX((ev as React.TouchEvent<HTMLDivElement>).touches[0].pageX)
            } else {
              setmX((ev as React.MouseEvent<HTMLDivElement, MouseEvent>).pageX)
            }
            setTransform(parseInt(carousel.current.style.left.replace('px)', '')) || 0)
            setMouseDown(true)
        }
    }

    const mouseMove = (ev: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
        if (mouseIsDown && carousel.current && draggable.current) {
            const missingPx = draggable.current.clientWidth - carousel.current.clientWidth
            let pageX = 0
            if ((ev as React.TouchEvent<HTMLDivElement>).touches && (ev as React.TouchEvent<HTMLDivElement>).touches.length === 1) {
              pageX = (ev as React.TouchEvent<HTMLDivElement>).touches[0].pageX
            } else {
              pageX = (ev as React.MouseEvent<HTMLDivElement, MouseEvent>).pageX
            }
            if (missingPx < 0) {
                carousel.current.style.removeProperty('left')
              if (transform + (pageX - mX) > 0) {
                  carousel.current.style.transform = 'translateX(0px)'
                  return
              } else if (transform + (pageX - mX) <= missingPx) {
                  carousel.current.style.transform = 'translateX(' + missingPx + 'px)'
                  return
              }
              carousel.current.style.transform = 'translateX(' + (transform + (pageX - mX)) + 'px)'
            }
        }
    }

    const mouseUp = () => {
        if (carousel.current) {
            const currentTransform = carousel.current.style.transform.replace('translateX(', '').replace(')', '')
            carousel.current.style.removeProperty('transform')
            carousel.current.style.left = currentTransform
            setMouseDown(false)
        }
    }

    return [mouseUp, mouseDown, mouseMove]
}

export default useCarousel