import './App.css'
import Button from "./Button";
import List from './List';

function App() {
  let content = "List Item";
  return (
    <div className="App">
      Hello React, {content}
      <Button/>
      <List listItem = {content}/>
    </div>
  )
}

export default App
