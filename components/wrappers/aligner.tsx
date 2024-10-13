'use client'

import { useEffect, useState } from "react"

export default function Aligner({ children, canvasWidth }: { children: React.ReactNode, canvasWidth?: number }) {

    const [isWindowSmall4Image, setIsWindowSmall4Image] = useState("relative")

    useEffect(() => {
        console.log(`comparing window ${window.outerWidth} to prop ${canvasWidth}`)
        if (!canvasWidth){return}
        setIsWindowSmall4Image(
            window.outerWidth < canvasWidth ? "absolute left-0" : "relative"
        )
    })

    return <div className={isWindowSmall4Image}>
        {children}
    </div>
}