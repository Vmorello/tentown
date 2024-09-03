import './globals.css'
import LogoutButton from '@/components/LogoutButton'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

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
        <main className="min-h-screen bg-background flex flex-col items-center">
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
              <div>
                {user ? (
                  <div className="flex items-center gap-4">
                    Hey, {user.email}!
                    <LogoutButton />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="py-2 px-4 rounded-md  bg-btn-background hover:bg-btn-background-hover"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </nav>


          {children}
        </main>
      </body>
    </html>
  )
}
