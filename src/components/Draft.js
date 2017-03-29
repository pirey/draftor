import './Draft.css'
import createHeader from './Header'
import createContent from './Content'

export default React => {

  const Header = createHeader(React)
  const Content = createContent(React)

  const Draft = () => (
    <div className="draft">
      <Header />
      <Content />
    </div>
  )

  return Draft
}
