import { useEffect, useState } from 'react'

export const useDevice = () => {


    const [IsBigWeb, setIsBigWeb] = useState(false)
    const [IsWeb, setIsWeb] = useState(false)
    const [IsTab, setIsTab] = useState(false)
    const [IsMob, setIsMob] = useState(false)

    useEffect(() => {
        setIsBigWeb(window.innerWidth >= 1500)
        setIsWeb(window.innerWidth >= 1110)
        setIsTab(window.innerWidth < 1110 && window.innerWidth >= 768)
        setIsMob(window.innerWidth < 768)
        window.addEventListener("resize", () => {
            setIsBigWeb(window.innerWidth >= 1500)
            setIsWeb(window.innerWidth >= 1110)
            setIsTab(window.innerWidth < 1110 && window.innerWidth >= 768)
            setIsMob(window.innerWidth < 768)
        })
    }, [])

    return { IsBigWeb, IsWeb, IsTab, IsMob }

}