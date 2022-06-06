import React from "react";
//exportamos a Todolist los items que tendremos impresos en nuestra app.
        export function TodoItem( {todo ,toggleTodo}){
//declaramos una constante con los datos que vamos a imprimir
        const { id, Nombre , Apellido ,Edad , Dni, Turno, completed } = todo;

// funcion para pasar como argumento el id 
const handleTodoClick =()=>{
        toggleTodo(id);
};

                return(
<div className="col border border-2 p-2  mb-1">
        <div class="row ">
                <div class="col-1  mt-4  p-3 ">
                        <input type="checkbox"  onChange={handleTodoClick}  name=".." id=".." />
                </div>
                <div class="col-8  ">
        <li  style={{listStyle:'none', listStyleType:'none', fontSize:'13px'}} >
                <ul style={{listStyle:'none', listStyleType:'none', fontSize:'13px'}}>
                        <li>Turno: {Turno}</li>
                        <li>Nombre: {Nombre} </li>
                        <li>Apellido: {Apellido} </li>
                        <li>Edad: {Edad}</li>
                        <li>Dni: {Dni}</li>
                        {completed}
                        <li style={{display:'none'}}>ID: {id}</li>
                        
                        
                </ul>       
        </li>
                </div>
        </div>
</div>
                        )
                                        }