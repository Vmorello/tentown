import React, { useState, useEffect } from 'react';

import { CanvasControl } from '@/classes/canvas_utils';

export default function useCanvas(refreshRate = 100) {
    const [ref] = useState(React.createRef<HTMLCanvasElement>())
    const [canvasUtil, setUtil] = useState(undefined as CanvasControl|undefined)
  
    useEffect(() => {
      const CC = new CanvasControl(ref.current!)
      setUtil(CC)
      
      setTimeout(() => {
        CC.startAnimation()()
      }, refreshRate);
    }, [])

    
  
    return {ref, canvasUtil}
  } 
