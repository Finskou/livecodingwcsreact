import React from 'react'

const Character = (props) => {
  return (
    <div className="character">
      {props.character.name} - {props.character.id}
      <button onClick={()=> props.action(props.character.id)}> Click me
      </button>
    </div>
)
}

export default Character;