import { useContext } from "react"
import { DarkContext } from "../Main"

const useDark = () => {
    const { dark, setDark } = useContext(DarkContext)

    const handleClick = () => {
        setDark(!dark)
    }

    return {handleClick}
}

export default useDark