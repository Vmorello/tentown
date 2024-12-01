'use client';


import React, { useState, useEffect, Children } from 'react';
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { DisplayImageCanvas } from './canvas/DisplayImage';
import Aligner from './wrappers/aligner';



interface mapSetting_type {
    id?: string
    name: string
    fav: boolean
    children: React.ReactNode
    setMapName: React.Dispatch<React.SetStateAction<string>>
}


export default function MapBanner({ id, name, children, fav, setMapName }: mapSetting_type) {

    const router = useRouter()

    const [supabase] = useState(createClientComponentClient())

    const deleteMap = async () => {

        const { data, error } = await supabase
            .from('maps')
            .delete()
            .eq("id", id)

        router.push('/')
    }

    return (
        <>
            <div className="bg-purple-600 text-white text-center text-4xl p-3 mb-2">

                <input className='bg-transparent px-4' type="text" value={name} onChange={(e) => setMapName(e.target.value)} />
                {/*   */}


                <input className='px-4' type="checkbox" checked={fav} />
                {/*  onChange={(e) => setFav(e.target.checked)}  */}
            </div>

            {children}

            {id ? <button onClick={deleteMap} className='text-red-800'>Delete Map</button> : <></>}


        </>)
}