import './App.css'
import Counter from './components/counter/counter'
import SimpleForm from './components/simpleForm/simpleForm'
import Toggles from './components/toggles/toggles'
import PostList from './components/postList/postList'


function App() {

  return (
    <div className="App">
      <Toggles />
      <SimpleForm/>
    </div>
  )
}

export default App
