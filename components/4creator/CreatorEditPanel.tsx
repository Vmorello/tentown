import { representation } from "../representation_page"
import { AdminOptions } from "./AdminComponents";
import { EditNameIconComponent } from "./EditNameIconComponent";
import { PhotoNotesComponent } from "./PhotoNotesComponent";


export function CreatorEditPanel({ rep, setCurrentRepInfo, setPreview, linkableMaps, removeRep, currentRepInfo }: {
    rep: representation
    setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
    setPreview: React.Dispatch<React.SetStateAction<{
        item: representation;
        file: File;
    } | undefined>>
    linkableMaps: {
        id: string;
        name: string;
    }[]
    removeRep: (id: string) => () => void
    currentRepInfo: representation[]
},
) {
    return <>
            <EditNameIconComponent rep={rep} setCurrentRepInfo={setCurrentRepInfo} />
            <PhotoNotesComponent item={rep} setCurrentRepInfo={setCurrentRepInfo} setPreview={setPreview} />
            <AdminOptions item={rep} userMaps={linkableMaps} removeRep={removeRep} currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo} />
    </>


}

