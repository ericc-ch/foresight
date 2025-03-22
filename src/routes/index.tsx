import {
  TextArea,
  TextBox,
  type TextBoxChangeEvent,
} from "@progress/kendo-react-inputs"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState, type FormEvent } from "react"

import { createNote, getAllNotes } from "../lib/database"
import { Container } from "./-components/container/container"
import classes from "./index.module.css"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function NoteForm({
  onSave,
  hasNotes,
}: {
  onSave: (title: string, content: string) => Promise<void>
  hasNotes: boolean
}) {
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isSaving, setSaving] = useState(false)

  const handleContentChange = (e: TextBoxChangeEvent) => {
    setContent(e.target.value)
    if (e.target.value.trim() && !isTyping) {
      setIsTyping(true)
    } else if (!e.target.value.trim() && isTyping) {
      setIsTyping(false)
    }
  }

  const handleTitleChange = (e: TextBoxChangeEvent) => {
    setTitle(e.target.value?.toString() ?? "")
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return

    try {
      setSaving(true)
      await onSave(title, content)

      // Reset form after successful save
      setTitle("")
      setContent("")
      setIsTyping(false)
    } catch (error: unknown) {
      console.error(
        "Failed to save note:",
        error instanceof Error ? error.message : String(error),
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className={classes.noteForm} onSubmit={handleSubmit}>
      {isTyping && (
        <TextBox
          placeholder="Note title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      )}
      <div className={classes.textAreaWrapper}>
        <TextArea value={content} onChange={handleContentChange} />
      </div>
      {isTyping && (
        <button
          className={classes.saveButton}
          disabled={isSaving}
          type="submit"
        >
          {isSaving ? "Saving..." : "Save Note"}
        </button>
      )}
    </form>
  )
}

function RouteComponent() {
  const [hasNotes, setHasNotes] = useState<boolean | null>(null)

  useEffect(() => {
    const checkForNotes = async () => {
      try {
        const notes = await getAllNotes()
        setHasNotes(notes.length > 0)
      } catch (error: unknown) {
        console.error(
          "Failed to fetch notes:",
          error instanceof Error ? error.message : String(error),
        )
        setHasNotes(false)
      }
    }

    void checkForNotes()
  }, [])

  const saveNote = async (title: string, content: string) => {
    await createNote({
      title: title.trim() || "Untitled Note",
      content,
      tags: [],
    })
    setHasNotes(true)
  }

  // Show centered TextArea only when we've confirmed there are no notes
  const showCentered = hasNotes === false

  return (
    <Container centered={showCentered}>
      {hasNotes === false && (
        <h2 className={classes.heading}>What notes are you taking today?</h2>
      )}
      <NoteForm hasNotes={hasNotes === true} onSave={saveNote} />
    </Container>
  )
}
