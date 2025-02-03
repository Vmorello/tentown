import Link from 'next/link'
import Messages from './messages'
import { Suspense } from 'react'
import { login, signup } from './actions'

export default function Login() {
  return (
    <div className="flex flex-col items-center">
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">

      <form
        className="flex-1 flex flex-col w-full justify-center gap-2"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          id="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button formAction={login} className="bg-green-600 rounded px-4 py-2 mb-2">
          Sign In
        </button>
        <button formAction={signup} className="border bg-green-700 border-gray-700 rounded px-4 py-2 mb-2" >
          Sign Up
        </button>
        <Suspense>
          <Messages />
        </Suspense>
      </form>
    </div>
    </div>
  )
}
