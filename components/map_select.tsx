import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { FileObject } from '@supabase/storage-js'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

import {get_image} from '@/classes/icons_utils'

interface map_type { }

interface map_db {
    id: string;
    name: string;
    favorite?: boolean;
}


const examples = [
    { name: 'Sigil', id: '538ba993-1561-4bf0-b214-03b26a1cc317' },
    { name: 'Icewind Dale 🇮🇪', id: '906b4b63-0cbb-4c6b-a600-94610f179ba0' },
    { name: 'Icewind Dale 🇨🇦', id: 'ab6d99d8-bee9-47f4-9367-a2cdb1a9deca' },
    // { type: "WIP 💝", map_id: '0fb9f15a-ef64-4df4-9ff1-8d0c85849e4e' },
  ]
  

export default async function MapSelect({ }: map_type) {

    const supabase = createServerComponentClient({ cookies })

    const { data: { user } } = await supabase.auth.getUser()

    let userMaplist = examples as map_db[]
    if (user) {
        const { data: mapList } = await supabase
            .from('maps')
            .select("id, name, favorite")
            .eq("owner", user.id)
            .order("favorite", { ascending: false })

        userMaplist = (mapList && mapList.length > 0) ? mapList : examples
    }



    return (<div>

            {userMaplist.map(({ id, name, favorite }) => (
              <Link
                href={`/${id}/map/`}
                key={name}
                className="w-full grid grid-cols-3 border-b last:border-b-0 text-sm"
              >
                <div className=" font-bold p-4 min-h-12 w-full" >
                  {name}
                </div>
              </Link>
            ))}

    </div>)

}

export function favStarOn(props:{}) {
    return <Image src={get_image("star")} alt='yea'/>
}

export function favStarOff(props:{}) {
    return <img src={get_image("star_empty")} alt=''/>
}

