'use client';


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import useCanvas from './canvas/hook';
import Aligner from './wrappers/aligner';

interface mapSetting_type {
    id: string,
}


export default function MapSettings({ id }: mapSetting_type) {

    const router = useRouter()

    const [supabase] = useState(createClientComponentClient())

    const [name, setName] = useState("Loading...")
    const [fav, setFav] = useState(false)

    const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
    const [dimention, setDimention] = useState({ "height": 1000, "width": 1000 })

    const { ref, canvasUtil } = useCanvas();



    useEffect(() => {
        getMapInfo(id)
    }, []);


    useEffect(() => {
        if (background === undefined) { return }
        canvasUtil!.setup(background)
    }, [background])


    const getMapInfo = async (id: string) => {
        const { data: currentMapData } = await supabase
            .from('maps')
            .select("name, storage_name, favorite")
            .eq("id", id)

        if (!currentMapData) {
            setName("error?")
            return
        }
        setName(currentMapData[0].name)
        setFav(currentMapData[0].favorite)
        getMapFileFromStorage(currentMapData[0].storage_name)
    }

    const getMapFileFromStorage = async (storageName: string) => {
        const { data, error } = await supabase
            .storage
            .from('public/MapCollection')
            .download(storageName)

        console.log(data, error)

        const reader = new FileReader();
        reader.readAsText(data!);
        reader.onloadend = () => {
            console.log(reader.result)
            updateBackgroundAndsSizeWithBase64(reader.result as string)
        };

    }
    const updateBackgroundAndsSizeWithBase64 = (base64image: string) => {

        var image = new Image();
        image.src = base64image;

        image.addEventListener("load", () => {
            console.log(`loaded image${image}`)
            setBackground(image)
            setDimention({ "height": image.naturalHeight, "width": image.naturalWidth })
        })
        image.src = base64image;
    }

    const updateMapSetting = async () => {

        const { data, error } = await supabase
            .from('maps')
            .update({ name:name, favorite:fav})
            .eq("id", id)

            router.push('/')

    }

    return (
        <div className="text-foreground" >
            <Aligner canvasWidth={dimention.width}>
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

                <canvas ref={ref} width={dimention.width} height={dimention.height} className="border-dotted border-2 border-stone-400" />
            </Aligner>
        </div>)
}