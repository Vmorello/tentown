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

export default async function RootLayout({children,}: {children: React.ReactNode}) {

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background">
          <nav className="w-full flex justify-center" style={{backgroundColor:bgBlueHex}}>
            <div className="relative w-full max-w-4xl flex justify-between p-3 text-sm text-foreground">
               <img src={logo.src} height={100} className='min-h-28'/>
                {user ? (
                  <div className="absolute right-0 flex items-center gap-4">
                    Hey, {user.email}!
                    <LogoutButton />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="py-2 px-4 max-h-9 rounded-md  bg-btn-background hover:bg-btn-background-hover"
                  >
                    Login
                  </Link>
                )}
              </div>
          </nav>


          {children}
        </main>
      </body>
    </html>
  )
}
