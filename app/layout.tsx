import './globals.css'
import LogoutButton from '@/components/LogoutButton'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { bgBlueHex } from '@/classes/constants'

import logo from "/public/logoName.svg";

export const metadata = {
  title: 'Memory Map 💚',
  description: 'Generate a view of you and your memories to share',
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background text-neutral-100" style={{ backgroundColor: bgBlueHex }}> 
          <nav className="w-full flex justify-center" >
            <div className="relative w-full  flex justify-between p-3 text-sm ">
              <Link href="/">
                <img src={logo.src} height={100} className='min-h-28' />
              </Link>
              {user ? (
                <div className="justify-end mx-8 flex items-center gap-4">
                  Hey, {user.email}!
                  <LogoutButton />
                </div>
              ) : (
                <div className="py-2 px-4 justify-end mx-8 flex items-center gap-4">
                <Link
                  href="/login"
                  className="font-bold py-8 px-32 justify-end flex items-center gap-4 max-h-9 rounded-md bg-gradient-to-br from-amber-200 via-pink-300 to-indigo-500 "
                >
                  Login
                </Link>
                </div>
              )}
            </div>
          </nav>

          {children}
          
        </main>
      </body>
    </html>
  )
}
