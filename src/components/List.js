import createListItem from './ListItem'

const List = React => {

  const ListItem = createListItem(React)

  const List = ({ drafts = [], editDraft }) => {

    if (drafts.length <= 0) {
      return null;
    }

    return (
      <ul className="list">
        {
          drafts.map(item => (
            <ListItem
              editDraft={editDraft}
              item={item}
              key={item.id} />
          ))
        }
      </ul>
    )
  }

  return List
}

export default List
