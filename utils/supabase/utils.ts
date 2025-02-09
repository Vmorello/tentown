import { SupabaseClient } from '@supabase/supabase-js';
import { saveQuality } from '../constants';


export async function saveCanvasImage(supabase: SupabaseClient<any, "public", any>, canvasElement: HTMLCanvasElement, storagePath: string,) {
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
