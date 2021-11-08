import React from 'react'
import PropTypes from 'prop-types'
import classes from './Todo.module.css'

const Todo = ({
  todo = {},
  handleTodoToggle
}) => {
  const { id: key, text } = todo

  const handleClick = (event) => {
    console.log(event.target.checked)
    handleTodoToggle(key, event.target.checked)
  }

  return (
    <div className={classes.todo}>
      <input type="checkbox" id={key} name={key} value={key} onClick={handleClick} />
      <label htmlFor={key}> {text} </label>
      <br />
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  classes: PropTypes.object,
  handleTodoToggle: PropTypes.func
}

export default Todo
