import { GetNotesQuery } from "../services/schema";

export type NoteNode = GetNotesQuery["notes"]["notes"][number];
