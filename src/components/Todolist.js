import React,{useState,useEffect} from 'react'
import { Todocard } from './Todocard'
import data from '../Data/data.json'
import AddTask from '../modal/AddTask'
const fs = require("fs");

export const Todolist = ({modal,setModal}) => {
   
    const [ todoList, setToDo ] = useState([]);
   
    /*toggle function*/
    const toggle = () => {
        setModal(!modal);
    }
    /*save task function*/
    const saveTask = (taskObj) => {
      let tempList = todoList;
      tempList.push(taskObj)
      localStorage.setItem("task", JSON.stringify(tempList))
      setToDo(tempList)
      setModal(false)
      };
       /*useEffect hook*/
      useEffect(() => {
        let arr = localStorage.getItem("task")
       
        if(arr){
            let obj = JSON.parse(arr)
            setToDo(obj)
        }
    }, [])
       
    /*update a task on click on icon update*/
    const updateListArray = (obj, index) => {
        let copy =todoList ;
        copy[index]=obj
        localStorage.setItem("task", JSON.stringify(copy))
        setToDo(copy)
        window.location.reload()
    }

    /*delete a task on click on icon delete*/
    const deleteTask=(task_index)=> {
      let tempList = todoList
      tempList.splice(task_index, 1)
      localStorage.setItem("task", JSON.stringify(tempList))
      setToDo(tempList)
      window.location.reload()
    }
    /*complete task*/
    const completeTask=(index)=>{
        let copy = todoList
        copy[index].complete=true
        localStorage.setItem("task", JSON.stringify(copy))
        setToDo(copy)
        window.location.reload()
    }
    return (
      <>
        <div className="container  fluid">
            <div className="row"> 
            {todoList.map((todo,index) => {
               return (
                <div className=" col-lg-4 col-xs-12 col-md-6">
                    <Todocard todo={todo} index={index} updateListToDo={updateListArray} deleteTask={deleteTask} completeTask={completeTask}/>
                </div>
               ) })}
            </div>
        </div>
        <AddTask toggle = {toggle} modal = {modal} save = {saveTask}/>
</>
    )
}

