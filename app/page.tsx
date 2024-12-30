import { version } from '@/classes/constants'
import MapSelect from '@/components/map_select'
import Link from 'next/link'




export default function Index() {

  

  return (
    <div className="flex flex-col items-center">

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24">

        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold text-center">
            Create Something Amazing.
          </h2>


            <Link href="/new/map"
              className="relative flex flex-col bg-gradient-to-br from-amber-200 via-pink-300 to-indigo-500 rounded-lg p-6 hover:border-foreground gap-2">
              <h3 className="font-bold text-3xl text-center mt-2  min-h-[40px] lg:min-h-[60px]">
                Make New Memory Map
              </h3>
            </Link>



        </div>

        <div>
          <MapSelect />
        </div>




        <div className="justify-center text-center text-xs">
          <div>
            Created by VM Wulizzi.
          </div>
          <div>
            {version}
          </div>
        </div>
      </div>
    </div>
  )
}
