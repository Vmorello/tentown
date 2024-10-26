import Image from 'next/image';

import { get_image, } from '@/classes/icons_utils';
import { representation } from '@/components/representation_page';


export function IconPlacement(props: {
  repList: Array<representation>
  showCreative: boolean
}) {
  const linkOptions = props.repList.map((rep: representation) => {
    // console.log(image)
    if (!rep.hidden || props.showCreative) {
      return <Image src={get_image(rep.icon)!} alt={"broke"}
        height={rep.height} width={rep.width}
        key={`Rep${rep.id}`}
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: `${rep.y}px`,
          left: `${rep.x}px`
        }} />
    }
  })

  return <div>
    {linkOptions}
  </div>
}


