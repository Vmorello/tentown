import { representation } from "../representation_page"


interface PhotoNotesInter {
    item: representation
    setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
    setPreview: React.Dispatch<React.SetStateAction<{
        item: representation;
        file: File;
    } | undefined>>
}


export function PhotoNotesComponent({ item, setCurrentRepInfo, setPreview }: PhotoNotesInter) {

    const textChange = (repID: string, indexOfPara: number) => ((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentRepInfo((repInfo) => {
            const info_copy = repInfo.slice()
            const listIndex = info_copy.findIndex(indexOf => repID === indexOf.id)
            info_copy[listIndex]["data"][indexOfPara] = event.target.value
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
        <PhotosListed photoStorageLocation={item.image_storage} repID={item.id} setCurrentRepInfo={setCurrentRepInfo} />
        <div className="text-center m-2 text-gray-900" >
            <ListTextData entries={item.data} repID={item.id} CatagoryOnChange={textChange} />
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
                        // info_copy[listIndex]["image_storage"].splice(index, 1)
                        return info_copy
                    })
                }}>❌</button>
            </div>
        })}


    </>

}


function ListTextData(props: {
    entries: string[], repID: string,
    CatagoryOnChange: (repID: string, indexOfPara: number) => (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
    return <>

        {props.entries.map((entry, index: number) => {
            return <div key={`repText_${index}_${props.repID}`}>
                <textarea cols={35} rows={5} value={entry}
                    onChange={props.CatagoryOnChange(props.repID, index)} />
            </div>
        })}
    </>

}
