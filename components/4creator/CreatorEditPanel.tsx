import { representation } from '@/utils/types';
import { AdminOptions } from "./AdminComponents";
import { EditNameIconComponent } from "./EditNameIconComponent";
import { PhotoNotesComponent } from "./PhotoNotesComponent";


export function CreatorEditPanel({ rep, setCurrentRepInfo,linkableMaps, removeRep }: {
    rep: representation
    setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
   
    linkableMaps: {
        id: string;
        name: string;
    }[]
    removeRep: (id: string) => () => void
},
) {
    return <>
            <EditNameIconComponent rep={rep} setCurrentRepInfo={setCurrentRepInfo} />
            <PhotoNotesComponent item={rep} setCurrentRepInfo={setCurrentRepInfo} />
            <AdminOptions item={rep} userMaps={linkableMaps} removeRep={removeRep} setCurrentRepInfo={setCurrentRepInfo} />
    </>


}

