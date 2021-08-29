
import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './Data/data'

/*import components*/
import { Header } from './components/Header';
import { Todolist } from './components/Todolist';

/*import popup for modal*/
import AddTask from './modal/AddTask';
function App() {
  /*hook in react*/

  const [ todoList, setToDo ] = useState(data);
  const [modal, setModal] = useState(false);
  /*toggle function*/
  const toggle = () => {
    setModal(!modal);
}
/*save task list to add into data */
 const saveTask = (taskObj) => {
  
  let copy = [...todoList];
  copy = [...copy, { id: todoList.length + 1, task:taskObj["Name"],desciption:taskObj["Description"], complete: false }];
  
  data.push({ id: todoList.length + 1, task:taskObj["Name"], desciption:taskObj["Description"], complete: false });
  localStorage.setItem({data}, JSON.stringify(copy))
  setToDo(copy);
  setModal(false)
}

  return(
        <>
        <Header/>
        <Todolist list={todoList}/>
        <div className="container  center">
        <button className="btn btn-primary" onClick = {() => setModal(true)}>Add Task</button>
        </div>
        <AddTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
  );
}

export default App;
