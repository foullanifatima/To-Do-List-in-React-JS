import React,{useState} from 'react';
import EditTask from '../modal/EditTask';


export const Todocard = ({todo,updateListToDo,index,deleteTask,completeTask}) => {
    /*colors*/
     const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ];
    const [modal, setModal] = useState(false);
   
   
    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListToDo(obj, index)
    }
     /* delete task*/
    const deleteTodo=(todoIndex) => {
        deleteTask(todoIndex);
      }
    


    return (
      
        <div className="container mt-4">
            <div className = "card-wrapper ">
            <div className = "card-top"  style={{"background-color": colors[index%5].primaryColor}}></div>
                <div className = "task-holder">
                    <span className = "card-header" className={todo.complete ? "strike" : ""} style={{"background-color": colors[index%5].secondaryColor}}>{todo.task}</span>
                    <p className = "mt-3 ml-3" className={todo.complete ? "strike" : ""}>{todo.desciption}</p>
                    </div>
            <div className="card-bottom">
             <i class="far fa-edit" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
             <i class="fas fa-check padding-left"   style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => completeTask(index)} ></i>
             <i class="fas fa-trash-alt padding-left" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => deleteTodo(index)}></i>
            </div>
            
            </div>
            <EditTask toggle = {toggle} modal = {modal} updateTask = {updateTask} taskObj={todo}/>
         </div>
        
  
    )
}
