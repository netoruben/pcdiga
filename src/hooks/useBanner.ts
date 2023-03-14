import { useState } from "react"

const useBanner = (getPrev: () => void, getProx: () => void) => {
    const [curX, setCurX] = useState(0)
    const [mX, setMX] = useState(0)

    const mouseDown = (ev: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
        if ((ev as React.TouchEvent<HTMLDivElement>).touches && (ev as React.TouchEvent<HTMLDivElement>).touches.length === 1) {
            setMX((ev as React.TouchEvent<HTMLDivElement>).touches[0].pageX)
        } else {
            setMX((ev as React.MouseEvent<HTMLDivElement, MouseEvent>).pageX)
        }
    }

    const mouseMove = (ev: React.TouchEvent<HTMLDivElement>) => {
        if (ev.touches.length === 1) {
            setCurX(ev.touches[0].pageX)
        }
    }
   
    const mouseUp = (ev: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
        if ((ev as React.TouchEvent<HTMLDivElement>).touches && (ev as React.TouchEvent<HTMLDivElement>).touches.length === 1) {
            if (curX > mX){
                getProx()
            } else {
                getPrev()
            }
            return
        }
        if ((ev as React.MouseEvent<HTMLDivElement, MouseEvent>).pageX > mX){
            getProx()
        } else {
            getPrev()
        }
    }

    return {mouseUp, mouseDown, mouseMove}
}

export default useBanner