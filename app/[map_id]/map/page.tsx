import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { FileObject } from '@supabase/storage-js'
import { cookies } from 'next/headers'


import { GotPage } from '@/components/representation_page'

interface map_db {
  id: any
  name: any
  favorite: any
}

export default async function MapPage({ params }: { params: { map_id: string } }) {

  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()


  const { data: currentMapData } = await supabase
    .from('maps')
    .select("name, storage_name, owner, width, height")
    .eq("id", params.map_id)


  let mapList = [] as map_db[]
  if (user) {
    const { data: userMapList } = await supabase
      .from('maps')
      .select("id, name, favorite")
      .eq("owner", user!.id)
      .order("favorite", { ascending: false })
    mapList = (userMapList) ? userMapList : []
  }





  const { data: icons } = await supabase
    .from('icons')
    .select()
    .eq("map_id", params.map_id)




  const { data: sharedStorageListRaw } = await supabase
    .storage
    .from('MapCollection')
    .list('shared')
  sharedStorageListRaw?.forEach(map => { map.name = `shared/${map.name}` })

  console.log(sharedStorageListRaw)


  let userStorageList = [] as FileObject[]
  if (user) {
    const { data: userStorageListRaw } = await supabase
      .storage
      .from('MapCollection')
      .list(user?.id)

    userStorageListRaw?.forEach(map => { map.name = `${user?.id}/${map.name}` })

    userStorageList = userStorageListRaw!

  }

  let fullListNames
  let mapLocationToLoad
  if (sharedStorageListRaw === null) {
    fullListNames = ["no data /offline?"]
  } else {

    const fullList = userStorageList
      .concat(sharedStorageListRaw!)
      // .concat(demoStorageList)
      .filter(map => { return (!map.name.endsWith('.emptyFolderPlaceholder')) })

    fullListNames = fullList.map(map => { return map.name })

    mapLocationToLoad = currentMapData ? currentMapData[0].storage_name : fullListNames[0]
  }



  if (currentMapData && icons) {
    return (
      <GotPage mapId={params.map_id} showCreative={user?.id === currentMapData![0].owner} storageList={fullListNames} savable={user ? true : false}
        mapLocationToLoad={mapLocationToLoad} icons={icons} loaded={true} userMaps={mapList} width={currentMapData[0].width} height={currentMapData[0].height} />
    )
  }


  return (
    <GotPage mapId={undefined} showCreative={true} mapLocationToLoad={mapLocationToLoad} icons={[]} loaded={false} savable={user ? true : false}
    userMaps={mapList} storageList={fullListNames} width={750} height={750} />
  )


}
