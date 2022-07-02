import React from 'react';
import './style.css'

const Todo =(props) =>{
    return (
        <>
        <div className='todo_class'>
            <div>
          <button className='delete_btn'onClick={()=>{props.onSelect(props.id)}}>-</button>
          </div>
          <li>{props.text}</li>
          </div>
        </>
    );
}
export default Todo;