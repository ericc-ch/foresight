import { createInstance, INDEXEDDB } from "localforage"

export interface Note {
  id: string
  title: string
  content: string
  tags: Array<string> | Blob
  thumbnail?: string
  createdAt: number
  updatedAt: number
}

type NoteCreateInput = Omit<Note, "id" | "createdAt" | "updatedAt">
type NoteUpdateInput = Partial<Omit<Note, "id" | "createdAt" | "updatedAt">>

const instance = createInstance({
  driver: INDEXEDDB,
  name: "Foresight",
  storeName: "notes",
})

/**
 * Create a new note
 */
export async function createNote(input: NoteCreateInput): Promise<Note> {
  const timestamp = Date.now()
  const note: Note = {
    id: globalThis.crypto.randomUUID(),
    ...input,
    createdAt: timestamp,
    updatedAt: timestamp,
  }

  await instance.setItem(note.id, note)
  return note
}

/**
 * Get a note by ID
 */
export async function getNoteById(id: string): Promise<Note | null> {
  return instance.getItem<Note>(id)
}

/**
 * Get all notes
 */
export async function getAllNotes(): Promise<Array<Note>> {
  const notes: Array<Note> = []

  await instance.iterate<Note, unknown>((note) => {
    notes.push(note)
  })

  return notes
}

/**
 * Update an existing note
 */
export async function updateNote(
  id: string,
  input: NoteUpdateInput,
): Promise<Note | null> {
  const existingNote = await getNoteById(id)

  if (!existingNote) {
    return null
  }

  const updatedNote: Note = {
    ...existingNote,
    ...input,
    updatedAt: Date.now(),
  }

  await instance.setItem(id, updatedNote)
  return updatedNote
}

/**
 * Delete a note by ID
 */
export async function deleteNote(id: string): Promise<boolean> {
  const existingNote = await getNoteById(id)

  if (!existingNote) {
    return false
  }

  await instance.removeItem(id)
  return true
}

/**
 * Search notes by title or content
 */
export async function searchNotes(query: string): Promise<Array<Note>> {
  const allNotes = await getAllNotes()
  const normalizedQuery = query.toLowerCase().trim()

  if (!normalizedQuery) {
    return allNotes
  }

  return allNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(normalizedQuery)
      || note.content.toLowerCase().includes(normalizedQuery),
  )
}

/**
 * Filter notes by tags
 */
export async function filterNotesByTags(
  tags: Array<string>,
): Promise<Array<Note>> {
  if (tags.length === 0) {
    return getAllNotes()
  }

  const allNotes = await getAllNotes()

  return allNotes.filter((note) => {
    if (!Array.isArray(note.tags)) {
      return false
    }

    return tags.some((tag) => (note.tags as Array<string>).includes(tag))
  })
}
