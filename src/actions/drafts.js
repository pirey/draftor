import cuid from 'cuid'

export const SAVE_DRAFT = 'SAVE_DRAFT'
export const ADD_DRAFT = 'ADD_DRAFT'
export const CLEAR_DRAFT = 'CLEAR_DRAFT'
export const REMOVE_DRAFT = 'REMOVE_DRAFT'

export const clearDraft = () => ({
  type: CLEAR_DRAFT,
})

export const removeDraft = id => ({
  type: REMOVE_DRAFT,
  id
})

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
