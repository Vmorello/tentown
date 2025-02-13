import { get_image, } from '@/utils/icons_utils';
import { representation } from '@/utils/types';


export function IconPlacement(props: {
  repList: representation[]
  showCreative: boolean
  focusedReps: representation[]
}) {


  const linkOptions = props.repList.map((rep: representation) => {
    // console.log(rep.icon)
    if (!rep.hidden || props.showCreative) {
      return <img src={get_image(rep.icon)!} alt={"Loading"}
        height={rep.height} width={rep.width}
        key={`Rep${rep.id}`}
        className={`absolute pointer-events-none animate-oscillate `}
        style={{
          zIndex: (props.focusedReps.includes(rep)) ? "30" : "0",
          top: `${rep.y}px`,
          left: `${rep.x}px`,
        }} />
    }
  })

  return <div>
    {linkOptions}
  </div>
}


