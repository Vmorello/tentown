import './globals.css'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { bgBlueHex } from '@/utils/constants'

import logo from "/public/logoName.svg";
import { signout } from './auth/actions';
// import { AuthProvider } from '@/components/AuthContext'

export const metadata = {
  title: 'Memory Map 💚',
  description: 'Generate a view of you and your memories to share',
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  const supabase = await createClient()

  const {
    data: { user }, error
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body className="bg-background text-neutral-100 " style={{ backgroundColor: bgBlueHex }}>
        {/* <AuthProvider> */}
        <main>
          <nav className="w-full flex justify-center " >
            <div className="relative w-full  flex justify-between  p-3 text-sm ">
              <Link href="/">
                <img src={logo.src} height={100} />
              </Link>
              {user ? (
                <div className="justify-end mx-8 flex items-center gap-4">
                  Hey, {user.email}!
                  <form >
                    <button formAction={signout} className="py-2 px-4 rounded-md no-underline bg-slate-900 hover:bg-slate-700">
                      Logout
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-2 px-4 justify-end mx-8 flex items-center gap-4">
                  <Link
                    href="/auth"
                    className="font-bold py-8 px-8 lg:px-32 justify-end flex items-center gap-4 max-h-9 rounded-md bg-gradient-to-br from-amber-300 via-pink-400 to-indigo-500 "
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {children}

        </main>
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}
