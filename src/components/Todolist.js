import React from 'react'
import { Todocard } from './Todocard'

export const Todolist = ({list}) => {
    return (
        <div className="container  fluid">
            <div className="row"> 
            {list.map(todo => {
               return (
                <div className=" col-lg-4 col-xs-12 col-md-6">
                    <Todocard todo={todo} />
                </div>
               ) })}
            </div>
        </div>
    )
}
