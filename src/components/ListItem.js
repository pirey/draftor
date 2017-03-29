export default React => {
  const ListItem = ({ item, editDraft }) => {

    const style = {
      cursor: 'default'
    }

    return (
      <li style={style} onClick={() => editDraft(item)}>{item.content}</li>
    )
  }

  return ListItem
}
