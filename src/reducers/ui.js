import { SET_MODE, Modes } from '../actions/ui'
import { ADD_DRAFT, SAVE_DRAFT } from '../actions/drafts'

const uiReducer = (state = {}, action) => {

  const { type, mode, draft } = action

  switch (type) {

    case ADD_DRAFT:
    case SAVE_DRAFT:
      return {
        ...state,
        mode: Modes.NORMAL_MODE,
        draft: undefined
      }

    case SET_MODE:
      return { ...state, mode, draft }

    default:
      return state
  }
}

export default uiReducer

export const isEditMode = (state) => state.mode === Modes.EDIT_MODE

export const isNewMode = (state) => state.mode === Modes.NEW_MODE

export const getEditedDraft = (state) =>
  isEditMode(state)
    ? state.draft
    : undefined
