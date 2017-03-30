export default React => {
  const Editor = ({ draft, editMode, newMode, submitHandler, closeEditor, removeDraft }) => {

    let content

    let defaultValue = editMode ? draft.content : ''

    const submit = (e) => {
      e.preventDefault()

      const val = content.value.trim()

      if (val) {

        if (editMode) {
          submitHandler(draft.id, val)
        }

        else {
          submitHandler(val)
        }
      }

    }

    const cancel = (e) => {
      e.preventDefault()
      closeEditor()
    }

    const deleteButton = (
      <button
        className="btn-delete"
        onClick={() => removeDraft(draft.id)}>Delete</button>
    )

    return (
      <form onSubmit={submit} className="editor">
        <textarea
          ref={(node) => content = node}
          defaultValue={defaultValue}
          placeholder="Write something..."
        ></textarea>
        <button type="submit">Save</button>
        {editMode && ' '}
        {editMode && deleteButton}
        {closeEditor && ' '}
        {closeEditor &&
          <button className="btn-cancel" onClick={cancel}>Cancel</button>}
      </form>
    )
  }

  return Editor
}
