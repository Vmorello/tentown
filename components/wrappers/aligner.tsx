'use client'

import { useEffect, useState } from "react"

export default function Aligner({children, canvasWidth}: {children: React.ReactNode,canvasWidth:number}) {

    const [isWindowSmall4Image, setIsWindowSmall4Image] = useState("relative")

    useEffect(() => {
        console.log(`comparing window ${window.innerWidth} to prop ${canvasWidth}`)
        setIsWindowSmall4Image(
            // the window.innerWidth < 1000 is a phone hack, still dont have a proper solution to this ......
            window.outerWidth < canvasWidth  ? "absolute left-0" : "relative"
        )  
      })

    return <div className={isWindowSmall4Image}>
        {children}
    </div>
}