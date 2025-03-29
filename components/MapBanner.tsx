'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { deleteMap, updateMapBanner } from '@/utils/supabase/utils';



interface mapSetting_type {
    id: string
    name: string
    fav: boolean
    children: React.ReactNode
    setMapName: React.Dispatch<React.SetStateAction<string>>
    showCreative: boolean
}


export default function MapBanner({ children, showCreative, id, name, fav }: mapSetting_type) {

    const router = useRouter()

    const [favorite, setFavorite] = useState(fav)
    const [mapName, setMapName] = useState(name)


    return (
        <>
            <div className="text-center p-3 mb-2">

                <label htmlFor={`titleInput`} className="text-lg p-2" > Title: </label>
                <input id="titleInput" className='bg-transparent  text-4xl  px-4' readOnly={!showCreative} type="text" value={mapName}
                    onChange={(e) => setMapName(e.target.value)} onBlur={() => updateMapBanner(id, mapName, favorite)} />


                <label htmlFor={`favoriteCheck`} className="text-lg p-2"> Favorite: </label>
                <input id="favoriteCheck" className='px-4' readOnly={!showCreative} type="checkbox" checked={favorite}
                    onChange={(e) => {
                        setFavorite(e.target.checked)
                        updateMapBanner(id, mapName, e.target.checked)
                    }} />

            </div>

            {children}

            <div hidden={!showCreative} className=" gap-2">
                {id ? <button onClick={() => { deleteMap(id); router.push('/') }} className='text-red-800'>Delete Map</button> : <></>}
            </div>

        </>)
}