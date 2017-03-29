export default React => {
  const ListItem = ({ item, onDraftClick, onCancelEdit, onSaveDraft }) => {

    let textEditor

    const style = {
      cursor: 'default'
    }

    const submit = (e) => {
      e.preventDefault()

      const val = textEditor.value.trim()

      if (val) {
        onSaveDraft(item.id, val)
      }
    }

    const cancelEdit = (e) => {
      e.preventDefault()
      onCancelEdit(item.id)
    }

    if (item.editMode) {
      return (
        <li style={style} className="edit-draft">
          <form onSubmit={submit}>
            <textarea
              ref={(node) => textEditor = node}
              defaultValue={item.content}>
            </textarea>
            <button type="submit">Save</button>
            {' '}
            <button onClick={cancelEdit}>Cancel</button>
          </form>
        </li>
      )
    }

    return (
      <li style={style} onClick={() => onDraftClick(item.id)}>{item.content}</li>
    )
  }

  return ListItem
}
