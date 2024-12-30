import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import Link from 'next/link'

import { get_image } from '@/classes/icons_utils';

interface map_type { }

interface map_db {
  id: string;
  name: string;
  favorite: boolean;
}


const examples = [
  { name: "Nat+Vic's Wedding", id: '46423a01-ca0c-4b39-b25e-e320faa2fef3', favorite: true },
  { name: 'Sigil', id: '538ba993-1561-4bf0-b214-03b26a1cc317', favorite: true },
  { name: 'Icewind Dale 🇮🇪', id: 'b3eb5dfb-4323-455a-bcf4-2682ad426853', favorite: false },
  // { name: 'Icewind Dale 🇨🇦', id: 'ab6d99d8-bee9-47f4-9367-a2cdb1a9deca', favorite: false },
  // { type: "WIP 💝", map_id: '0fb9f15a-ef64-4df4-9ff1-8d0c85849e4e' },
]


export default async function MapSelect({ }: map_type) {

  const supabase = createServerComponentClient({ cookies })

  const { data: { user } } = await supabase.auth.getUser()
 
  let header = "Here are some examples ☀"

  let userMaplist = examples as map_db[]
  if (user) {
    const { data: mapList } = await supabase
      .from('maps')
      .select("id, name, favorite")
      .eq("owner", user.id)
      .order("favorite", { ascending: false })
      .order("name", { ascending: true })

    userMaplist = (mapList && mapList.length > 0) ? mapList : examples

    header ="Here are your Memory Maps 💖"
  }

  const favOnPress = (id: string, current: boolean) => async () => {
    const { data } = await supabase
      .from('maps')
      .update({ favorite: !current })
      .eq("id", id)
  }

  const settingIconSize = 50

  return (<div className='text-center'>
    <h2 className="text-lg font-bold m-4">
      {header}
    </h2>
    {userMaplist.map(({ id, name, favorite }) => (
      <div className="w-full border-b last:border-b-0 text-sm">
        <Link
          href={`/${id}/map/`}
          key={name}
        >
          <div className="w-full font-bold p-6 min-h-12" >
            {name}
          </div>

        </Link>
      </div>
    ))}

  </div>)

}

