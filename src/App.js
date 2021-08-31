
import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './Data/data.json'
/*import components*/
import { Header } from './components/Header';
import { Todolist } from './components/Todolist';


function App() {
  const [modal, setModal] = useState(false);
  return(
        <>
        <Header/>
        <Todolist modal={modal} setModal={setModal} />
        <div className="container  center">
        <button className="btn btn-primary fixed-button" onClick = {() => setModal(true)}>Add Task</button>
        </div>
        </>
  );
}
export default App;


