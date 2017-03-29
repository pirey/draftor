import { SAVE_DRAFT, ADD_DRAFT } from '../actions/drafts'

export default (state = [], action) => {

  const { content, id, type } = action

  switch (type) {

    case ADD_DRAFT:
      return [
        ...state,
        {
          id,
          content,
        }
      ]

    case SAVE_DRAFT:
      return state.map(item => {
        if (item.id === id) {
          return Object.assign({}, item, {
            content,
          })
        }
        return item
      })

    default:
      return state
  }
}
