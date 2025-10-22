export function getAllNotes(req, res) {
    res.status(200).json("You got 5 notes from controller")
}

export function createNote(req, res) {
    res.status(201).json("Note created successfully from controller")
}

export function updateNote(req, res) {
    res.status(200).json(`Note with id ${req.params.id} updated successfully from controller`)
}

export function deleteNote(req, res) {
    res.status(200).json(`Note with id ${req.params.id} deleted successfully from controller`)
}