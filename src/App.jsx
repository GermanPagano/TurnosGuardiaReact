import React, { Fragment , useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "../node_modules/uuid/dist/"
import { TodoList } from "./components/TodoList";


//key del local
const KEY = 'todoApp.todos';
// app de react
export function App(){    
// declaramos constantes 
                  const[todos , setTodos ] = useState([
                      { id: null , Nombre: null, Apellido: null,  Edad: null , Dni: null, Turno: 0,completed: false},
                                                      ]);
                  const toggleTodo = (id) =>{
                    const newTodos = [...todos];
                    const todo = newTodos.find((todo)=> todo.id === id);
                    todo.completed = !todo.completed;
                    setTodos(newTodos)
                  }
// al local storage
// leemos el storage y lo pasamos como setTodos
                  useEffect(()=>{
                    const storedTodos = JSON.parse(localStorage.getItem(KEY));
                    if(storedTodos){
                      setTodos(storedTodos);
                    }

                  },[])


// agregamos al local todo el contendido de todos como string
                  useEffect(() =>{
                    localStorage.setItem(KEY, JSON.stringify(todos));
                  },[todos])
// fin del localstorage
                  const NombreRef = useRef();
                  const EdadRef = useRef();
                  const DniRef = useRef();
                  const ApellidoRef= useRef();
// al pulsar el boton + se ejecuta esta funcion 



        const AgregarADD = ( )=>{
// tomamos los valores de los input
                          const Nombre = NombreRef.current.value;
                          const Edad = EdadRef.current.value;
                          const Dni = DniRef.current.value
                          const Apellido = ApellidoRef.current.value
// le damos un valor numerico al turno
                          let Turno = '';
// Seteamos el turno segun la edad (Adultos o Pediatria)
                            if(Edad >=18 ){  
// llamamos a la funcion para incrementar el valor numerico del turno
                                            
                                      Turno = "Adultos ";
                            }else{
                                    
                                    Turno = "Pediatria ";
                            }

                            if( Nombre ===''){
                              document.querySelectorAll('input').forEach(function(p){
                                p.style.borderColor = 'red'
                              })
                              window.location.reload(true)
                                return 
                            } 

        
        // setea el valor de los datos del paciente segun los ingresados
        
        setTodos( (prevTodos) =>{

        
            return[...prevTodos  , {id: uuidv4() , Nombre: Nombre, Apellido: Apellido,Edad: Edad, Dni: Dni , Turno : Turno ,completed: false }]
      } )



        NombreRef.current.value = null;
        EdadRef.current.value = null;
        DniRef.current.value = null;
        ApellidoRef.current.value = null;
    };


    // seteamos el valor de contador

const handleClearAll =()=>{
  const newTodos = todos.filter((todo) => !todo.completed)
  setTodos(newTodos);
};


    return(

        // pagina web 
    <Fragment> 

<nav class="navbar navbar-expand-lg text-bg-info ">
  <div class="container-fluid  col-auto justify-content-center ">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-activity text-white" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link active  text-white" aria-current="page" href="Inicio">Inicio</a>
        <a class="nav-link text-white" href="Nuestra_Clinica">Clinica</a>
        <a class="nav-link text-white" href="Turnos">Turnos</a>
        <a class="nav-link text-white" href="Pacientes">Pacientes</a>
      </div>
    </div>
  </div>
</nav>







<div  className="container">
  <div class="row ">
      <hr />

    <div class="col">
    <h6>Cargar Datos</h6>
    <hr />

    <input type="text" ref={NombreRef} placeholder="Nombre" className="mb-1"/>
    <br />
    <input type="text" ref={ApellidoRef} placeholder="Apellido" className="mb-1"/>
    <br />
    <input type="number" ref={EdadRef} placeholder="Edad" className="mb-1"/>
    <br />
    <input type="number" ref={DniRef} placeholder="Dni" className="mb-1"/>
    <br />
    <div className="col m-3">

      
    <button onClick={AgregarADD }placeholder="Tipo" className="col-3 m-1">➕</button>
    <button className="col-3 m-1" onClick={handleClearAll}>🗑️</button>
    </div>

    <br />
    </div>


    <div class="col ">
    <h6>Lista de Pacientes </h6>
    <hr />

    <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>




    <div class="col">
      <h6>Turnos Asignados</h6>
      <hr />
    <div>Quedan {todos.filter((todo) => !todo.completed).length} pacientes en sala de espera</div>

    </div>




  </div>
</div>

    </Fragment>




    
    );
}

