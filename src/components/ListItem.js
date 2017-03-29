export default React => {
  const ListItem = ({ item, editDraft }) => {

    return (
      <li className="item" onClick={() => editDraft(item)}>{item.content}</li>
    )
  }

  return ListItem
}
