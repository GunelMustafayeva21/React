import { useReducer } from 'react'

const Index:React.FC=()=>{

  enum ActionKind{
     INCREASE="INCREASE",
     DECREASE="DECREASE"
  }
  interface IState{
    count:number
  }
  interface IAction{
    type:ActionKind
    payload:number
  }
  function reducerFn(state:IState, action:IAction){
    const {type, payload} =action;
    switch(type){
    case ActionKind.INCREASE:
      return {...state, count:state.count+payload}
    case ActionKind.DECREASE:
      return {...state, count:state.count-payload}
    default:
      return state
    }
  };
  const initialState={
    count:0
  }
  const [state, dispatch]= useReducer(reducerFn, initialState)

  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={()=>{dispatch({type:ActionKind.INCREASE, payload:5})}}>Increase</button>
      <button onClick={()=>{dispatch({type:ActionKind.DECREASE, payload:5})}}>Decrease</button>
       
    </>
  )
}

export default Index
