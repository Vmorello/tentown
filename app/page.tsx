import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'


const examples = [
  { type: 'Sigil', map_id: '538ba993-1561-4bf0-b214-03b26a1cc317' },
  { type: 'Icewind Dale 🇮🇪', map_id: '906b4b63-0cbb-4c6b-a600-94610f179ba0' },
  { type: 'Icewind Dale 🇨🇦', map_id: 'ab6d99d8-bee9-47f4-9367-a2cdb1a9deca' },
  { type: "WIP 💝", map_id: '0fb9f15a-ef64-4df4-9ff1-8d0c85849e4e' },
]

export default  function Index() {

  return (
    <div>

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">

        <div className="flex flex-col gap-8 text-foreground">
          <div className="grid gap-2 justify-center mx-auto text-center">
            <h2 className="text-lg font-bold text-center">Examples</h2>
            <h2 className="text-lg  text-center">Logging in above helps here</h2>
            <p className="text-sm">
              Click one of the below links to have a map
            </p>
          </div>
          <div className="w-full justify-center border rounded-lg overflow-hidden">
            {examples.map(({ type, map_id }) => (
              <Link
                href={`/${map_id}/map/`}
                key={type}
                className="w-full grid grid-cols-3 border-b last:border-b-0 text-sm"
              >
                <div className="flex items-center font-bold p-4 min-h-12 w-full" >
                  {type}
                </div>
                <div className="col-span-2 border-l p-4 flex items-center">
                  <code className="text-sm whitespace-pre-wrap">{map_id}</code>
                </div>
              </Link>
            ))}
          </div>
        </div>

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



        <div className="flex justify-center text-center text-xs">
          <p>
            Created by VM Wulizzi.
          </p>
        </div>
      </div>
    </div>
  )
}
