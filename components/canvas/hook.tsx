import React, { useState, useEffect } from 'react';

import { CanvasControl } from '@/utils/canvas_utils';

export default function useCanvas(upperRef?: React.RefObject<HTMLCanvasElement>, upperCanvaUtil?: CanvasControl) {
  
  const [ref] = useState(upperRef ? upperRef : React.createRef<HTMLCanvasElement>())
  const [canvasUtil, setUtil] = useState(upperCanvaUtil ? upperCanvaUtil : undefined as CanvasControl | undefined)

  useEffect(() => {
    if (canvasUtil!=undefined) { return }
    const CC = new CanvasControl(ref.current!)
    setUtil(CC)

    setTimeout(() => {
      CC.startAnimation()()
    }, 100);
  }, [ref])



  return { ref, canvasUtil }
} 
