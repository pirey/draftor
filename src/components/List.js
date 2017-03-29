import { connect } from 'react-redux'
import { saveDraft, editDraft, cancelEditDraft } from '../actions/draft'
import createListItem from './ListItem'

const List = React => {

  const ListItem = createListItem(React)

  const List = (props) => {

    const { items } = props

    if (items.length <= 0) {
      return null;
    }

    return (
      <ul className="list">
        {
          items.map(item => (
            <ListItem
              {...props}
              item={item}
              key={item.id} />
          ))
        }
      </ul>
    )
  }

  const mapStateToProps = (state) => {
    return {
      items: state
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onDraftClick: (id) => dispatch(editDraft(id)),
      onCancelEdit: (id) => dispatch(cancelEditDraft(id)),
      onSaveDraft: (id, content) => dispatch(saveDraft(id, content))
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)
}

export default List
