

import Image from 'next/image'

import { get_image } from '@/classes/icons_utils'

export default function FavStar({ isFav,clickAction }: { isFav: boolean, clickAction: () => void }) {
    const size = 50
  
    return <div  className='px-12'>
      {isFav ? <Image src={get_image("star")} alt='yea' height={size} width={size} />
        : <Image src={get_image("star_empty")} alt='nah' height={size} width={size} />}
    </div>
  
  }