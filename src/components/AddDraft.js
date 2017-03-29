import { connect } from 'react-redux'
import { newDraft } from '../actions/ui'

export default React => {

  const AddDraft = ({ newDraft }) => {

    return (
      <div className="add-draft">
        <button onClick={newDraft} type="submit">Add new</button>
      </div>
    )
  }

  const mapStateToProps = (state) => ({
  })

  const mapDispatchToProps = (dispatch) => ({
    newDraft: () => dispatch(newDraft())
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddDraft)
}
