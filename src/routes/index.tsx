import { TextArea } from "@progress/kendo-react-inputs"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { getAllNotes } from "../lib/database"
import { Container } from "./-components/container/container"
import classes from "./index.module.css"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const [hasNotes, setHasNotes] = useState<boolean | null>(null)

  useEffect(() => {
    const checkForNotes = async () => {
      const notes = await getAllNotes()
      setHasNotes(notes.length > 0)
    }

    void checkForNotes()
  }, [])

  // Show centered TextArea only when we've confirmed there are no notes
  const showCentered = hasNotes === false

  return (
    <Container centered={showCentered}>
      {hasNotes === false && (
        <h2 className={classes.heading}>What notes are you taking today?</h2>
      )}
      <div className={classes.textAreaWrapper}>
        <TextArea
          style={{
            width: "100%",
            minHeight: "200px",
            padding: "4px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </Container>
  )
}
