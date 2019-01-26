import React from 'react'

export default function Children3(props) {
  return (
    <div>
      {props.walking}
        <input type="text" onChange={e => props.handle(e)}/>
    </div>
  )
}
