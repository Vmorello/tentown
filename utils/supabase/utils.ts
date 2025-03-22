import { saveQuality } from '../constants';
import { representation } from '../types';

import { createClient } from './client'



const supabase = createClient()


export async function getUser() {
    return supabase.auth.getUser()
}

export async function saveCanvasImage(canvasElement: HTMLCanvasElement, storagePath: string,) {
    const res: Response = await fetch(canvasElement.toDataURL("image/jpeg", saveQuality));
    const blob: Blob = await res.blob();
    const file = new File([blob], storagePath, { type: 'image/jpeg' })

    const { data: storageData, error: storageError } = await supabase
        .storage
        .from('MapCollection')
        .upload(storagePath, file, {
            upsert: true,
            contentType: "image/jpeg"
        })
    if (storageError) {
        console.error("we couldnt save the file image")
        return
    }

}

export async function updateAllIconsDB(currentRepInfo: representation[]) {
    const { data: iconSaved, error: iconError } = await supabase
        .from('icons')
        .upsert(currentRepInfo)


    console.log("I am done updating the DB")
}

export async function removeIconDB(iconsDeleted: string[]) {

    const { data: iconDeleted, error: iconDeleteError } = await supabase
        .from('icons')
        .delete()
        .in("id", iconsDeleted)

    console.log("I am done updating the DB")
}


export async function updateOneIconDB(newItem: representation) {
    const { data: iconSave, error: iconError } = await supabase
        .from('icons')
        .upsert(newItem)
        .eq('id', newItem.id)
}

export async function newMapDB(id: string, owner: string, name: string, storage_name: string, width: number, height: number) {
    const { data: mapSave, error: mapError } = await supabase
        .from('maps')
        .insert({
            id: id, owner: owner, name: name,
            storage_name: storage_name, width: width, height: height
        })
        .select("id")

    if (mapError) { console.log(mapError) }

    return mapSave![0].id
}

export async function getImageDB(storageName: string) {
    return supabase
        .storage
        .from('public/MapCollection')
        .download(storageName)
}

