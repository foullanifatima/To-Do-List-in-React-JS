import React,{useState} from 'react'
import { Todocard } from './Todocard'

export const Todolist = ({list}) => {

    const [taskList, setTaskList] = useState([])
    taskList.push(list);

    const updateListArray = (obj, index) => {
        let copy = taskList;
        copy[index] = obj;
       
        setTaskList(copy)
        window.location.reload()
    }
    return (
      
        <div className="container  fluid">
            <div className="row"> 
            {list.map(todo => {
               return (
                <div className=" col-lg-4 col-xs-12 col-md-6">
                    <Todocard todo={todo} updateListToDo={updateListArray} />
                </div>
               ) })}
            </div>
        </div>
    )
}
