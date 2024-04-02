import './App.css'
import ProductPage from './components/ProductPage/ProductPage.jsx'
import Header from './components/Header/Header.jsx'
import Homebody from './components/HomeBody/HomeBody.jsx'
import Topssellerbtn from './components/topsellerbtn/Topsellerbtn.jsx'

function App() {

  return (
    <>
      <Header></Header>
      <Homebody></Homebody>
      <Topssellerbtn></Topssellerbtn>
      <ProductPage></ProductPage>
    </>
  )
}

export default App
