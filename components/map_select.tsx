import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

type map_type = {}

export default async function MapSelect({ }: map_type) {

    const supabase = createServerComponentClient({ cookies })

    const { data: storageListRaw } = await supabase
        .storage
        .from('MapCollection')
        .list("share/")

    console.log(storageListRaw)

    return <></>

}
