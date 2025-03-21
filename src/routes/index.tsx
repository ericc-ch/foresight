import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-base-200 flex min-h-screen flex-col">
      <main className="flex-1">
        <h1>Home</h1>
      </main>
    </div>
  )
}
