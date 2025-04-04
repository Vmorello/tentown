import { useState } from "react";
import { SavingFileImage } from "../canvas/SavingFileImage";
import { preview, representation } from '@/utils/types';
import { updateOneIconDB } from "@/utils/supabase/utils";


interface PhotoNotesInter {
    item: representation
    setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
}


export function PhotoNotesComponent({ item, setCurrentRepInfo }: PhotoNotesInter) {

    const [preview, setPreview] = useState(undefined as preview | undefined)

    const textChange = (repID: string, indexOfPara: number) => ((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentRepInfo((repInfo) => {
            const info_copy = repInfo.slice()
            const listIndex = info_copy.findIndex(indexOf => repID === indexOf.id)
            info_copy[listIndex]["data"][indexOfPara] = event.target.value
            updateOneIconDB(info_copy[listIndex])
            //-- debounce
            return info_copy
        })
    })


    return <>
        <div> Add new Photo:</div>
        <div className="relative w-full max-w-md h-52 border-2 border-dotted border-gray-400 rounded-lg  bg-gray-100  flex justify-center items-center cursor-pointer">
            <input type="file" id={`image_input_${item.id}`} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(event) => {
                    if (event.target.files === null) { return }
                    setPreview({ item: item, file: event.target.files[0] })
                }} />
            <label htmlFor={`image_input_${item.id}`} className="text-gray-500 text-lg pointer-events-none">
                Drag image here or Click to select
            </label>
        </div>
        <div className="hidden">
            <SavingFileImage preview={preview} setPreview={setPreview} size={"mid"} setCurrentRepInfo={setCurrentRepInfo} />
        </div>
        <PhotosListed photoStorageLocation={item.image_storage} repID={item.id} setCurrentRepInfo={setCurrentRepInfo} />
        <div className="text-center m-2 text-gray-900" >
            {item.data.map((entry, index: number) => {
                return <div key={`repText_${index}_${item.id}`}>
                    <textarea cols={35} rows={5} value={entry}
                        onChange={textChange(item.id, index)}
                        onBlur={() => updateOneIconDB(item)} />
                </div>
            })}
        </div>
    </>
}

function PhotosListed({ photoStorageLocation, repID, setCurrentRepInfo }: {
    photoStorageLocation: string[], repID: string,
    setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
}) {
    return <>
        {photoStorageLocation.map((entry, index: number) => {
            return <div key={`repPhoto_${repID}_${index}`}>
                <span className="p-3">Image {index + 1}</span>
                <button className="ml-8" onClick={() => {
                    setCurrentRepInfo((repInfo) => {
                        const info_copy = repInfo.slice()
                        const listIndex = info_copy.findIndex(indexOf => repID === indexOf.id)
                        console.log(`removing photo ${index} for rep ${repID}`)
                        console.log(`this shouldnt happen twice`)
                        info_copy[listIndex]["image_storage"] = info_copy[listIndex]["image_storage"].filter(item => item !== entry);
                        return info_copy
                    })
                }}>❌</button>
            </div>
        })}


    </>

}


