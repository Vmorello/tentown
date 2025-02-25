'use client'

import { settingIconSize } from "@/utils/constants"
import { get_image } from "@/utils/icons_utils"
import React, { useState } from "react"
import { representation } from '@/utils/types';
import EmojiPicker, { EmojiClickData } from "emoji-picker-react"

export function EditNameIconComponent({ rep, setCurrentRepInfo }: {
    rep: representation
    setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
},
) {

    const [openIconBox, setOpenIconBox] = useState(false);




    return <>
        <div className="flex flex-row items-center space-x-3 p-3" >
            <div onClick={() => setOpenIconBox(!openIconBox)}
                className="bg-gray-100  border-gray-400 shadow-md  rounded-full p-2 flex items-center justify-center">
                <img src={get_image(rep.icon)} alt='settings' height={settingIconSize} width={settingIconSize} className="rounded-full" />
            </div>
            <div>
                <textarea cols={25} rows={3} value={rep.visible_name} className="text-gray-900"
                    onChange={(event) => setCurrentRepInfo((repInfo) => {
                        const info_copy = repInfo.slice()
                        const listIndex = info_copy.findIndex(indexOf => rep.id === indexOf.id)
                        info_copy[listIndex].visible_name = event.target.value
                        return info_copy
                    })} />
            </div>
        </div>
        {openIconBox && <EmojiPicker onEmojiClick={(emojiData: EmojiClickData)=> {setCurrentRepInfo((repInfo) => {
            const info_copy = repInfo.slice()
            const listIndex = info_copy.findIndex(indexOf => rep.id === indexOf.id)
            info_copy[listIndex].icon = emojiData.unified.toUpperCase()
            setOpenIconBox(false)
            return info_copy
        })}} />}
    </>
}
