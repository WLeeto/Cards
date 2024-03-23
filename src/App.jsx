import './App.css'

import { CardModal } from './components/card/CardModal'
import { CardFill } from './components/cardFill/CardFill'

const data = 
  {
    'title': 'Card tital',
    'text': 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
    'img': '',
  }


function App() {

  return (
    <>
      <CardModal>
        <CardFill props={data}/>  
      </CardModal>
    </>
  )
}

export default App
