import './Draft.css'
import createHeader from './Header'
import createFooter from './Footer'
import createList from './List'

export default React => {

  const Header = createHeader(React)
  const Footer = createFooter(React)
  const List = createList(React)

  const Draft = () => (
    <div className="draft">
      <Header />
      <List />
      <Footer />
    </div>
  )

  return Draft
}
