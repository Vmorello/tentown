import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { FileObject } from '@supabase/storage-js'
import { cookies } from 'next/headers'

interface map_type { }

interface map_db {
    id: any;
    name: any;
}

export default async function MapSelect({ }: map_type) {

    const supabase = createServerComponentClient({ cookies })

    const { data: { user } } = await supabase.auth.getUser()

    let userMaplist = [] as map_db[]
    if (user) {
        const { data: mapList } = await supabase
            .from('maps')
            .select("id, name, favorite")
            .eq("owner", user.id)
            .order("favorite", { ascending: false })

        userMaplist = mapList ? mapList : []
    }




    return (<div>

        {userMaplist.map(({ id, name }) => (
            <div>
                {name}


            </div>))}
    </div>)

}
