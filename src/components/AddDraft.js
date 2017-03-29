import { connect } from 'react-redux'

import { addDraft } from '../actions/draft'

export default React => {

  const AddDraft = props => {

    let content

    const { addDraft } = props

    const submit = (e) => {
      e.preventDefault()

      const val = content.value.trim()

      if (val) {
        addDraft(val)
        content.value = ''
      }
    }

    return (
      <form onSubmit={submit} className="add-draft">
        <textarea
          ref={(node) => content = node}
        ></textarea>
        <button type="submit">Add new</button>
      </form>
    )
  }

  const mapStateToProps = (state) => ({
  })

  const mapDispatchToProps = (dispatch) => ({
    addDraft: (content) => dispatch(addDraft(content))
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddDraft)
}
