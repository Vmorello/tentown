import React from 'react';

import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface card_type extends select_class, new_save_function {
    updateButt: () => void
    loaded: boolean
}

interface select_class {
    setCurrentItem: React.Dispatch<React.SetStateAction<string>>
    currentItem: string
    pageRepList: string[]

}

interface new_save_function extends background_function {
    newSaveButt: () => void
    savable:boolean
}

interface background_function {
    backgroundButt: () => void
    bgList: string[]
}



export function CardSelect({
    setCurrentItem,
    currentItem, pageRepList, bgList, savable,
    backgroundButt, loaded, newSaveButt, updateButt }: card_type
) {

    const onEmojiChange = (emojiData: EmojiClickData, event: MouseEvent) => {
        console.log(emojiData)
        setCurrentItem(emojiData.emoji)
    }


    // console.log(`loaded is ${loaded}`)
    return (<div className={'bg-gray-400 opacity-75 '}>
        <IconSelectDropdown setCurrentItem={setCurrentItem}
            currentItem={currentItem} pageRepList={pageRepList} />
        {bgList.length > 1 ? <EmojiPicker onEmojiClick={onEmojiChange} /> : <></>}

        <hr className={"h-1 bg-black"} />

        {loaded ? <LoadedOptions updateButt={updateButt} /> : <NewSaveOptions newSaveButt={newSaveButt} bgList={bgList} backgroundButt={backgroundButt} savable={savable} />}
    </div>
    )
}

function NewSaveOptions({ newSaveButt, backgroundButt, bgList, savable }: new_save_function) {
    return <>
        <BackgroundCard backgroundButt={backgroundButt} bgList={bgList} />
        {savable?  <button onClick={newSaveButt}> Save This Map </button>:<></>}
    </>
}

function LoadedOptions({ updateButt: updateButt }: { updateButt: () => void }) {
    return <button  className="w-full min-h-36 text-5xl font-bold" onClick={updateButt}>Update</button>
}

function BackgroundCard({ backgroundButt, bgList }: background_function) {
    console.log(bgList)
    if (bgList === undefined) {
        return <></>
    }


    const bgLines = bgList.map((element: string) => {
        return <option value={element} key={element}>{element.split('/')[1]}</option>
    });

    return <label>
        Changing the Background
        <div>
            <select id="bgStorageSelect" onChange={backgroundButt}>
                {bgLines}
            </select>
        </div>
    </label>

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
