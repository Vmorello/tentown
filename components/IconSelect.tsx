import React from 'react';

import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface select_class {
    setCurrentItem: React.Dispatch<React.SetStateAction<string>>
    setPinStep: React.Dispatch<React.SetStateAction<any>>
    currentItem: string
    pageRepList: string[]
}

const nextPinStep = "place"

export function CardSelect({
    setCurrentItem, setPinStep,
    currentItem, pageRepList, }: select_class
) {

    const onEmojiChange = (emojiData: EmojiClickData, event: MouseEvent) => {
        console.log(emojiData)
        setCurrentItem(emojiData.emoji)
        setPinStep(nextPinStep)
    }

    const onSelectChange =(event: React.ChangeEvent<HTMLSelectElement> ) => {
        setCurrentItem(event.target.value)
        setPinStep(nextPinStep) 
    }

    const listItems = pageRepList.map((element: string) => {
        return <option className={"text-2xl"} value={element} key={element}>{element}</option>
    });

    // console.log(`loaded is ${loaded}`)
    return (<div>
        <select onChange={onSelectChange} defaultValue={currentItem}>
            {listItems}
        </select>
        <EmojiPicker onEmojiClick={onEmojiChange} />

    </div>
    )
}

