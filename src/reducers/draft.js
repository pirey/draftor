import { SAVE_DRAFT, EDIT_DRAFT, ADD_DRAFT, CANCEL_EDIT_DRAFT } from '../actions/draft'

const draftReducer = (state = [], action) => {

  const { content, id, type } = action

  switch (type) {

    case EDIT_DRAFT:
      return state.map(item =>
        Object.assign({}, item, { editMode: (item.id === id) })
      )

    case CANCEL_EDIT_DRAFT:
      return state.map(item => {
        if (item.id === id) {
          return Object.assign({}, item, { editMode: false })
        }

        return item
      })

    case ADD_DRAFT:
      return [
        ...state,
        {
          id,
          content,
          editMode: false
        }
      ]

    case SAVE_DRAFT:
      return state.map(item => {
        if (item.id === id) {
          return Object.assign({}, item, {
            content,
            editMode: false,
          })
        }
        return item
      })

    default:
      return state
  }
}

export default draftReducer
