import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="h-full w-full flex justify-center items-center pt-20"></div>
  )
}
