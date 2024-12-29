import React from 'react';

import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface select_class {
    setCurrentItem: React.Dispatch<React.SetStateAction<string>>
    currentItem: string
    pageRepList: string[]

}

export function CardSelect({
    setCurrentItem,
    currentItem, pageRepList }: select_class
) {

    const onEmojiChange = (emojiData: EmojiClickData, event: MouseEvent) => {
        console.log(emojiData)
        setCurrentItem(emojiData.emoji)
    }


    // console.log(`loaded is ${loaded}`)
    return (<div className={'bg-gray-400 opacity-75 '}>
        <IconSelectDropdown setCurrentItem={setCurrentItem}
            currentItem={currentItem} pageRepList={pageRepList} />
        <EmojiPicker onEmojiClick={onEmojiChange} />

        <hr className={"h-1 bg-black"} />

    </div>
    )
}

function IconSelectDropdown({ setCurrentItem, currentItem, pageRepList, }: select_class) {
    const listItems = pageRepList.map((element: string) => {
        return <option className={"text-2xl"} value={element} key={element}>{element}</option>
    });

    return (
        <select onChange={(event) => setCurrentItem(event.target.value)} defaultValue={currentItem}>
            {listItems}
        </select>

    )
}

