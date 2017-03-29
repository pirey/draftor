export const SET_MODE = 'SET_MODE'

export const Modes = {
  NEW_MODE: 'NEW_MODE',
  EDIT_MODE: 'EDIT_MODE',
  NORMAL_MODE: 'NORMAL_MODE'
}

export const newDraft = () => ({
  type: SET_MODE,
  mode: Modes.NEW_MODE,
})

export const editDraft = (draft) => ({
  type: SET_MODE,
  mode: Modes.EDIT_MODE,
  draft
})

export const closeEditor = () => ({
  type: SET_MODE,
  mode: Modes.NORMAL_MODE
})
