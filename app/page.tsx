import MapSelect from '@/components/map_select'
import Link from 'next/link'




export default function Index() {

  return (
    <div className="flex flex-col items-center">

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">

        <div className="flex flex-col gap-8 text-foreground">
          <h2 className="text-lg font-bold text-center">
            Let's get you Map-Making
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            <Link href="/new/map"
              className="relative flex flex-col group rounded-lg border p-6 hover:border-foreground gap-2">
              <h3 className="font-bold font- mb-2  min-h-[40px] lg:min-h-[60px]">
                Make New Map 🧝🧌
              </h3>
            </Link>


            <Link href="/image"
              className=" relative flex flex-col group rounded-lg border p-6 hover:border-foreground gap-2">
              <h3 className="font-bold mb-2  min-h-[40px] lg:min-h-[60px]">
                Add Images 🪄
              </h3>

            </Link>

          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-center">
            Here are your Memory Maps 💖
          </h2>
          <MapSelect />
        </div>




        <div className="flex justify-center text-center text-xs">
          <p>
            Created by VM Wulizzi.
          </p>
        </div>
      </div>
    </div>
  )
}
