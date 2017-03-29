import cuid from 'cuid'

export const SAVE_DRAFT = 'SAVE_DRAFT'
export const ADD_DRAFT = 'ADD_DRAFT'
export const EDIT_DRAFT = 'EDIT_DRAFT'
export const CANCEL_EDIT_DRAFT = 'CANCEL_EDIT_DRAFT'

export const addDraft = content => ({
  type: ADD_DRAFT,
  content,
  id: cuid()
})

export const saveDraft = (id, content) => ({
  type: SAVE_DRAFT,
  content,
  id
})

export const editDraft = id => ({
  type: EDIT_DRAFT,
  id
})

export const cancelEditDraft = id => ({
  type: CANCEL_EDIT_DRAFT,
  id
})
