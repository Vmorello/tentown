import { get_image } from "@/utils/icons_utils"

interface centeredBackground extends background_function {
    location: { x: number, y: number }
}

interface background_function {
    backgroundButt: (type:  "File") => () => void
    // bgList: string[]
}

export function CenteredBackground({ backgroundButt,  location }: centeredBackground) {
    return <div className="absolute" style={{
        top: `${location.y-94}px`,
        left: `${location.x-150}px`,
    }}>
        <BackgroundCard backgroundButt={backgroundButt}/>
    </div>
}

export function BackgroundCard({ backgroundButt }: background_function) {
    // FOR PAST AND FUTURE USE
    // console.log(bgList)
    // if (bgList === undefined) {
    //     return <></>
    // }
    // const bgLines = bgList.map((element: string) => {
    //     return <option value={element} key={element}>{element.split('/')[1]}</option>
    // });

    return <div className="text-center p-2 m-3" >
        <div className="text-2xl">Add a Map </div>

        <div className="relative bg-indigo-500  w-full min-w-md h-32 border-2 border-dotted border-gray-300 rounded-lg flex justify-center items-center cursor-pointer">
            <input type="file" id={`bgFileSelect`} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
            onChange={backgroundButt("File")} />
            <label htmlFor={`bgFileSelect`} className="text-lg pointer-events-none p-6">
              Drop an Image or <span className="text-pink-300">Browse</span>
            </label>
          </div>

    </div>
}

export function MiniTopRightBackground({ backgroundButt }: background_function) {
    return <div className="absolute" style={{
        top: `2px`,
        right: `2px`,
    }}>
        <div className="relative">
            <input type="file" id={`bgFileSelect`} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={backgroundButt("File")} />
            <label htmlFor={`bgFileSelect`} className="text-lg pointer-events-none p-6">
                <img src={get_image("mapIcon")!} alt={"change background"} height={30} width={30} onClick={backgroundButt("File")} />
            </label>
          </div>
    </div>
}