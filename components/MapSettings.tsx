'use client';


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { DisplayImageCanvas } from './canvas/DisplayImage';
import Aligner from './wrappers/aligner';

interface mapSetting_type {
    id: string,
}


export default function MapSettings({ id }: mapSetting_type) {

    const router = useRouter()

    const [supabase] = useState(createClientComponentClient())
    const [storagePath, setStoragePath] = useState("")
    const [width, setWidth] =useState(0)

    const [name, setName] = useState("Loading...")
    const [fav, setFav] = useState(false)

    useEffect(() => {
        getMapInfo(id)
    }, []);

    const getMapInfo = async (id: string) => {
        const { data: currentMapData } = await supabase
            .from('maps')
            .select("name, storage_name, favorite, width")
            .eq("id", id)

        if (!currentMapData) {
            setName("error?")
            return
        }
        // console.log(currentMapData)
        setName(currentMapData[0].name)
        setFav(currentMapData[0].favorite)
        setStoragePath(currentMapData[0].storage_name)
        setWidth(currentMapData[0].width)
    }


    const updateMapSetting = async () => {

        const { data, error } = await supabase
            .from('maps')
            .update({ name:name, favorite:fav})
            .eq("id", id)

            router.push('/')

    }

    const deleteMap = async () => {

        const { data, error } = await supabase
            .from('maps')
            .delete()
            .eq("id", id)

            router.push('/')

    }

    return (
        <div className="text-foreground" >
                <label>
                    Name:
                    <input className='bg-transparent px-4'  type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <div></div>
                <label >
                    Favorite:
                    <input className='px-4'  type="checkbox"  checked={fav} onChange={(e) => setFav(e.target.checked)} />
                </label>
                <div></div>
                <button onClick={updateMapSetting}>Save Changes</button>
                <Aligner canvasWidth={width}>
                    <DisplayImageCanvas storagePath={storagePath} />
                </Aligner>

                <button onClick={deleteMap}>Delete Map</button>
        </div>)
}