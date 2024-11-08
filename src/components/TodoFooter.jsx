import React from 'react'

const TodoFooter = ({nrTask}) => {
  return (
    <div style={{position:'fixed',bottom:'10px',color:'white'}}>
      Task left:{nrTask}
    </div>
  )
}

export default TodoFooter
