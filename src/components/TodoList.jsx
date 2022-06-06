import React from "react";
import { TodoItem } from "./TodoItem";

// exportamos a app una funcion que recoge los items de nuestra lista.
export function TodoList( { todos, toggleTodo } ) {
        return (
                    <ul >
                        {todos.map((todo)=>  (
                                <TodoItem  key={todo.id} todo= {todo} toggleTodo={toggleTodo} /> 
                        ))}
                    </ul>
                )
                                        }
