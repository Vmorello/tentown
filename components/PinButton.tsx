import { EmojiSelect } from "./4creator/IconSelect";

export default function PinButton({ pinStep, setPinStep, setCurrentItem, }: {
    pinStep: string,
    setPinStep: React.Dispatch<React.SetStateAction<"place" | "button" | "selection" | "describe">>,
    setCurrentItem: React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <>
            {pinStep == "button" && <button className="bg-gradient-to-br from-amber-300 via-pink-400 to-indigo-500
                                px-4 py-3 my-3 mx-2 lg:mx-5 rounded-full lg:rounded-lg shadow-xl hover:scale-105 transform transition-all duration-200 font-bold"
                onClick={() => setPinStep("selection")}>
                <p className="block lg:hidden">+</p>
                <p className="hidden lg:block">+ Add a Memory Pin</p>
            </button>}
            {(pinStep == "place" || pinStep == "selection") &&
                <EmojiSelect setCurrentItem={setCurrentItem} setPinStep={setPinStep} />}
        </>

    )
}