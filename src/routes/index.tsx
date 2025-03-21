import { TextArea } from "@progress/kendo-react-inputs"
import { createFileRoute } from "@tanstack/react-router"

import { Container } from "./-components/container/container"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container>
      <TextArea />
    </Container>
  )
}
