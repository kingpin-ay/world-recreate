import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="h-full w-full flex justify-center items-center pt-1 pb-1">
      <h1 className="text-2xl font-bold text-white">World Recreate</h1>
    </div>
  )
}
