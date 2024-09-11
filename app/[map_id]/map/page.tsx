import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { FileObject } from '@supabase/storage-js'
import { cookies } from 'next/headers'


import { GotPage } from '@/components/representation_page'

import { v4 as uuidv4 } from 'uuid';

export default async function MapPage({ params }: { params: { map_id: string } }) {

  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()


  const { data: currentMapData } = await supabase
    .from('maps')
    .select("name, storage_name, owner")
    .eq("id", params.map_id)

  const { data: mapList } = await supabase
    .from('maps')
    .select("id, name")


  const { data: icons } = await supabase
    .from('icons')
    .select()
    .eq("map_id", params.map_id)


  if (currentMapData && icons) {

    return (
      <GotPage map_id={params.map_id} showCreative={user?.id === currentMapData![0].owner} storage_name={currentMapData[0].storage_name} icons={icons} loaded={true} full_map_list={mapList!}  />
    )
  }

      
  const { data: sharedStorageListRaw } = await supabase
    .storage
    .from('MapCollection')
    .list('shared')
  sharedStorageListRaw?.forEach(map => { map.name = `shared/${map.name}` })


  let userStorageList = [] as FileObject[]
    if (user) {
        const { data: userStorageListRaw } = await supabase
            .storage
            .from('MapCollection')
            .list(user?.id)

        userStorageListRaw?.forEach(map => { map.name = `${user?.id}/${map.name}` })

        userStorageList = userStorageListRaw!

    }

    // let demoStorageList = [] as FileObject[]
    // if (user) {
    //     const { data: demoStorageListRaw } = await supabase
    //         .storage
    //         .from('MapCollection')
    //         .list()
    //     demoStorageList = demoStorageListRaw!
    // }

    const fullList = userStorageList
      .concat(sharedStorageListRaw!)
      // .concat(demoStorageList)
      .filter(map => { return (!map.name.endsWith('.emptyFolderPlaceholder')) })

    const fullListNames = fullList.map(map=> {return map.name})

  return (
    <GotPage map_id={uuidv4()} showCreative={true} storage_name={fullListNames[0]} icons={[]} loaded={false} full_map_list={[]} storage_list={fullListNames} />
  )


}
