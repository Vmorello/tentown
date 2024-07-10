import React from 'react';
import {GotPage} from '../../../components/representation_page'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'

import {v4 as uuidv4} from 'uuid';

export default async function MapPage({ params }: {params:{map_id:string}})
{

  const supabase = createServerComponentClient({ cookies })
  const { data: mapData } = await supabase
                        .from('maps')
                        .select("name, storage_name")
                        .eq("id", params.map_id)

  const { data: mapList } = await supabase
                        .from('maps')
                        .select("id, name") 

  
  const { data: icons } = await supabase
                        .from('icons')
                        .select()
                        .eq("map_id", params.map_id)

  const { data: storageListRaw } = await supabase
                        .schema('storage')
                        .from('objects')
                        .select("name")
                        .eq("bucket_id", "MapCollection");
  storageListRaw?.shift()
  const storageList = storageListRaw?.map((json:{ name: string; }) => json.name)

  if(mapData && icons){// && mapData.length > 0 
    console.log(storageList)

    return (
      <GotPage map_id={params.map_id} title={mapData[0].name} storage_name={mapData[0].storage_name} icons={icons} loaded={true} full_map_list={mapList!} storage_list={storageList!}/>
    )
  }

  const bgList =[
    'bremen',              'bryn-shander',
    'caer-dineval',        'caer-konig',
    'caer-dineval-keep',   'cauldron-caves',
    'dark-duchess',        'dougans-hole',
    'duergar-outpost',     'dwarven-valley-icewind',
    'easthaven',           'fortunes-wheel',
    'good-mead',           'icewind-dale',
    'lonelywood',          'mortuary-basement',
    'reghed-camp',         'sigil',
    'targos',              'termalaine',
    'verbeeg-lair'
  ]
  return (
    <GotPage map_id={uuidv4()} title={"Unsaved"} storage_name={""} icons={[]} loaded={false} full_map_list={[]} storage_list={bgList}/>
  )

  
}
