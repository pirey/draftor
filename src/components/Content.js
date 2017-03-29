import { connect } from 'react-redux'
import createList from './List'
import createEditor from './Editor'
import createAddDraft from './AddDraft'
import { getEditedDraft, isEditMode, isNewMode } from '../reducers'
import { addDraft, saveDraft } from '../actions/drafts'
import { closeEditor } from '../actions/ui'

export default React => {

  const List = createList(React)
  const Editor = createEditor(React)
  const AddDraft = createAddDraft(React)

  const Content = ({ draft, editMode, newMode, saveDraft, addDraft, closeEditor }) => {

    if (editMode) {
      return (<Editor closeEditor={closeEditor} submitHandler={saveDraft} editMode draft={draft} />)
    }

    else if (newMode) {
      return (<Editor closeEditor={closeEditor} submitHandler={addDraft} newMode />)
    }

    return (
      <div>
        <List />
        <AddDraft />
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    editMode: isEditMode(state),
    newMode: isNewMode(state),
    draft: getEditedDraft(state)
  })

  const mapDispatchToProps = (dispatch) => ({
    addDraft: (content) => dispatch(addDraft(content)),
    saveDraft: (id, content) => dispatch(saveDraft(id, content)),
    closeEditor: () => dispatch(closeEditor())
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)

}
