export default React => {

  const Footer = ({ newDraft, clearDraft }) => {

    return (
      <div className="add-draft">
        <button onClick={newDraft} type="submit">Add new</button>
        {clearDraft && ' '}
        {clearDraft && <button className="btn-delete" onClick={clearDraft} type="submit">Clear</button>}
      </div>
    )
  }

  return Footer
}
