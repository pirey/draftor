import { connect } from 'react-redux'
import createList from './List'
import createEditor from './Editor'
import createAddDraft from './Footer'
import { getEditedDraft, isEditMode, isNewMode } from '../reducers'
import { clearDraft, addDraft, saveDraft, removeDraft } from '../actions/drafts'
import { editDraft, newDraft, closeEditor } from '../actions/ui'

export default React => {

  const List = createList(React)
  const Editor = createEditor(React)
  const Footer = createAddDraft(React)

  const Content = ({ drafts, editDraft, newDraft, clearDraft, draft, editMode, newMode, saveDraft, addDraft, closeEditor, removeDraft }) => {

    const draftEmpty = drafts.length <= 0

    if (editMode) {
      return (<Editor removeDraft={removeDraft} closeEditor={closeEditor} submitHandler={saveDraft} editMode draft={draft} />)
    }

    else if (newMode) {
      return (<Editor closeEditor={closeEditor} submitHandler={addDraft} newMode />)
    }

    else if (draftEmpty) {
      return (<Editor submitHandler={addDraft} newMode />)
    }

    const onClear = draftEmpty ? false : clearDraft

    return (
      <div>
        <List drafts={drafts} editDraft={editDraft} />
        <Footer newDraft={newDraft} clearDraft={onClear} />
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    editMode: isEditMode(state),
    newMode: isNewMode(state),
    draft: getEditedDraft(state),
    drafts: state.drafts
  })

  const mapDispatchToProps = (dispatch) => ({
    addDraft: (content) => dispatch(addDraft(content)),
    editDraft: (id, content) => dispatch(editDraft(id, content)),
    newDraft: (content) => dispatch(newDraft()),
    saveDraft: (id, content) => dispatch(saveDraft(id, content)),
    closeEditor: () => dispatch(closeEditor()),
    removeDraft: (id) => dispatch(removeDraft(id)),
    clearDraft: () => dispatch(clearDraft())
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)

}
