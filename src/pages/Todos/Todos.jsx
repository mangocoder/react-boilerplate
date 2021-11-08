import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Todo from '../../components/Todo/Todo'
import { todoAdded, todoUpdated } from '../../store/features/todos/todosSlice'
import classes from './Todos.module.css'

const Todos = ({ todoAdded, todos, todoUpdated }) => {
  const inputEl = useRef(null)

  const keys = Object.keys(todos)

  const handleKeyDown = (event) => {
    const todoText = inputEl.current.value
    if (event.key === 'Enter' && todoText.length > 0) {
      todoAdded({ id: +new Date().getTime(), text: inputEl.current.value, completed: false })
      inputEl.current.value = ''
    }
  }

  const handleTodoToggle = (id, status) => {
    console.log(id, status)
    todoUpdated({ id: id, changes: { completed: status } })
  }

  return (
    <div>
      <div className={classes.inputContainer}>
        <input
          className={classes.todoInput}
          onKeyDown={handleKeyDown}
          placeholder="Enter todo"
          ref={inputEl}
          type="text"
        />
      </div>
      <div className={classes.todosContainer}>
        {keys.map((key, index) => {
          return <Todo key={index} todo={todos[key]} handleTodoToggle={handleTodoToggle} />
        })}
      </div>

    </div>
  )
}

Todos.propTypes = {
  todoAdded: PropTypes.func,
  todoUpdated: PropTypes.func,
  todos: PropTypes.object
}

const mapStateToProps = (state) => {
  const todosState = state.todos || {}
  return {
    todos: todosState.entities
  }
}

const mapDispatchToProps = {
  todoAdded,
  todoUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
