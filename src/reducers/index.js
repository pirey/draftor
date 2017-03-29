import { combineReducers } from 'redux'
import drafts from './drafts'
import ui, * as fromUi from './ui'

const reducers = combineReducers({
  drafts,
  ui
})

export default reducers

export const isEditMode = (state) => fromUi.isEditMode(state.ui)

export const isNewMode = (state) => fromUi.isNewMode(state.ui)

export const getEditedDraft = (state) => fromUi.getEditedDraft(state.ui)
