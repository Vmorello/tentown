// 'use client'

// import { useSearchParams } from 'next/navigation'
// import { Suspense } from 'react'

// export default function Messages() {
//   const searchParams = useSearchParams()
//   const error = searchParams.get('error')
//   const message = searchParams.get('message')
//   return (
//     <Suspense>
//       {error && (
//         <p className="mt-4 p-4 bg-neutral-900 text-neutral-300 text-center">
//           {error}
//         </p>
//       )}
//       {message && (
//         <p className="mt-4 p-4 bg-neutral-900 text-neutral-300 text-center">
//           {message}
//         </p>
//       )}
//     </Suspense>
//   )
// }
