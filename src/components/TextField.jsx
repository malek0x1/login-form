import React from 'react'
import { useState } from 'react';
import './TextField.css'
const TextField = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="inputs">
      <label>{props.label} * </label><br />
      <input required autoCorrect='false' onFocus={() => props.type == "password" && setFocused(true)} onBlur={() => setFocused(true)} focused={focused == true ? "true" : "false"} className="inputs" pattern={props.pattern} type={props.type} placeholder={props.placeholder} />
      <span>{props.error}</span>
    </div>
  )
}

export default TextField