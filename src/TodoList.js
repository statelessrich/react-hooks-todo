import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import TodosContext from "./TodosContext";

function TodoList() {
  const [state, setState] = useContext(TodosContext);

  const remove = (event, index) => {
    event.preventDefault();
    const newTodos = [...state.todos];
    newTodos.splice(index, 1);

    setState({
      ...state,
      todos: newTodos,
      error: newTodos.length > 0 ? state.error : "",
    });
  };

  return (
    <div className="todos my-3">
      {state.todos.map((todo, index) => (
        <div key={todo}>
          <Badge
            pill
            className="todo"
            variant="secondary"
            onClick={event => remove(event, index)}
          >
            <span className="todo-text">{todo}</span>
            <FontAwesomeIcon
              className="close-icon"
              icon={faTimesCircle}
            />
          </Badge>
        </div>
      ))}

      {state.todos.length === 0 && <h3>No todos. Add some!</h3>}
    </div>
  );
}

export default TodoList;
