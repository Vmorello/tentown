import React from 'react';
import { createClient } from '@/utils/supabase/server'
import { FileObject } from '@supabase/storage-js'




import { GotPage } from '@/components/_mainpage_Map'
import { startingWidth, startingHeight } from '@/utils/constants';

interface map_db {
  id: any
  name: any
  favorite: any
}

export default async function MapPage({ params }: { params: { map_id: string } }) {

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()


  const { data: currentMapData } = await supabase
    .from('maps')
    .select("name, storage_name, owner, width, height, favorite")
    .eq("id", params.map_id)

  const mapLocationToLoad = (currentMapData && currentMapData.length > 0) ? currentMapData[0].storage_name : undefined

  const { data: icons } = await supabase
    .from('icons')
    .select()
    .eq("map_id", params.map_id)
    .order("order")


  //For Linking between maps
  let mapList = [] as map_db[]
  if (user) {
    const { data: userMapList } = await supabase
      .from('maps')
      .select("id, name, favorite")
      .eq("owner", user!.id)
      .order("favorite", { ascending: false })
    mapList = (userMapList) ? userMapList : []
  }

  // //just for the 
  // let userStorageList = [] as FileObject[]
  // if (user) {
  //   const { data: userStorageListRaw } = await supabase
  //     .storage
  //     .from('MapCollection')
  //     .list(user?.id)

  //   userStorageListRaw?.forEach(map => { map.name = `${user?.id}/${map.name}` })

  //   userStorageList = userStorageListRaw!

  // }

  //   const fullListNames = userStorageList
  //     .filter(map => { return (!map.name.endsWith('.emptyFolderPlaceholder')) })
  //     .map(map => { return map.name })


  if (currentMapData && currentMapData.length > 0 && icons) {
    return (
      <GotPage mapId={params.map_id} showCreative={user?.id === currentMapData![0].owner} //templates={fullListNames} 
        mapLocationToLoad={mapLocationToLoad} icons={icons} loaded={true} userMaps={mapList} loggedIn={user?.id !== undefined}
        width={currentMapData[0].width} height={currentMapData[0].height} name={currentMapData[0].name} fav={currentMapData[0].favorite} />
    )
  }

  const newMapName = user ? `${user?.email?.split("@")[0]}-${params.map_id.split('-')[0]}` : "Demo Map 4 Fun"

  return (
    <GotPage mapId={params.map_id} showCreative={true} mapLocationToLoad={mapLocationToLoad} icons={[]} loaded={false} loggedIn={user?.id !== undefined}
      userMaps={mapList} width={startingWidth} height={startingHeight} name={newMapName} fav={false} /> // templates={fullListNames} 
  )


}
