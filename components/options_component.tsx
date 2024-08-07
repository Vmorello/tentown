import React from 'react';

interface card_type extends select_class, new_save_function {
    loadedSaveButt: () => void
    loaded: boolean
}

interface select_class {
    setCurrentItem: React.Dispatch<React.SetStateAction<string>>
    currentItem: string
    pageRepList: string[]

}

interface new_save_function extends background_function {
    newSaveButt: () => void
}

interface background_function {
    backgroundButt: () => void
    bgList: string[]
}



export function CardSelect({
    setCurrentItem,
    currentItem, pageRepList, bgList,
    backgroundButt, loaded, newSaveButt, loadedSaveButt }: card_type
) {
    // console.log(`loaded is ${loaded}`)
    return (<div className={'bg-gray-400 opacity-75 fixed bottom-2 left-1'}>
        <IconSelectDropdown setCurrentItem={setCurrentItem}
            currentItem={currentItem} pageRepList={pageRepList} />
        <hr className={"h-1 bg-black"} />

        {loaded ? <LoadedOptions loadedSaveButt={loadedSaveButt} /> : <NewSaveOptions newSaveButt={newSaveButt} bgList={bgList} backgroundButt={backgroundButt} />}

    </div>
    )
}

function NewSaveOptions({ newSaveButt, backgroundButt, bgList }: new_save_function) {
    return <>
        <BackgroundCard backgroundButt={backgroundButt} bgList={bgList} />
        <button onClick={newSaveButt}> Save This Map </button>
    </>
}

function LoadedOptions({ loadedSaveButt }: { loadedSaveButt: () => void }) {
    return <button onClick={loadedSaveButt}>  Update</button>
}

function BackgroundCard({ backgroundButt, bgList }: background_function) {

    const bgLines = bgList.map((element: string) => {
        return <option value={element} key={element}>{element}</option>
    });

    return <>
        <label>Changing the Background</label>
        <div>
            <select id="bgStorageSelect">
                {bgLines}
            </select>
        </div>
        <div>
            <button onClick={backgroundButt}>Change BG</button>
        </div>
    </>

}

function IconSelectDropdown({ setCurrentItem,
    currentItem, pageRepList, }: select_class) {
    const listItems = pageRepList.map((element: string) => {
        return <option value={element} key={element}>{element}</option>
    });

    return (
        <select onChange={(event) => setCurrentItem(event.target.value)} defaultValue={currentItem}>
            {listItems}
        </select>
    )
}
