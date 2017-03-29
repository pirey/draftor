import createAddDraft from './AddDraft'


export default React => {

  const AddDraft = createAddDraft(React)

  return (props) => (
    <div>
      <AddDraft />
    </div>
  )
}
