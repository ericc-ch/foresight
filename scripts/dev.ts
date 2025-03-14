import concurrently from "concurrently"

const result = concurrently([
  {
    command: "pnpm run dev:frontend",
    name: "frontend",
    prefixColor: "yellow",
  },
  {
    command: "pnpm run dev:backend",
    name: "backend",
    prefixColor: "white",
  },
])

await result.result
