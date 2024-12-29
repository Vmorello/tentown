'use client';


import React, { useState, useEffect, Children } from 'react';
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';



interface mapSetting_type {
    id?: string
    name: string
    fav: boolean
    children: React.ReactNode
    setMapName: React.Dispatch<React.SetStateAction<string>>
}


export default function MapBanner({ id, name, children, fav, setMapName:setMapNameParent }: mapSetting_type) {

    const router = useRouter()

    const [favorite, setFavorite] = useState(fav)
    const [mapName, setMapName] = useState(name)


    const [supabase] = useState(createClientComponentClient())

    useEffect(() =>{
        console.log("test")
        updateMap()
        setMapNameParent(mapName)
    }, [favorite, mapName])

    const deleteMap = async () => {
        const { data, error } = await supabase
            .from('maps')
            .delete()
            .eq("id", id)

        router.push('/')
    }

    const updateMap = async () =>  {
        const { data, error } = await supabase
            .from('maps')
            .update({ name:mapName, favorite:favorite})
            .eq("id", id)
    }


    return (
        <>
            <div className=" text-white text-center p-3 mb-2">

                <label htmlFor={`titleInput`} className="text-lg p-2"> Title: </label>
                <input id="titleInput" className='bg-transparent  text-4xl  px-4' type="text" value={name} onChange={(e) => setMapName(e.target.value)} />


                <label htmlFor={`favoriteCheck`} className="text-lg p-2"> Favorite: </label>
                <input id="favoriteCheck" className='px-4' type="checkbox" checked={favorite} onChange={(e) => setFavorite(e.target.checked)} />
                 
            </div>

            {children}

            {id ? <button onClick={deleteMap} className='text-red-800'>Delete Map</button> : <></>}


        </>)
}