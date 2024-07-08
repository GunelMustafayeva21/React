import React, {useReducer, useState} from 'react'
import styles from './Todo.module.css'
const Index:React.FC=()=>{

    enum ActionKind{
        ADD="ADD",
        DELETE="DELETE"
    }
    interface IState{
        id:number
        name:string
    }
    type Action={name:string, type:ActionKind.ADD} | {id:number, type:ActionKind.DELETE}
    
    function reducerFn(state:IState[], action:Action){
        const {type}=action
        switch(type){
            case ActionKind.ADD:
                return [...state, {id:Date.now(), name:action.name}]
            case ActionKind.DELETE:
                return state.filter(todo=>todo.id!==action.id)
            default:
                return state;
        }
    }
    
    const [inputValue, setInputValue] = useState<string>("")
    const [state, dispatch] = useReducer(reducerFn, [])

    return (
        <>
        <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} type="text" />
        <button onClick={()=>{
            dispatch({name:inputValue, type:ActionKind.ADD})
            setInputValue("")
        }}>Add Task</button>
        <ul>
        {
          state.map((todo)=>(
            <div className={styles.flex}>
            <li key={todo.id} >
                {todo.name}
               
            </li>
            <button onClick={()=>{
                dispatch({type:ActionKind.DELETE, id:todo.id})
            }}>X</button>
            
            </div>
            

         ))
        }
        </ul>
        
        </>
    )
    }
    


export default Index