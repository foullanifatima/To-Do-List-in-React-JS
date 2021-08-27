
import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './Data/data.json'
/*import components*/
import { Header } from './components/Header';
import { Todolist } from './components/Todolist';

function App() {
  /*hook in react*/
  const [ todoList, setToDo ] = useState(data);

  
  return(
        <>
        <Header/>
        <Todolist list={todoList}/>
        </>
  );
}

export default App;
