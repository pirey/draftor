import { connect } from 'react-redux'
import createListItem from './ListItem'
import { editDraft } from '../actions/ui'

const List = React => {

  const ListItem = createListItem(React)

  const List = ({ items = [], editDraft }) => {

    if (items.length <= 0) {
      return null;
    }

    return (
      <ul className="list">
        {
          items.map(item => (
            <ListItem
              editDraft={editDraft}
              item={item}
              key={item.id} />
          ))
        }
      </ul>
    )
  }

  const mapStateToProps = (state) => ({
    items: state.drafts
  })

  const mapDispatchToProps = (dispatch) => ({
    editDraft: (draft) => dispatch(editDraft(draft))
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)
}

export default List
