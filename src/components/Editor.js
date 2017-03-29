export default React => {
  const Editor = ({ draft, editMode, newMode, submitHandler, closeEditor }) => {

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

    return (
      <form onSubmit={submit} className="editor">
        <textarea
          ref={(node) => content = node}
          defaultValue={defaultValue}
        ></textarea>
        <button type="submit">Save</button>
        {' '}
        <button onClick={cancel}>Cancel</button>
      </form>
    )
  }

  return Editor
}
